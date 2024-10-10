<template>
  <div v-auto-animate>
    <h1 class="text-center text-xl font-bold mb-4">Más vendidos</h1>
    <div class="flex flex-wrap">
      <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3">
        <UCard
          v-for="product in dataProductsTopSells"
          :key="product.name"
          class="border border-purple-400 transform transition-all duration-300 hover:scale-110 hover:border-2"
          @click="addProductCar(product)"
        >
          <div class="p-2"> 
            <span :style="{ fontSize: product.name.length > 20 ? '10px' : '12px' }">{{ product.name }}</span>
          </div>
          
          <img 
            v-if="product.image" 
            class="w-full h-26 object-cover" 
            :src="product.image" 
          >
          <div class="p-2"> 
            <p class="text-xs font-semibold">
              ${{ product.price.toFixed(2) }}
            </p>
          </div>
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
