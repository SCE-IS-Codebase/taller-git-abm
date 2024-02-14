<template>
  <main class="container">
    <div class="about-content mt-5">
      <h1 class="text-center text-light">¡Descubre Nuestra Historia!</h1>
      <p class="text-center text-light lead">Donde el código se encuentra con la diversión.</p>
    </div>

    <div class="about-content mt-5">
      <h2 class="text-light">Nuestras Experiencias Anteriores</h2>
      <p class="text-light">Hemos recorrido un camino lleno de risas y desafíos en el mundo del desarrollo de software. Desde encontrar soluciones ingeniosas hasta lidiar con errores tan extraños que podríamos escribir un libro de comedia sobre ellos.</p>
      <p class="text-light">Una vez construimos una aplicación que traduce automáticamente los errores de código a chistes. Resultado: nuestro código nunca ha sido tan gracioso, pero tampoco tan funcional.</p>
      <p class="text-light">Otro hito memorable fue cuando nuestro desarrollador principal solucionó un bug mientras hacía malabares con una taza de café y un teclado. ¡Quién dijo que la multitarea no es para los desarrolladores!</p>
    </div>

    <div class="mt-5">
      <h2 class="text-light">Antiguos Participantes</h2>
      <div class="participant-list">
        <!-- Imagen circular para supuestos participantes antiguos -->
        <div class="participant">
          <img src="../assets/participant1.jpeg" alt="Participante Antiguo 1" class="rounded-circle participant-img">
          <p class="text-light">¡Conoce a Juan, nuestro primer "maestro del código"! Él escribía código incluso en sus sueños y siempre tenía la solución perfecta para cualquier problema.</p>
        </div>
        
        <!-- Otros participantes antiguos -->
        <!-- Agrega más participantes antiguos con sus imágenes y descripciones según sea necesario -->
      </div>
    </div>

    <footer class="mt-5">
      <p class="text-center text-light">© 2024 Taller de Software. Hecho con ❤️ para futuros desarrolladores.</p>
    </footer>
  </main>
</template>

<style scoped>
  .about-content {
    margin-top: 5rem;
  }

  .about-content h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .about-content p {
    font-size: 1.25rem;
    margin-bottom: 40px;
  }

  .participant-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .participant {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .participant-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  footer {
    margin-top: 3rem;
  }
</style>
