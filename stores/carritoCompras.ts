import { defineStore } from 'pinia';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

export const carritoStore = defineStore('carritoCompras', {
  state: () => ({
    carrito: [] as Producto[], // Inicializamos como un array vacío
  }),
  getters: {
    total(): number {
      return this.carrito.reduce(
        (total, producto) => total + producto.precio,
        0,
      );
    },
  },
  actions: {
    actualizarCarrito(producto: Producto, cantidad: number) {
      const index = this.carrito.findIndex((item) => item.id === producto.id);

      if (cantidad > 0) {
        if (index === -1) {
          this.carrito.push({ ...producto, cantidad }); // Agrega el producto si no existe
        } else {
          this.carrito[index].cantidad += cantidad; // Actualiza la cantidad si existe
        }
      } else if (index !== -1) {
        this.carrito.splice(index, 1); // Elimina el producto si la cantidad es 0
      }
    },
  },
});
