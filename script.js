// Apresentação
a = ["Olá, meu nome é Ana Paula", "Sou desenvolvedora de sistemas", "Estou cursando Engenharia de Software", "Aqui você pode me conhecer um pouco mais", "Seja bem-vindo e sinta-se a vontade para visitar minhas redes"];

alter('text2', a);

function alter(id, texto, infinite=false, i=0)
{
  time  = 2;
  len = texto[i].length + 1;
  edit  = document.getElementById(id);
  edit.innerHTML  = texto[i] + "!";
  i++;
  edit.style.width = len+"ch";
  edit.style.animation  = "typing "+time+"s steps("+len+") infinite alternate, effect .5s step-end infinite alternate";
  time  *= 1000;
  if(infinite)
  {
    i = (i >= texto.length)? 0 : i;
    setTimeout(function(){  alter(id, texto, infinite, i);  }, time * 2);
  }
  else
  {
    if(i >= texto.length)  setTimeout(function(){  edit.style.animation  = "effect .5s step-end infinite alternate"; }, time);
    else  setTimeout(function(){  alter(id, texto, infinite, i);  }, time * 2);
  }
}

// Linha do tempo
(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

