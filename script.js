
/*var c = document.getElementById("animDisplay");
var ctx = c.getContext("2d");


class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(x,y){
        this.x += x;
        this.y += y;
        return this;
    }

    addV(a){
        this.x += a.x;
        this.y += a.y;
        return this;
    }

    set(x,y){
        this.x = x;
        this.y = y;
        return this;
    }

    mult(s){
        this.x *= s;
        this.y *= s;
        return this;
    }

    magSq(){
        return this.x * this.x + this.y * this.y;
    }
    
    mag(){
        return Math.sqrt(this.magSq());
    }

    setMag(mag){
        let u = this.magSq();
        if(u != 0) this.mult(mag / Math.sqrt(u));
        return this;
    }

    static sub(a, b){
        return new Vector(a.x - b.x, a.y - b.y);
    }

    static distSq(a, b){
        return(Vector.sub(a,b).magSq());
    }

    static dist(a,b){
        return(Vector.sub(a,b).mag());
    }
}

class Particle{
    constructor(p, v, a){
        this.pos = p;
        this.vel = v;
        this.acc = a;
    }

    show(){
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.pos.x,this.pos.y,10,10);
    }

    update(){
        this.pos.add(this.vel.x,this.vel.y);
        this.vel.add(this.acc.x,this.acc.y);
        this.acc.set(0,0);
    }

    grav(p){
        for(let i = 0; i < p.length; i++){
            let d = Vector.dist(this.pos,p[i].pos);
            if(d < 100)
                this.vel.addV(Vector.sub(this.pos,p[i].pos).setMag(1));
            else
                this.vel.addV(Vector.sub(p[i].pos,this.pos).setMag(1));
        }
    }
}

var p = [];

function setup(){
    for(let i = 0; i < 100; i++) p.push(new Particle(new Vector(Math.random() * c.width, Math.random() * c.height), new Vector(0,0), new Vector(0,0)));
}

setup();

function run(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = "#000000";
    for(let i = 0; i < p.length; i++) p[i].show();
    for(let i = 0; i < p.length; i++) p[i].update();
    // for(let i = 0; i < p.length; i++) p[i].grav(p);
}

setInterval(function(){run();}, 1);*/