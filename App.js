// var 
var submit = document.querySelector(".polyItem2");
let line = document.getElementById("js-input");
window.onload = generate;

    function generate(){
        var canvas = document.getElementById('hexagon');
        var ctx = canvas.getContext('2d');    
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // hexagon
        console.log(line);
        var numberOfSides = line.value;
        size = 120;
        Xcenter = 120;
        Ycenter = 125;
        
        ctx.beginPath();
        ctx.moveTo(Xcenter + size * Math.cos(0), Ycenter + size * Math.sin(0));
        
        for (var i = 1; i <= numberOfSides; i += 1) {
            ctx.lineTo(Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }
        
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    // line.value = 10;
    submit.addEventListener('submit', (generate));
