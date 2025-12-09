# GitHub 배포 가이드

## 🚀 GitHub Pages 배포 시 API 키 설정 방법

로컬에서는 잘 작동하지만 GitHub에서 배포했을 때 API가 작동하지 않는 경우, GitHub Secrets에 API 키를 설정해야 합니다.

---

## ✅ 해결 방법 (3단계)

### 1단계: GitHub 저장소로 이동

1. 브라우저에서 GitHub 저장소 페이지 열기
   - 예: `https://github.com/사용자명/저장소명`

### 2단계: GitHub Secrets 설정

1. **Settings 클릭**
   - 저장소 상단 메뉴에서 **Settings** 탭 클릭

2. **Secrets 메뉴 찾기**
   - 왼쪽 사이드바에서 **Secrets and variables** → **Actions** 클릭

3. **새 Secret 추가**
   - **New repository secret** 버튼 클릭
   - **Name**: `REACT_APP_API_KEY` (정확히 이 이름으로 입력)
   - **Secret**: 발급받은 Gemini API 키 붙여넣기
   - **Add secret** 클릭

### 3단계: 배포 재실행

1. **코드 푸시**
   - 변경사항을 커밋하고 푸시
   - 또는 Actions 탭에서 수동으로 워크플로우 재실행

2. **배포 확인**
   - **Actions** 탭에서 배포 진행 상황 확인
   - 배포 완료 후 사이트에서 API 기능 테스트

---

## 📋 단계별 스크린샷 가이드

### Step 1: Settings로 이동
```
저장소 페이지 → Settings 탭 클릭
```

### Step 2: Secrets 메뉴 찾기
```
Settings → 왼쪽 사이드바 → Secrets and variables → Actions
```

### Step 3: Secret 추가
```
New repository secret 클릭
Name: REACT_APP_API_KEY
Secret: (실제 API 키 입력)
Add secret 클릭
```

---

## 🔍 문제 해결 체크리스트

배포 후에도 API가 작동하지 않으면 다음을 확인하세요:

- [ ] GitHub Secrets에 `REACT_APP_API_KEY`가 추가되었는가?
- [ ] Secret 이름이 정확히 `REACT_APP_API_KEY`인가? (대소문자 구분)
- [ ] API 키 값이 올바른가? (공백이나 따옴표 없이)
- [ ] 배포 워크플로우가 최신 코드로 실행되었는가?
- [ ] Actions 탭에서 빌드 로그에 에러가 없는가?

---

## 📝 GitHub Actions 워크플로우 확인

배포가 실패하면 다음을 확인하세요:

1. **Actions 탭 클릭**
   - 저장소 상단 메뉴에서 **Actions** 탭 클릭

2. **최신 워크플로우 실행 확인**
   - "Deploy to GitHub Pages" 워크플로우 클릭
   - 실패한 경우 빨간색 X 표시

3. **빌드 로그 확인**
   - 실패한 워크플로우 클릭
   - "Build" 단계의 로그 확인
   - 에러 메시지 확인

---

## ⚠️ 중요 사항

1. **Secret 이름은 정확히 일치해야 합니다**
   - `REACT_APP_API_KEY` (정확히 이 이름)
   - 대소문자 구분 중요!

2. **API 키는 공개되지 않습니다**
   - GitHub Secrets는 암호화되어 저장됩니다
   - 로그에도 표시되지 않습니다
   - 안전하게 사용할 수 있습니다

3. **배포 후 즉시 반영되지 않을 수 있습니다**
   - 배포 완료 후 몇 분 기다려보세요
   - 브라우저 캐시를 지우고 다시 시도해보세요

---

## 🔄 Secret 업데이트 방법

API 키를 변경해야 할 때:

1. **기존 Secret 수정**
   - Settings → Secrets and variables → Actions
   - `REACT_APP_API_KEY` 옆의 연필 아이콘 클릭
   - 새 API 키 입력 후 **Update secret** 클릭

2. **배포 재실행**
   - 코드 푸시 또는 Actions에서 수동 재실행

---

## 📚 관련 파일

- `.github/workflows/deploy.yml` - 배포 워크플로우 설정
- `vite.config.ts` - 환경 변수 설정
- `services/geminiService.ts` - API 키 사용 코드

---

## 💡 추가 팁

### 로컬과 배포 환경의 차이

- **로컬**: `.env` 파일에서 환경 변수 읽기
- **GitHub 배포**: GitHub Secrets에서 환경 변수 읽기

두 환경 모두 `REACT_APP_API_KEY`라는 이름을 사용하므로, 로컬에서 테스트한 후 GitHub Secrets에 같은 이름으로 추가하면 됩니다.

---

## 🆘 여전히 문제가 있나요?

1. **Actions 로그 확인**
   - 빌드 단계에서 에러 메시지 확인
   - 환경 변수가 제대로 전달되는지 확인

2. **Secret 이름 확인**
   - 정확히 `REACT_APP_API_KEY`인지 확인
   - 대소문자 정확히 일치하는지 확인

3. **API 키 유효성 확인**
   - Google AI Studio에서 API 키가 활성화되어 있는지 확인
   - API 키에 필요한 권한이 있는지 확인

4. **브라우저 콘솔 확인**
   - 배포된 사이트에서 F12 → Console 탭
   - 에러 메시지 확인

