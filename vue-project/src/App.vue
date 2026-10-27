<template>
  <div style = "text-align:center; margin-top:50px;">
    <h2>Ejercicio 1: Vue 3 Logs</h2>
    <button @click="contador++">Clics: {{ contador }}</button>
    <button @click="mostrar = !mostrar" style="margin-left:10px;"> {{ mostrar ? 'Ocultar' : 'Mostrar' }} componente</button>
  </div>
</template>

<script setup>
import {onMounted, onUpdated, onUnmounted} from 'vue'
const contador = ref(0)
const mostrar = ref(true)

onMounted(() => {console.log('montado')});
onUpdated(() => {console.log('actualizado')});
onUnmounted(() => {console.log('desmontado')});
</script>