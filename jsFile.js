$(document).ready(function(){  
    const patron = [2, 4, 4, 2, 1, 3, 1, 2, 4, 3];
    var auxPatron = [];

    function checkPatron() {
        var goodPatron = true;
        for (var i = 0; i < auxPatron.length && goodPatron; i++) {
            goodPatron = patron[i] == auxPatron[i]
        }

        if (goodPatron && i == patron.length) {
            $("#b1").hide(500)
            $("#b2").hide(500)
            $("#b3").hide(500)
            $("#b4").hide(500)

            $("#exito").show(500)
            
            $("#panelExito p:nth-of-type(1)").text("Espero que tengas a mano un mapa porque te va a hacer falta")
            $("#panelExito p:nth-of-type(2)").text("48°52'12.4\"N 2°46'48.1\"E")
            
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
