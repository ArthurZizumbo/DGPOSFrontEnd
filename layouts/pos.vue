<template>
  <div class="h-screen flex flex-col">
    <PageRootNavbarComponent />
    <!-- <ProductComponentTopSellRanks class="top-sells" /> -->
    <div class="">
      <PageRootSidebarCategories
        @item-selected="onItemSelected"
      />
      <div
        v-if="selectedItems"
        class=" p-4 overflow-hidden products-category"
      >
        <ProductComponentProductCards :category="selectedItems" />
      </div>
    </div>
    <TicketComponentSidebarOrder class="sidebar-order" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedItems = ref(null); // Objeto para almacenar el último ítem seleccionado

const onItemSelected = (label) => {
  selectedItems.value = label; // Reemplazar el ítem seleccionado
};
</script>

<style scoped>

.products-category {
  margin-left: 14%;
  margin-top: 6%;
  width: 60%;
}

.top-sells {
  margin-left: 15.2%;
  width: 60%;
}

.sidebar-order {
  margin-top:14%;
  margin-left: 74%;
  width: 26%;
  height: 86vh; /* Altura completa de la pantalla */
  overflow-y: auto; /* Permite hacer scroll si el contenido es más largo que la pantalla */
}
</style>

