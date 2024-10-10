<template>
  <div>
    <div class="fixed h-sidebar bg-gray-800 text-white p-2"> 
      <div v-if="selectedCategory" class="gap-2 justify-center">
        <UVerticalNavigation
          v-for="subCategory in selectedCategory.brands" 
          :key="subCategory.brands"
          :links="[subCategory]"
          :label="subCategory.product"
          :ui="configUIVertical"
          @click="handleClick(subCategory.label)"
        />
      </div>
    </div>

    <div class="fixed w-sidebar z-10 bg-gray-800 text-white p-2">
      <UHorizontalNavigation
        :links="dataCategories"
        :ui="configUIHorizontal"
        @click="handleClickHorizontal"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const dataCategories = useMenuCategoriesAndBrands();
const selectedCategory = ref(null); // Variable reactiva para la categoría seleccionada

const configUIHorizontal = {
  wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
  base: 'group block border-s -ms-px leading-6 before:hidden',
  padding: 'p-0 ps-4',
  rounded: '',
  font: '',
  size: 'text-l',
  label: 'break-words',
  ring: '',
  active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
  inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
};

const configUIVertical = {
  wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
  base: 'group block border-s -ms-px leading-6 before:hidden',
  padding: 'p-0 ps-4',
  rounded: '',
  font: '',
  size: 'text-l',
  label: 'break-words',
  ring: '',
  active: 'text-primary-500 dark:text-primary-400 border-current border-b-2 font-semibold',
  inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
};

const emit = defineEmits(['itemSelected']);

const handleClickHorizontal = (event) => {
  const label = event.target.textContent.trim();
  updateSubCategories(label);
};

const updateSubCategories = (categoryLabel) => {
  selectedCategory.value = dataCategories.find(item => item.label === categoryLabel); 
};

const handleClick = (category) => {
  console.log(category);
  emit('itemSelected', category);
};
</script>

<style scoped>
.w-sidebar {
  top: 6%;
  width: 75%;
  height: 8%;;
}
.h-sidebar {
  top:14%;
  width: 14%;
  height: 86%;
}
</style>
