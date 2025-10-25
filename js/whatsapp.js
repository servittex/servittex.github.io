window.addEventListener("scroll", function(){
    var whatsapp = document.querySelector(".icono_whatsapp");
    whatsapp.classList.toggle("aparecer_icono_whatsapp",window.scrollY>20);
    whatsapp.classList.toggle("desaparecer_icono_whatsapp",window.scrollY>1100);
  });