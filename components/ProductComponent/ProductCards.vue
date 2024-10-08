<template>
  <div v-auto-animate class="flex flex-wrap">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
    >
      <UCard
        v-for="product in filteredProducts"
        :key="product.name"
        class="border border-orange-400 transform transition-all duration-300 hover:scale-110 hover:border-2"
        @click="openProduct(product)"
      >
        <img
          v-if="product.image"
          class="w-full h-20 object-contain"
          :src="product.image"
        >

        <template #footer>
          <div class="flex flex-col items-center mt-auto">
            <span>{{ product.name }}</span>
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

const openProduct = (product) => {
  console.log(product);
};
</script>
