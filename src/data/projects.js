const projects = [
  {
    id: "bside-app-launch",
    title: "bside 앱 서비스 론칭",
    period: "2025.01 — 2026.03 (론칭 2026.04)",
    summary:
      "오프라인 전시 캡처·기록·공유 아트 플랫폼 앱을 기획부터 론칭까지 총괄",
    roleGroups: [
      {
        category: "사업기획",
        items: [
          "초기 시장 분석 및 사업제안서 작성",
          "브랜드 철학 정립, 앱 타겟 유저 선정",
          "로고·슬로건 등 브랜드 자산 기획",
        ],
      },
      {
        category: "서비스기획",
        items: [
          "앱 시나리오 기획 및 서비스 프로토타입 설계",
          "PRD 3-Part 구성(서비스개요 · User App PRD · Technical Requirements)",
          "모듈별 기능 정의(Artwork Camera, Art Feed, Social, Search)",
        ],
      },
      {
        category: "프로젝트 관리",
        items: [
          "외주 개발사(해외) 선정 및 운영관리, Slack 협업·GitHub 스프린트 단위 진행 관리",
          "법무 전문가와 협업해 서비스 약관·컴플라이언스 대응",
        ],
      },
      {
        category: "QA",
        items: [
          "QA 이슈 체크리스트 포맷 설계(버그/기획변경/전달사항 구분)",
          "이슈 약 50건 이상 처리",
        ],
      },
    ],
    outcome: "0→1 론칭 완수, PRD·QA 체계 구축",
    images: [
      { label: "앱 스크린샷 — 온보딩", ratio: "9 / 16", type: "phone" },
      { label: "앱 스크린샷 — 카메라", ratio: "9 / 16", type: "phone" },
      { label: "앱 스크린샷 — 피드", ratio: "9 / 16", type: "phone" },
      { label: "앱 스크린샷 — 마이페이지", ratio: "9 / 16", type: "phone" },
    ],
  },
  {
    id: "bside-user-acquisition",
    title: "bside 유저 획득 마케팅 캠페인",
    period: "2026.04 — 2026.07",
    summary: "자연 유입이 없던 초기 앱에 리워드 이벤트로 유의미한 유저 데이터 확보",
    roleGroups: [
      {
        category: "마케팅 기획",
        items: [
          "채널 리서치 및 네이버페이 리워드 이벤트 설계(캡처 100장 시 3만원 지급)",
          "이벤트 참여를 위한 포스터·활동가이드 콘텐츠 직접 제작",
        ],
      },
      {
        category: "실행",
        items: [
          "대학가·아트 관련 커뮤니티 대상 오프라인 아웃바운드 활동 기획·실행",
          "마케팅 대행사(공팔리터)와 채널 운영 분담",
        ],
      },
    ],
    outcome: "최종 유저 약 200명 모집, 캡처 데이터 약 10,000건 확보",
    images: [
      { label: "이벤트 포스터", ratio: "3 / 4" },
      { label: "활동가이드", ratio: "3 / 4" },
    ],
  },
  {
    id: "pipegallery-renewal",
    title: "파이프갤러리 웹사이트 리뉴얼 개발",
    period: "2025.06 — 2025.10",
    url: "pipegallery.com",
    summary: "기존 cafe24 기반 사이트를 Next.js 기반 자체 시스템으로 전면 리뉴얼",
    roleGroups: [
      {
        category: "프로젝트 총괄",
        items: ["프로젝트 생성부터 배포까지 총괄", "디자인 시스템 구축"],
      },
      {
        category: "개발",
        items: [
          "프론트엔드 전담 개발, Claude Code(CLI) 활용",
          "백엔드 엔지니어와 개발DB/상용DB 분리 협업, Git push/PR 워크플로우",
          "Vercel 배포",
        ],
      },
    ],
    outcome: "기존 홈페이지+관리자페이지를 자체 설계 시스템으로 완전 대체",
    images: [{ label: "Before(cafe24) / After(Next.js) 비교 스크린샷", ratio: "16 / 9", type: "wide" }],
  },
  {
    id: "selvas-accuniq-cloud",
    title: "Selvas AI — ACCUNIQ Cloud 통합 리뉴얼",
    period: "2022.03 — 2022.12",
    summary: "체성분 측정 서비스 · 센터 관리 서비스 통합 리뉴얼",
    roleGroups: [
      {
        category: "서비스기획",
        items: [
          "체성분 측정기 연동 사용자 서비스와 센터 관리자 시스템 통합 리뉴얼 기획",
          "고객사(ACCUNIQ) 요청사항 분석 및 신규 기능 정의",
        ],
      },
      {
        category: "화면기획",
        items: ["정보구조(IA) 설계", "와이어프레임을 포함한 화면설계서 작성"],
      },
      {
        category: "산출물 관리",
        items: ["개발 산출물 검수 진행"],
      },
    ],
    outcome: "",
    images: [
      { label: "화면설계서", ratio: "4 / 3" },
      { label: "앱/관리자 최종 결과물", ratio: "4 / 3" },
    ],
  },
  {
    id: "selvas-onfit-manager",
    title: "Selvas AI — OnFit 매니저 전용앱 리뉴얼",
    period: "2022.04 — 2022.07",
    summary: "트레이너 전용 앱의 UX/GUI 개선",
    roleGroups: [
      {
        category: "서비스기획",
        items: [
          "트레이너가 회원 운동 데이터를 관리하는 매니저 전용 앱의 UX/GUI 개선 기획",
          "고객사 요청사항 분석 및 기존 사용성 이슈 분석",
        ],
      },
      {
        category: "화면기획",
        items: [
          "정보구조(IA) 및 화면 흐름 재설계",
          "Prototype 제작으로 개선 방향 검증 후 화면설계서 작성",
        ],
      },
      {
        category: "산출물 관리",
        items: ["개발 산출물 검수 진행"],
      },
    ],
    outcome: "",
    images: [
      { label: "Wireframe / Prototype", ratio: "9 / 16", type: "phone" },
      { label: "최종 앱 결과물", ratio: "9 / 16", type: "phone" },
    ],
  },
  {
    id: "selvas-born-this-way",
    title: "Selvas AI — Born This Way+ 앱 서비스 구축",
    period: "2022.01 — 2022.05",
    summary: "유전 체질 기반 맞춤 건강관리 앱 (LG생활건강)",
    roleGroups: [
      {
        category: "서비스기획",
        items: [
          "LG생활건강 고객사 수주 프로젝트, 유전자 검사 결과 기반 맞춤형 건강관리 앱 신규 구축",
          "고객사 요청사항 분석 및 챌린지 메뉴 등 신규 제품/서비스 기획",
        ],
      },
      {
        category: "화면기획",
        items: ["정보구조도(IA) 설계", "화면설계서 작성"],
      },
      {
        category: "산출물 관리",
        items: ["개발 산출물 검수 진행"],
      },
    ],
    outcome: "",
    images: [
      { label: "정보구조도", ratio: "4 / 3", type: "wide" },
      { label: "최종 앱 결과물", ratio: "9 / 16", type: "phone" },
    ],
  },
  {
    id: "selvas-carenow-3",
    title: "Selvas AI — 케어나우 3.0 통합 리뉴얼",
    period: "2021.08 — 2022.10",
    summary: "초개인화 건강 큐레이션 앱 (한국인삼공사)",
    roleGroups: [
      {
        category: "서비스기획",
        items: [
          "한국인삼공사 고객사 수주 프로젝트, 개인 건강 데이터 기반 초개인화 큐레이션 서비스 통합 리뉴얼",
          "고객사 요청사항 분석 및 신규 제품/서비스 기획",
        ],
      },
      {
        category: "산출물 관리",
        items: [
          "정보구조도(IA), 화면설계서(와이어프레임) 등 기획 산출물 작성·관리",
          "개발 산출물 검수 진행",
        ],
      },
    ],
    outcome: "",
    images: [{ label: "정보구조도 / 화면설계서 / 최종 결과물", ratio: "16 / 9", type: "wide" }],
  },
  {
    id: "dflux-hyundai-cluster",
    title: "d-flux — 현대차 2세대 클러스터 표준 GUI 운용",
    period: "2018.01 — 2019.09",
    summary: "현대자동차 클러스터 표준그래픽 사양 협의·제작·배포 운용",
    roleGroups: [
      {
        category: "Project Managing",
        items: [
          "현대차 인포테인먼트 UX팀 및 1차 협력사로부터 협의 안건 수집",
          "정기 워크숍 회의 주최로 안건 취합 및 협의 진행",
        ],
      },
      {
        category: "UI Design",
        items: ["클러스터 표준그래픽 화면 기획 및 배포 운용"],
      },
    ],
    outcome: "전체 안건 218건 중 206건 완료(94%), GCR 2,231건 반영",
    images: [
      { label: "운용 프로세스 다이어그램", ratio: "16 / 9", type: "wide" },
      { label: "벤치마킹 이미지", ratio: "4 / 3", type: "wide" },
    ],
  },
];

export default projects;
