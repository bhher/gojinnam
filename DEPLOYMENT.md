# 배포 가이드 (Deployment Guide)

이 문서는 Gojinnam 프로젝트를 GitHub에 배포하고 지속적으로 업데이트하는 방법을 안내합니다.

## 목차
1. [GitHub Pages 배포](#1-github-pages-배포-추천)
2. [Vercel 배포 (가장 쉬운 방법)](#2-vercel-배포-가장-쉬운-방법-강력-추천)
3. [Netlify 배포](#3-netlify-배포)
4. [지속적인 업데이트 방법](#4-지속적인-업데이트-방법)

---

## 1. GitHub Pages 배포 (추천)

### 1.1 사전 준비

1. **GitHub 저장소 생성**
   ```bash
   # GitHub에서 새 저장소 생성 후
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/사용자명/저장소명.git
   git push -u origin main
   ```

2. **Vite 설정 수정**
   
   `vite.config.ts` 파일을 다음과 같이 수정:
   
   ```typescript
   import path from 'path';
   import { defineConfig, loadEnv } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig(({ mode }) => {
       const env = loadEnv(mode, '.', '');
       return {
           base: '/저장소명/', // GitHub Pages의 저장소명으로 변경
           server: {
               port: 3000,
               host: '0.0.0.0',
           },
           plugins: [react()],
           define: {
               'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
               'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
           },
           resolve: {
               alias: {
                   '@': path.resolve(__dirname, '.'),
               }
           }
       };
   });
   ```

### 1.2 GitHub Actions 설정

`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 1.3 GitHub Secrets 설정

1. GitHub 저장소로 이동
2. **Settings** → **Secrets and variables** → **Actions** 클릭
3. **New repository secret** 클릭하여 다음 환경 변수 추가:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `GEMINI_API_KEY`

### 1.4 GitHub Pages 활성화

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**를 **GitHub Actions**로 선택
3. 저장 후 자동 배포 시작

### 1.5 배포 확인

- 배포 완료 후 `https://사용자명.github.io/저장소명/` 에서 확인 가능
- Actions 탭에서 배포 상태 확인

---

## 2. Vercel 배포 (가장 쉬운 방법) ⭐ 강력 추천

Vercel은 가장 간단하고 빠른 배포 방법입니다. 자동 배포, 무료 SSL, 글로벌 CDN을 제공합니다.

### 2.1 Vercel 계정 생성

1. [Vercel](https://vercel.com) 접속
2. GitHub 계정으로 로그인

### 2.2 프로젝트 배포

1. **New Project** 클릭
2. GitHub 저장소 선택
3. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables** 섹션에서 환경 변수 추가:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   GEMINI_API_KEY=your-gemini-key
   ```

5. **Deploy** 클릭

### 2.3 자동 배포 설정

- 기본적으로 `main` 브랜치에 푸시하면 자동 배포됩니다
- Vercel 대시보드에서 배포 상태 확인 가능
- 각 배포마다 고유 URL 제공 (프리뷰 배포)

### 2.4 커스텀 도메인 설정 (선택사항)

1. Vercel 대시보드 → 프로젝트 → **Settings** → **Domains**
2. 원하는 도메인 추가
3. DNS 설정 안내에 따라 도메인 설정

---

## 3. Netlify 배포

### 3.1 Netlify 계정 생성

1. [Netlify](https://www.netlify.com) 접속
2. GitHub 계정으로 로그인

### 3.2 프로젝트 배포

1. **Add new site** → **Import an existing project**
2. GitHub 저장소 선택
3. 빌드 설정:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (비워두기)

4. **Environment variables** 섹션에서 환경 변수 추가 (Vercel과 동일)

5. **Deploy site** 클릭

### 3.3 자동 배포

- `main` 브랜치에 푸시하면 자동 배포
- Netlify 대시보드에서 배포 로그 확인 가능

---

## 4. 지속적인 업데이트 방법

### 4.1 일반적인 업데이트 프로세스

1. **로컬에서 코드 수정**
   ```bash
   # 코드 수정 후
   git add .
   git commit -m "업데이트 내용 설명"
   git push origin main
   ```

2. **자동 배포**
   - GitHub Pages: Actions에서 자동 빌드 및 배포
   - Vercel/Netlify: 자동 감지 후 배포 시작

3. **배포 확인**
   - 각 플랫폼의 대시보드에서 배포 상태 확인
   - 배포 완료 후 사이트 확인

### 4.2 환경 변수 업데이트

환경 변수를 변경해야 할 경우:

**GitHub Pages:**
1. 저장소 → **Settings** → **Secrets and variables** → **Actions**
2. 해당 Secret 수정
3. Actions에서 수동으로 워크플로우 재실행

**Vercel:**
1. 프로젝트 → **Settings** → **Environment Variables**
2. 변수 수정 후 저장
3. 자동으로 재배포 시작

**Netlify:**
1. 사이트 → **Site configuration** → **Environment variables**
2. 변수 수정 후 저장
3. **Trigger deploy** 클릭하여 재배포

### 4.3 브랜치별 배포 (프리뷰)

**Vercel/Netlify:**
- 각 브랜치에 푸시하면 자동으로 프리뷰 URL 생성
- Pull Request 생성 시 자동으로 프리뷰 배포

**GitHub Pages:**
- 기본적으로 `main` 브랜치만 배포
- 다른 브랜치 배포는 Actions 설정 수정 필요

### 4.4 배포 롤백

**Vercel:**
1. 대시보드 → **Deployments**
2. 이전 배포 선택 → **Promote to Production**

**Netlify:**
1. 대시보드 → **Deploys**
2. 이전 배포 선택 → **Publish deploy**

**GitHub Pages:**
1. Actions → 이전 워크플로우 실행
2. **Re-run all jobs** 클릭

---

## 5. 배포 방법 비교

| 기능 | GitHub Pages | Vercel | Netlify |
|------|-------------|--------|---------|
| 설정 난이도 | 중간 | 쉬움 | 쉬움 |
| 자동 배포 | ✅ | ✅ | ✅ |
| 무료 SSL | ✅ | ✅ | ✅ |
| 커스텀 도메인 | ✅ | ✅ | ✅ |
| 프리뷰 배포 | 제한적 | ✅ | ✅ |
| 빌드 시간 | 느림 | 빠름 | 빠름 |
| CDN | 기본 | 글로벌 | 글로벌 |

**추천:** Vercel (가장 간단하고 빠름)

---

## 6. 문제 해결

### 6.1 빌드 실패

**원인:**
- 환경 변수 누락
- 의존성 문제
- 빌드 명령어 오류

**해결:**
1. 빌드 로그 확인
2. 환경 변수 확인
3. 로컬에서 `npm run build` 테스트

### 6.2 환경 변수 인식 안 됨

**해결:**
- Vite는 `VITE_` 접두사가 필요
- 환경 변수 이름 확인
- 재배포 필요

### 6.3 라우팅 오류 (404)

**해결:**
- Vite의 `base` 설정 확인
- `_redirects` 파일 생성 (Netlify)
- `vercel.json` 설정 (Vercel)

---

## 7. 유용한 명령어

```bash
# 로컬 빌드 테스트
npm run build

# 빌드 결과 미리보기
npm run preview

# Git 상태 확인
git status

# 변경사항 커밋
git add .
git commit -m "업데이트 내용"

# 원격 저장소에 푸시
git push origin main

# 특정 브랜치에 푸시
git push origin 브랜치명
```

---

## 8. 추가 팁

1. **`.gitignore` 확인**
   - `.env` 파일은 절대 커밋하지 않기
   - `node_modules` 제외 확인

2. **빌드 최적화**
   - 불필요한 파일 제거
   - 이미지 최적화
   - 코드 분할 활용

3. **모니터링**
   - 각 플랫폼의 분석 도구 활용
   - 에러 로그 정기적으로 확인

4. **백업**
   - 정기적으로 로컬 백업
   - 중요한 변경사항은 태그로 관리

---

## 9. 빠른 시작 체크리스트

- [ ] GitHub 저장소 생성 및 코드 푸시
- [ ] 환경 변수 준비 (Firebase, Gemini API)
- [ ] 배포 플랫폼 선택 (Vercel 추천)
- [ ] 프로젝트 연결 및 환경 변수 설정
- [ ] 첫 배포 실행
- [ ] 사이트 동작 확인
- [ ] 커스텀 도메인 설정 (선택사항)

---

## 문의 및 지원

배포 관련 문제가 발생하면:
1. 각 플랫폼의 공식 문서 확인
2. 빌드 로그 확인
3. 로컬 빌드 테스트

**추천 배포 플랫폼: Vercel** ⭐
- 가장 간단한 설정
- 빠른 배포 속도
- 우수한 개발자 경험

