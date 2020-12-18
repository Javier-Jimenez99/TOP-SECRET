$(document).ready(function(){  
    const patron = [2, 4, 4, 3, 2, 4, 3];
    var auxPatron = [];

    function checkPatron() {
        var goodPatron = true;
        for (var i = 0; i < auxPatron.length && goodPatron; i++) {
            goodPatron = patron[i] == auxPatron[i]
        }

        if (goodPatron && i == patron.length) {

            $("#exito").show(500)
            
            //$("#panelExito p").text("De tus últimas 20 publicaciones de Instagram 15 son sobre este tema.")
            
            $("a[href^='https://www.google.com/maps/place/Disneyland/@33.8120918,-117.9189742,15z/data=!4m5!3m4!1s0x0:0x2ef62f8418225cfa!8m2!3d33.8120918!4d-117.9189742']").attr('target','_blank');

            $("button").prop('disabled', true);
            auxPatron = [];
        }
        
        if (!goodPatron)
        {
            auxPatron = [];
            $("#errorPanel").show();
            $("#errorPanel").fadeOut(1000);
        }

    }

    $("#b1").click(function(){
        auxPatron.push(1);
        checkPatron();
    })

    $("#b2").click(function(){
    auxPatron.push(2);
    checkPatron();
    })

    $("#b3").click(function(){
    auxPatron.push(3);
    checkPatron();
    })

    $("#b4").click(function(){
    auxPatron.push(4);
    checkPatron();
    });
});
