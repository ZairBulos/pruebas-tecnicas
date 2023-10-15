# 02 - Desarrollo Full Stack de Bazar (API)

## Comenzando

Sigue los pasos a continuación para comenzar a trabajar con este proyecto en tu entorno local.

1. Clona el repositorio:

```bash
git clone https://github.com/ZairBulos/pruebas-tecnicas.git
```

2. Navega al directorio del proyecto:

```bash
cd pruebas-tecnicas\pruebas\02-bazar-universal\api
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

## Uso

Ahora que has clonado el repositorio e instalado las dependencias necesarias, puedes iniciar el servidor:

**Usando npm:**

```bash
npm start
```

**Usando pnpm:**

```bash
pnpm start
```

### Rutas

| Ruta                 | Retorna    |
| -------------------  | ---------- |
| /api/items?q=:query  | Product[]  |
| /api/items/:id       | Product    |

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com)
- [TypeScript](https://www.typescriptlang.org/)

## Despliegue

Puedes ver la aplicación en vivo en: [Bazar Online](https://bazar-online-api.onrender.com)