<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/categorias">Categoría</router-link>
        </li>
        <div class="col-12 text-center mt-3 mb-3"></div>
        <h2 class="breadcrumb-item active" aria-current="page">Editar Categoría</h2>
      </ol>
    </nav>

    <div class="row">
      <form @submit.prevent="editarCategoria">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="descripcion" placeholder="Descripcion" required />
          <label for="descripcion">Descripción</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <i class="fas fa-floppy-disk"></i> Guardar
          </button>
        </div>
      </form>
    </div>

    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/plugins/axios'

export default {
  props: {
    ENDPOINT_API: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const ENDPOINT = props.ENDPOINT_API
    const nombre = ref('')
    const descripcion = ref('')
    const id = router.currentRoute.value.params['id']

    async function editarCategoria() {
      await http.patch(`${ENDPOINT}/${id}`, {
        nombre: nombre.value,
        descripcion: descripcion.value,
      })
      router.push('/categorias')
    }

    async function getCategoria() {
      await http.get(`${ENDPOINT}/${id}`).then((response) => {
        nombre.value = response.data.nombre,
        descripcion.value = response.data.descripcion
      })
    }

    function goBack() {
      router.go(-1)
    }

    getCategoria()

    return {
      nombre,descripcion,
      editarCategoria,
      goBack
    }
  }
}
</script>

<style></style>