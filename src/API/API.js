export let allMembers = [
  {
    id: 0,
    isFavorite: false,
    role: [
      { name: 'team lead', type: 'danger' },
      { name: 'developer', type: 'warning' }
    ],
    name: 'Eliseev Ivan',
    age: 20,
    country: 'Russia',
    about: 'lorem',
    impact: 'lorem',
    stack: [
      { name: 'HTML', prog: 99 },
      { name: 'CSS', prog: 99 },
      { name: 'React', prog: 70 },
      { name: 'Typescript', prog: 30 }
    ],
    socialMedia: [
      { name: 'instagram', link: 'https:/....' },
      { name: 'telegram', link: 'https:/....' },
      { name: 'github', link: 'https:/....' },
      { name: 'linkedin', link: 'https:/....' }
    ],
    imageURL: 'http://cdn.onlinewebfonts.com/svg/img_252069.png'
  },
  {
    id: 1,
    isFavorite: false,
    role: [{ name: 'developer', type: 'warning' }],
    name: 'Vasiliev Pavel',
    age: 22,
    country: 'Russia',
    about: ' Lorem ipsum dolor sit amet consectedtur adipisicing elit. Quas distinctio ad ut, laboriosam quam culpa saepe inventore delectus adipisci sequi.',
    impact: 'lorem',
    stack: [
      { name: 'HTML', prog: 70 },
      { name: 'CSS', prog: 70 },
      { name: 'JavaScript', prog: 80 },
      { name: 'React', prog: 70 }
    ],
    socialMedia: [
      { name: 'instagram', link: 'https://www.instagram.com/vasiliev.pavell/' },
      { name: 'telegram', link: 'https://t.me/PavelVAS1999' },
      { name: 'github', link: 'https://github.com/VasilievPavelP' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/pavel-vasiliev-680083220/' }
    ],
    imageURL: 'http://cdn.onlinewebfonts.com/svg/img_252069.png'
  },
  {
    id: 2,
    isFavorite: false,
    role: [{ name: 'developer', type: 'warning' }],
    name: 'Alisa Korenskaia',
    age: 21,
    country: 'Spain/Russia',
    about: "I'm Junior Front-end developer, Linux and Open Source enthusiast. I adore travelling and learning new information. Designing and Coding are my passion.",
    impact: 'progress component',
    stack: [
      { name: 'HTML', prog: 97 },
      { name: 'CSS', prog: 95 },
      { name: 'JavaScript', prog: 87 },
      { name: 'React', prog: 69 }
    ],
    socialMedia: [
      { name: 'instagram', link: 'https://www.instagram.com/vvonder_tech/' },
      { name: 'telegram', link: 'https://t.me/alisavvonder' },
      { name: 'github', link: 'https://github.com/AlisaWonder' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/alisawonder/' }
    ],
    imageURL: 'https://media-exp1.licdn.com/dms/image/C4D03AQEu2jsj-7gmQg/profile-displayphoto-shrink_800_800/0/1631806652512?e=1639008000&v=beta&t=eI6lU6oll5V1XKhsmoF-f7i82HUw218MGDumALb7N7A'
  },
  {
    id: 3,
    isFavorite: false,
    role: [{ name: "developer", type: "warning" }],
    name: "Коваль Татьяна",
    age: 23,
    county: "Украина",
    about: "начинающий Frontend-developer",
    impact: "lorem",
    stack: [
      { name: 'HTML', prog: 95 },
      { name: 'CSS', prog: 95 },
      { name: 'JS', prog: 85 },
      { name: 'React', prog: 70 },
      { name: 'Sass', prog: 80 },
      { name: 'Other', prog: 60 }
    ],
    socialMedia: [
      { name: 'instagram', link: 'https://www.instagram.com/tatianka.koval/' },
      { name: 'telegram', link: 'https://t.me/TatiankaKoval' },
      { name: 'github', link: 'https://github.com/tatiankap' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/tetiana-koval/' }
    ],
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-UNaKdgfG9QHYochXsYbaC8mxsTpwz8_hlYut7-_sMnENB-Tu266dgC5Dv5mAT3e5KM&usqp=CAU'
  }
]

export const textAboutTeam = 'Мы 4 черепашки-ниндзя, наставляемые Владиленом (не крыса), мы любим пиццу и front-end! \n Добро пожаловать в наш мир!'

export function setAllMembers(newState) {
  allMembers = newState
}

export const getMemberById = (id) => allMembers.find((user) => user.id === id)