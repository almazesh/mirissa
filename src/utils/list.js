import ContactData from '../components/ContactData/ContactData'
import Gallery from '../components/Gallery/Gallery'
import PhotoTea from '../components/PhotoTea/PhotoTea'
import selectionsBack_1 from '../images/selections-banner-1.webp'
import selectionsBack_2 from '../images/selections-banner-2.webp'
import selectionsBack_3 from '../images/selections-banner-3.webp'
import selectionsBack_4 from '../images/selections-banner-4.webp'



export const navbarList = [
  {
    id:1,
    title: 'О нас',
    route: '/about'
  },
  {
    id:2,
    title: 'Чай',
    route: '/catalog/tea'
  },
  {
    id:22,
    title: 'Каталог',
    route: '/magazine'
  },
  {
    id:3,
    title: 'Знак высокого качества',
    route: '/quality'
  }
]

export const facts_list = [
  {
    id:1,
    title: 'Знак высококачественного чая, произведенного и упакованного на Шри-ланке',
    img: '/assets/facts-1.svg',
  },
  {
    id:4,
    title: 'Чай для завтрака',
    img: 'https://www.chay.info/upload/iblock/dd9/dd98c8e89ac6b765c9c812f91215ed96.webp',
  },
  {
    id:2,
    title: 'Изысканный вкус и мягкий аромат нашего чая вызывает жгучее желание поделиться им с близкими Вам людьми',
    img: '/assets/facts-2.svg',
  },
  {
    id:5,
    title: 'Успокаивающий, расслабляющий',
    img: 'https://www.chay.info/upload/iblock/34e/34e84070a8ee69414eb550a23ed2c57e.webp',
  },
  {
    id:3,
    title: 'Чайные плантации находятся на высоте более 2100 метров  над уровнем моря...',
    img: '/assets/facts-3.svg',
  },
]



export const sliderImg = [
  {
    url:'/assets/right-slider-1.jpg',
    title: 'Чай по подписке ',
    text: 'Качественный чай без лишних сложностей',
  },
  {
    url: '/assets/right-slider-2.jpg',
    title: 'Фунт чая  со скидкой 40%',
    text: 'для тех, кто пьет чай впечатляющими объемами',
  },
  {
    url: '/assets/right-slider-3.jpg',
    title: 'Новогодние  подарки',
    text: 'Коллегам, друзьям, близким. Доставим вам или от вашего имени. '
  },
  
]

export const sliderCard = [
  {
    id: 1,
    title: 'ЧАЙ ЧЕРНЫЙ',
    subtitle: 'с бергамотом',
    img: '/assets/slider-card-1.jpg',
    price: '120',
  },
  {
    id: 2,
    title: 'ЧАЙ ЧЕРНЫЙ ',
    subtitle: 'листовой',
    img: 'https://pngimg.com/uploads/tea/tea_PNG16927.png',
    price: '120',
  },
  {
    id: 3,
    title: 'ЧАЙ ЧЕРНЫЙ ',
    subtitle: 'одноразовый',
    img: '/assets/slider-card-1.jpg',
    price: '120',
  },
]

export const actual_card_1 = [
  {
    id:1,
    title: 'Джамира TGFOP',
    category: 'Черный чай',
    price: '470',
    url: '/assets/slider-card-1.jpg'
  },
  {
    id:2,
    title: 'Джамира TGFOP',
    category: 'Черный чай',
    price: '470',
    url: '/assets/slider-card-2.jpg'
  },
  {
    id:3,
    title: 'Джамира TGFOP',
    category: 'Черный чай',
    price: '470',
    url: '/assets/slider-card-1.jpg'
  },
]





export const actualContent_2 = {
  type: '14 видов',
  title: '«Что-нибудь необычное»',
  text: 'Габа, Муира Пуама, Лапсанг Сушонг, Анчан. Настой цвета синей акварели, копченый вкус, рыбные ноты. Все, что выходит за границы чайной классики для любителей необычного.',
}

