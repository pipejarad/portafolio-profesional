# Portfolio Personal - Felipe Jara

## 🚀 Despliegue

### Opciones de Deployment

#### 1. Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para deploy de producción
vercel --prod
```

#### 2. Netlify

```bash
# Build
npm run build

# Deploy manualmente subiendo la carpeta .next
# O conectar tu repositorio en netlify.com
```

#### 3. GitHub Pages (Static Export)

```bash
# Build estático
npm run export

# Subir carpeta out/ a GitHub Pages
```

#### 4. Docker

```bash
# Build imagen
docker build -t portfolio .

# Ejecutar
docker run -p 3000:3000 portfolio
```

### Variables de Entorno para Producción

Crear archivo `.env.production.local`:

```
NEXTAUTH_URL=https://tudominio.com
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

### Optimizaciones Pre-Deploy

1. **Verificar build sin errores:**

```bash
npm run build
```

2. **Comprobar tipos TypeScript:**

```bash
npm run type-check
```

3. **Ejecutar linting:**

```bash
npm run lint
```

4. **Preview local:**

```bash
npm run preview
```

### Configuración de Dominio

1. Actualizar `next.config.js` con tu dominio real
2. Actualizar `sitemap.xml` con tu URL
3. Actualizar `robots.txt` con tu dominio
4. Verificar metadatos en `layout.tsx`

### Performance Checklist

- ✅ Imágenes optimizadas (SVG placeholders)
- ✅ Lazy loading implementado
- ✅ Bundle splitting automático (Next.js)
- ✅ SEO optimizado (metadata, sitemap, robots.txt)
- ✅ Favicon personalizado
- ✅ Compresión de assets
- ✅ Headers de seguridad

### Monitoreo Post-Deploy

1. **PageSpeed Insights:** https://pagespeed.web.dev/
2. **GTmetrix:** https://gtmetrix.com/
3. **Lighthouse:** Auditoría integrada en Chrome DevTools

### Comandos de Mantenimiento

```bash
# Actualizar dependencias
npm update

# Auditoría de seguridad
npm audit

# Limpiar cache
npm run build && rm -rf .next
```
