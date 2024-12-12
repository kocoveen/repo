/**
 * Represents the details of a project.
 * @typedef {Object} Project
 * @property {string} id - Unique identifier for the project.
 * @property {string} title - Title of the project.
 * @property {string} category - Category of the project (e.g., "Team Project", "Personal Project").
 * @property {string} period - Duration of the project.
 * @property {string} image Path to the preview image of the project.
 * @property {Overview} overview - Overview of the project, including summary and key features.
 * @property {Application} application - Technical details and features of the project.
 * @property {Documentation} documentation - Paths to project documentation resources (e.g., architecture diagram, API details).
 * @property {LessonLearned} lessonLearned - Lessons learned from the project, including problem-solving and KPT analysis.
 */

/**
 * Provides an overview of the project.
 * @typedef {Object} Overview
 * @property {Object} previews - Preview links to architecture, API, and ERD images.
 * @property {string} previews.architecture - Path to the architecture diagram.
 * @property {string} previews.api - Path to the API specification.
 * @property {string} previews.erd - Path to the ERD diagram.
 * @property {string} period - Duration of the project.
 * @property {number} week - Number of weeks for the project.
 * @property {number} number - Number of team members involved in the project.
 * @property {string} role - Role played by the contributor in the project.
 * @property {string} summary - Brief summary of the project.
 * @property {string} keyFeature - Key feature description of the project.
 */

/**
 * Technical details and features of the project.
 * @typedef {Object} Application
 * @property {string[]} techStacks - List of technologies and frameworks used.
 * @property {string[]} features - List of implemented features.
 * @property {string[]} contributions - Specific contributions made by the contributor.
 */

/**
 * Paths to documentation resources.
 * @typedef {Object} Documentation
 * @property {Object} architecture - Architecture diagram information.
 * @property {string} architecture.image - Path to the architecture image.
 * @property {Object} api - API diagram information.
 * @property {string} api.image - Path to the API image.
 * @property {Object} erd - ERD diagram information.
 * @property {string} erd.image - Path to the ERD image.
 */

/**
 * Lessons learned and improvements made during the project.
 * @typedef {Object} LessonLearned
 * @property {ProblemSolving[]} problemSolving - Problems encountered and their solutions.
 * @property {KPT[]} kpt - Keep-Problem-Try analysis for the project.
 */

/**
 * Details of a problem and its solution.
 * @typedef {Object} ProblemSolving
 * @property {string} problem - The identified problem.
 * @property {string} solution - The solution implemented to address the problem.
 */

/**
 * Keep-Problem-Try analysis for continuous improvement.
 * @typedef {Object} KPT
 * @property {string} keep - What was done well and should be continued.
 * @property {string} problem - What did not work well and needs improvement.
 * @property {string} try - Suggestions or actions to improve in the future.
 */

/**
 * Represents the Facement project.
 * @type {Project}
 */
