<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'


const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const totalVenta = ref('')
const fechaVenta = ref('')
const idCliente = ref('')

async function crearVenta() {
  await http
  .post(ENDPOINT, { totalVenta: totalVenta.value, fechaVenta: fechaVenta.value, idCliente: idCliente.value })
  .then(() => router.push('/ventas'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/ventas">Ventas</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3"></div>
      <h2>Crear Nuevo Cliente</h2>
    </div>

    <div class="row">
      <form @submit.prevent="crearVenta">
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="totalVenta" placeholder="TotalVenta" required />
          <label for="totalVenta">Total de Venta</label>
        </div>
        <div class="form-floating mb-3">
          <input type="date" class="form-control" v-model="fechaVenta" placeholder="FechaVenta" required />
          <label for="fechaVenta">Fecha de Venta</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="idCliente" placeholder="IdCliente" required />
          <label for="idCliente">Cliente</label>
          
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            Crear
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
