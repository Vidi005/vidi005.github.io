const getEducationData = () => [
  {
    eduTitle: 'Senior High School 6 Cirebon',
    eduStage: 'Science',
    type: 'Formal Education',
    score: '',
    content: '',
    year: '2012 - 2015'
  },
  {
    eduTitle: 'Jenderal Soedirman University',
    eduStage: 'Bachelor in Electrical Engineering',
    type: 'Formal Education',
    score: 'GPA: 3.79 / 4.00',
    content: 'Final Project: Design of Rice Varieties Classification Image-Based using Convolutional Neural Network (CNN) Method on Android',
    year: '2016 - 2020'
  }
]

const getWorkExperienceData = () => [
  {
    id: 1,
    company: 'PT PLN (Persero) UPT Cirebon',
    section: 'HAR Protection & Control Panel of Sunyaragi Substation',
    type: 'Internship',
    jobDesc: '',
    date: 'January 2019 - February 2019'
  },
  {
    id: 2,
    company: 'Sekretariat DPRD Kota Cirebon',
    section: 'General Section',
    type: 'Full Time',
    jobDesc: 'Helping Administrator Jobs, IT Support, Helping make concept of internal office environment Application, Mbuh ra ngenah nyong ge bingung ngarange wk.',
    date: 'January 2021 - Now'
  }
]

const getSkillData = () => [
  {
    name: 'HTML',
    ability: '80%'
  },
  {
    name: 'Tailwind CSS',
    ability: '85%'
  },
  {
    name: 'Javascript',
    ability: '80%'
  },
  {
    name: 'React JS',
    ability: '70%'
  },
  {
    name: 'Kotlin',
    ability: '75%'
  },
  {
    name: 'Android Studio',
    ability: '90%'
  },
  {
    name: 'Microsoft Office',
    ability: '85%'
  }
]

const getProjectData = () => [
  {
    image: '/images/logo_kvb.png',
    name: 'Rice Varieties Classification',
    summary: 'Final Project',
    desc: 'Rice Varieties Classification Image-Based using Convolutional Neural Network (CNN) Method on Android',
    site: 'https://github.com/Soedirman-Machine-Learning/rice-varieties-classification'
  },
  {
    image: '/images/fd_logo.png',
    name: 'Farm Doctor',
    summary: '(Plant Diseases Detection Machine Learning Based on Android)',
    desc: 'Winning Application of IDCamp 2020 Developer Challenge changing the World through Innovation Technology',
    site: 'https://github.com/Vidi005/IDCamp-Dicoding-Challenge-SDGs-2020'
  },
  {
    image: '/images/github.png',
    name: 'Github User App',
    summary: '',
    desc: 'Submission of Fundamental Android Application Dicoding Course',
    site: 'https://github.com/Vidi005/GitHub-User-App'
  },
  {
    image: '/images/ic_tmdb.jpg',
    name: 'Movie Catalogue',
    summary: '(The Movie Database App)',
    desc: 'Submission of Android Jetpack Pro Dicoding Course',
    site: 'https://github.com/Vidi005/Movie-Catalogue'
  },
  {
    image: '/images/fd_logo.png',
    name: 'Farm Doctor V3',
    summary: '(Plant Diseases Detection Machine Learning Based on Android)',
    desc: 'Upgrade Features of Farm Doctor App',
    site: 'https://github.com/Vidi005/Farm-Doctor-V3'
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
    url: 'https://www.dicoding.com/academies/177/certificates/9672'
  },
  {
    name: 'Belajar Machine Learning untuk Pemula',
    issuedBy: 'Dicoding Indonesia',
    date: 'October 2020',
    url: 'https://www.dicoding.com/certificates/07Z6LL31WPQR'
  },
  {
    name: 'Belajar Fundamental Aplikasi Android',
    issuedBy: 'Dicoding Indonesia',
    date: 'November 2020',
    url: 'https://www.dicoding.com/certificates/53XEE44JRXRN'
  },
  {
    name: 'Belajar Android Jetpack Pro',
    issuedBy: 'Dicoding Indonesia',
    date: 'March 2021',
    url: 'https://www.dicoding.com/certificates/MRZMGN1DNZYQ'
  },
  {
    name: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    issuedBy: 'Dicoding Indonesia',
    date: 'February 2022',
    url: 'https://www.dicoding.com/certificates/07Z6597VWXQR'
  },
  {
    name: 'Belajar Membuat Aplikasi Web dengan React',
    issuedBy: 'Dicoding Indonesia',
    date: 'July 2022',
    url: 'https://www.dicoding.com/certificates/53XE0O7WYXRN'
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
