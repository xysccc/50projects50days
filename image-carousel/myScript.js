class CarouselImage {
  constructor() {
    this.doms = {
      prev: document.getElementById("left"),
      next: document.getElementById("right"),
      imgContainer: document.getElementById("imgs"),
    };
    this.index = 0;
    this.imgMaxLength = this.doms.imgContainer.children.length - 1;
    this.referenceWidth = this.doms.imgContainer.getBoundingClientRect().width;
    this.timer = null;
  }
  resetIndex() {
    this.index = 0;
    this.moveImg(0);
  }
  moveImg(x) {
    this.doms.imgContainer.style.transform = `translateX(-${x}px)`;
  }
  next() {
    if (this.index === this.imgMaxLength) {
      this.resetIndex();
      return;
    }
    this.moveImg(++this.index * this.referenceWidth);
  }
  prev() {
    if (this.index === 0) {
      this.index = this.imgMaxLength;
      this.moveImg(this.imgMaxLength * this.referenceWidth);
      return;
    }
    this.moveImg(--this.index * this.referenceWidth);
  }
  startAutoRun(time = 2000) {
    this.timer = setInterval(() => {
      this.next();
    }, time);
  }
  closeAutoRun() {
    this.timer && clearInterval(this.timer);
  }
}
const lb = new CarouselImage();
