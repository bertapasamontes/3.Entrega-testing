# 🎬 Testing de Funcionalidades de Películas

## 📄 Descripción
Este proyecto implementa y prueba funcionalidades relacionadas con un catálogo de películas en JavaScript. Se incluyen funciones para manipular y consultar un conjunto de películas (`movies`), permitiendo filtrar por año, director, género, y más. Las pruebas están diseñadas para asegurar que las funciones operan correctamente, proporcionando resultados fiables para las consultas de películas.

## ✨ Características
- **Catálogo de Películas**: Un conjunto de datos (`movies`) con información de películas, incluyendo título, año, director, duración, género y puntuación.
- **Funciones de Consulta**: Funciones que permiten realizar consultas complejas, como obtener la mejor película de un año concreto, listar las películas por director, y otras opciones de filtrado.
- **Pruebas Unitarias**: Conjunto de pruebas unitarias para validar el correcto funcionamiento de cada una de las funciones de consulta y manipulación de datos.

## 💻 Tecnologías Utilizadas
- JavaScript
- Jest (para las pruebas)
- Node.js (entorno de ejecución para los tests)

## 📋 Requisitos
- **Node.js** y **npm** deben estar instalados para ejecutar los tests y trabajar en el entorno de desarrollo.

## 🛠️ Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/bertapasamontes/3.Entrega-testing
   ```
2. Accede al directorio del proyecto:
   ```bash
   cd 3.Entrega-testing
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## ▶️ Ejecución
- Para ejecutar los tests y verificar el funcionamiento de las funciones, usa el siguiente comando en el terminal:
   ```bash
   npm test
   ```
- Esto generará un archivo `test-results.html` que contiene los resultados detallados de las pruebas. Puedes abrir este archivo en un navegador para revisar los resultados de los tests.

## 📂 Estructura del Proyecto
- **src/data.js**: Contiene el array de objetos `movies`, donde cada objeto representa una película con propiedades como `title`, `year`, `director`, `duration`, `genre`, y `score`.
- **src/films.js**: Incluye varias funciones que permiten realizar consultas y manipulación de los datos en `movies`. Ejemplos de funcionalidades:
  - Obtener la mejor película de un año específico.
  - Filtrar películas por director.
  - Listar películas por género, entre otras.
- **tests/films.spec.js**: Contiene las pruebas unitarias para cada función de `films.js`. Cada prueba verifica que la función correspondiente devuelva resultados correctos y manejos de datos válidos.

## 🌐 Despliegue
Este proyecto está diseñado para ejecutarse localmente. Si deseas incluirlo en un flujo CI/CD o en una plataforma de testing continua, puedes integrarlo con herramientas como GitHub Actions o Jenkins.

## 🤝 Contribuciones
Contribuciones y mejoras en los tests o en las funcionalidades del catálogo son bienvenidas. Para contribuir:
1. Haz un fork del repositorio.
2. Crea una rama para tu modificación.
3. Haz un pull request con una descripción de los cambios.
