const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const sectionContainer = document.querySelector(".section-container");
const toggleSwitch = document.querySelector("input[type='checkbox']");
canvas.width = sectionContainer.clientWidth;
canvas.height = sectionContainer.clientHeight;
let particlesArray = [];
let isMouseEntered = false;
let theme = document.documentElement.dataset.theme || "light";

const mouse = {
    x: undefined,
    y: undefined
}

const colorsArray = [
    "#66ffcc",
    "#ffff00",
    "#ff3300",
    "#0099ff",
    "#ff66cc",
    "#66ff66"
]

class Particle{
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
    }

    update(){
        this.x += this.directionX;
        this.y += this.directionY;
        if(this.size > 0){
            this.size -= 0.1;
        }
         
        if(this.size < 0){
            this.size = 0;
        }
        this.draw();
    }
}

const animate = () => {
    requestAnimationFrame(animate);
    createParticles();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
}

const createParticles = () => {
    particlesArray = particlesArray.filter(particle =>  particle.size > 5);
    if(particlesArray.length < 100){
        let defaultDirectionX = Math.random()*(1-0)+0;
        let defaultDirectionY = Math.random()*(1-0)+0;
        let size = Math.random()*(15-10)+10;
        let x = mouse.x;
        let y = mouse.y;
        let directionX = (Math.random()*10 > 5)? -defaultDirectionX : defaultDirectionX;
        let directionY = (Math.random()*10 > 5)? -defaultDirectionY : defaultDirectionY;
        let color = colorsArray[
                        theme === "dark"? Math.floor(Math.random()*(3-0)+0):
                        Math.floor(Math.random()*(6-3)+3)];
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }      
}

animate();

canvas.addEventListener('mouseenter', (e) => {
    isMouseEntered = true;
})

canvas.addEventListener('mousemove', (e)=>{
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
})

canvas.addEventListener('mouseout', () => {
    isMouseEntered = false;
    mouse.x = undefined;
    mouse.y = undefined;
    particlesArray = particlesArray.filter(particle =>  particle.size > 5);
})

toggleSwitch.addEventListener("change", ()=>{
    theme = document.documentElement.dataset.theme || "light";
})

window.addEventListener("resize", ()=>{
    canvas.width = sectionContainer.clientWidth;
    canvas.height = sectionContainer.clientHeight;
})
