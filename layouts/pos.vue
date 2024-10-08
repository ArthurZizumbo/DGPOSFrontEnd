<template>
  <div class="h-screen flex flex-col">
    <PageRootNavbarComponent />
    <ProductComponentTopSellRanks class="top-sells" />
    <div class="flex flex-grow">
      <PageRootSidebarCategories
        class="w-sidebar bg-gray-200"
        @item-selected="onItemSelected"
      />
      <main
        v-if="selectedItems"
        class="flex-grow p-4 overflow-hidden products-category"
      >
        <ProductComponentProductCards :category="selectedItems" />
      </main>
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
.w-sidebar {
  width: 20%;
}

.products-category {
  margin-left: 20%;
  width: 60%;
}

.top-sells {
  margin-left: 20.2%;
  width: 60%;
}

.sidebar-order {
  margin-left: 40.4%;
  width: 18%;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh; /* Altura completa de la pantalla */
  overflow-y: auto; /* Permite hacer scroll si el contenido es más largo que la pantalla */
}
</style>
