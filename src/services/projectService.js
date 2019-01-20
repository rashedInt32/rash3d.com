import logo from '../assets/img/english-cut.jpg';
import englishcut1 from '../assets/img/ec-1.jpg';
import englishcut2 from '../assets/img/ec-2.jpg';
import englishcut3 from '../assets/img/ec-3.jpg';
import cirkle1 from '../assets/img/c-1.jpg';
import cirkle2 from '../assets/img/c-2.jpg';
import cirkle3 from '../assets/img/c-3.jpg';
import eduly1 from '../assets/img/eduly-1.jpg';
import leaf1 from '../assets/img/leaf-1.jpg';
import leaf2 from '../assets/img/leaf-2.jpg';
import leaf3 from '../assets/img/leaf-3.jpg';
import leaf4 from '../assets/img/leaf-4.jpg';
import ang1 from '../assets/img/ang-1.jpg';
import ang2 from '../assets/img/ang-2.jpg';
import ang3 from '../assets/img/ang-3.jpg';
import vue1 from '../assets/img/v-1.jpg';
import vue2 from '../assets/img/v-2.jpg';


const projectData = [
  {
    id: "1",
    name: "Leaf",
    description: `I've built a React material admin web app for a themeforest company. Its built with redux and react material UI`,
    url: "http://d2nh6mbw5gsfac.cloudfront.net/",
    screenshots: [leaf1, leaf2, leaf3, leaf4],
    tech: ["create-react-app", "redux", "scss", "Material UI", "ReChart"]
  },
  {
    id: "2",
    name: "Ng Admin",
    description: `I've built this Angular material admin web app for the same company. Its built with RxJx and Angular Material framework`,
    url: "http://d1kf524xy44y20.cloudfront.net/",
    screenshots: [ang1, ang2, ang3],
    tech: ["AngularJs", "RxJs", "scss", "Material", "NgChart"]
  },
  {
    id: "3",
    name: "Vue Admin",
    description: `I've built this Vue material admin web app for the same company. Its built with Vuex state management and Vuetify material framework`,
    url: "http://dtflg86j91x9k.cloudfront.net/#/",
    screenshots: [vue1, vue2],
    tech: ["VueJs", "Vuex", "scss", "Vuetify"]
  },
  {
    id: "4",
    name: "Englist Cut",
    description: `Englist Cut project done whilst working at Damage.
    It has some parallax effects and ajax page load`,
    url: "https://englishcut.com/",
    bg: logo,
    screenshots: [englishcut1, englishcut2, englishcut3],
    tech: ["html", "scss", "jQuery"]
  },
  {
    id: "5",
    name: "Cirkle",
    description: `I had a great opportunity to work with Cirkle project at Damage. The most challanging part was to hanlde the menu transition animation. It has some complex animation with page scroll and also the ajax page load animation.`,
    url: "https://www.cirkle.com/",
    screenshots: [cirkle1, cirkle2, cirkle3],
    tech: ["html", "scss", "jQuery"]
  },
  {
    id: "6",
    name: "Eduly",
    description: `Its an honor to work with such a beautiful project at Damage. It a native mobile app built with Ionic Cordova. I had to rewrite the icon basic style to match with the design and it goes together very well`,
    url: "https://itunes.apple.com/gb/app/eduly/id1363876103#?platform=iphone",
    screenshots: [eduly1, eduly1],
    tech: ["Ionic", "Cordova", "Angular", "SCSS"]
  }
];

export const getProjects = () => projectData;