export const stockCards = [
  {
    id:1,
    title:'Роастмастер рекомендует',
    text: 'Каждую неделю новый сорт кофе на который мы снижаем цену на 20% Чтобы Вы могли пробовать новые сорта, открывая для себя многообразие вкусов кофе Унция.',
  },
  {
    id:2,
    title:'Титестер рекомендует',
    text: 'Каждую неделю новый сорт чая на который мы снижаем цену на 20%',
  },
  {
    id:3,
    title:'Фунт чая',
    text: 'Скидка на 39 сортов классического черного чая.',
  },
  {
    id:4,
    title:'Фунт чая',
    text: 'Скидка на 39 сортов классического черного чая.',
  },
  {
    id:5,
    title:'Фунт чая',
    text: 'Скидка на 39 сортов классического черного чая.',
  },
  {
    id:6,
    title:'Фунт чая',
    text: 'Скидка на 39 сортов классического черного чая.',
  },
]

export const selectionsCard = [
  {
    id:1,
    title: '«Что-нибудь вкусненькое»',
    count : '15 видов',
    background: selectionsBack_1,
  },
  {
    id:2,
    title: '«А что остальные берут?». Топ-10 чистые сорта',
    count : '15 видов',
    background: selectionsBack_2,
  },
  {
    id:3,
    title: 'С необычными ингредиентами',
    count : '16 видов',
    background: selectionsBack_3,
  },
  {
    id:4,
    title: 'Успокаивающий, расслабляющий',
    count : '12 видов',
    background: selectionsBack_4,
  },
]

export const news_list = [
  {
    id: 1,
    title: 'Black Friday: дарим +50% к вашему выбору',
    text: 'Чёрная Пятница! Только три дня, с 25 по 27 ноября, дарим к вашей покупке +50% от заказа чёрных сортов.',
    date: "22 ноября '22",
  },
  {
    id: 2,
    title: 'Новый магазин «Унция» в в ТРК Международный',
    text: 'Ждем вас на чайно-кофейный шопинг в ТРК Международный по адресу: Улица Белы Куна 3, 1 этаж секция 1-10',
    date: "15 ноября '22",
  },
  {
    id: 3,
    title: 'Обновлённая «Унция» на Сенной',
    text: 'Дорогие ценители! Рады сообщить, что наш магазин на Сенной вновь открыт после реконструкции. Приходите, будем рады встрече!',
    date: "19 октября '22",
  },

]

export const contactsList = [
  'Контакты',
  'Магазины',
  'Офисы',
]

export const aboutCompanyList = [
  'Блог',
  'Вакансии',
  'Чайный лист',
  'Библиотека',
  'О нас',
]

export const business = [
  'Поставщикам',
  'Франчайзинг',
  'Корпоративные подарки',
]

export const forClient = [
  {
    id:1,
    caption: "Скидки и акции",
    route:"/actions"
  },
  {
    id:1231,
    caption: "События",
    route:"/events"
  },
  {
    id:32,
    caption: "Контакты",
    route:"/contacts"
  },
]

export const burgerList = [
  'Акции',
  'Франчайзинг',
  'Доставка',
  'Магазины',
  'Читать',
  'Корпоративные подарки',
  'Контакты',
]


export const FilterList = [
  {
    id:1,
    caption: "популярные",
    
  },
  {
    id:2,
    caption: "цена",
    
  },
  {
    id:3,
    caption: "рейтинг",
    
  },
]



