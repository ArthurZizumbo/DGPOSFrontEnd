<template>
  <div class="fixed top-10 left-0 h-screen w-80 bg-gray-800 text-white p-4">
    <div class="flex flex-col gap-4">
      <div v-for="category in dataCategories" :key="category.title">
        <div class="text-center mb-2">
          <h3 class="text-lg font-semibold">{{ category.title }}</h3>
        </div>
        <div class="grid grid-cols-2 gap-2 justify-center">
          <UVerticalNavigation
            v-for="subCategory in category.brands"
            :key="subCategory.label"
            class="text-xl border"
            :links="[subCategory]"
            @click="handleClick(subCategory.label)"
          />
        </div>
      </div>
    </div>
    <div class="pt-5 flex justify-center">
      <UButton color="pink" size="xl" variant="solid" @click="isOpen = true"
      >Generar Orden</UButton
      >
    </div>
    <div>
      <UModal
        v-model="isOpen"
        :ui="{ height: 'h-[80vh]', width: 'min-w-[80vw]' }"
        prevent-close
      >
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h3
                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Generar Orden
              </h3>
              <UButton
                color="gray"
                variant="ghost"
                icon="i-heroicons-x-mark-20-solid"
                class="-my-1"
                @click="isOpen = false"
              />
            </div>
          </template>
          <TicketComponentCreateOrder />
        </UCard>
      </UModal>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const dataCategories = useMenuCategoriesAndBrands();
const isOpen = ref(false);

const emit = defineEmits(['itemSelected']); // Emitimos evento

const handleClick = (category) => {
  console.log(category); // Imprimimos en consola
  emit('itemSelected', category); // Emitimos el label al componente padre
};
</script>
