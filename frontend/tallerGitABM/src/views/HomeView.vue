<template>
  <main class="container">
    <div class="workshop-header">
      <img src="../assets/software-dev.jpg" alt="Taller de Desarrollo de Software" class="workshop-image img-fluid mb-4">
      <div class="overlay"></div>
      <div class="centered-text">
        <h1 class="text-center text-light">¡Hola, futuro desarrollador! Bienvenido a nuestro Taller de Herramientas Colaborativas y ABMs de un sistema</h1>
        <p class="text-center text-light lead">Aquí, las ideas se convierten en código y los errores en valiosas lecciones.</p>
      </div>
    </div>

    <div class="mt-5">
      <h2 class="text-light">Embárcate en nuestra aventura de desarrollo</h2>
      <p class="text-light">Desde códigos elegantes hasta soluciones ingeniosas, este es el punto de partida de la magia del software.</p>
    </div>

    <div class="mt-5">
      <h2 class="text-light">Descubre quién eres en el mundo del código</h2>
      <p class="text-light">¡Hasta localStorage está emocionado por conocerte! (Echa un vistazo a la consola para más sorpresas)</p>
    </div>

    <div class="mt-5">
      <h2 class="text-light">Desarrolla tus habilidades de software con nosotros</h2>
      <p class="text-light">El presente taller pretende cubrir la falta de experiencia con herramientas colaborativas y organización de trabajos en grupo dentro de los estudiantes de sistemas de segundo ciclo. Durante el desarrollo de este taller se pretende presentar GitHub como una alternativa para organizar el trabajo en equipo utilizando un prototipo de un sistema transaccional sencillo pero con una arquitectura similar a la que se espera de un proyecto del calibre en materias de tercer año en adelante.</p>
      <p class="text-light">Aquí tienes un vistazo al programa del taller:</p>
      <ul class="text-light">
        <li>Sesión 1: Introducción y BDD.</li>
        <li>Sesión 2: Sumergiéndonos en el Backend.</li>
        <li>Sesión 3: Conquistando el Frontend.</li>
        <li>Sesión 4: Dando vida con Estilos.</li>
      </ul>
    </div>

    <div class="mt-5">
      <h2 class="text-light">¿Tienes preguntas? ¡Estamos aquí para ayudarte!</h2>
      <p class="text-light">Si tienes alguna duda, sugerencia o simplemente quieres charlar sobre el taller, no dudes en contactarnos a través de los siguientes medios:</p>
    
      <div class="contact-list">
        <div class="contact-item">
          <h3>Carrasco Céspedes Miguel Alejandro - Presidente</h3>
          <p>
            <strong>Cel:</strong> <a>+591 60676400</a><br>
            <strong>Correo:</strong> <a href="mailto:miguel.carrasco@ucb.edu.bo">miguel.carrasco@ucb.edu.bo</a>
          </p>
        </div>
    
        <div class="contact-item">
          <h3>Oscar Campohermoso Berdeja - Vicepresidente</h3>
          <p>
            <strong>Cel:</strong> <a>+591 76281889</a><br>
            <strong>Correo:</strong> <a href="mailto:oscar.campohermoso@ucb.edu.bo">oscar.campohermoso@ucb.edu.bo</a>
          </p>
        </div>
      </div>
    </div>
    

    <footer class="mt-5">
      <p class="text-center text-light">© 2024 Taller de Software. Hecho con ❤️ para futuros desarrolladores.</p>
    </footer>
  </main>
</template>


<script setup>
  console.log(localStorage.getItem('person_id'))
</script>

<style scoped>
  .contact-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .contact-item {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    .contact-item {
      width: 48%;
    }
  }

  .workshop-header {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  
  .workshop-image {
    width: 100%;
    height: auto; /* This maintains the aspect ratio of the image */
    position: relative;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust the transparency as needed */
  }
  

  .centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 80%;
    max-width: 600px; /* Adjust the max-width as needed */
    color: #fff;
  }

  .centered-text h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .centered-text p {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }

  @media (max-width: 767px) {
    .workshop-image {
      display: none; /* Hide the image on smaller screens  but*/
    }

    .centered-text {
      width: 90%; /* Adjust the width for smaller screens */
    }
  }
</style>
