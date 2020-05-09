import { Controller } from "stimulus"

export default class extends Controller {
  speak() {
    console.log('hi dad')
  }
  getXY(event) {
    console.log(event.offsetX, event.offsetY)
  }

  xyDown(event) {
    this.lastX = event.offsetX
    this.lastY = event.offsetY
  }

  xyUp(event) {
    var coords = [this.lastX, this.lastY, event.offsetX, event.offsetY]
    console.log(coords)
  }
}
