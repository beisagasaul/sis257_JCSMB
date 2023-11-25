<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Producto } from '@/models/producto';
import { toUnicode } from 'punycode';

const props = defineProps<{
    ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
var productos = ref<Producto[]>([])

async function getProductos() {
    productos.value = await http.get(ENDPOINT).then((response) => response.data)
}

onMounted(() => {
    getProductos()
})
</script>

<template>
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <RouterLink to="/">Inicio</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">Productos</li>
            </ol>
        </nav>

        <div class="row">
            <div class="col-12 text-center mt-3 mb-3"></div>
            <h2>Lista de Productos</h2>
        </div>

        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Fecha De Creacion</th>
                        <th scope="col">Fecha De Modificacion</th>
                        <th scope="col">Id Categoria</th>
                        <th scope="col">Nombre De Categoria</th>
                        <th scope="col">Venta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, index) in productos.values()" :key="producto.idCategoria">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ producto.nombre }}</td>
                        <td>{{ producto.precio }}</td>
                        <td>{{ producto.fechaCreacion }}</td>
                        <td>{{ producto.fechaModificacion }}</td>
                        <td>{{ producto.categoria.id }}</td>
                        <td>{{ producto.categoria.nombre }}</td>
                        <td>
                            <button class="btn btn-primary" @click="toUnicode(producto.id)">
                                <i class="fas fa-shopping-cart"></i> vender
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
