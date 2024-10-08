<template>
  <div v-auto-animate>
    <h1 class="text-center text-2xl font-bold mb-4">Más vendidos</h1>
    <div class="flex flex-wrap">
      <div
        class="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3"
      >
        <UCard
          v-for="product in dataProductsTopSells"
          :key="product.name"
          class="border border-purple-400 transform transition-all duration-300 hover:scale-110 hover:border-2"
          @click="addProductCar(product)"
        >
          <img
            v-if="product.image"
            class="h-15 object-contain"
            :src="product.image"
          >

          <template #footer>
            <div class="flex flex-col items-center text-xs">
              <span>{{ product.name }}</span>
              <p class="text-xs font-semibold">
                ${{ product.price.toFixed(2) }}
              </p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { carritoStore } from '@/stores/carritoCompras';
const storeCarrito = carritoStore();
const { carrito } = storeToRefs(storeCarrito);

const addProductCar = (product) => {
  storeCarrito.actualizarCarrito(product, 1);
  console.log('updated Car', carrito.value);
};

const dataProductsTopSells = useTopSellsProducts();
</script>