const facement = {
  id: "facement",
  title: "Facement",
  category: "team project",
  period: "2024.08~2024.10",
  image: '/images/project-5.png',
  overview: {
    previews: {
      architecture: "",
      api: "",
      erd: ""
    },
    period: "2024.08~2024.10",
    week: 6,
    number: 6,
    role: "백엔드",
    summary: "Facement 프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로 지정해야 하는 불편함을 해결하고자 딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해 각 메뉴와 금액, 수량을 분류해 불필요한 입력 없이 정산을 할 수 있는 다중 안면 인식 정산 자동화 서비스입니다.",
    keyFeature: "프로젝트는 기존 정산 앱이 정산 대상 및 메뉴, 금액을 수동으로 지정해야 하는 불편함을 해결하고자 딥러닝 모델로 사용자를 구별하고, AI로 영수증을 인식해 각 메뉴와 금액, 수량을 분류해 불필요한 입력 없이 정산을 할 수 있는 다중 안면 인식 정산 자동화 서비스입니다."
  },
  application: {
    techStacks: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JPA",
      "MySQL",
      "Kafka",
      "JWT",
      "FCM"
    ],
    features: [
      "OAuth 2.0 기반 인증 시스템 구현",
      "FCM 기반 실시간 알림 시스템 구축",
      "Kafka를 활용한 서버 간 비동기 통신 구현",
      "Gemini API 연동을 통한 영수증 텍스트 추출",
      "AI 서버 운영 및 유지보수"
    ],
    contributions: [
      "백엔드 시스템 및 아키텍처 설계",
      "기술 문서화 및 팀 내 지식 공유",
      "결제 정산 API 구현"
    ]
  },
  documentation: {
    architecture: {
      image: "/path-to-architecture.png"
    },
    api: {
      image: "/path-to-api.png"
    },
    erd: {
      image: "/path-to-api.png"
    }
  },
  lessonLearned: {
    problemSolving: [
      {
        problem: "최종 응답 시간이 5초로 길어 사용성 저하",
        solution: "Kafka를 도입해 사진 등록 속도 5초에서 1초로 개선"
      },
      {
        problem: "DB에 저장된 사용자 정보가 그대로 노출",
        solution: "Spring Security로 데이터 암호화"
      },
      {
        problem: "실시간으로 정산 확인 불가",
        solution: "FCM을 통한 실시간 정산 및 송금 알림"
      }
    ],
    kpt: [
      {
        keep: "안정적인 시스템 설계 및 구현",
        problem: "초기 기획에서 서비스 범위 과도 설정",
        try: "작은 단계별 목표로 프로젝트 진행"
      }
    ]
  }
};

/**
 * @type {Project}
 */
const finance = {
    id: 'finance',
    title: 'Finance',
    category: 'web development',
    period: '',
    image: '/images/project-1.jpg',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' }
      ]
    }
}

/**
 * @type {Project}
 */
const orizon = {
    id: 'orizon',
    title: 'Orizon',
    category: 'web development',
    period: '',
    image: '/images/project-2.png',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const fundo = {
    id: 'fundo',
    title: 'Fundo',
    category: 'web design',
    period: '',
    image: '/images/project-3.jpg',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const brawlhalla = {
    id: 'brawlhalla',
    title: 'Brawlhalla',
    category: 'applications',
    period: '',
    image: '/images/project-4.png',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const metaspark = {
    id: 'metaspark',
    title: 'MetaSpark',
    category: 'web design',
    period: '',
    image: '/images/project-6.png',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const summary = {
    id: 'summary',
    title: 'Summary',
    category: 'web development',
    period: '',
    image: '/images/project-7.png',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const taskManager = {
    id: 'task-manager',
    title: 'Task Manager',
    category: 'applications',
    period: '',
    image: '/images/project-8.jpg',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}

/**
 * @type {Project}
 */
const arrival = {
    id: 'arrival',
    title: 'Arrival',
    category: 'web development',
    period: '',
    image: '/images/project-9.png',
    overview: {
      previews: {
        architecture: '',
        api: '',
        erd: '',
      },
      period: '',
      week: 0,
      number: 0,
      role: '',
      summary: '',
      keyFeature: '',
    },
    application: {
      techStacks: [],
      features: [],
      contributions: [],
    },
    documentation: {
      architecture: { image: '' },
      api: { image: '' },
      erd: { image: '' },
    },
    lessonLearned: {
      problemSolving: [],
      kpt: [
        { keep: '', problem: '', try: '' },
      ],
    },
}


/**
 * A collection of projects.
 * @type {Object<string, Project>}
 */
export const projects = {
  ["facement"]: facement,
  ["finance"]: finance,
  ["orizon"]: orizon,
  ["fundo"]: fundo,
  ["brawlhalla"]: brawlhalla,
  ["metaspark"]: metaspark,
  ["summary"]: summary,
  ["task-manager"]: taskManager,
  ["arrival"]: arrival,
};
