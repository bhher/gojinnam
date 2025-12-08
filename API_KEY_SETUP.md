# API 키 설정 가이드

Gemini API 키를 설정하는 방법을 안내합니다.

## 1. 로컬 개발 환경 설정

### 방법 1: .env 파일 생성 (권장)

프로젝트 루트 디렉토리(`E:\gojinnam`)에 `.env` 파일을 생성하고 다음 내용을 입력하세요:

```env
GEMINI_API_KEY=여기에_발급받은_API_키_붙여넣기
```

**예시:**
```env
GEMINI_API_KEY=AIzaSyAbc123def456ghi789jkl012mno345pqr
```

### 방법 2: .env.local 파일 생성

`.env.local` 파일을 생성해도 됩니다 (이미 .gitignore에 포함되어 있음):

```env
GEMINI_API_KEY=여기에_발급받은_API_키_붙여넣기
```

### 확인 방법

1. `.env` 파일 생성 후
2. 터미널에서 다음 명령어 실행:
   ```bash
   npm run dev
   ```
3. 브라우저에서 AI Franchise Consultant 기능 테스트
4. 정상 작동하면 설정 완료!

---

## 2. GitHub 배포 시 설정

### GitHub Secrets에 추가

1. **GitHub 저장소로 이동**
   - https://github.com/사용자명/저장소명

2. **Settings 클릭**
   - 저장소 상단의 **Settings** 탭 클릭

3. **Secrets 메뉴 찾기**
   - 왼쪽 사이드바에서 **Secrets and variables** → **Actions** 클릭

4. **새 Secret 추가**
   - **New repository secret** 버튼 클릭
   - **Name**: `GEMINI_API_KEY` (정확히 이 이름으로 입력)
   - **Secret**: 발급받은 Gemini API 키 붙여넣기
   - **Add secret** 클릭

5. **완료**
   - 이제 GitHub Actions가 실행될 때 자동으로 API 키를 사용합니다

---

## 3. Vercel 배포 시 설정

1. **Vercel 대시보드 접속**
   - https://vercel.com 접속 후 로그인

2. **프로젝트 선택**
   - 배포된 프로젝트 클릭

3. **Settings → Environment Variables**
   - 상단 메뉴에서 **Settings** 클릭
   - 왼쪽 메뉴에서 **Environment Variables** 클릭

4. **환경 변수 추가**
   - **Key**: `GEMINI_API_KEY`
   - **Value**: 발급받은 Gemini API 키
   - **Environment**: Production, Preview, Development 모두 선택 (또는 원하는 환경만)
   - **Add** 클릭

5. **재배포**
   - 환경 변수 추가 후 자동으로 재배포되거나
   - 수동으로 **Deployments** → **Redeploy** 클릭

---

## 4. Netlify 배포 시 설정

1. **Netlify 대시보드 접속**
   - https://www.netlify.com 접속 후 로그인

2. **사이트 선택**
   - 배포된 사이트 클릭

3. **Site configuration → Environment variables**
   - 상단 메뉴에서 **Site configuration** 클릭
   - 왼쪽 메뉴에서 **Environment variables** 클릭

4. **환경 변수 추가**
   - **Add a variable** 클릭
   - **Key**: `GEMINI_API_KEY`
   - **Value**: 발급받은 Gemini API 키
   - **Save** 클릭

5. **재배포**
   - 환경 변수 추가 후 자동으로 재배포되거나
   - 수동으로 **Deploys** → **Trigger deploy** 클릭

---

## 5. 빠른 체크리스트

### 로컬 개발
- [ ] 프로젝트 루트에 `.env` 파일 생성
- [ ] `GEMINI_API_KEY=발급받은키` 입력
- [ ] `npm run dev` 실행하여 테스트

### GitHub 배포
- [ ] GitHub 저장소 → Settings → Secrets and variables → Actions
- [ ] `GEMINI_API_KEY` Secret 추가
- [ ] 코드 푸시 후 Actions에서 배포 확인

### Vercel/Netlify 배포
- [ ] 대시보드 → Settings → Environment Variables
- [ ] `GEMINI_API_KEY` 추가
- [ ] 재배포 확인

---

## 6. 문제 해결

### API 키가 작동하지 않을 때

1. **파일 이름 확인**
   - `.env` 파일이 프로젝트 루트에 있는지 확인
   - 파일 이름이 정확히 `.env`인지 확인 (`.env.txt` 아님)

2. **서버 재시작**
   - `.env` 파일 수정 후 개발 서버를 재시작해야 합니다
   - `Ctrl + C`로 서버 중지 후 `npm run dev` 다시 실행

3. **환경 변수 이름 확인**
   - 정확히 `GEMINI_API_KEY`로 입력했는지 확인
   - 대소문자 구분 중요!

4. **API 키 형식 확인**
   - Gemini API 키는 보통 `AIzaSy...`로 시작합니다
   - 공백이나 따옴표 없이 입력했는지 확인

5. **브라우저 콘솔 확인**
   - F12 → Console 탭에서 에러 메시지 확인

---

## 7. 보안 주의사항

⚠️ **중요:**
- `.env` 파일은 절대 GitHub에 커밋하지 마세요
- `.gitignore`에 `.env`가 포함되어 있는지 확인하세요
- API 키를 공개 저장소에 올리지 마세요
- GitHub Secrets나 배포 플랫폼의 환경 변수 기능을 사용하세요

---

## 8. 파일 위치 요약

```
gojinnam/
├── .env                    ← 여기에 API 키 입력 (로컬 개발)
├── .gitignore              ← .env가 무시되도록 설정됨
├── package.json
├── vite.config.ts          ← 환경 변수 읽어오는 설정
└── services/
    └── geminiService.ts     ← API 키를 사용하는 곳
```

---

## 문의

문제가 계속되면:
1. `.env` 파일 위치 확인
2. 환경 변수 이름 확인 (`GEMINI_API_KEY`)
3. 개발 서버 재시작
4. 브라우저 콘솔에서 에러 확인

