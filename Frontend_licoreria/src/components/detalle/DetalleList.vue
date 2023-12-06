<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue"
import http from '@/plugins/axios'
import type { Detalle } from "@/models/detalle";

const props = defineProps<{
    ENDPOINT_API: string
}>()
const ENDPOINT = props.ENDPOINT_API ?? ''
var detalles = ref<Detalle[]>([])

async function getDetalles() {
    detalles.value = await http.get(ENDPOINT).then((response) => response.data)
}

function toEdit(id: number) {
    router.push(`/detalles/editar/${id}`)
}

async function toDelete(id: number) {
    var r = confirm('¿Está seguro que se desea eliminar el detalle de venta?')
    if (r == true) {
        await http.delete(`${ENDPOINT}/${id}`).then(() => getDetalles())
    }
}

onMounted(() => {
    getDetalles()
})
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Detalles de venta</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-12 text-center mt-3 mb-3"></div>
            <h2>Lista detalles de Ventas</h2>
            <div class="col-12">
                <RouterLink to="/detalles/crear">
                    <font-awesome-icon icon="fa-solid fa-plus" />CREAR NUEVO
                    <div class="col-12 text-center mt-3 mb-3"></div>
                    <div class="col-12 text-center mt-3 mb-3"></div>
                </RouterLink>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio por Unidad</th>
                        <th scope="col">Venta</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(detalle, index) in detalles" :key="detalle.id">
                        <td scope="row">{{ index + 1 }}</td>
                        <td>{{ detalle.cantidad }}</td>
                        <td>{{ detalle.precioUnitario }}</td>
                        <td>{{ detalle.venta.id}}</td>
                        <td>{{ detalle.producto.nombre }}</td>
                        <td>
                            <button class="btn text-success" @click="toEdit(detalle.id)">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn text-danger" @click="toDelete(detalle.id)">
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
    background-color: rgba(22, 165, 129, 0.055)
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #631a1a;
}

.btn {
    margin-right: 5px;
}
</style>
@/models/detalle