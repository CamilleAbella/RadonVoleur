import * as PIXI from "../libs/pixi.min.mjs"

let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}

PIXI.utils.sayHello(type)

PIXI.Loader.shared
  .add("../assets/sprites/allfour.json")
  .add("../assets/sprites/standing.json")
  .add("../assets/sprites/turnleft.png")
  .add("../assets/sprites/turnright.png")
  .load()

const pixi = new PIXI.Application({
  antialias: true,
  autoResize: true,
  resolution: 1,
  resizeTo: window.document.documentElement,
  view: document.getElementById("pixi"),
})

export default pixi
