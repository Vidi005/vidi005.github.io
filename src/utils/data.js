const getEducationData = () => [
  {
    eduTitle: 'Senior High School 6 Cirebon',
    eduStage: 'Science',
    type: 'Formal Education',
    score: '',
    content: '',
    duration: 'July 2012 - June 2015'
  },
  {
    eduTitle: 'Jenderal Soedirman University',
    eduStage: 'Bachelor in Electrical Engineering (Instrumentation and Control System)',
    type: 'Formal Education',
    score: 'GPA: 3.79 / 4.00',
    content: 'Final Project: Design of Rice Varieties Classification Image-Based using Convolutional Neural Network (CNN) Method on Android',
    duration: 'August 2016 - February 2020'
  }
]

const getWorkExperienceData = () => [
  {
    id: 1,
    company: 'PT PLN (Persero) UPT Cirebon',
    section: 'HAR Protection & Control Panel of Sunyaragi Substation',
    type: 'Internship',
    jobDesc: ['Observing Distance Relay Circuit Logic using PSL (Programmable Scheme Logic).'],
    date: 'January 2019 - February 2019'
  },
  {
    id: 2,
    company: 'Secretariat DPRD in Cirebon City',
    section: 'General Section',
    type: 'Full Time - Contract',
    jobDesc: [
      'IT Support',
      'Configure and Installing Staff Computers',
      'Troubleshooting some error of Computer Softwares/Applications',
      'Participate in Computer Security Incident Response Team (CSIRT) Training at DKIS (Dinas Komunikasi Informatika dan Statistik) in Cirebon City',
      'Helping Administrator Jobs',
      'Helping make concept of internal office environment Application.'
    ],
    date: 'January 2021 - Now'
  }
]

const getSkillData = () => ({
  technical: {
    programmings: [
      {
        name: 'HTML',
        icon: 'images/html-icon.svg'
      },
      {
        name: 'Tailwind CSS',
        icon: 'images/tailwind-icon.svg'
      },
      {
        name: 'Javascript',
        icon: 'images/js-icon.svg'
      },
      {
        name: 'Kotlin',
        icon: 'images/kotlin-icon.svg'
      },
      {
        name: 'Dart',
        icon: 'images/dart-icon.png'
      },
      {
        name: 'PHP',
        icon: 'images/php-icon.svg'
      },
      {
        name: 'Python',
        icon: 'images/python-icon.svg'
      }
    ],
    frameworks: [
      {
        name: 'React JS',
        icon: 'images/reactjs-icon.svg'
      },
      {
        name: 'Node JS',
        icon: 'images/nodejs-icon.svg'
      },
      {
        name: 'Flutter',
        icon: 'images/flutter-icon.png'
      }
    ],
    dbs: [
      {
        name: 'MySQL',
        icon: 'images/mysql-icon.svg'
      },
      {
        name: 'SQLite',
        icon: 'images/sqlite-icon.svg'
      }
    ],
    ides: [
      {
        name: 'Android Studio',
        icon: 'images/android-icon.svg'
      },
      {
        name: 'Visual Studio Code',
        icon: 'images/vsc-icon.svg'
      }
    ],
    others: [
      {
        name: 'Corel Draw',
        icon: 'images/corel-icon.png'
      },
      {
        name: 'Microsoft Office',
        icon: 'images/office-icon.png'
      }
    ]
  },
  languages: [
    {
      language: 'Indonesian',
      ability: 'Native Proficiency'
    },
    {
      language: 'English',
      ability: 'Limited Working Proficiency'
    }
  ]
})

