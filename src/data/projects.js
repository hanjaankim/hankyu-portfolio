const projects = [
  {
    id: "bside-app-launch",
    title: "bside 앱 서비스 론칭",
    period: "2025.01 — 2026.03 (론칭 2026.04)",
    summary:
      "오프라인 전시 캡처·기록·공유 아트 플랫폼 앱을 기획부터 론칭까지 총괄",
    background:
      "오프라인 전시를 보고 난 후의 기록이 휴대폰 사진첩에 흩어져 있는 경우가 많았고, 유저가 맞춤형으로 전시·작품·작가 정보를 제공받을 서비스가 마땅히 없다는 문제의식에서 출발한 모바일 앱 플랫폼 개발 사업.",
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
          "PRD 작성(서비스개요 · 기능정의 · 기술요건)",
        ],
      },
      {
        category: "프로젝트 관리",
        items: [
          "외주 개발사(해외) 선정 및 운영관리, Slack·Notion·Linear를 활용하여 스프린트 단위 진행 관리",
          "법무 전문가와 협업해 서비스 약관·위치기반 서비스 사업 신고 등 행정처리 대응",
          "기획 의도 반영 여부와 제품 완성도를 점검하는 QA 체크리스트 운영(버그/기획변경/전달사항 구분), 이슈 취합 후 외주 개발사에 전달·트래킹(약 50건 이상)",
        ],
      },
    ],
    outcome: "기획부터 앱스토어·구글플레이 앱 심사 및 정식 출시까지 매니징, 론칭 이후 기능 개선 필요사항 기획 및 운영 팔로우",
    appLinks: {
      ios: "https://apps.apple.com/kr/app/bside-all-about-artworks/id6761592166?l=en-GB",
      android: "https://play.google.com/store/apps/details?id=art.bside.app",
    },
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        framed: false,
        showCaption: true,
        items: [
          {
            label: "Onboarding",
            ratio: "715 / 1452",
            src: "/images/bside-app-launch/01-AppScreen/screen-onboarding.png",
          },
          {
            label: "Home",
            ratio: "727 / 1464",
            src: "/images/bside-app-launch/01-AppScreen/screen-home.png",
          },
          {
            label: "Capture",
            ratio: "715 / 1452",
            src: "/images/bside-app-launch/01-AppScreen/screen-capture.png",
          },
          {
            label: "My Page",
            ratio: "715 / 1452",
            src: "/images/bside-app-launch/01-AppScreen/screen-mypage.png",
          },
        ],
      },
      {
        title: "기획·관리 산출물",
        type: "group",
        sections: [
          {
            subtitle: "구조 설계",
            type: "wide",
            items: [
              {
                label: "정보구조도(IA)",
                ratio: "2162 / 1066",
                src: "/images/bside-app-launch/02-IA/ia-flowchart.png",
              },
              {
                label: "서비스 시스템 아키텍처",
                ratio: "1840 / 836",
                src: "/images/bside-app-launch/03-AppFlow/appflow-diagram.png",
              },
            ],
          },
          {
            subtitle: "일정 관리",
            type: "wide",
            items: [
              {
                label: "스프린트 타임라인(WBS)",
                ratio: "1920 / 1080",
                src: "/images/bside-app-launch/04-Timeline-GANT-Chart/gantt-chart.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "bside-user-acquisition",
    title: "bside 유저 획득 마케팅 캠페인",
    period: "2026.04 — 2026.07",
    summary: "자연 유입이 없던 초기 앱에 리워드 이벤트로 유의미한 유저 데이터 확보",
    background: "앱 론칭 이후 자연 유입만으로는 실사용 데이터가 쌓이지 않는 문제를 해결하기 위해 기획.",
    roleGroups: [
      {
        category: "마케팅 기획",
        items: [
          "대학가·아트 커뮤니티 등 유효 채널 직접 리서치",
          "리워드 이벤트 설계: 리워드 금액·모집 인원 산정, 예산 기안 및 결재",
          "이벤트 참여를 위한 포스터·활동가이드 콘텐츠 직접 제작",
        ],
      },
      {
        category: "운영/실행",
        items: [
          "대학가·아트 관련 커뮤니티 대상 오프라인 아웃바운드 활동 실행",
          "이벤트 운영 중 참여자 문의 대응",
          "리워드 지급 채널 직접 조사·가입 및 지급 프로세스 운영, 리워드 직접 지급",
          "마케팅 대행사(공팔리터)와 채널 운영 분담",
        ],
      },
    ],
    outcome: "최종 유저 약 200명 모집, 캡처 데이터 약 10,000건 확보",
    imageGroups: [
      {
        title: "실행 자료",
        type: "ops",
        items: [
          {
            label: "이벤트 포스터",
            ratio: "1080 / 1528",
            src: "/images/bside-user-acquisition/01_poster/poster.png",
          },
          {
            label: "활동가이드(Notion)",
            ratio: "1017 / 1528",
            src: "/images/bside-user-acquisition/02-notion-guide/notion-guide.png",
          },
          {
            label: "참여자 모집 폼",
            ratio: "2115 / 1528",
            src: "/images/bside-user-acquisition/03-google-form/google-form.png",
          },
        ],
      },
    ],
  },
  {
    id: "pipegallery-renewal",
    title: "파이프갤러리 웹사이트 리뉴얼 개발",
    period: "2025.06 — 2025.10",
    url: "pipegallery.com",
    summary: "기존 cafe24 기반 사이트를 Next.js 기반 자체 시스템으로 전면 리뉴얼",
    background:
      "기존 cafe24 템플릿으로 운영 중인 파이프갤러리 홈페이지의 확장성과 커스터마이징 한계가 있어, DB 설계부터 자체 시스템으로 전환하기 위한 리뉴얼 개발 프로젝트.",
    roleGroups: [
      {
        category: "프로젝트 관리",
        items: [
          "프로젝트 생성부터 완료까지 일정 관리",
          "갤러리 큐레이터·갤러리리스트 담당자 요청사항 분석 및 협의",
          "화면기획/디자인 방향을 담당자와 미팅으로 협의",
        ],
      },
      {
        category: "디자인",
        items: ["Figma로 폰트·화면 구성 등 디자인 시스템 직접 설계"],
      },
      {
        category: "개발",
        items: [
          "프론트엔드 개발 직접 수행, Claude Code(CLI) 활용",
          "빠른 개발 속도와 트래픽 규모를 고려해 Next.js·Supabase로 기술 스택 선정 — AWS는 비개발자가 직접 관리하기 어려워, 직접 DB에 접근·운영할 수 있는 Supabase를 채택",
          "라우팅 구조에 맞춘 폴더 구조 직접 설계, 디자인 의도와 다르게 렌더링된 부분은 CSS 코드를 직접 확인·수정",
          "전시·작가·작품 등 콘텐츠를 갤러리 직원이 직접 생성·편집·삭제할 수 있는 관리자 CRUD 시스템 구축",
          "백엔드 엔지니어와 데이터베이스 파싱 작업 및 Git PR 워크플로우 진행",
        ],
      },
    ],
    outcome: "기존 홈페이지+관리자페이지를 자체 설계 시스템으로 완전 대체",
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        framed: false,
        showCaption: true,
        items: [
          {
            label: "홈 — 전시 소개",
            ratio: "2011 / 1419",
            src: "/images/pipegallery-renewal/1-webscreen/homescreen.png",
          },
          {
            label: "아티스트 리스트",
            ratio: "2012 / 1419",
            src: "/images/pipegallery-renewal/1-webscreen/ArtistList.png",
          },
        ],
      },
      {
        title: "관리자 화면",
        type: "screens",
        framed: false,
        showCaption: true,
        items: [
          {
            label: "관리자 — 전시 관리(CRUD)",
            ratio: "2011 / 1419",
            src: "/images/pipegallery-renewal/2-admin/admin-exhibitions.png",
          },
        ],
      },
    ],
  },
  {
    id: "selvas-accuniq-cloud",
    title: "Selvas AI — ACCUNIQ Cloud 통합 리뉴얼",
    period: "2022.03 — 2022.12",
    summary: "체성분 측정 서비스 · 센터 관리 서비스 통합 리뉴얼",
    background:
      "자회사 Selvas Healthcare의 체성분 측정장비와 연계된 사용자 앱 리뉴얼, 그리고 센터·트레이너용 태블릿PC 전용앱 개발 요청에서 시작된 프로젝트.",
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
    expectedEffect:
      "체성분 측정 데이터를 클라우드로 연동해 효과적인 데이터 관리와 다양한 경로의 데이터 수집을 가능하게 하고, 사용자앱 리뉴얼과 센터·트레이너 전용웹 개발로 서비스 전반의 사용성과 편의 기능을 강화.",
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        items: [
          {
            label: "홈 — 체성분 측정",
            ratio: "352 / 755",
            src: "/images/selvas-accuniq-cloud/2-AppScreen/screen-home.png",
          },
          {
            label: "체성분 분석 결과",
            ratio: "352 / 755",
            src: "/images/selvas-accuniq-cloud/2-AppScreen/screen-body-analysis.png",
          },
          {
            label: "체성분 추이 그래프",
            ratio: "352 / 755",
            src: "/images/selvas-accuniq-cloud/2-AppScreen/screen-trend-graph.png",
          },
          {
            label: "칼로리 가이드",
            ratio: "352 / 755",
            src: "/images/selvas-accuniq-cloud/2-AppScreen/screen-calorie-guide.png",
          },
        ],
      },
      {
        title: "관리자 화면",
        type: "wide",
        items: [
          {
            label: "헬스 매니저 전용 웹",
            ratio: "1184 / 631",
            src: "/images/selvas-accuniq-cloud/2-AppScreen/screen-manager-web.png",
          },
        ],
      },
      {
        title: "기획 산출물 — 화면설계서",
        type: "artifacts",
        showCaption: false,
        items: [
          {
            label: "화면설계서 — 칼로리 가이드 생성",
            ratio: "805 / 449",
            src: "/images/selvas-accuniq-cloud/3-spec/spec-01.png",
          },
          {
            label: "화면설계서 — 홈/서비스 소개",
            ratio: "805 / 448",
            src: "/images/selvas-accuniq-cloud/3-spec/spec-02.png",
          },
          {
            label: "화면설계서 — 체성분 정보",
            ratio: "805 / 449",
            src: "/images/selvas-accuniq-cloud/3-spec/spec-03.png",
          },
          {
            label: "화면설계서 — 프로세스 플로우",
            ratio: "805 / 448",
            src: "/images/selvas-accuniq-cloud/3-spec/spec-04.png",
          },
        ],
      },
      {
        title: "일정 관리",
        type: "wide",
        items: [
          {
            label: "프로젝트 타임라인(WBS)",
            ratio: "2090 / 485",
            src: "/images/selvas-accuniq-cloud/1-gantt-chart/gantt-chart.png",
          },
        ],
      },
    ],
  },
  {
    id: "selvas-onfit-manager",
    title: "Selvas AI — OnFit 매니저 전용앱 리뉴얼",
    period: "2022.04 — 2022.07",
    summary: "트레이너 전용 앱의 UX/GUI 개선",
    background:
      "자사 솔루션 OnFit의 트레이너 전용 앱에 대한 사용성·디자인 개선 니즈를 고객사가 제기하며 시작, 서비스 전반의 UX 설계와 GUI 개선을 진행.",
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
    expectedEffect:
      "기존 UI 및 메뉴 구조를 개선해 사용성과 사용자 경험을 높이고, 트레이너·강사의 업무 효율 증대를 기대.",
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        framed: true,
        showCaption: false,
        items: [
          {
            label: "스케줄",
            ratio: "326 / 698",
            src: "/images/selvas-onfit-manager/01-final-app/screen-schedule.png",
          },
          {
            label: "회원 상세보기",
            ratio: "326 / 698",
            src: "/images/selvas-onfit-manager/01-final-app/screen-member-detail.png",
          },
          {
            label: "1:1 수업 설정",
            ratio: "326 / 698",
            src: "/images/selvas-onfit-manager/01-final-app/screen-createclass.png",
          },
          {
            label: "그룹 수업 상세",
            ratio: "327 / 698",
            src: "/images/selvas-onfit-manager/01-final-app/screen-manageclass.png",
          },
          {
            label: "차트북 — 운동 기록",
            ratio: "321 / 697",
            src: "/images/selvas-onfit-manager/01-final-app/screen-workout-log.png",
          },
        ],
      },
      {
        title: "기획 산출물 — Wireframe",
        type: "screens",
        framed: true,
        showCaption: false,
        items: [
          {
            label: "Wireframe — 스케줄",
            ratio: "268 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-schedule.png",
          },
          {
            label: "Wireframe — 그룹수업 상세",
            ratio: "268 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-schedule2.png",
          },
          {
            label: "Wireframe — 회원 상세",
            ratio: "268 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-member-detail.png",
          },
          {
            label: "Wireframe — 회원권 목록",
            ratio: "268 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-membership.png",
          },
          {
            label: "Wireframe — 그룹 수업 상세2",
            ratio: "267 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-class-detail.png",
          },
          {
            label: "Wireframe — 댓글",
            ratio: "268 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-comment.png",
          },
          {
            label: "Wireframe — 식단 관리",
            ratio: "267 / 581",
            src: "/images/selvas-onfit-manager/02-wireframe/wireframe-diet.png",
          },
        ],
      },
      {
        title: "유저플로우",
        type: "wide",
        items: [
          {
            label: "Prototype 유저플로우",
            ratio: "1621 / 838",
            src: "/images/selvas-onfit-manager/03-prototype/prototype-flow.png",
          },
        ],
      },
    ],
  },
  {
    id: "selvas-born-this-way",
    title: "Selvas AI — Born This Way+ 앱 서비스 구축",
    period: "2022.01 — 2022.05",
    summary: "유전 체질 기반 맞춤 건강관리 앱 (LG생활건강)",
    background:
      "고객의 피부·두피, 영양소, 피트니스 건강관리 영역을 유전적 측면과 실제 발현 상태 양쪽에서 동시에 진단·처방하는 서비스를 제공하기 위해 추진. 챌린지 메뉴는 마이데이터·리포트 분석 결과를 기반으로 개인화된 건강 개선 활동을 유도하고, 실제 수행 여부를 평가하는 방식으로 기획.",
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
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        items: [
          {
            label: "홈 — 챌린지 현황",
            ratio: "316 / 721",
            src: "/images/selvas-born-this-way/5-AppScreen/screen-home.png",
          },
          {
            label: "챌린지 참여 내역",
            ratio: "316 / 721",
            src: "/images/selvas-born-this-way/5-AppScreen/screen-challenge.png",
          },
          {
            label: "마이데이터",
            ratio: "316 / 721",
            src: "/images/selvas-born-this-way/5-AppScreen/screen-mydata.png",
          },
          {
            label: "건강 리포트",
            ratio: "316 / 721",
            src: "/images/selvas-born-this-way/5-AppScreen/screen-health-report.png",
          },
          {
            label: "영양제 분석",
            ratio: "316 / 721",
            src: "/images/selvas-born-this-way/5-AppScreen/screen-supplement.png",
          },
        ],
      },
      {
        title: "기획 산출물",
        type: "artifacts",
        items: [
          {
            label: "챌린지 건강나무 성장 정책",
            ratio: "1305 / 672",
            src: "/images/selvas-born-this-way/2-LevelSystemDesignPlanning/level-system-diagram.png",
          },
          {
            label: "화면설계서",
            ratio: "1008 / 565",
            src: "/images/selvas-born-this-way/4-spec/spec-01.png",
          },
          {
            label: "화면설계서",
            ratio: "1014 / 565",
            src: "/images/selvas-born-this-way/4-spec/spec-02.png",
          },
        ],
      },
    ],
  },
  {
    id: "selvas-carenow-3",
    title: "Selvas AI — 케어나우 3.0 통합 리뉴얼",
    period: "2021.08 — 2022.10",
    summary: "초개인화 건강 큐레이션 앱 (한국인삼공사)",
    background:
      "언택트 서비스, 개인 맞춤형 헬스케어, 온/오프라인 통합이 확산되는 흐름에 맞춰 AI 기반 서비스로 헬스케어 서비스를 차별화하기 위해 추진.",
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
    expectedEffect:
      "AI 솔루션과 개발 실행을 통해 고객사에 차별화된 헬스케어 서비스를 제공하고, 개인 건강 데이터 기반으로 건강관리부터 건강기능식품 구매까지 한 번에 가능한 플랫폼으로 구매여정을 최소화.",
    imageGroups: [
      {
        title: "제품 화면",
        type: "screens",
        framed: true,
        showCaption: true,
        items: [
          {
            label: "홈 화면",
            ratio: "421 / 911",
            src: "/images/selvas-carenow-3/1-AppScreen/screen-home.png",
          },
          {
            label: "건강분석 온보딩",
            ratio: "417 / 911",
            src: "/images/selvas-carenow-3/1-AppScreen/screen-onboarding.png",
          },
          {
            label: "맞춤 건강 리포트",
            ratio: "432 / 911",
            src: "/images/selvas-carenow-3/1-AppScreen/screen-health-report.png",
          },
          {
            label: "밸런스 체크 결과",
            ratio: "424 / 911",
            src: "/images/selvas-carenow-3/1-AppScreen/screen-balance-check.png",
          },
        ],
      },
      {
        title: "기획·관리 산출물",
        type: "artifacts",
        items: [
          {
            label: "정보구조도(IA)",
            ratio: "2298 / 1264",
            src: "/images/selvas-carenow-3/2-InformationArchitecture/ia-diagram.png",
          },
          {
            label: "관리자 — 회원 관리",
            ratio: "1106 / 619",
            src: "/images/selvas-carenow-3/3-adminWeb/admin-members.png",
          },
          {
            label: "화면설계서",
            ratio: "471 / 264",
            src: "/images/selvas-carenow-3/4-spec/spec-cover.png",
          },
          {
            label: "화면설계서 — 프로세스 플로우",
            ratio: "471 / 262",
            src: "/images/selvas-carenow-3/4-spec/spec-flow.png",
          },
          {
            label: "화면설계서 — Wireframe",
            ratio: "471 / 263",
            src: "/images/selvas-carenow-3/4-spec/spec-wireframe.png",
          },
        ],
      },
    ],
  },
  {
    id: "dflux-hyundai-cluster",
    title: "d-flux — 현대차 2세대 클러스터 표준 GUI 운용",
    period: "2018.01 — 2019.09",
    summary: "현대자동차 클러스터 표준그래픽 사양 협의·제작·배포 운용",
    background:
      "현대차 클러스터 표준그래픽에 대한 협력사들의 문의·협의 수요가 지속적으로 발생해, 이를 체계적으로 관리·운용할 창구가 필요했음.",
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
    outcome:
      "안건 218건 중 206건 완료(94%), GCR(그래픽 변경요청) 2,231건 반영(신규 588/수정 1,389/기타 254)",
    stats: {
      cards: [
        {
          label: "안건 완료율",
          value: "94%",
          description: "전체 안건 218건 중 206건 완료",
        },
        {
          label: "신규 그래픽",
          value: "588건",
          description: "GCR 반영해 새로 제작한 표준 그래픽",
        },
        {
          label: "수정 그래픽",
          value: "1,389건",
          description: "GCR 반영해 수정한 표준 그래픽",
        },
      ],
    },
  },
];

export default projects;
