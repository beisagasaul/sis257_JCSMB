<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const totalVenta = ref('')
const fechaVenta = ref('')
const idCliente = ref('')
const id = router.currentRoute.value.params['id']

async function editarVenta() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      totalVenta: totalVenta.value,
      fechaVenta: fechaVenta.value,
      idCliente: idCliente.value
    })
    .then(() => router.push('/ventas'))
    .catch((error) => {

      console.error('Error al editar la venta:', error)
    })
}

async function getVenta() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    ; (totalVenta.value = response.data.totalVenta), (fechaVenta.value = response.data.fechaVenta),
      (idCliente.value = response.data.cliente.id)
  })
}

function goBack() {
  router.go(-1)
}

onMounted(() => {
  getVenta()
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/clientes">Ventas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3"></div>
      <h2>Editar Venta</h2>
    </div>

    <div class="row">
      <form @submit.prevent="editarVenta">
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="totalVenta" placeholder="TotalVenta" required />
          <label for="totalVenta">Total de Venta</label>
        </div>
        <div class="form-floating">
          <input type="date" class="form-control" v-model="fechaVenta" placeholder="FechaVenta" required />
          <label for="fechaVenta">Fecha de Venta</label>
        </div>
        <div class="form-floating">
          <input type="number" class="form-control" v-model="idCliente" placeholder="IdCliente" required />
          <label for="idCliente">Id de Cliente</label>
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
