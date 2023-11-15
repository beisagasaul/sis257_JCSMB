<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
<script setup lang="ts">
import type { Categoria } from "@/models/categoria";
import router from "@/router";
import { onMounted, ref } from "vue"
import http from '@/plugins/axios'

const props = defineProps<{
  ENDPOINT_API: string
}>()
const ENDPOINT = props.ENDPOINT_API ?? ''
var categorias = ref<Categoria[]>([])

async function getCategorias() {
  categorias.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
  router.push(`/categorias/editar/${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la categoria?')
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getCategorias())
  }
}

onMounted(() => {
  getCategorias()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Categorias</li>
      </ol>
    </nav>

    <div class="row">
      <h2>Lista de CAtegorias</h2>
      <div class="col-12">
        <RouterLink to="/categorias/crear">
          <font-awesome-icon icon="fa-solid fa-plus" />Crear Nuevo
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">nombre</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(categoria, index) in categorias" :key="categoria.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ categoria.nombre }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(categoria.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(categoria.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table {
  background-color: #661212;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #631a1a;
}

.btn {
  margin-right: 5px;
}
</style>
