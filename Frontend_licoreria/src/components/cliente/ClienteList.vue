<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Cliente } from '@/models/cliente';

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var clientes = ref<Cliente[]>([])

async function getClientes() {
  clientes.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/clientes/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar el cliente?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getClientes())
  }
}

onMounted(() => {
  getClientes()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Clientes</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de clientes</h2>
      <div class="col-12">
        <RouterLink to="/clientes/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">apellido</th>
            <th scope="col">Cedula de Idemtidad</th>
            <th scope="col">Fecha De Creacion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes.values()" :key="cliente.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellido }}</td>
            <td>{{ cliente.cedula_identidad }}</td>
            <td>{{ cliente.fechaModificacion }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(cliente.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(cliente.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
