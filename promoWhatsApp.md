---
layout: page
title: Mensaje promo GdeE
permalink: /promoWhatsApp/
gallery1: /img/NoMoreSpamGuideGmail/
gallery2: /img/NoMoreSpamGuideOutlook/
redirect_from:
---
<!-- The text field -->
<input type="text" value="Hello World" id="myInput">
Hola! Te gustaría saber qué oportunidades extracurriculares tienes estudiando física? 👩‍💼👨‍💼 Tienes ganas de conocer otrxs estudiantes de España y del mundo?  Eso y mucho más perseguimos en el Grupo de Estudiantes (GdeE) de la RSEF. Yo ya formo parte del GdeE, he participado en algunas actividades y es muy recomendable! E incluso podemos montar eventos muy interesantes en nuestra universidad! ¿Te animas a unirte? 🚀 Échale un ojo a: [https://youtu.be/B327Xucbb30](https://youtu.be/B327Xucbb30)

Y a nuestras redes:

Twitter [https://twitter.com/estudiantesrsef?lang=ca](https://twitter.com/estudiantesrsef?lang=ca),

Instagram [https://www.instagram.com/estudiantesrsef/](https://www.instagram.com/estudiantesrsef/)

Y web: [https://estudiantes.rsef.es/](https://estudiantes.rsef.es/)
</input>

<!-- The button used to copy the text -->
<button onclick="myFunction()">Copiar al portapapeles</button>

<script>
function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
</script>
