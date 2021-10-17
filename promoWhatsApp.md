---
layout: page
title: Promo WhatsApp GdeE
permalink: /promoWhatsApp/
gallery1: /img/NoMoreSpamGuideGmail/
gallery2: /img/NoMoreSpamGuideOutlook/
redirect_from:
---
<!-- The text field -->
<!--
<textarea readonly id="myInput">Hola! Te gustaría saber qué oportunidades extracurriculares tienes estudiando física? 👩‍💼👨‍💼 Tienes ganas de conocer otrxs estudiantes de España y del mundo?  Eso y mucho más perseguimos en el Grupo de Estudiantes (GdeE) de la RSEF. Yo ya formo parte del GdeE, he participado en algunas actividades y es muy recomendable! E incluso podemos montar eventos muy interesantes en nuestra universidad! ¿Te animas a unirte? 🚀 Échale un ojo a este VÍDEO: https://youtu.be/B327Xucbb30](https://youtu.be/B327Xucbb30). Y a nuestras redes:<br>Twitter [https://twitter.com/estudiantesrsef?lang=ca](https://twitter.com/estudiantesrsef?lang=ca)<br>Instagram [https://www.instagram.com/estudiantesrsef/](https://www.instagram.com/estudiantesrsef/)<br>Y web: [https://estudiantes.rsef.es/](https://estudiantes.rsef.es/)</textarea>

<!-- The button used to copy the text
<button onclick="myFunction()" class="btn-large waves-effect waves-light">Copiar al portapapeles</button>
-->
<script>
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.content);

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}
</script>



<script>
function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
</script>

<p class="right-side-header" title="Copy Text" id="promo" onclick="copyElementText(this.id)">
Hola! Te gustaría saber qué oportunidades extracurriculares tienes estudiando física? 👩‍💼👨‍💼 Tienes ganas de conocer otrxs estudiantes de España y del mundo?  Eso y mucho más perseguimos en el Grupo de Estudiantes (GdeE) de la RSEF. Yo ya formo parte del GdeE, he participado en algunas actividades y es muy recomendable! E incluso podemos montar eventos muy interesantes en nuestra universidad! ¿Te animas a unirte? 🚀 <br>Échale un ojo a este VÍDEO: https://youtu.be/B327Xucbb30 <br>Y a nuestras redes:<br>Twitter https://twitter.com/estudiantesrsef <br>Instagram https://www.instagram.com/estudiantesrsef/ <br>Y web: https://estudiantes.rsef.es/
</p>

<button onclick="copyElementText('promo')" class="btn-large waves-effect waves-light">Copiar al portapapeles</button>
