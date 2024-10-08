<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <table class="w-full text-lg leading-relaxed">
      <thead>
        <tr>
          <th>#Id</th>
          <th>Producto</th>
          <th>Precio</th>
          <th class="text-center">Cantidad</th>
          <th class="text-right">Total</th>
          <th class="text-right">Quitar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-gray-500">{{ index + 1 }}</td>
          <td>
            <h3 class="text-sm font-medium">{{ item.name }}</h3>
          </td>
          <td>
            <p class="text-xs text-gray-500">
              ₹{{ item.sellingPrice.toFixed(2) }}
            </p>
          </td>
          <td class="text-center">
            <div class="flex items-center justify-center space-x-2">
              <UButton
                size="xs"
                icon="i-heroicons-minus-circle"
                color="gray"
                :disabled="item.quantity <= 1"
                @click="decrementQuantity(index)"
              />
              <span>{{ item.quantity }}</span>
              <UButton
                size="xs"
                icon="i-heroicons-plus-circle"
                color="gray"
                @click="incrementQuantity(index)"
              />
            </div>
          </td>
          <td class="text-right font-medium">₹{{ item.total.toFixed(2) }}</td>
          <td class="text-right">
            <UButton
              size="xs"
              icon="i-heroicons-trash"
              color="red"
              @click="removeItem(index)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const items = ref([
  {
    name: 'Aashirvad Aata 10 kg',
    mrp: 430.0,
    sellingPrice: 360.0,
    quantity: 1,
    total: 360.0,
  },
  {
    name: 'Maggi Noodle 200 gm',
    mrp: 10.0,
    sellingPrice: 10.0,
    quantity: 3,
    total: 30.0,
  },
  {
    name: 'Good Eggs Poultry Chicken Eggs 6 Pc',
    mrp: 45.0,
    sellingPrice: 40.0,
    quantity: 3,
    total: 120.0,
  },
  {
    name: 'More Choice Superior Tur Dal 500 g',
    mrp: 10.0,
    sellingPrice: 10.0,
    quantity: 1,
    total: 30.0,
  },
  {
    name: 'Fresh Mushroom Button Pack...',
    mrp: 10.0,
    sellingPrice: 10.0,
    quantity: 2,
    total: 30.0,
  },
]);

const incrementQuantity = (index) => {
  items.value[index].quantity++;
  items.value[index].total =
    items.value[index].quantity * items.value[index].sellingPrice;
};

const decrementQuantity = (index) => {
  if (items.value[index].quantity > 1) {
    items.value[index].quantity--;
    items.value[index].total =
      items.value[index].quantity * items.value[index].sellingPrice;
  }
};

const removeItem = (index) => {
  items.value.splice(index, 1);
};
</script>
