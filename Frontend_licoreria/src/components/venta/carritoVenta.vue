<template>
    <div class="container">
      <h2>Registro de Venta</h2>
      <form @submit.prevent="registrarVenta">
        <div class="mb-3">
          <label for="clienteSelect" class="form-label">Seleccionar Cliente:</label>
          <select v-model="idCliente" class="form-select" id="clienteSelect" required>
            <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">{{ cliente.nombre }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="productoSelect" class="form-label">Seleccionar Producto:</label>
          <select v-model="idProducto" class="form-select" id="productoSelect" required>
            <option v-for="producto in productos" :key="producto.id" :value="producto.id">{{ producto.nombre }}</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="cantidadInput" class="form-label">Cantidad:</label>
          <input type="number" v-model="cantidad" class="form-control" id="cantidadInput" required>
        </div>
        <button type="submit" class="btn btn-primary">Registrar Venta</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { Cliente, Producto, Venta, DetallesVenta } from '@/types'; // Importa las interfaces desde el archivo de definiciones de tipos
  
  const idCliente = ref<number>(0);
  const idProducto = ref<number>(0);
  const cantidad = ref<number>(0);
  
  // Simulación de datos de clientes y productos (deberías obtenerlos desde tu API)
  const clientes: Cliente[] = [
    { id: 1, nombre: 'Cliente 1', apellido: 'Apellido 1', cedulaIdentidad: '1234567', fechaCreacion: new Date(), fechaModificacion: new Date() },
    { id: 2, nombre: 'Cliente 2', apellido: 'Apellido 2', cedulaIdentidad: '7654321', fechaCreacion: new Date(), fechaModificacion: new Date() }
  ];
  
  const productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 100, idCategoria: 1 },
    { id: 2, nombre: 'Producto 2', precio: 150, idCategoria: 2 }
  ];
  
  function registrarVenta() {
    const venta: Venta = {
      id: 0, // El ID se generará en el servidor
      totalVenta: 0, // Aquí deberías calcular el total de la venta
      fechaVenta: new Date(),
      idCliente: idCliente.value,
      detalles: [
        {
          id: 0, // El ID se generará en el servidor
          cantidad: cantidad.value,
          precioUnitario: 0, // Aquí deberías obtener el precio del producto desde tu API
          total: 0, // Aquí deberías calcular el total de esta línea de venta
          idVenta: 0, // El ID de la venta se asignará después de crearla
          idProducto: idProducto.value
        }
      ]
    };
  
    // Aquí deberías enviar el objeto de venta a tu API para su registro
  }
  </script>