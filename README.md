# INDUSTEX — Sitio Web Corporativo

Sitio web estático para **INDUSTEX**, empresa especializada en bordados empresariales, uniformes corporativos y equipo de protección personal (EPP), ubicada en **Lázaro Cárdenas, Michoacán, México**.

---

## Estructura del proyecto

```
WebINDUSTEX/
├── index.html                  # Página principal (single-page)
├── style.css                   # Estilos globales y componentes
├── main.js                     # Animaciones, contadores, formulario
├── logotipo.png                # Logotipo oficial INDUSTEX
├── Paleta_colores_INDUSTEX.md  # Referencia de paleta de marca
└── README.md
```

---

## Paleta de colores

| Token | HEX | Uso |
|-------|-----|-----|
| Naranja industrial | `#E84C1F` | Acentos, botones, CTAs |
| Blanco roto | `#F5F5F5` | Fondos, tarjetas |
| Azul seguridad | `#1F5E96` | Íconos, detalles técnicos |
| Gris grafito | `#2B2B2B` | Textos principales, fondos oscuros |
| Amarillo precaución | `#F4B41A` | EPP, alta visibilidad |

---

## Secciones del sitio

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | Navbar | Fija, se compacta al hacer scroll. Logo + menú + CTA |
| 2 | Hero | Full-screen con fondo industrial, animación Ken Burns |
| 3 | Trust bar | 5 diferenciadores de marca |
| 4 | Servicios | 3 cards — Bordados, Uniformes, EPP |
| 5 | Estadísticas | Contadores animados con IntersectionObserver |
| 6 | Galería | Grid asimétrico de 12 columnas con hover |
| 7 | Proceso | 4 pasos con línea de progreso animada |
| 8 | ¿Por qué nosotros? | Split 50/50 foto + ventajas |
| 9 | Contacto | Datos de contacto + formulario de cotización |
| 10 | Mapa | OpenStreetMap embebido, sin API key |
| 11 | Footer | 4 columnas + redes sociales |
| 12 | WhatsApp flotante | Botón fijo siempre visible |

---

## Dependencias externas (CDN)

No requiere instalación. Todo se carga desde CDN:

| Librería | Versión | Uso |
|----------|---------|-----|
| [AOS](https://michalsnik.github.io/aos/) | 2.3.1 | Animaciones al hacer scroll |
| [Font Awesome](https://fontawesome.com/) | 6.4.0 | Íconos |
| [Google Fonts](https://fonts.google.com/) | — | Montserrat + Open Sans |
| [Unsplash](https://unsplash.com/) | — | Imágenes de fondo y galería |
| [OpenStreetMap](https://www.openstreetmap.org/) | — | Mapa embebido |

---

## Personalización rápida

### Datos de contacto

Editar en `index.html`:

```html
<!-- Teléfono/WhatsApp -->
href="https://wa.me/527530000000?..."   <!-- Reemplaza 7530000000 -->
<p>+52 (753) 000-0000</p>

<!-- Correo -->
<p>ventas@industex.mx</p>

<!-- Horario -->
<p>Lun–Vie 9:00–18:00 · Sáb 9:00–13:00</p>
```

### Estadísticas

Busca los atributos `data-target` en `index.html`:

```html
<span class="count-up" data-target="500">0</span>   <!-- Clientes -->
<span class="count-up" data-target="15">0</span>    <!-- Años -->
<span class="count-up" data-target="10000">0</span> <!-- Prendas/año -->
<span class="count-up" data-target="98">0</span>    <!-- % Satisfacción -->
```

### Colores de marca

Las variables CSS están en `style.css`:

```css
:root {
    --orange:  #E84C1F;
    --white:   #F5F5F5;
    --blue:    #1F5E96;
    --dark:    #2B2B2B;
    --yellow:  #F4B41A;
}
```

### Imágenes

Las imágenes actuales son de Unsplash. Para reemplazarlas con fotos propias, busca las URL `images.unsplash.com/...` en `index.html` y `style.css` y sustitúyelas por rutas locales.

---

## Cómo visualizar el sitio

El sitio es HTML estático. No requiere servidor, build ni dependencias locales.

**Abrir directamente en el navegador:**

```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

**Con servidor local (recomendado para desarrollo):**

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Instalar extensión "Live Server" y hacer clic en "Go Live"
```

---

## Despliegue

Al ser un sitio estático, puede publicarse en cualquier plataforma:

| Plataforma | Comando / Método |
|------------|-----------------|
| **GitHub Pages** | Subir archivos al repo y activar Pages desde `Settings` |
| **Netlify** | Arrastrar la carpeta a [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `vercel --prod` desde la carpeta del proyecto |
| **Hostinger / cPanel** | Subir archivos vía FTP al directorio `public_html` |

---

## Formulario de contacto

El formulario actual muestra una confirmación visual al enviarse pero **no envía datos** (no tiene backend). Para activar el envío real, integrar una de estas opciones:

- **[Formspree](https://formspree.io/)** — añadir `action="https://formspree.io/f/TU_ID"` al `<form>`
- **[EmailJS](https://www.emailjs.com/)** — integración por JavaScript, sin servidor
- **Backend propio** — PHP, Node.js, Django, etc.

---

## Redes sociales

Los enlaces de redes sociales en el footer apuntan a `#` (marcador vacío). Actualizar con las URLs reales de INDUSTEX:

```html
<a href="https://facebook.com/industex" ...>
<a href="https://instagram.com/industex" ...>
<a href="https://wa.me/527530000000" ...>
<a href="https://tiktok.com/@industex" ...>
```

---

## Navegadores compatibles

Todos los navegadores modernos. No se usan características experimentales.

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Chrome / Safari

---

*INDUSTEX — Bordados • Uniformes • EPP — Lázaro Cárdenas, Michoacán*