export const locationList = [
  {
    id:1,
    caption: "Народный 12 мн",
    location: "ул.Нуркамала,29"
  },
  {
    id:2,
    caption: "Народный 9 мн",
    location: "ул.Байтик Баатыра,6"
  },
  {
    id:3,
    caption: "Народный Аврора",
    location: "мкр.Асанбай,52а"
  },
  {
    id:4,
    caption: "Народный Акун",
    location: "пр.Мира,97/1"
  },
  {
    id:5,
    caption: "Народный Алматинская(БЧК)",
    location: "ул.Нуркамала,29"
  },
  {
    id:6,
    caption: "Народный Антарес",
    location: "ул.Ахунбаева,94А"
  },
  {
    id:7,
    caption: "Народный Асанбай-2",
    location: "мкр.Асанбай,40/1"
  },
  {
    id:8,
    caption: "Народный Атыр",
    location: "ул.Байтик Баатыра,9А"
  },
  {
    id:9,
    caption: "Магазин Бостери",
    location: "с Бостери ул.Мамытова 100А"
  },
  {
    id:10,
    caption: "Народный Военторг",
    location: "ул.Киевская, 114"
  },
  {
    id:11,
    caption: "Народный Восток-5",
    location: "пр.Чуй,111"
  },
  {
    id:12,
    caption: "Народный Ден-Сяопина",
    location: "ул.Ден-Сяопина,39"
  },
  {
    id:13,
    caption: "Народный Детский Мир",
    location: "пр.Мира,29"
  },
  {
    id:14,
    caption: "Народный Джал",
    location: "ул.Ахунбаева,196"
  },
  {
    id:15,
    caption: "Народный Джал-Автоград",
    location: "ул.Ахунбаева,267"
  },
  {
    id:16,
    caption: "Народный Исанова",
    location: "ул.Токтогула,161"
  },
  {
    id:17,
    caption: "Народный К.Акиева",
    location: "ул.Токтогула,234"
  },
  {
    id:18,
    caption: "Магазин Кант",
    location: "г.Кант, 74 ул.Ленина"
  },
  {
    id:19,
    caption: "Народный Кашка-Суу",
    location: "ул.Ахунбаева,133"
  },
  {
    id:20,
    caption: "Народный Киевская-Турусбеков",
    location: "ул.Турусбекова,82/1"
  },
  {
    id:21,
    caption: "Народный Курманжан Датка",
    location: "ул.Фрунзе,165"
  },
  {
    id:22,
    caption: "Народный Лермонтова",
    location: "ул.Лермонтова,33"
  },
  {
    id:23,
    caption: "Народный Манаса-Московская",
    location: "ул.Московская,164"
  },
  {
    id:24,
    caption: "Народный Молодая Гвардия",
    location: "ул.Молодая Гвардия,74"
  },
  {
    id:25,
    caption: "Народный Московская",
    location: "ул.Московская,58"
  },
  {
    id:26,
    caption: "Народный Ново-Николаевка",
    location: "ул.Западная,1"
  },
  {
    id:27,
    caption: "Народный Панфилова",
    location: "ул.Панфилова,62"
  },
  {
    id:28,
    caption: "Народный Пишпек",
    location: "ул.Льва Толстого,79"
  },
  {
    id:29,
    caption: "Народный Раэль",
    location: "ул.Гагарина, 183"
  },
  {
    id:30,
    caption: "Народный Республиканская",
    location: "ул.Жибек-Жолу,631"
  },
  {
    id:31,
    caption: "Народный Советская-Боконбаева",
    location: "ул.Абрахманова,105"
  },
  {
    id:32,
    caption: "Народный Сонгер",
    location: "ул.Жибек-Жолу,315"
  },
  {
    id:33,
    caption: "Народный Тоголок-Молдо",
    location: "ул.Тоголок-Молдо,61"
  },

  {
    id:34,
    caption: "Народный Токтогула/Панфилова",
    location: "ул.Токтогула,116"
  },
   {
    id:35,
    caption: "Магазин Тимирязева",
    location: "ул.Московская 194/ Тимирязева"
  },
  {
    id:36,
    caption: "Народный Токмок",
    location: "ул.Ибраимова,1"
  },
  {
    id:37,
    caption: "Народный Толкун",
    location: "ул.Ахунбаева,134"
  },
  {
    id:38,
    caption: "Народный Улан",
    location: "мкрн. Улан,д.7/1"
  },
  {
    id:39,
    caption: "Народный Уметалиева",
    location: "ул.Уметалиева,152"
  },
  {
    id:40,
    caption: "Народный Фучика",
    location: "ул.Ден-Сяопина,3"
  },
  {
    id:41,
    caption: "Народный ЦГ",
    location: "пр.Чуй,162"
  },
  {
    id:42,
    caption: "Народный Чолпон-Ата",
    location: "Г.Чолпон-Ата, ул.Советская б/н"
  },
  {
    id:43,
    caption: "Народный Шевченко",
    location: "ул.Боконбаева 192/1"
  },
  {
    id:44,
    caption: "Народный Шопокова",
    location: "ул.Токтогула 75/1"
  },
  {
    id:45,
    caption: "Народный Юнусалиева",
    location: "ул.Юнусалиева, 86"
  },
  {
    id:46,
    caption: "Магазин Пишпек-Сити",
    location: "ул.Льва Толстог, 120"
  },
  {
    id:47,
    caption: "Магазин ЮГ 2",
    location: "Горького 29 / Тыныстанова 36"
  },
]

export const tabList = [
  {
    id:1,
    caption: "Фото чаев",
    route: "PhotoTea",
    element: PhotoTea
  },
  {
    id:2,
    caption: "Контактные данные",
    route: "ContactData",
    element: ContactData
  },
  {
    id:3,
    caption: "Галерея",
    route: "Gallery",
    element: Gallery
  },
]