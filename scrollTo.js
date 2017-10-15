window.st = scrollTo
class ScrollTo {
  constructor() {
    this.timer = null
  }
  designated(position, time = 1000) {
    const Y = scrollY // scrollY是随着滚动条位置实时改变的，需要记录最初的位置为常量来计算

    // 往上滚动
    if (Y >= position) {
      const x = Y - position
      const a = x / time / time
      let t = 10
      this.timer = setInterval(() => {
        window.st(0, Y - a * t ** 2)
        if (Y - a * t ** 2 <= position) {
          clearInterval(this.timer)
        }
        t += 10
      }, 10)

    // 往下滚动
    } else {
      const x = position - Y
      const a = x / time / time
      let t = 10
      this.timer = setInterval(() => {
        window.st(0, Y + a * t ** 2)
        if (Y + a * t ** 2 >= position) {
          clearInterval(this.timer)
        }
        t += 10
      }, 10)
    }
  }
  top(time = 300) {
    this.designated(0, time)
  }
  bottom(time = 300) {
    this.designated(document.body.offsetHeight, time)
  }
}
window.scrollTo = new ScrollTo()
