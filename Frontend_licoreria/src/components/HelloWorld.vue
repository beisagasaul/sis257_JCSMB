<template>
  <div class="greetings">
    <h1 class="neon-text">{{ msg }}</h1>
    <h3>
      <span class="neon-link">Licoreria</span>
      <span class="neon-link">Sis257</span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '¡Hola, sis257!'
    };
  }
};
</script>

<style scoped>
.greetings {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #e600ff;
  padding: 1rem;
}

.neon-text {
  font-size: 2rem;
  color: #e040ff;
  text-shadow: 0 0 10px #e600ff, 0 0 20px #e600ff, 0 0 30px #e600ff;
  margin-bottom: 2rem;
}

.neon-link {
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

</style>
