export let allMembers = [
  {
    id: 0,
    isFavorite: false,
    role: [
      { name: 'team lead', type: 'danger' },
      { name: 'developer', type: 'warning' }
    ],
    name: 'Елисеев Иван',
    age: 20,
    country: 'Россия',
    about: 'Я люблю визуал и эффективность, люблю разрабатывать, создавать что-то с нуля, интенсиво изучаю front-end',
    impact:
      'Создал дизайн-макет проекта, организовал рабочее пространство в трелло, распределил задачи, подготовил стартовый проект, сделал эффект пищущей машинки на главной, создал страницу добавления нового пользователя и ее функционал, фикс багов в проекте',
    stack: [
      { name: 'HTML', prog: 89 },
      { name: 'CSS', prog: 89 },
      { name: 'React', prog: 70 },
      { name: 'Redux', prog: 56 },
      { name: 'Typescript', prog: 30 }
    ],
    socialMedia: [
      { name: 'instagram', link: 'https://www.instagram.com/eliseevz.design/' },
      { name: 'telegram', link: 'https://tlgg.ru/eliseevz' },
      { name: 'github', link: '' },
      { name: 'linkedin', link: '' }
    ],
    imageURL: 'https://sun9-78.userapi.com/impg/c853620/v853620150/202815/Vo3IQu_0kf8.jpg?size=2188x2160&quality=96&sign=3381a44af98bbc5bd82935a31eefa9e5&type=album'
  },
  {
    id: 1,
    isFavorite: false,
    role: [{ name: 'developer', type: 'warning' }],
    name: 'Васильев Павел',
    age: 22,
    country: 'Россия',
    about: 'Начинающий Frontend-разработчик',
    impact: 'В этом проекте занимался роутингом и страницой "избранное". Если не заметили, обратите внимание на иконку нашей вкладки. Да, его добавил тоже я :)',
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
    imageURL: 'https://sun9-19.userapi.com/impg/DCSTZi4BUfN4oPArlFfF2bnTNjC-XFuYw3J6Mg/X8K_FvcZ4NY.jpg?size=901x1080&quality=96&sign=c04bbc070a2f0f72a7fcee92a38d8255&type=album'
  },
  {
    id: 2,
    isFavorite: false,
    role: [{ name: 'developer', type: 'warning' }],
    name: 'Алиса Коренская',
    age: 21,
    country: 'Испания/Россия',
    about:
      'Я Алиса Junior Front-end разработчик. Я Open source, Linux энтузиаст. Мне интерсны образовательние, игровые проекты, а также проекты связанные с дизайном и развитием информационных технологий. Мой рабочий и творческий ник Alisa Wonder. А еще я иногда эльф.',
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
    role: [{ name: 'developer', type: 'warning' }],
    name: 'Коваль Татьяна',
    age: 23,
    county: 'Украина',
    about: 'начинающий Frontend-developer',
    impact: 'lorem',
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

export const switchFavoritStatus = (id) => {
  if (allMembers[id].isFavorite === true) {
    allMembers[id].isFavorite = false
  } else {
    allMembers[id].isFavorite = true
  }
}

export const getMemberById = (id) => allMembers.find((user) => user.id === id)
