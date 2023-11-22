<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const apellido = ref('')
const cedula_identidad = ref('')
const id = router.currentRoute.value.params['id']

async function editarCliente() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      precio: apellido.value,
      idCategoria: cedula_identidad.value 
    })
    .then(() => router.push('/clientes'))
    .catch((error) => {
      
      console.error('Error al editar el cliente:', error)
    })
}

async function getCliente() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ;(nombre.value = response.data.nombre), (apellido.value = response.data.apellido), 
    (cedula_identidad.value = response.data.cedulaIdentidad)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getCliente()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Categorias</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Editar Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarCliente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="apellido"
            placeholder="Apellido"
            required
          />
          <label for="apellido">Apellido</label>
        </div>
        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            v-model="cedula_identidad"
            placeholder="cedula_identidad"
            required
          />
          <label for="cedula_identidad">Cedula de Identidad</label>
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
