    function abrirBarra() {
        document.getElementById("scriptbarra").style.width = "17%";
        document.getElementById("transicao").style.marginRight = "250px";
    }
    function abrirBarra2() {
        document.getElementById("scriptbarra").style.width = "100%";
        document.getElementById("transicao").style.marginRight = "250px";
    }
    function fecharBarra() {
        document.getElementById("scriptbarra").style.width = "0";
        document.getElementById("transicao").style.marginRight = "0px";
    }
    function spoilerbutton(){
        var elements = document.getElementsByClassName('spoiler');
	    for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "white";
        }
        document.getElementById("mudarimg1").src = "https://cdn.discordapp.com/attachments/390326672853041154/862056615196229632/himikomagica.png";
        document.getElementById("mudarimg2").src = "https://cdn.discordapp.com/attachments/390326672853041154/862056620459556916/himikomagica2.png";
        document.getElementById("mudarimg3").src = "https://cdn.discordapp.com/attachments/390326672853041154/862056714990518302/rouama.png";
    }

    function esconderimg1() {
        document.getElementById("escondeesconde1").style.visibility = "hidden";
    }

    function esconderimg2() {
        document.getElementById("escondeesconde2").style.visibility = "hidden";
    }

    function esconderimg3() {
        document.getElementById("escondeesconde3").style.visibility = "hidden";
    }
        
    function esconderimg4() {
        document.getElementById("escondeesconde4").style.visibility = "hidden";
    }

    function esconderimg5() {
        document.getElementById("escondeesconde5").style.visibility = "hidden";
    }

    function esconderimg6() {
        document.getElementById("escondeesconde6").style.visibility = "hidden";
    }

    function esconderimg7() {
        document.getElementById("escondeesconde7").style.visibility = "hidden";
    }

    function esconderimg8() {
        document.getElementById("escondeesconde8").style.visibility = "hidden";
    }

    function esconderimg9() {
        document.getElementById("escondeesconde9").style.visibility = "hidden";
    }

    function esconderimg0() {
        document.getElementById("escondeesconde0").style.visibility = "hidden";
    }

    function esconderimg11() {
        document.getElementById("escondeesconde11").style.visibility = "hidden";
    }
    
    function esconderimg12() {
        document.getElementById("escondeesconde12").style.visibility = "hidden";
    }

    function alerta() {
        alert("Obrigado por acessar!");
    }