let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y estudio artículos sobre programación por curiosidad, pero soy Ingeniera Bioquímica, mi sueño es trabajar durante el día en un laboratorio y por las noches creando páginas web, que tengas una muy bonita vida.💛.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
