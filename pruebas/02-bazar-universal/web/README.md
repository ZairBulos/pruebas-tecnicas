# 02 - Desarrollo Full Stack de Bazar (WEB)

## Comenzando

Antes de comenzar a utilizar el cliente, asegúrese de haber completado la configuración del lado del servidor como se menciona en la [documentación del servidor](/pruebas/02-bazar-universal/api/README.md).

1. Navega al directorio del proyecto:

```bash
cd pruebas-tecnicas\pruebas\02-bazar-universal\web
```

## Instalación

Después de clonar el repositorio y navegar al directorio del proyecto, debes instalar las dependencias del proyecto. Puedes elegir entre `npm` o `pnpm` para hacerlo. A continuación se muestran los comandos para ambas opciones:

**Usando npm:**

```bash
npm install
```

**Usando pnpm:**

```bash
pnpm install
```

### Configuración del entorno

Cree un archivo `.env` en la raíz del directorio del cliente:

```env
VITE_API_URL=http://localhost:3000/api/items
```

## Uso

Ahora que ha clonado el repositorio, instalado las dependencias necesarias y configurado el entorno, puede iniciar el cliente:

**Usando npm:**

```bash
npm start
```

**Usando pnpm:**

```bash
pnpm start
```

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- [Vite](https://vitejs.dev/)
- [React](https://es.react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)