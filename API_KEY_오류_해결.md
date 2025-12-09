# API 키 오류 해결 가이드

## 🚨 현재 오류
```
Error: API Key is missing. Please configure process.env.REACT_APP_API_KEY.
```

이 오류는 Gemini API 키가 설정되지 않아서 발생합니다.

---

## ✅ 빠른 해결 방법 (3단계)

### 1단계: `.env` 파일 생성

프로젝트 루트 디렉토리(`gojinnam` 폴더)에 `.env` 파일을 생성하세요.

**파일 위치:**
```
D:\junsuk\gojinnam\gojinnam\.env
```

`vite.config.ts` 파일과 같은 폴더에 생성하면 됩니다.

### 2단계: API 키 입력

`.env` 파일을 열고 다음 내용을 입력하세요:

```env
REACT_APP_API_KEY=여기에_실제_API_키_입력
```

**예시:**
```env
GEMINI_API_KEY=AIzaSyAbc123def456ghi789jkl012mno345pqr
```

⚠️ **주의사항:**
- 따옴표(`"` 또는 `'`) 없이 입력
- 등호(`=`) 앞뒤에 공백 없이 입력
- `REACT_APP_API_KEY`는 정확히 이 이름으로 입력 (대소문자 구분)

### 3단계: 개발 서버 재시작

`.env` 파일을 생성하거나 수정한 후에는 **반드시 개발 서버를 재시작**해야 합니다:

1. 현재 실행 중인 서버 중지: `Ctrl + C`
2. 서버 다시 시작: `npm run dev`

---

## 🔑 Gemini API 키 발급 방법

API 키가 없다면 다음 단계로 발급받으세요:

1. **Google AI Studio 접속**
   - https://aistudio.google.com/apikey

2. **Google 계정으로 로그인**

3. **API 키 생성**
   - "Create API Key" 버튼 클릭
   - 프로젝트 선택 또는 새 프로젝트 생성

4. **API 키 복사**
   - 생성된 API 키를 복사
   - `.env` 파일에 붙여넣기

---

## 📁 파일 구조 확인

올바른 위치에 `.env` 파일이 있는지 확인하세요:

```
gojinnam/
├── .env                    ← 여기에 API 키 입력
├── .gitignore              ← .env는 이미 무시 설정됨
├── vite.config.ts          ← 환경 변수 읽어오는 설정
├── package.json
└── services/
    └── geminiService.ts     ← API 키를 사용하는 곳
```

---

## 🔍 문제 해결 체크리스트

오류가 계속 발생하면 다음을 확인하세요:

- [ ] `.env` 파일이 `gojinnam` 폴더(프로젝트 루트)에 있는가?
- [ ] 파일 이름이 정확히 `.env`인가? (`.env.txt` 아님)
- [ ] `REACT_APP_API_KEY=실제키값` 형식으로 입력했는가?
- [ ] 등호(`=`) 앞뒤에 공백이 없는가?
- [ ] 따옴표 없이 입력했는가?
- [ ] 개발 서버를 재시작했는가?
- [ ] API 키가 유효한가? (Google AI Studio에서 확인)

---

## 💡 추가 팁

### Windows에서 `.env` 파일 생성하기

1. **메모장 사용:**
   - 메모장 열기
   - 내용 입력: `REACT_APP_API_KEY=your_key_here`
   - "다른 이름으로 저장"
   - 파일 이름: `.env` (앞에 점 포함)
   - 파일 형식: "모든 파일" 선택
   - 인코딩: UTF-8

2. **VS Code 사용:**
   - 파일 탐색기에서 새 파일 생성
   - 파일 이름: `.env`
   - 내용 입력

3. **터미널 사용 (PowerShell):**
   ```powershell
   cd gojinnam
   echo REACT_APP_API_KEY=your_key_here > .env
   ```

---

## 🔒 보안 주의사항

⚠️ **중요:**
- `.env` 파일은 절대 GitHub에 커밋하지 마세요
- API 키를 공개 저장소에 올리지 마세요
- `.gitignore`에 `.env`가 포함되어 있는지 확인하세요 (이미 설정됨)

---

## 📞 여전히 문제가 있나요?

1. 브라우저 개발자 도구 열기 (F12)
2. Console 탭에서 에러 메시지 확인
3. `.env` 파일 위치와 내용 다시 확인
4. 개발 서버 완전히 종료 후 다시 시작

---

## 📚 더 자세한 정보

전체 설정 가이드는 `API_KEY_SETUP.md` 파일을 참고하세요.

