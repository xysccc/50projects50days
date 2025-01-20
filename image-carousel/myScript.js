class CarouselImage {
  constructor(doms) {
    this.doms = doms;
    this.index = 0;
    this.imgMaxLength = this.doms.imgContainer.children.length - 1;
    this.referenceWidth = this.doms.imgContainer.getBoundingClientRect().width;
    this.timer = null;
    this.monitoringEvents();
  }
  monitoringEvents() {
    this.doms.prev.addEventListener("click", () => this.prev());
    this.doms.next.addEventListener("click", () => this.next());
  }
  moveImg(x) {
    this.doms.imgContainer.style.transform = `translateX(-${x}px)`;
  }
  indexChange() {
    if (this.index > this.imgMaxLength) {
      this.index = 0;
    }
    if (this.index < 0) {
      this.index = this.imgMaxLength;
    }
    this.moveImg(this.index * this.referenceWidth);
  }
  next() {
    // if (this.index === this.imgMaxLength) {
    //   this.resetIndex();
    //   return;
    // }
    // this.moveImg(++this.index * this.referenceWidth);
    this.index++;
    this.indexChange();
    this.resetTimer();
  }
  prev() {
    // if (this.index === 0) {
    //   this.index = this.imgMaxLength;
    //   this.moveImg(this.imgMaxLength * this.referenceWidth);
    //   return;
    // }
    // this.moveImg(--this.index * this.referenceWidth);
    this.index--;
    this.indexChange();
    this.resetTimer();
  }
  startAutoRun(time = 2000) {
    this.timer = setInterval(() => {
      this.next();
    }, time);
  }
  closeAutoRun() {
    this.timer && clearInterval(this.timer);
  }
  resetTimer() {
    this.closeAutoRun();
    this.startAutoRun();
  }
}
const doms = {
  prev: document.getElementById("left"),
  next: document.getElementById("right"),
  imgContainer: document.getElementById("imgs"),
};
const lb = new CarouselImage(doms);
lb.startAutoRun();
