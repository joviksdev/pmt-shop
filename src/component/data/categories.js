// Icon
import beauty from '../assets/img/sidebar/make-up.png';
import monitor from '../assets/img/sidebar/monitor.svg';
import phone from '../assets/img/sidebar/iphone.svg';
import automobile from '../assets/img/sidebar/automobile.svg';
import electronics from '../assets/img/sidebar/electronics.svg';
import laptop from '../assets/img/sidebar/laptop.svg';
import gym from '../assets/img/sidebar/gym.svg';
import baby from '../assets/img/sidebar/baby.png';
import clothes from '../assets/img/sidebar/clothes.svg';
import diningTable from '../assets/img/sidebar/dining-table.png';

const categories = [
  {
    name: 'health & beauty',
    icon: beauty,
    link: '/',
    subCategories: [
      {
        name: 'makeup',
        ref: 'health & beauty',
        list: []
      },
      {
        name: 'hair care',
        ref: 'health & beauty',
        list: []
      },
      {
        name: 'health care',
        ref: 'health & beauty',
        list: []
      },
      {
        name: 'fragrance',
        ref: 'health & beauty',
        list: []
      },
      {
        name: 'pesronal care',
        ref: 'health & beauty',
        list: []
      },
      {
        name: 'oral care',
        ref: 'health & beauty',
        list: []
      }
    ]
  },
  {
    name: 'home & office',
    icon: diningTable,
    link: '/',
    subCategories: [
      {
        name: 'home & kitchen',
        ref: 'home & office',
        list: []
      },
      {
        name: 'home & office furniture',
        ref: 'home & office',
        list: []
      },
      {
        name: 'office products',
        ref: 'home & office',
        list: []
      },
      {
        name: 'smalll appliance',
        ref: 'home & office',
        list: []
      },
      {
        name: 'large appliance',
        ref: 'home & office',
        list: []
      }
    ]
  },
  {
    name: 'phone & tablets',
    icon: phone,
    link: '/',
    subCategories: [
      {
        name: 'mobile phone',
        ref: 'phone & tablets',
        list: []
      },
      {
        name: 'tablet',
        ref: 'phone & tablets',
        list: []
      },
      {
        name: 'phone accessories',
        ref: 'phone & tablets',
        list: []
      }
    ]
  },
  {
    name: 'computing',
    icon: monitor,
    link: '/',
    subCategories: [
      {
        name: 'computer',
        ref: 'computing',
        list: []
      },
      {
        name: 'printer',
        ref: 'computing',
        list: []
      },
      {
        name: 'computer accessories',
        ref: 'computing',
        list: []
      },
      {
        name: 'data storage',
        ref: 'computing',
        list: []
      },
      {
        name: 'antivirus & security',
        ref: 'computing',
        list: []
      }
    ]
  },
  {
    name: 'electronics',
    icon: electronics,
    link: '/',
    subCategories: [
      {
        name: 'television & video',
        ref: 'electronics',
        list: []
      },
      {
        name: 'home audio',
        ref: 'electronics',
        list: []
      },
      {
        name: 'camera and photo',
        ref: 'electronics',
        list: []
      },
      {
        name: 'generator & portable power',
        ref: 'electronics',
        list: []
      }
    ]
  },
  {
    name: 'fashion',
    icon: clothes,
    link: '/',
    subCategories: [
      {
        name: "women's fashion",
        ref: 'fashion',
        list: []
      },
      {
        name: "men's fashion",
        ref: 'fashion',
        list: []
      },
      {
        name: 'boys',
        ref: 'fashion',
        list: []
      },
      {
        name: 'girls',
        ref: 'fashion',
        list: []
      },
      {
        name: 'watches',
        ref: 'fashion',
        list: []
      },
      {
        name: 'sunglasses',
        ref: 'fashion',
        list: []
      }
    ]
  },
  {
    name: 'baby products',
    icon: baby,
    link: '/',
    subCategories: [
      {
        name: 'apparel & accessories',
        ref: 'baby products',
        list: []
      },
      {
        name: 'apparel & accessories',
        ref: 'baby products',
        list: []
      },
      {
        name: 'diapering',
        ref: 'baby products',
        list: []
      },
      {
        name: 'baby & todler toy',
        ref: 'baby products',
        list: []
      },
      {
        name: 'bathing & skin care',
        ref: 'baby products',
        list: []
      },
      {
        name: 'feeding',
        ref: 'baby products',
        list: []
      },
      {
        name: 'gear',
        ref: 'baby products',
        list: []
      }
    ]
  },
  {
    name: 'gaming',
    icon: laptop,
    link: '/',
    subCategories: [
      {
        name: 'playstation',
        ref: 'gaming',
        list: []
      },
      {
        name: 'xbox',
        ref: 'gaming',
        list: []
      }
    ]
  },
  {
    name: 'sporting goods',
    icon: gym,
    link: '/',
    subCategories: [
      {
        name: 'strength training equipment',
        ref: 'sporting goods',
        list: []
      },
      {
        name: 'accessories',
        ref: 'sporting goods',
        list: []
      },
      {
        name: 'outdoor & adventure',
        ref: 'sporting goods',
        list: []
      }
    ]
  },
  {
    name: 'automobile',
    icon: automobile,
    link: '/',
    subCategories: [
      {
        name: 'care electronics and accessories',
        ref: 'automobile',
        list: []
      },
      {
        name: 'light & lighting accessories',
        ref: 'automobile',
        list: []
      },
      {
        name: 'oil & fluid',
        ref: 'automobile',
        list: []
      },
      {
        name: 'interior accessories',
        ref: 'automobile',
        list: []
      }
    ]
  }
];

export default categories;