const getProjectData = () => [
  {
    image: '/images/final-project.png',
    name: 'Rice Varieties Classification',
    summary: 'Final Project',
    desc: 'Rice Varieties Classification Image-Based using Convolutional Neural Network (CNN) Method on Android',
    repository: 'https://github.com/Soedirman-Machine-Learning/rice-varieties-classification',
    preview: '',
    download: 'https://github.com/Soedirman-Machine-Learning/rice-varieties-classification/raw/master/Aplikasi%20Android/MobileNetV1/Update/Output/app-debug-mobilenet.apk',
  },
  {
    image: '/images/movie-catalogues.png',
    name: 'Movie Catalogues',
    summary: '(The Movie Database App)',
    desc: 'Submission of Android Jetpack Pro Dicoding Course',
    repository: 'https://github.com/Vidi005/Movie-Catalogue',
    preview: '',
    download: 'https://github.com/Vidi005/Movie-Catalogue/raw/main/Submission%203/Outputs/app-debug.apk',
  },
  {
    image: '/images/farm-doctor.png',
    name: 'Farm Doctor',
    summary: '(Plant Diseases Detection Machine Learning Based on Android)',
    desc: 'Winning Application of IDCamp 2020 Developer Challenge, changing the World through Innovation Technology',
    repository: 'https://github.com/Vidi005/IDCamp-Dicoding-Challenge-SDGs-2020',
    preview: 'https://github.com/Vidi005/Farm-Doctor-V3',
    download: '',
  },
  {
    image: '/images/personal-notes.png',
    name: 'Personal Notes',
    summary: '(Add, Remove, and Search Notes)',
    desc: 'Submission of Making React Web App in Dicoding Course',
    repository: 'https://github.com/Vidi005/Personal-Notes-App',
    preview: 'https://dicoding-submission-web-react-app.netlify.app',
    download: '',
  },
  {
    image: '/images/aqi-data-analysis.png',
    name: 'Air Quality Dashboard',
    summary: '(Air Quality Index Data Analysis on Streamlit)',
    desc: 'Analysis and Visualization of Air Quality Datasets',
    repository: 'https://github.com/Vidi005/Submission-Python-Data-Analysis',
    preview: 'https://air-quality-data-analysis.streamlit.app',
    download: ''
  },
  {
    image: '/images/swag.png',
    name: 'Static Website AI Generator',
    summary: 'Web Component Generator with Gemini AI',
    desc: 'Generate front-end static websites and various web UI components through user prompts or image inputs using Gemini AI.',
    repository: 'https://github.com/Vidi005/SWAG',
    preview: 'https://static-website-ai-generator.vercel.app/',
    download: ''
  },
  {
    image: '/images/muslim-calendar.png',
    name: 'Muslim Calendar',
    summary: '(Related Muslim Event/Date Web App)',
    desc: 'Giving related information of Islamic Calendar, Prayer Times and Imsakiyah Schedule, Moon Crescent Visibility Map, and also Solar and Lunar Eclipses around The World.',
    repository: 'https://github.com/Vidi005/Muslim-Calendar',
    preview: 'https://demo-muslim-calendar.pages.dev/',
    download: ''
  },
  {
    image: '/images/favorite-restaurant-app.png',
    name: 'Restaurant App',
    summary: '(Favorite Restaurant App)',
    desc: 'Submission of Flutter Fundamental Dicoding Course.',
    repository: 'https://github.com/Vidi005/Restaurant-App',
    preview: 'https://dicoding-restaurant-app.netlify.app/',
    download: ''
  }
]

const getOrganizationData = () => [
  {
    name: 'UNSOED Microcontroller and Robotic Community',
    division: 'Member of Line Follower Robotic',
    desc: 'Assembling Line Follower Robot, Attending Line Follower Microcontroller Competitions.',
    year: '2017 - 2018'
  },
  {
    name: 'Assistant of Digital Technique Practical in Electrical Engineering Laboratory UNSOED',
    division: 'Practicum Assistant',
    desc: '',
    year: 'September 2018 - December 2018'
  },
  {
    name: 'Assistant of Electronics Practical in Electrical Engineering Laboratory UNSOED',
    division: 'Coordinator',
    desc: '',
    year: 'March 2019 - June 2019'
  },
  {
    name: 'UNSOED Microcontroller and Robotic Community',
    division: 'Microcontroller Division',
    desc: 'Presenting Several Topics of Designing Microcontroller using Various Kind of Sensors and Simulate Them.',
    year: '2018 - 2019'
  }
]

