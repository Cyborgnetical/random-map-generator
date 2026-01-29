// grid stuff
let grid = []
let gridSize = [160,160]
let gridSquareSize = 5

/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById("mapCanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
let ctx = canvas.getContext("2d");


class Cube{
  constructor(x,y){
    this.x = x;
    this.y = y;

    // perlin is werid, it needs decimals
    this.decimalX = x/gridSize[0]
    this.decimalY = y/gridSize[1]
    let value = Math.floor(perlin.get(this.decimalX,this.decimalY)*22)
    if(value < 0){
      value = -value
    }
    this.value = value
    console.log(value)
  }
}

perlin.seed()
let colors = [
  "blue",
  "yellow",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "blue",
  "grey",
  "grey",
  "grey",
  "lightgrey",
]

let biomes =  {
  grasslands:[ "blue",
  "yellow",
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
  "green",
  "grey",
  "grey",
  "grey",
  "lightgrey"],
  ocean:[
    "darkblue",
    "darkblue",
    "darkblue",
    "darkblue",
    "darkblue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "blue",
    "cyan"
  ],
  hills:[
  "brown",
  "green",
  "green",
  "darkgrey",
  "darkgrey",
  "darkgrey",
  "grey",
  "grey",
  "grey",
  "grey",
  "grey",
  "grey",
  "lightgrey",
  "lightgrey",
  "lightgrey"
  ]
}
for(let i=0;i<gridSize[0];i++){
  for(let o=0;o<gridSize[1];o++){
    let cube = new Cube(i*gridSquareSize,o*gridSquareSize)
    ctx.beginPath()
    ctx.rect(i*gridSquareSize,o*gridSquareSize,gridSquareSize,gridSquareSize)
    ctx.fillStyle = biomes.grasslands[cube.value]
    ctx.fill()
  }
}