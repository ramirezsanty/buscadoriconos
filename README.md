# 🔍 Buscador de Iconos Gratuitos

> 🎨 **Explorador visual de iconos** de Boxicons y Bootstrap Icons con búsqueda avanzada y copia con un clic

## 📋 Descripción

BuscadorIconos es una **herramienta web completa** que te permite explorar, buscar y utilizar más de **2,000 iconos gratuitos** de las librerías más populares:

- 📦 **Boxicons v3.0.8** (Basic, Filled, Brands)
- 📦 **Boxicons v2.1.4** (Basic, Solid, Logos)  
- 🅱️ **Bootstrap Icons v1.13.1**

## ✨ Características Principales

### 🎯 **Búsqueda Avanzada**
- 🔍 **Búsqueda por columna**: Filtra iconos por nombre, clase CSS o unicode
- 📊 **Tablas interactivas** con DataTables.net
- ⚡ **Búsqueda en tiempo real** sin recargar la página

### 🎨 **Diseño Moderno**
- 🌙 **Modo oscuro/claro** con persistencia en localStorage
- 🪟 **Glassmorfismo** con efectos de blur y transparencia
- 📱 **Totalmente responsive** para todos los dispositivos
- 🎭 **Variables CSS** para personalización fácil

### 📋 **Funcionalidades Prácticas**
- 📋 **Copia con un clic**: Nombre, clase CSS o unicode
- 🔗 **Link CSS directo**: Copia el enlace para incluir en tu proyecto
- 📊 **Paginación inteligente**: 10, 25, 50 o 100 resultados por página
- 📍 **Headers fijos** para mejor navegación

### 🛠️ **Tecnologías Utilizadas**

#### Frontend
- **HTML5 Semántico** ♿ con buenas prácticas de accesibilidad
- **CSS3 Moderno** 🎨 con Flexbox, Grid y Variables CSS
- **JavaScript Vanilla ES6+** ⚡ con async/await
- **DataTables.net** 📊 para tablas avanzadas

#### Librerías de Iconos
- 📦 **Boxicons v3.0.8** - Basic, Filled, Brands
- 📦 **Boxicons v2.1.4** - Basic, Solid, Logos  
- 🅱️ **Bootstrap Icons v1.13.1**

## 🚀 Instalación y Uso

### Requisitos
- 🌐 Servidor web (Apache, Nginx, etc.)
- 📦 No requiere dependencias locales (usa CDN)

### Pasos para instalar
1. **Clonar o descargar** el proyecto
2. **Colocar en servidor web** (ej: `htdocs/` o `www/`)
3. **Acceder via navegador**: `http://localhost/buscadoriconos`

### 🎯 Cómo usar
1. **Selecciona una pestaña** de iconos
2. **Usa la búsqueda** por columna para filtrar
3. **Copia con un clic** el nombre, clase o unicode
4. **Copia el link CSS** para incluir en tu proyecto

## 📁 Estructura del Proyecto

```
buscadoriconos/
├── 📄 index.php              # Página principal
├── 📁 css/
│   └── 🎨 estilos.css        # Estilos con glassmorfismo
├── 📁 js/
│   └── ⚡ configuracionboxicons.js  # Lógica principal
└── 📖 README.md              # Este archivo
```

## 🎨 Características de Diseño

### Glassmorfismo
- 🪟 **Efectos blur** con backdrop-filter
- 🌈 **Gradientes sutiles** y sombras suaves
- ✨ **Transparencias** elegantes

### Temas
- ☀️ **Modo claro**: Fondo claro con acentos azules
- 🌙 **Modo oscuro**: Fondo oscuro con contrastes adecuados
- 💾 **Persistencia**: El tema se guarda en localStorage

### Responsive Design
- 📱 **Móvil**: Diseño optimizado para pantallas pequeñas
- 💻 **Tablet**: Layout adaptativo con menús compactos
- 🖥️ **Desktop**: Experiencia completa con todas las funciones

## 🔧 Personalización

### Variables CSS Principales
```css
:root {
    --bg-color: #f8f9fa;           /* Color de fondo */
    --text-color: #333;            /* Color de texto */
    --tab-active: #3b82f6;        /* Color activo */
    --glass-bg: rgba(255, 255, 255, 0.85); /* Glassmorfismo */
}
```

### Modificar Iconos
Edita `js/configuracionboxicons.js` para:
- ➕ **Agregar nuevas fuentes** de iconos
- 🔧 **Modificar prefijos** y URLs
- ⚙️ **Ajustar regex** para diferentes formatos

## 📊 Estadísticas de Iconos

| Librería | Versión | Tipos | Cantidad aprox. |
|----------|---------|-------|-----------------|
| 📦 Boxicons | v3.0.8 | Basic, Filled, Brands | 1,500+ |
| 📦 Boxicons | v2.1.4 | Basic, Solid, Logos | 1,200+ |
| 🅱️ Bootstrap Icons | v1.13.1 | General | 2,000+ |

## 🌟 Ventajas

- ⚡ **Rápido y ligero** - Sin build steps
- 🎨 **Diseño moderno** - Glassmorfismo y animaciones
- 📱 **100% Responsive** - Funciona en todos los dispositivos
- 🔍 **Búsqueda potente** - Filtrado por columnas
- 📋 **Copia fácil** - Un clic para copiar cualquier valor
- 🌙 **Modo oscuro** - Protege tus ojos
- ♿ **Accesible** - Cumple con estándares WCAG
- 🆓 **Gratis** - Todos los iconos son gratuitos

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

- 🐛 **Reporta bugs**
- 💡 **Sugerencias de features**
- 🎨 **Mejoras de diseño**
- 📝 **Mejoras en la documentación**

## 📄 Licencia

Este proyecto es **código abierto** y puede ser utilizado libremente.

Los iconos están bajo sus respectivas licencias:
- 📦 **Boxicons**: MIT License
- 🅱️ **Bootstrap Icons**: MIT License

---

## 🙏 Agradecimientos

- 📦 **Boxicons** por los increíbles iconos
- 🅱️ **Bootstrap Icons** por el conjunto completo
- 📊 **DataTables.net** por la librería de tablas
- 🎨 **Comunidad CSS** por las técnicas de glassmorfismo

---

> 💡 **Tip**: Usa el modo oscuro para trabajar durante largas sesiones. El tema se guarda automáticamente para tu próxima visita.

**🔗 Enlace rápido**: `http://localhost/buscadoriconos`

---

*Hecho con ❤️ y ☕ para la comunidad de desarrolladores*
