<template>
  <div v-auto-animate>
    
    <div class="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-3" >
      <UCard
        v-for="product in filteredProducts"
        :key="product.name"
        class="border border-orange-400 transform transition-all duration-300 hover:scale-110 hover:border-2"
        :ui="{
          base: '',
          background: 'bg-white dark:bg-gray-900',
          divide: 'divide-y divide-gray-200 dark:divide-gray-800',
          ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
          rounded: 'rounded-lg',
          shadow: 'shadow',
          body: {
            base: '',
            background: '',
            padding: 'px-4 py-5 sm:p-6',
          },
          header: {
            base: '',
            background: '',
            padding: 'px-4 py-5 sm:px-6',
          },
          footer: {
            base: '',
            background: '',
            padding: 'px-4 py-4 sm:px-6',
          },
        }"
        @click="addProduct(product)"
      >
        <img
          v-if="product.image"
          class="w-full h-26 object-cover"
          :src="product.image"
        >
        <template #header>
          <div class="flex flex-col items-center mt-auto">
            <span>{{ product.name }}</span>
          </div>
        </template>

        <template #footer>
          <div class="flex flex-col items-center mt-auto">
            <p class="text-lg font-semibold">${{ product.price.toFixed(2) }}</p>
          </div>
        </template>
      </UCard>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const dataProducts = useProductsByBrands();

const filteredProducts = computed(() => {
  const categoryData = dataProducts.find(
    (cat) => cat.category === props.category,
  );
  return categoryData ? categoryData.products : [];
});

console.log('filteredProducts', filteredProducts.value);

const addProduct = (product) => {
  console.log(product);
};
</script>

<style scoped>

</style>
