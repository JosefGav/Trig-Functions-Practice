const mode  = document.getElementById("mode")
let radian = false

class Angle {
    constructor(angle) {

        this.PA = angle % 360
        this.angle = angle

        if ( this.PA == 0 ){ this.opp = "0"; this.adj = "1"; this.hyp = "1" ; this.radTEX = "$$2\\pi$$"}
        else if ( this.PA == 90 ) { this.opp = "1"; this.adj = "0"; this.hyp = "1"; this.quadrant = undefined ;  this.radTEX = "$$\\frac{\\pi}{2}$$"}
        else if ( this.PA == 180 ) { this.opp = "0"; this.adj = "-1"; this.hyp = "1"; this.quadrant = undefined ;  this.radTEX = "$$\\pi$$"}
        else if ( this.PA == 270 ) { this.opp = "-1"; this.adj = "0"; this.hyp = "1"; this.quadrant = undefined ;  this.radTEX = "$$\\frac{3}{2}\\pi$$"}

        else if      (0 < this.PA && this.PA  < 90)   { this.quadrant = 1; this.RA = this.PA; }
        else if (90 < this.PA && this.PA < 180)  { this.quadrant = 2; this.RA = 180 - this.PA; }
        else if (180 < this.PA && this.PA < 270) { this.quadrant = 3; this.RA = this.PA - 180; }
        else if (270 < this.PA && this.PA < 360) { this.quadrant = 4; this.RA = 360 - this.PA; }

        
        
        if (this.RA == 30) { 
            this.opp = "1"; 
            this.adj = "\\sqrt{3}"; 
            this.hyp = "2";
            this.rad = [this.PA/this.RA,6];
        }
        else if (this.RA == 60) { 
            this.opp = "\\sqrt{3}"; 
            this.adj = "1"; 
            this.hyp = "2" 
            this.rad = [this.PA/this.RA,3];
        }
        else if (this.RA == 45) { 
            this.opp = "1"; 
            this.adj = "1"; 
            this.hyp = "\\sqrt{2}" 
            this.rad = [this.PA/this.RA,4];
        }
        
        if (!this.radTEX) {
            if (this.rad[0]==1) {
                this.radTEX = "$$\\frac{\\pi}{"+this.rad[1].toString()+"}$$"
            } else {
                this.radTEX = "$$\\frac{"+this.rad[0].toString()+"}{"+this.rad[1].toString()+"}\\pi$$"
            }
        }
    }

    sin() {
        let multiplier="";
        if (this.quadrant == 1 || this.quadrant == 2) {
            multiplier = "";
        } else if (this.quadrant) {
            multiplier = "-";
        }

        let string = "$$" + multiplier + "\\frac{"+ this.opp + "}{" + this.hyp + "}$$";

        console.log(string)


        return string;
    }

    cos() {
        let multiplier="";
        if (this.quadrant == 1 || this.quadrant == 4) {
            multiplier = "";
        } else if (this.quadrant) {
            multiplier = "-";
        }

        let string = "$$" + multiplier + "\\frac{"+ this.adj + "}{" + this.hyp + "}$$";
        
        console.log(string)

        return string;
    }

    tan() {
        let multiplier = "";
        if (this.quadrant == 1 || this.quadrant == 3) {
            multiplier = "";
        } else if (this.quadrant) {
            multiplier = "-";
        }

        let string = "$$" + multiplier + "\\frac{"+ this.opp + "}{" + this.adj + "}$$";

        console.log(string)


        return string;
    }
}
function regenerate() {
    let angleBase = Math.floor(Math.random() * 2); // 0-1, rep 30-45
    let multiplier = Math.floor(Math.random() * 12) + 1;  // 1-12

    let base = 0;

    if (angleBase == 0) base = 30;
    if (angleBase == 1) base = 45;
    let theta = new Angle(base*multiplier);

    document.getElementById("frontSin").innerHTML = "sin" + theta.radTEX //"sin"+theta.angle.toString()+"°"
    document.getElementById("backSin").innerHTML =  theta.sin()

    document.getElementById("frontCos").innerHTML = "cos" + theta.radTEX//"cos"+theta.angle.toString() + "°"
    document.getElementById("backCos").innerHTML =  theta.cos()

    document.getElementById("frontTan").innerHTML = "tan" + theta.radTEX//"tan"+theta.angle.toString() + "°"
    document.getElementById("backTan").innerHTML =  theta.tan() 

    if (radian) {
        document.getElementById("frontSin").innerHTML = "sin" + theta.radTEX
        document.getElementById("frontCos").innerHTML = "cos" + theta.radTEX
        document.getElementById("frontTan").innerHTML = "tan" + theta.radTEX
    } else {
        document.getElementById("frontSin").innerHTML = "sin"+theta.angle.toString()+"°"
        document.getElementById("frontCos").innerHTML = "cos"+theta.angle.toString() + "°"
        document.getElementById("frontTan").innerHTML = "tan"+theta.angle.toString() + "°"
    }

}

document.getElementById("regenerate").addEventListener("click", function() {
    regenerate()
    MathJax.typesetPromise()
})

mode.addEventListener("click", function() {
    if (radian) {
        radian = false
        mode.innerHTML = "Degree"
    } else {
        radian = true
        mode.innerHTML = "Radians"
    }

})