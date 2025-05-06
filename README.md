## 🏁 Getting Started <a name="getting_started"></a>

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

---

### 1️⃣ Clonar el repositorio  
Abre una terminal y ejecuta los siguientes comandos:

```bash
# Clona el repositorio
git clone https://github.com/wemade-IoT/landing-page.git

# Accede al directorio del proyecto
cd landing-page-iot
```

---

### 2️⃣ Instalar dependencias
Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Luego, instala las dependencias del proyecto ejecutando:

```bash
npm install
```

---

### 3️⃣ Configurar variables de entorno (opcional)
Si el proyecto requiere variables de entorno, crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias. Consulta el archivo `.env.example` si está disponible.

---

### 4️⃣ Iniciar el servidor de desarrollo
Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en tu navegador en la dirección predeterminada, generalmente:

```
http://localhost:3000
```

---

### 5️⃣ Construir para producción (opcional)
Si deseas generar una versión optimizada para producción, ejecuta:

```bash
npm run build
```

Los archivos optimizados estarán disponibles en la carpeta `dist` o equivalente.

---

### Requisitos previos
- **Node.js**: Asegúrate de tener instalada la versión recomendada de Node.js.
- **Git**: Necesario para clonar el repositorio.

Para más información, consulta la [documentación oficial](https://github.com/wemade-IoT/landing-page).