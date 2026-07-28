# Hankyu Kim — Portfolio

김한규(Hankyu Kim)의 개인 커리어 포트폴리오 웹사이트입니다. React(Vite) + 순수 CSS로 제작했습니다.

## 구성

단일 스크롤 페이지: Hero → About → Projects → Skills → Contact

- `src/components/ImagePlaceholder` — 실제 이미지로 교체하기 전까지 사용하는 재사용 플레이스홀더
- `src/components/Hero` / `About` / `Projects` / `Skills` / `Contact` — 각 섹션 컴포넌트
- `src/data` — 경력, 프로젝트, 스킬, 연락처 데이터

## 개발

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # oxlint
```

## 이미지 교체

`src/data/projects.js`의 각 프로젝트 `images` 배열과, `ImagePlaceholder`를 사용하는 곳을 실제 `<img>`로 교체하면 됩니다.

## 연락처 정보 채우기

`src/data/contact.js`의 이메일/LinkedIn/GitHub 값을 실제 정보로 교체하세요.
