$(document).ready(function () {
    /*Button functionality */
    $("#info").hide();  //want to initially hide info
    $("#button").click(function () {
        $("#info").toggle("slow");
    });

    /* Canvas drawing */
    var c = document.getElementById('2canvas');
    const width = 350;
    const height = 400;
    var ctx = c.getContext('2d');


    /* CIRCLE */

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(40,120,20,0,2*Math.PI);
    ctx.closePath();
    ctx.fill();

    /* House containing the rest of the elements */

    function drawHouse() {
    //rect1
    ctx.fillStyle = 'rosybrown';
    ctx.fillRect(130, 250, 85, 100);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(130, 250, 85, 100);

    //rect2
    ctx.fillStyle = 'saddlebrown';
    ctx.fillRect(150, 310, 25, 40);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(150, 310, 25, 40);

    //triangle
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.moveTo(130, 250);
    ctx.lineTo(170, 175);
    ctx.lineTo(215, 250);
    ctx.lineTo(130, 250);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    //ellipse
    ctx.fillStyle = "rgba(100, 100, 255, 0.5)";
    ctx.beginPath();
    //ctx.arc(190,285,10,0,2*Math.PI);
    ctx.ellipse(190, 285, 15, 10, 0, 0, 2 * Math.PI);
    ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
    ctx.lineWidth = 5;
    ctx.stroke();
    //ctx.strokeOpacit
    ctx.closePath();
    ctx.fill();

    }
    drawHouse();


    /* Interaction  CANVAS */

    //hover
    function hover(){
        var c = document.getElementById('2canvas');
        const width = 350;
        const height = 400;
        var ctx = c.getContext('2d');

        //change
        $('#2canvas').hover(function () {

            //circle
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(40, 120, 20, 0, 2 * Math.PI);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.closePath();
            ctx.fill();
        },
            //change back
            function(){
                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.arc(40,120,20,0,2*Math.PI);
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.closePath();
                ctx.fill();

        });
    }
    hover();



    //circle interaction
    function changeCircle(){
        var c = document.getElementById('2canvas');
        const width = 350;
        const height = 400;
        var ctx = c.getContext('2d');
        var big = false;
        c.addEventListener("click", (event) => {
            big = !big;
            if (big) {
                ctx.clearRect(0, 50, 350, 400);
                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.arc(40, 120, 35, 0, 2 * Math.PI);
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.closePath();
                ctx.fill();

                drawHouse();

            }

            else{
                ctx.clearRect(0, 50, 350, 400);
                ctx.fillStyle = 'yellow';
                ctx.beginPath();
                ctx.arc(40, 120, 20, 0, 2 * Math.PI);
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.closePath();
                ctx.fill();

                drawHouse();
            }

        });
    }

    changeCircle();

});
