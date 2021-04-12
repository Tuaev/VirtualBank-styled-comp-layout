import Myimg from 'src/assets/images/svg-4.svg';
import Myimg3 from 'src/assets/images/svg-3.svg';
import Myimg2 from 'src/assets/images/svg-2.svg';
export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get acces to our exclusive app that allows you to sen unlimited transactions without getting charged any fees',
  buttonLabel: 'Get started',
  imgStart: true,
  img: Myimg,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Acces',
  headline: 'Login to your account at any time',
  description:
    'Get acces to our exclusive app that allows you to sen unlimited transactions without getting charged any fees',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: Myimg2,
  alt: 'Piggy',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our team',
  headline: 'Creating an account is extreamly easy',
  description:
    'Get acces to our exclusive app that allows you to sen unlimited transactions without getting charged any fees',
  buttonLabel: 'Start Now',
  imgStart: true,
  img: Myimg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
