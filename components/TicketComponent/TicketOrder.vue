<script setup lang="ts">
const nombreCliente = ref('');
const total = ref(567);

const isOpen = ref(false);

// Agrega aquí la lógica para manejar el descuento y los métodos de pago
</script>

<template>
  <div>
    <div>
      <UContainer class="p-4 rounded-md shadow-md text-white">
        <UFormGroup label="Nombre Cliente" class="text-white mb-4">
          <UInput
            v-model="nombreCliente"
            placeholder="Nombre"
            size="xl"
            color="pink"
          />
        </UFormGroup>

        <p>Lista de compras 1</p>
        <p>Lista de compras 2</p>
        <p>Lista de compras 3</p>
        <br >

        <h2 class="text-xl font-semibold mb-4">
          Total: <span class="text-pink-500">₹ {{ total }}</span>
        </h2>
        <UButton
          label="Add Discount"
          color="pink"
          class="mb-4"
          @click="isOpen = true"
        />

        <UFormGroup label="Método de Pago" class="mb-4">
          <div class="flex items-center mb-2">
            <UIcon name="i-heroicons-cash" class="mr-2" />
            <span>Efectivo</span>
            <UInput
              type="number"
              value="0.00"
              disabled
              class="ml-auto"
              color="pink"
            />
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-credit-card" class="mr-2" />
            <span>Tarjeta</span>
            <UInput
              type="number"
              value="0.00"
              disabled
              class="ml-auto"
              color="pink"
            />
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-credit-card" class="mr-2" />
            <span>Cambio</span>
            <UInput
              type="number"
              value="0.00"
              disabled
              class="ml-auto"
              color="pink"
            />
          </div>
        </UFormGroup>

        <div class="flex justify-between">
          <UButton label="Limpiar Carrito" color="gray" />
          <UButton label="Imprimir Ticket" color="pink" />
        </div>
      </UContainer>
    </div>
    <UModal v-model="isOpen" prevent-close>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Modal
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

        <Placeholder class="h-32" />
      </UCard>
    </UModal>
  </div>
</template>
