import projects from "./projects";

// 기업별 제출용 포트폴리오 버전.
// 주소 /p/<slug> 로 접속하면 해당 설정으로 렌더링되고, 그 외 주소는 기본 포트폴리오를 보여준다.
// slug 뒤의 랜덤 문자열은 다른 기업이 주소를 추측하지 못하게 하기 위한 것.
//
// - projects: 노출할 프로젝트 id (순서대로)
// - display:  기본 페이지에는 없는 블록(목표/담당 역할 묶음/기여도) 노출 여부
// - overrides: 프로젝트 id → (기본 데이터) => 이 버전에서만 쓸 데이터

const findProject = (id) => projects.find((project) => project.id === id);

const mergeUserAcquisition = (base) => {
  const acquisition = findProject("bside-user-acquisition");
  return {
    ...base,
    period: "2025.01 — 2026.07 (론칭 2026.04)",
    summary: "오프라인 전시 캡처·기록·공유 아트 플랫폼 앱을 기획부터 론칭, 초기 유저 확보까지 총괄",
    roleGroups: [
      ...base.roleGroups,
      {
        category: "마케팅",
        items: [
          "대학가·아트 커뮤니티 등 유효 채널 리서치 및 오프라인 아웃바운드 실행",
          "리워드 이벤트 설계(리워드 금액·모집 인원 산정, 예산 기안·결재), 포스터·활동가이드 제작",
          "참여자 문의 대응, 리워드 지급 채널 조사 및 지급 프로세스 운영",
          "마케팅 대행사(공팔리터)와 채널 운영 분담",
        ],
      },
    ],
    contribution: [
      ...base.contribution,
      { area: "마케팅", percent: 50, note: "채널 리서치·리워드 이벤트 설계 및 운영 주도, 대행사(공팔리터)와 채널 운영 분담" },
    ],
    imageGroups: [
      ...base.imageGroups,
      ...acquisition.imageGroups.map((group) => ({ ...group, title: "마케팅 실행 자료" })),
    ],
    stats: {
      cards: [
        { label: "정식 출시", value: "iOS · Android", description: "앱스토어·구글플레이 심사 통과 및 출시" },
        { label: "모집 유저", value: "약 200명", description: "론칭 후 리워드 마케팅 캠페인으로 확보" },
        { label: "캡처 데이터", value: "약 10,000건", description: "캠페인 기간 실사용 데이터 확보" },
      ],
    },
    outcome: [
      "기획부터 앱스토어·구글플레이 앱 심사 및 정식 출시까지 매니징",
      "QA 체크리스트 기반 이슈 50건 이상 취합·트래킹",
      "론칭 후 리워드 마케팅 캠페인으로 유저 약 200명 모집, 캡처 데이터 약 10,000건 확보",
    ],
  };
};

const variants = {
  "ypbooks-17021f": {
    company: "영풍문고",
    projects: [
      "bside-app-launch",
      "pipegallery-renewal",
      "selvas-accuniq-cloud",
      "selvas-carenow-3",
      "selvas-born-this-way",
    ],
    display: { goal: true, roleHeading: true, contribution: true },
    overrides: {
      "bside-app-launch": mergeUserAcquisition,
      "pipegallery-renewal": (base) => ({
        ...base,
        outcome: [
          "요구사항 분석부터 기획·디자인·개발·배포까지 주도해 기존 cafe24 사이트를 자체 시스템으로 완전 대체, 현재 운영 중",
          "관리자 CRUD 구축으로 전시·작가·작품 3종 콘텐츠를 갤러리 직원이 직접 생성·편집·삭제하도록 운영 구조 전환",
          "생성형 AI(Claude Code)를 활용해 비개발 직군으로서 프론트엔드를 직접 구현·배포까지 완료",
        ],
      }),
      "selvas-born-this-way": (base) => ({
        ...base,
        outcome: "챌린지 메뉴·레벨 정책 등 일부 기능 기획을 담당해 앱 정식 론칭에 기여",
      }),
    },
  },
};

const VARIANT_PATH = /^\/p\/([^/]+)\/?$/;

export function resolveVariant(pathname) {
  const match = pathname.match(VARIANT_PATH);
  if (!match) return null;
  const variant = variants[match[1]];
  if (!variant) return null;

  return {
    ...variant,
    projects: variant.projects.map((id) => {
      const base = findProject(id);
      const override = variant.overrides?.[id];
      return override ? override(base) : base;
    }),
  };
}
