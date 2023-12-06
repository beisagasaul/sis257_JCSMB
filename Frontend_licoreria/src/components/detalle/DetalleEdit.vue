
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const cantidad = ref('')
const precioUnitario = ref('')
const idVenta = ref('')
const idProducto = ref('')

const id = router.currentRoute.value.params['id']

async function editarDetallesVenta() {
    await http
        .patch(`${ENDPOINT}/${id}`, {
            cantidad: cantidad.value,
            precioUnitario: precioUnitario.value,
            idVenta: idVenta.value,
            idProducto: idProducto.value
        })
        .then(() => router.push('/detallesVentas'))
        .catch((error) => {

            console.error('Error al editar el detalle de venta:', error)
        })
}

async function getDetallesVenta() {
    await http.get(`${ENDPOINT}/${id}`).then((response) => {
        ; (cantidad.value = response.data.cantidad), (precioUnitario.value = response.data.precioUnitario),
            (idVenta.value = response.data.idVenta), (idProducto.value = response.data.idProducto)
    })
}

function goBack() {
    router.go(-1)
}

onMounted(() => {
    getDetallesVenta()
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
                    <RouterLink to="/detallesVentas">Detalles de Venta</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Editar</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-12 text-center mt-3 mb-3"></div>
            <h2>Editar Detalles de Venta</h2>
        </div>

        <div class="row">
            <form @submit.prevent="editarDetallesVenta">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" v-model="cantidad" placeholder="Cantidad" required />
                    <label for="cantidad">Cantidad</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" v-model="precioUnitario" placeholder="PrecioUnitario"
                        required />
                    <label for="precioUnitario">PrecioUnitario</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" v-model="idVenta" placeholder="IdVenta"
                        required />
                    <label for="idVenta">Venta</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" v-model="idProducto" placeholder="IdProducto"
                        required />
                    <label for="idProducto">IdProducto</label>
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
