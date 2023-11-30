// config.js

const testData = {
  username: 'VitaliyP',
  password: '99996vBCMP',
  nameFirstNewApp: 'qqqq',
  timeOutLoginForm: 12000,
  waitingtimeOutLandingPage:12000,
  // adding 'waitingtimeOutUrlDefault:2000' helps 'good' loading page
  waitingtimeOutUrlDefault:2000
};

const urls = {
  urlLandingPage: 'https://developer.striim.com/#landing',
  urlCreateNewApp: 'https://developer.striim.com/#create-app',
  urlCreateNameNewApp: 'https://developer.striim.com/#create-app/name-app',
  urlGettingStartedNewApp: 
  `https://developer.striim.com/#flow/${testData.username}.${testData.nameFirstNewApp}`  
};


export { testData,urls };
