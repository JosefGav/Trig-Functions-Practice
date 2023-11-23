class Angle {
    constructor(angle) {
        angle %= 360
        this.angle = angle
        console.log("angle")
        console.log(angle)

        if ( angle == 0 ){ this.opp = "0"; this.adj = "1"; this.hyp = "1" }
        else if ( angle == 90 ) { this.opp = "1"; this.adj = "0"; this.hyp = "1"; this.quadrant = undefined}
        else if ( angle == 180 ) { this.opp = "0"; this.adj = "-1"; this.hyp = "1"; this.quadrant = undefined }
        else if ( angle == 270 ) { this.opp = "-1"; this.adj = "0"; this.hyp = "1"; this.quadrant = undefined }

        else if      (0 < angle && angle  < 90)   { this.quadrant = 1; this.RA = angle; }
        else if (90 < angle && angle < 180)  { this.quadrant = 2; this.RA = 180 - angle; }
        else if (180 < angle && angle < 270) { this.quadrant = 3; this.RA = angle - 180; }
        else if (270 < angle && angle < 360) { this.quadrant = 4; this.RA = 360 - angle; }

        
        
        if      (this.RA == 30) { this.opp = "1"; this.adj = "\\sqrt{3}"; this.hyp = "2" }
        else if (this.RA == 60) { this.opp = "\\sqrt{3}"; this.adj = "1"; this.hyp = "2" }
        else if (this.RA == 45) { this.opp = "1"; this.adj = "1"; this.hyp = "\\sqrt{2}" }
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
    // document.getElementById("top").innerHTML = angleBase*multiplier
    // document.getElementById("type").innerHTML = angleBase
    document.getElementById("frontSin").innerHTML = "sin"+theta.angle.toString()
    document.getElementById("backSin").innerHTML =  theta.sin()

    document.getElementById("frontCos").innerHTML = "cos"+theta.angle.toString()
    document.getElementById("backCos").innerHTML =  theta.cos()

    document.getElementById("frontTan").innerHTML = "tan"+theta.angle.toString()
    document.getElementById("backTan").innerHTML =  theta.tan()

}

document.getElementById("regenerate").addEventListener("click", function() {
    regenerate()
})