// grid stuff
let grid = []
let gridSize = [200,200]
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
  constructor(x,y,features){
    this.x = x;
    this.y = y;

    // perlin is werid, it needs decimals
    let decimalX = x/gridSize[0]
    let decimalY = y/gridSize[1]

    let height = Math.ceil(perlin.get(decimalX,decimalY)*100)
    if(height < 0){
      height = -height
    }
    this.height = height

    
    this.featureNum = Math.floor(Math.random()*30)
    this.feature = features[this.featureNum]

   

  }
}

perlin.seed()


// I have fully given up and decided to go full yandre simulator programming
let biomeItems = {
  grasslands:[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    document.createElement("img"),
  ],
  ocean:[
    document.createElement("img"),
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    document.createElement("img"),
  ],
  islands:[
    document.createElement("img"),
    document.createElement("img"),
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    document.createElement("img"),
  ]
}



biomeItems.grasslands[29].style.width = "30px"
biomeItems.grasslands[29].style.height = "30px"
biomeItems.grasslands[29].src = "/random-map-generator/biome-items/grasslands/tree.png"


biomeItems.ocean[29].src = "/random-map-generator/biome-items/ocean/palmTree.png"
biomeItems.ocean[29].style.width = "20px"
biomeItems.ocean[29].style.height = "20px"

biomeItems.ocean[0].src = "/random-map-generator/biome-items/ocean/boat.png"
biomeItems.ocean[0].style.width = "30px"
biomeItems.ocean[0].style.height = "30px"

biomeItems.islands[0].src = "/random-map-generator/biome-items/islands/tree.png"
biomeItems.islands[0].style.width = "30px"
biomeItems.islands[0].style.height = "30px"

biomeItems.islands[1].src = "/random-map-generator/biome-items/islands/palmTree.png"
biomeItems.islands[1].style.width = "30px"
biomeItems.islands[1].style.height = "30px"

biomeItems.islands[29].style.width = "30px"
biomeItems.islands[29].style.height = "30px"
biomeItems.islands[29].src = "/random-map-generator/biome-items/islands/boat.png"



// please, forgive me.

let biomes =  {
  grasslands:[ 
  "#252CA1",
  "#4A53F0",
  "#5AA0FA",
  "#faff72ff",
  "#ffe436ff",
  "#ffe436ff",
  "#3a921dff", // 7
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#3a8c1fff", // 51 - yes i did count by hand
  "#5d5d5dff",
  "#605f5fff",
  "#686868ff",
  "#757575ff",
  "#7f7f7fff",
  "#8b8b8bff",
  "#9b9b9bff",
  "#abababff",
  "#b4b4b4ff",
  "#c5c5c5ff",
  "#dededeff",
  "#ebebebff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ddddddff",
  ],
  ocean:[
    "#91cef7ff",
    "#87b1feff",
    "#5AA0FA",
    "#5AA0FA",
    "#1a5193ff",
    "#153a68ff",
    "#1a5193ff",
    "#153f72ff", // 7
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#5AA0FA",
    "#84aadcff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153f72ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#153050ff", // 51 - yes i did count by hand
    "#153050ff",
    "#153050ff",
    "#153050ff",
    "#2c4f7bff",
    "#3a6395ff",
    "#719cd0ff",
    "#71bad0ff",
    "#71bad0ff",
    "#71bad0ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
    "#f6de45ff",
  ],
  islands:[ 
  "#466c9bff",
  "#466c9bff",
  "#466c9bff",
  "#466c9bff",
  "#466c9bff",
  "#3a6395ff",
  "#3a6395ff",
  "#3a6395ff",
  "#3a6395ff",
  "#3a6395ff",
  "#3a6395ff",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#252CA1",
  "#4A53F0",
  "#3f47e3ff",
  "#5AA0FA",
  "#5AA0FA",
  "#5AA0FA",
  "#5AA0FA",
  "#5AA0FA",
  "#faff72ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#ffe436ff",
  "#3a921dff", // 7
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#3a921dff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#377921ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#2a6616ff",
  "#3a8c1fff", // 51 - yes i did count by hand
  "#5d5d5dff",
  "#605f5fff",
  "#686868ff",
  "#757575ff",
  "#7f7f7fff",
  "#8b8b8bff",
  "#9b9b9bff",
  "#abababff",
  "#b4b4b4ff",
  "#c5c5c5ff",
  "#dededeff",
  "#ebebebff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff",
  "#ffffffff"
  ],
}




function genGrasslands(){
  perlin.seed()
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.grasslands)
        ctx.beginPath()
        ctx.rect(i*gridSquareSize,o*gridSquareSize,gridSquareSize,gridSquareSize)
        ctx.fillStyle = biomes.grasslands[cube.height]
        ctx.fill()
      }
    }

  })
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.grasslands)

        if(cube.feature!="" && cube.height>7 && cube.height<50 && Math.random()>0.5){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
         
        } 
      }
    }

  },1000)
}


function genOcean(){
  perlin.seed()
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.ocean)
        ctx.beginPath()
        ctx.rect(i*gridSquareSize,o*gridSquareSize,gridSquareSize,gridSquareSize)
        ctx.fillStyle = biomes.ocean[cube.height]
        ctx.fill()
      }
    }

  })
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.ocean)

        if(cube.feature!="" && cube.height>60 && cube.featureNum==29){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
        } 
        if(cube.feature!="" && cube.height>20 && cube.height<60 && cube.featureNum==0 && Math.random()>0.95){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
        } 
      }
    }

  },1000)
}

function genIslands(){
  perlin.seed()
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.grasslands)
        ctx.beginPath()
        ctx.rect(i*gridSquareSize,o*gridSquareSize,gridSquareSize,gridSquareSize)
        ctx.fillStyle = biomes.islands[cube.height]
        ctx.fill()
      }
    }

  })
  setTimeout(()=>{
    for(let i=0;i<gridSize[0];i++){
      for(let o=0;o<gridSize[1];o++){
        let cube = new Cube(i*gridSquareSize,o*gridSquareSize,biomeItems.islands)

        if(cube.feature!="" && cube.height>30 && cube.height<40 && cube.featureNum==1){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
         
        } 
        if(cube.feature!="" && cube.height>42 && cube.featureNum==0){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
         
        } 
        if(cube.feature!="" && cube.height<30 && cube.featureNum==29 && Math.random()>0.95){
          console.log(cube.feature)
          ctx.beginPath()
          ctx.drawImage(cube.feature,i*gridSquareSize,o*gridSquareSize,20,20)
          ctx.closePath()
        } 
      }
    }

  },1000)
}

document.getElementById("GrassGen").onclick = genGrasslands
document.getElementById("OceanGen").onclick = genOcean
document.getElementById("IslandGen").onclick = genIslands


genIslands()
