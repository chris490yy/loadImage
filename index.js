//var ImageLoader = require('../ImageLoader.js');
import ImageLoader from './ImageLoader.js';

const loader = new ImageLoader(Image);
const src = ['http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg',
  'http://i.dailymail.co.uk/i/pix/2016/03/22/13/32738A6E00000578-3504412-image-a-6_1458654517341.jpg',
  'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
  'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg'
]

loader.load(src, printFunc);

function printFunc(value) {
  console.log(value[0] + ' of ' + value[1] + ' completed')
  if(value[0] === value[1]) {
    console.log('finished loading yeah');
  }
}