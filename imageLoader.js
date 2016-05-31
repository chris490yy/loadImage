'use strict';

class ImageLoader {
  constructor (image) {
    this.total = 0;
    this.current = 0;
    this.store = [];
    this.imgs = [];
    this.image = image;
  }

  load(imgs, print) {
    imgs.forEach((item) => {
      this.total++;
      this.getPromise(item).then(print).catch((error) => {
        console.log(error);
      });
    });
  }

  getPromise(src) {
    return new Promise((resolve, reject) => {
      const fakeImage = this.image;
      let img = new fakeImage();
      this.imgs.push(img);
      img.src = src;
      img.onload = () => {
        console.log('test');
        this.current++;
        this.store.push(src);
        resolve([this.current, this.total]);
      }
    });
  }

}

module.exports = ImageLoader;


