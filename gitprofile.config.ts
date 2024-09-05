// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zaid404', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/zaid404/zaid404.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/zaid404/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['zaid404/my-project1', 'zaid404/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['zaid404/gitprofile', 'zaid404/pandora'], // List of repository names to display. example: ['zaid404/my-project1', 'zaid404/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Yazid Munali ',
    description: ' Fresh graduate in Computer Science with a strong interest in Data Science and expertise in Machine Learning algorithms',
    imageURL: 'https://media.licdn.com/dms/image/v2/D4E03AQEGZ4pWwH74wA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725361941797?e=1730937600&v=beta&t=QWnAuQCeT0mEOa4xXoBPD8I79alv8KBUnmD--krNm3c',
  },
  social: {
    linkedin: 'yazid-munali-aa4b1527a',
    twitter: '',
    mastodon: 'yazid_munali@mastodon.social',
    researchGate: 'Yazid-Munali',
    facebook: '',
    instagram: 'yazidmaydani',
    kompasiana: 'yazidmunali',

    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://zaid404.github.io/gitprofile/',
    phone: '',
    email: 'yazid.munali@uinsu.ac.id',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },

  ],
certifications: [
  {
    name: 'Alibaba Cloud DataWorks - Basic Knowledge',
    body: 'Alibaba Cloud Global',
    year: 'August 2024',
    expiration: 'August 2026',
    credential_id: 'ACFW229240800134891',
    link: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_25865530b9840e144a52b2db4dc42c96.jpg',
    skills: 'Big Data',
  },
  {
    name: 'Alibaba Cloud\'s Machine Learning Platform: PAI (Exam)',
    body: 'Alibaba Cloud Global',
    year: 'August 2024',
    expiration: 'August 2026',
    link: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_77a36f33112e96cb13c8a3b3eb2b24ac.png',
  },
  {
    name: 'Beginner\'s Guide to MySQL',
    body: 'Alibaba Cloud',
    year: 'August 2024',
    expiration: 'August 2026',
    link: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_e35c8bc05f525899ad04ea9bb3b42d3f.png',
  },
  {
    name: 'Junior Web Developer (Vocational School Graduate Academy)',
    body: 'Digital Talent Scholarship',
    year: 'August 2024',
    credential_id: '19391101040-45',
    link: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_e35c8bc05f525899ad04ea9bb3b42d3f.png',
  },
  {
    name: 'Using ECS to Construct a Dynamic Website (Exam)',
    body: 'Alibaba Cloud',
    year: 'August 2024',
    expiration: 'August 2026',
    credential_id: 'ACFW125240800135014',
    link: 'https://aliyun-aps-cloud-public.oss-cn-hangzhou.aliyuncs.com/img_fb35dccf57e706ea09c23afa9e33792b.png',
  },
  {
    name: 'Belajar Prinsip Pemrograman SOLID',
    body: 'Dicoding Indonesia',
    year: 'July 2024',
    expiration: 'July 2027',
    credential_id: 'KEXL1N0QRXG2',
    link: 'https://www.dicoding.com/certificates/KEXL1N0QRXG2',
  },
  {
    name: 'Penyusunan Data untuk Kebijakan Kesehatan bagi Data Scientist',
    body: 'Rumah Siap Kerja',
    year: 'September 2023',
    expiration: 'September 2026',
    link: 'https://kelas.rumahsiapkerja.com/student-certificate/download-qrcode/a445cbce0aa84e86b5c4ce5e722938f0/',
  },
  {
    name: 'Mengelola Website untuk Pengembang Perangkat Lunak',
    body: 'Cybers Academy',
    year: 'August 2023',
    expiration: 'August 2026',
    credential_id: '312910552/INV-KR/SID/VIII/20230802/ 45149/37',
    skills: 'Mengelola Website',
  },
  {
    name: 'Belajar Dasar Structured Query Language (SQL)',
    body: 'Dicoding Indonesia',
    year: 'July 2023',
    expiration: 'July 2026',
    credential_id: 'JLX1DRKLJZ72',
    link: 'https://www.dicoding.com/certificates/JLX1DRKLJZ72',
  },
  {
    name: 'Memulai Pemrograman Dengan C',
    body: 'Dicoding Indonesia',
    year: 'July 2023',
    expiration: 'July 2026',
    credential_id: '1OP80RMKQXQK',
    link: 'https://www.dicoding.com/certificates/1OP80RMKQXQK',
  },
  {
    name: 'Memulai Pemrograman Dengan Java',
    body: 'Dicoding Indonesia',
    year: 'July 2023',
    expiration: 'July 2026',
    credential_id: '0LZ09YMKNZ65',
    link: 'https://www.dicoding.com/certificates/0LZ09YMKNZ65',
  }
],
  educations: [
     {
      institution: 'Universitas Islam Negeri Sumatera Utara',
      degree: 'Bachelor of Computer Science',
      from: '2017',
      to: '2024',
    }
  ],
  publications: [
    {
      title: 'Classification of Hypertension Using Naïve Bayes Method with Data Discretization Approach Risk Factors',
      conferenceName: '',
      journalName: 'Jurnal Sistem Cerdas',
      authors: 'Yazid Munali, Armansyah',
      link: 'https://doi.org/10.37396/jsc.v7i1.381',
      description:
        'This study aims to classify hypertensive patients in an effort to reduce the prevalence of hypertension in Indonesia by aiding in early detection of the disease and increasing awareness of hypertension among the Indonesian population. By using the Naïve Bayes method and implementing data discretization of risk factors,',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'zaid404', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/zaid404/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
