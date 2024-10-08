<template>
  <div class="border-b-[0.5px] bg-white dark:bg-black sticky top-0 z-[99]">
    <div
      class="p-[0.5rem] w-full flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center items-center"
    >
      <!-- Part-One -->
      <nuxt-link to="/pos">
        <div
          class="ml-2 lg:mt-0 md:mt-0 mt-2 flex lg:flex-row md:flex-row flex-col items-center gap-2"
        >
          <!-- Logo -->
          <div>
            <img
              class="h-[33px] mx-auto"
              src="../../assets/img/logoDuran.png"
              alt=""
            >
          </div>
          <!--  Title -->
          <div class="font-light text-[20px]">
            <h1>Punto de Venta Duran Gourmet</h1>
          </div>
        </div>
      </nuxt-link>
      <!-- Part-Two -->
      <div class="flex justify-center items-center gap-5 mr-2">
        <!-- User -->
        <div class="flex items-center justify-center gap-1">
          <div>
            <UIcon name="i-heroicons-user" />
          </div>
          <UDropdown :items="items" class="z-[99]">
            <UButton
              color="white"
              label="Arthur Zizumbo"
              trailing-icon="i-heroicons-chevron-down-20-solid"
              style="
                background: none !important;
                padding: 0px !important;
                border: 0px !important;
                box-shadow: none !important;
              "
            />
            <template #user="{ item }">
              <div class="text-center">
                <div
                  class="flex justify-center items-center gap-1 pb-2 text-[16px]"
                >
                  <UIcon name="i-heroicons-user" />
                  <p>{{ item.label }}</p>
                </div>
                <p class="font-medium text-[13px]">
                  {{ item.position }}
                </p>
              </div>
            </template>
            <template #permissions="{ item }">
              <div class="text-center w-full">
                <div
                  class="flex justify-center items-center gap-1 pb-2 text-[16px]"
                >
                  <UIcon name="i-heroicons-user-group" />
                  <p>{{ item.label }}</p>
                </div>
                <div />

                <div v-for="(privilegio, index) in item.permisos" :key="index">
                  <p class="text-left text-xs">
                    {{ privilegio }}
                  </p>
                </div>
              </div>
            </template>
          </UDropdown>
          <!-- DarkMode -->
          <div>
            <ClientOnly>
              <UButton
                :icon="
                  isDark
                    ? 'i-heroicons-moon-20-solid'
                    : 'i-heroicons-sun-20-solid'
                "
                color="gray"
                variant="ghost"
                aria-label="Theme"
                style="background: none !important"
                @click="isDark = !isDark"
              />
              <template #fallback>
                <div class="w-8 h-8" />
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Navigation
const items = [
  [
    {
      label: 'Arthur Zizumbo',
      position: 'Admin Front',
      slot: 'user',
      disabled: true,
    },
  ],
  [
    {
      label: 'Permisos',
      permisos: ['read', 'carga-cat', 'cambiar precios'],
      slot: 'permissions',
      disabled: true,
    },
  ],
];
// DarkMode
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>
