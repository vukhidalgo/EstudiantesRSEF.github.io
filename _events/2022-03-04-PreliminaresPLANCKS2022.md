---
layout: event
categories: eventos-internacionales
title:  "Preliminares de PLANCKS 2022"
startingdate: 2022-03-04
endingdate:
place: Toda España
locandina: /img/eventos/2022-PLANCKS/LogoPrelis22LogoGdeEv3NoFondopng.png
cover: /img/eventos/2022-PLANCKS/LogoPrelis22v3_40003000.png
gallery:
site: /PreliminaresPLANCKS2022/
ranking: https://drive.google.com/file/d/1EwHQMn3ToKZKP-gpT1EyS-rrCHyS5ZZv/view?usp=sharing
exam: https://drive.google.com/drive/folders/17blBbgvKqz17WHktJYhnanSugrKsyZYD?usp=sharing
comm: https://estudiantes.rsef.es/PreliminaresPLANCKS/ComitesOrganizadorAcademico/2022/
---

<div class="container">
  <div class="section">

<!-- HEADER -->
    <img class="materialboxed" width="100%" src="/img/eventos/2022-PLANCKS/Versión definitiva.png">
    
<!-- COUNTDOWN -->
    <div class="row">  
      <p style="text-align: justify;">Las inscripciones para las Preliminares de PLANCKS 2022 se abrirán en...</p>
      <h4 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h4>
      
<!-- INTRO -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? Vuelven en su quinta edición las <strong>Preliminares de PLANCKS</strong> y esta vez... ¡en formato presencial! Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>
      <p style="text-align: justify;">Por cierto, ¿habíamos mencionado que hace cinco años fue un equipo español el vencedor de la final internacional de PLANCKS? Hagamos que este año el premio vuelva a casa.</p>
    </div>
      
<!-- BUTTONS -->
    <div class="row center">
      <a href="{{ site.url }}/PreliminaresPLANCKS2022/" id="prelis-button" class="btn-large waves-effect waves-light" style="background-color: rgb(41, 49, 132);">Ir a la página de PLANCKS</a>
    </div>
  </div>
</div>      


<!-- TIMER SCRIPT -->
<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 26, 2022 23:59:59").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "INSCRIPCIONES CERRADAS";
    }
  }, 1000);
</script>
