let canvas;
let ctx;
let flowField;
let flowFieldAnimation;
window.onload = function () {
    canvas = document.getElementById('mainCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate();
}

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
});



class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.strokeStyle = "green";
        this.#ctx.lineWidth = 5;
        this.#width = width;
        this.#height = height;
        this.angle = 0;
        this.cellSize = 10;
        this.radius=0;
    }

    

    #drawLine(x, y,angle) {
        const length = 35;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x+Math.cos(angle)*length, y+Math.sin(angle)*length);
        this.#ctx.stroke();
    }
   
    animate(){
        this.angle += 0.1;
        this.#ctx.clearRect(0,0,this.#width,this.#height);
        for(let y=0;y<this.#height;y+=this.cellSize){
            for(let x=0;x<this.#width;x+=this.cellSize){
              const angle = Math.cos(x*10)+Math.sin(y*10)*this.radius;
                this.#drawLine(x,y,angle);
            }
        }
      
       
    }
}