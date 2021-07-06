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
        document.getElementById("mudarimg1").src = "/images/himikomagica.png";
        document.getElementById("mudarimg2").src = "/images/himikomagica2.png";
        document.getElementById("mudarimg3").src = "/images/rouama.png";
    }
    function alerta() {
        alert("Obrigado por acessar!");
      }