<template>
  <div class="welcome-container">
    <video autoplay loop muted class="background-video">
      <source :src="'videos/videoplaybak.mp4'" type="video/mp4">
    </video>
    <div class="content-overlay">
      <h1 class="welcome-title neon-lilac">¡Bienvenido a nuestra web Licoreria!</h1>
      <p class="welcome-description neon-lilac">.</p>

      <div class="series-buttons">
        <router-link to="/categorias" class="series-button">Ver todas las categorías</router-link>
        <router-link to="/categorias/crear" class="series-button">Crear nueva categoría</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos existentes */
</style>


<style scoped>
.welcome-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content-overlay {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #fff;
}

.welcome-title {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.welcome-description {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.neon-lilac {
  color: #730988;
  text-shadow: 0 0 10px #e040ff, 0 0 20px #40ff4a, 0 0 30px #e040ff, 0 0 40px #e040ff, 0 0 50px #2f2231, 0 0 60px #e040ff, 0 0 70px #e040ff;
}

.series-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.series-button {
  margin: 0 1rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #e040ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.series-button:hover {
  background-color: #d81b60;
}
</style>
