# 🦷 Dental Clinic Landing Page

Landing page moderna y profesional para clínica dental, construida con Next.js 14, TypeScript y Tailwind CSS.

## ✨ Características

- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- ⚡ **Rápido** - Optimizado con Next.js 14 y App Router
- 📅 **Calendly Integrado** - Sistema de citas automatizado
- 💬 **WhatsApp Flotante** - Botón de contacto directo
- 🖼️ **Imágenes Optimizadas** - WebP + JPG para mejor rendimiento
- 🎬 **Video Optimizado** - Múltiples formatos (WebM/MP4)
- 🎨 **UI Moderna** - Gradientes, animaciones y Tailwind CSS
- 🔍 **SEO Optimizado** - Structured data, meta tags, sitemap

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3002](http://localhost:3002) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
dentist/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globales
│   └── components/
│       ├── layout/             # Header, Footer
│       ├── sections/           # Secciones de la página
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Services.tsx
│       │   ├── Treatments.tsx
│       │   ├── Gallery.tsx
│       │   ├── Testimonials.tsx
│       │   └── Contact.tsx
│       ├── ui/                 # Componentes reutilizables
│       └── WhatsAppButton.tsx  # Botón flotante
├── public/
│   ├── images/                 # Imágenes optimizadas
│   │   └── gallery/
│   └── videos/                 # Videos optimizados
└── scripts/
    ├── optimize-images.js      # Script de optimización
    └── optimize-videos.sh      # Script de video
```

## ⚙️ Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo (puerto 3002)

# Producción
npm run build            # Build para producción
npm start                # Servidor de producción

# Optimización
npm run optimize-images  # Optimiza imágenes (JPG → WebP)
npm run optimize-videos  # Optimiza videos (MP4 + WebM)
```

## 🎨 Personalización

### 1. Colores

Edita `tailwind.config.ts`:

```ts
colors: {
  primary: { /* Azules */ },
  secondary: { /* Cyan */ },
  accent: { /* Verde */ }
}
```

### 2. Contenido

Modifica los archivos en `src/components/sections/`:
- Textos, precios, servicios, testimonios

### 3. Imágenes

Coloca tus imágenes en `public/images/` y ejecuta:

```bash
npm run optimize-images
```

### 4. Calendly

Actualiza la URL de Calendly en `src/components/sections/Contact.tsx`:

```tsx
const calendlyUrl = "https://calendly.com/TU-USUARIO/TU-EVENTO";
```

### 5. WhatsApp

Modifica el número en `src/components/WhatsAppButton.tsx`:

```tsx
const phoneNumber = "52XXXXXXXXXX";
```

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 14.2.0 | Framework React |
| React | 18.3.0 | UI Library |
| TypeScript | 5.3.0 | Tipado estático |
| Tailwind CSS | 3.4.0 | Estilos |
| React Icons | 5.0.0 | Iconos |
| React Calendly | 4.4.0 | Integración Calendly |
| Sharp | 0.33.0 | Optimización imágenes |

## 📈 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Images**: 10MB total (optimizadas)
- **Videos**: 2.2MB total (WebM + MP4)

## 🌍 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el build command: `npm run build`
3. Deploy automático en cada push

### Otros Platforms

```bash
npm run build
# Output en: .next/
```

Compatible con: Netlify, Railway, Render, etc.

## 📦 Optimización de Recursos

### Imágenes
- Formato original: JPG
- Formato optimizado: WebP (navegadores modernos)
- Calidad: 85%
- Max width: 1920px

### Videos
- Formato principal: MP4 (H.264, CRF 28)
- Formato moderno: WebM (VP9, CRF 35)
- Resolución: 1280x720 (720p)

## 📞 Contacto

- **Web**: https://dental-excellence.com
- **Email**: contacto@dental-excellence.com
- **WhatsApp**: +52 555 000 0200
- **Dirección**: Paseo de la Reforma 476, Cuauhtémoc, CDMX

## 📄 Licencia

MIT - Uso libre para proyectos personales y comerciales.

---

**Desarrollado con ❤️ para clínicas dentales modernas**
