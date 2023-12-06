<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const cantidad = ref(0)
const precioUnitario = ref(0)
const idVenta = ref(0)
const idProducto = ref(0)
const router = useRouter()

async function crearDetalleVenta() {
    try {
        await http.post(ENDPOINT, {
            cantidad: cantidad.value,
            precioUnitario: precioUnitario.value,
            idVenta: idVenta.value,
            idProducto: idProducto.value
        })
        router.push('/detallesVentas')
    } catch (error) {
        console.error('Error al crear el detalle de venta:', error)
    }
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
                    <router-link to="/">Inicio</router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link to="/detallesVentas">Detalles de Venta</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Crear</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-12 text-center mt-3 mb-3">
                <h2>Crear Nuevo Detalle de Venta</h2>
            </div>
        </div>

        <div class="row">
            <form @submit.prevent="crearDetalleVenta">
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="cantidad" placeholder="Cantidad" required />
                    <label for="cantidad">Cantidad</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="precioUnitario" placeholder="PrecioUnitario" required />
                    <label for="precioUnitario">Precio por Unidad</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="idProducto" placeholder="IdProducto" required />
                    <label for="idProducto">Producto</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="number" class="form-control" v-model="idVenta" placeholder="IdVenta" required />
                    <label for="idVenta">Venta</label>
                </div>
                <div class="text-center mt-3">
                    <button type="submit" class="btn btn-primary btn-lg">Crear</button>
                </div>
            </form>
        </div>
        <div class="text-left">
            <button class="btn btn-link" @click="goBack">Volver</button>
        </div>
    </div>
</template>

<style></style>