const getCertificateData = () => [
  {
    name: 'Belajar Dasar Visualisasi Data',
    issuedBy: 'Dicoding Indonesia',
    date: 'May 2020',
    url: 'https://www.dicoding.com/academies/177/certificates/9672',
    cert: 'images/dasar-visualisasi-data-dicoding.png'
  },
  {
    name: 'Belajar Fundamental Aplikasi Android',
    issuedBy: 'Dicoding Indonesia',
    date: 'November 2020',
    url: 'https://www.dicoding.com/certificates/53XEE44JRXRN',
    cert: 'images/fundamental-android-dicoding.png'
  },
  {
    name: 'Belajar Android Jetpack Pro',
    issuedBy: 'Dicoding Indonesia',
    date: 'March 2021',
    url: 'https://www.dicoding.com/certificates/MRZMGN1DNZYQ',
    cert: 'images/android-jetpack-pro-dicoding.png'
  },
  {
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    issuedBy: 'Dicoding Indonesia',
    date: 'February 2022',
    url: 'https://www.dicoding.com/certificates/07Z6597VWXQR',
    cert: 'images/back-end-pemula-dicoding.png'
  },
  {
    name: 'Belajar Membuat Aplikasi Web dengan React',
    issuedBy: 'Dicoding Indonesia',
    date: 'July 2022',
    url: 'https://www.dicoding.com/certificates/53XE0O7WYXRN',
    cert: 'images/aplikasi-react-pemula-dicoding.png'
  },
  {
    name: 'IT Business Analyst',
    issuedBy: 'Government Transformation Academy – Digital Talent Scholarship',
    date: 'August 2022',
    url: 'https://digitalent.kominfo.go.id/peserta/riwayat-pelatihan/it-business-analyst---kota-cirebon/sertifikat/2496',
    cert: 'images/digitalent-itba.png'
  },
  {
    name: 'Belajar Jaringan Komputer untuk Pemula',
    issuedBy: 'Dicoding Indonesia',
    date: 'February 2023',
    url: 'https://www.dicoding.com/certificates/JLX1LVMW2X72',
    cert: 'images/jarkom-pemula-dicoding.png'
  },
  {
    name: 'Belajar Dasar Data Science',
    issuedBy: 'Dicoding Indonesia',
    date: 'September 2023',
    url: 'https://www.dicoding.com/certificates/N9ZO548RRPG5',
    cert: 'images/dasar-data-science-dicoding.png'
  },
  {
    name: 'Belajar Analisis Data dengan Python',
    issuedBy: 'Dicoding Indonesia',
    date: 'October 2023',
    url: 'https://www.dicoding.com/certificates/2VX36VKDJXYQ',
    cert: 'images/analisis-data-dicoding.png'
  },
  {
    name: 'Belajar Machine Learning untuk Pemula',
    issuedBy: 'Dicoding Indonesia',
    date: 'October 2023',
    url: 'https://www.dicoding.com/certificates/07Z6LL31WPQR',
    cert: 'images/machine-learning-pemula-dicoding.png'
  },
  {
    name: 'Belajar Fundamental Aplikasi Flutter',
    issuedBy: 'Dicoding Indonesia',
    date: 'February 2025',
    url: 'https://www.dicoding.com/certificates/GRX53D12VZ0M',
    cert: 'images/fundamental-flutter-dicoding.png'
  },
  {
    name: 'IDCamp Multi-Platform App Developer Intermediate Level',
    issuedBy: 'Indosat Ooredoo Hutchison Digital Camp',
    date: 'March 2025',
    url: 'https://drive.google.com/file/d/1bLktYLeAiw-Gg5Or95yNnUG_Xlts8edF/view',
    cert: 'images/idcamp-flutter-intermediate.png'
  }
]

const getContactData = () => [
  {
    image: '/images/github.png',
    account: 'Vidi005',
    url: 'https://github.com/Vidi005'
  },
  {
    image: '/images/gmail.png',
    account: 'vidihidarlan@gmail.com',
    url: 'mailto:vidihidarlan@gmail.com'
  },
  {
    image: '/images/instagram.png',
    account: 'vidi005',
    url: 'https://instagram.com/vidi005'
  },
  {
    image: '/images/linkedin.png',
    account: 'Vidi Fitriansyah Hidarlan',
    url: 'https://www.linkedin.com/in/vidi-fitriansyah-hidarlan-0b23931a4/'
  },
  {
    image: '/images/whatsapp.png',
    account: '083823775820',
    url: 'https://wa.me/+6283823775820'
  },
  {
    image: '/images/twitter.png',
    account: 'VidiHidarlan',
    url: 'https://twitter.com/VidiHidarlan'
  }
]

export { getEducationData, getWorkExperienceData, getSkillData, getProjectData, getOrganizationData, getCertificateData, getContactData }
