# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Es necesario tener instalado pnpm en la computadora para poderlo correr

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Comentarios

Dicho proyecto esta elaborado para que sirva con base para otros proyectos ya tiene instalados los linters, storages,
y tiene la estructura de un proyecto correctamente ordenado.

Para hacer actualización de los paquetes se tienen que correr los siguientes comandos:

```bash
# pnpm
pnpm outdated
```

En este caso saldrán los que pueden ser actualizados y podemos cambiarlos en el package.json

En caso de querer actualizar las dependencias y subdependencias habrá que correr los siguientes comandos:

```bash
# pnpm
pnpm update
```

Para verificar que no tengamos problemas de seguridad se pueden correr los siguientes comandos:

```bash
# pnpm
pnpm audit
pnpm audit --fix

```

Todas las carpetas tiene un archivo .example el cual esta allí para que la carpeta exista en caso de no utilizarlo
lo puedes eliminar.

Listo !!! ahora tienes un proyecto base para hacer las implementaciones necesarias
