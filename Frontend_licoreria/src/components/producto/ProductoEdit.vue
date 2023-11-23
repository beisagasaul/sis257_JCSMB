<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
import http from '@/plugins/axios';
import { RouterLink } from 'vue-router';
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API ?? '';
const nombre = ref('');
const precio = ref('');
const idCategoria = ref('');
const id = router.currentRoute.value.params['id'];

async function editarProducto() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      precio: precio.value,
      idCategoria: idCategoria.value 
    })
    .then(() => router.push('/productos'))
    .catch((error) => {
      
      console.error('Error al editar el producto:', error)
    })
}

async function getProducto() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    (nombre.value = response.data.nombre),
    (precio.value = response.data.precio),
    (idCategoria.value = response.data.categoria.id)
  })
}

function goBack() {
  router.go(-1);
}

onMounted(() => {
  getProducto();
});
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3"></div>
      <h2>Editar Producto</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarProducto">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="precio"
            placeholder="Precio"
            required
          />
          <label for="Precio">Precio</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            v-model="idCategoria"
            placeholder="idCategoria"
            required
          />
          <label for="idCategoria">id de categoria</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Guardar
          </button>
        </div>
      </form>
    </div>
    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style></style>
