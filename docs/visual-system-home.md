# ZENTRA — identidad visual y especificación de Home

**Estado:** propuesta para revisión. No es una implementación de Home ni un archivo de Figma.

## Alcance y fuente de decisiones

Este documento traduce el brief de esta etapa a reglas visuales y una composición reproducible en Astro. El documento maestro mencionado por el propietario no está presente en la carpeta de trabajo, que actualmente no contiene archivos de proyecto. Por ese motivo, la compatibilidad con el documento maestro queda **sin verificar**. Si sus decisiones difieren de esta propuesta, prevalece el documento maestro y se debe actualizar esta especificación antes de implementar.

Se respetan el nombre ZENTRA, el eslogan “Built for what's next.”, el descriptor “Digital Development”, la paleta, las familias tipográficas, las secciones y los servicios solicitados. No se atribuyen al estudio premios, certificaciones, años de experiencia, cifras, testimonios ni resultados. Los cuatro trabajos se presentarán como conceptuales mientras no se confirme su condición y autorización de publicación.

## 1. Identidad visual

### Personalidad y expresión

ZENTRA se expresa como un estudio independiente, claro y técnicamente competente. La sensación premium proviene de una composición editorial cuidada, contraste, tipografía, ritmo y consistencia; no de efectos llamativos. Dark Tech aporta foco y carácter; Clean Light aporta legibilidad y descanso.

### Paleta oficial y uso

| Token | Valor | Uso recomendado |
|---|---|---|
| Midnight Navy | `#0B1220` | Fondos oscuros, texto principal sobre superficies claras, footer |
| Electric Blue | `#3978F6` | Acción primaria, enlaces destacados, foco visual puntual |
| Digital Teal | `#06D6B4` | Acento de apoyo e indicadores sobre fondos oscuros; en superficies claras usar con tinta oscura y comprobar contraste en implementación |
| Cloud White | `#F8FAFC` | Fondo claro principal y texto sobre fondos oscuros |

Usar la paleta sin introducir colores de marca adicionales. Para superficies intermedias se permiten mezclas neutras derivadas de Midnight Navy y Cloud White; no usar Teal pequeño sobre blanco como texto hasta verificar contraste. Evitar degradados como recurso dominante. Si se usa alguno en el hero, que sea un halo estático, tenue y subordinado a la composición.

### Tipografía

- **Space Grotesk:** títulos de sección, titulares y cifras o etiquetas grandes.
- **Inter:** párrafos, navegación, botones, metadatos, formularios futuros y controles.
- Mantener titulares en sentence case salvo las etiquetas de sección, que pueden ir en mayúsculas pequeñas.
- Cargar las familias en la etapa de implementación desde una fuente aprobada por el proyecto; no se agrega proveedor ni dependencia aquí. Declarar siempre familias de respaldo locales.

## 2. Design tokens y tipografía

Los tokens implementables están en [`src/styles/tokens.css`](../src/styles/tokens.css). Los valores usan rem para escalar con la configuración del navegador. La escala sugerida:

| Rol | Desktop | Tablet | Mobile | Familia / peso |
|---|---:|---:|---:|---|
| Display del hero | `clamp(3.5rem, 7.2vw, 6.5rem)` | fluido | `clamp(2.75rem, 12vw, 4rem)` | Space Grotesk 600, line-height 0.98–1.04 |
| H1 de página | 3.5–4.5rem | 3–3.75rem | 2.75–3.25rem | Space Grotesk 600 |
| H2 de sección | 2.5–3.25rem | 2.25–2.75rem | 2–2.5rem | Space Grotesk 600 |
| H3 / tarjeta | 1.375–1.625rem | igual | 1.25–1.5rem | Space Grotesk 500–600 |
| Lead | 1.125–1.25rem | igual | 1.0625–1.125rem | Inter 400, line-height 1.6 |
| Texto base | 1rem | igual | 1rem | Inter 400, line-height 1.65 |
| UI / navegación | 0.875–1rem | igual | 0.9375rem | Inter 500 |
| Eyebrow / metadato | 0.75–0.8125rem | igual | 0.75rem | Inter 600, tracking 0.08–0.12em |

El hero usa un titular de dos líneas en escritorio y una secuencia natural de líneas en móvil. Limitar el ancho de párrafos a 58–66 caracteres y mantener el texto funcional a un tamaño mínimo de 16px en móvil.

## 3. Espaciado, contenedores y composición

Escala base de espaciado: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px`. Usar múltiplos consistentes y evitar ajustes aislados por elemento.

- Contenedor principal: máximo `1200px`; ancho `calc(100% - 2 * margen)`.
- Márgenes: desktop `48–64px`, tablet `32px`, móvil `20–24px`.
- Gutter de grilla: desktop `24px`, tablet `20px`, móvil `16px`.
- Separación vertical entre secciones: desktop `112–144px`, tablet `88–112px`, móvil `72–88px`.
- Párrafo y elementos relacionados: `16–24px`; título a texto: `20–28px`; grupo de botones: `12–16px`.
- Secciones claras: Cloud White. Secciones oscuras: Midnight Navy. Alternancia propuesta: Hero oscuro, Services claro, Why ZENTRA oscuro, Selected Work claro, Process oscuro o claro según balance final, CTA azul o navy, FAQ claro, Footer navy. Evitar dos bloques oscuros largos seguidos.

Grillas desktop de 12 columnas, tablet de 8 y móvil de 4. Las tarjetas se alinean a una misma línea base y su acción queda al pie para sostener alturas visuales coherentes.

## 4. Botones, enlaces y tarjetas

### Botones

- Altura mínima 48px (52px para CTA principal); padding horizontal 20–24px; radio 8px.
- **Primary:** fondo Electric Blue, texto Cloud White; hover con azul ligeramente más oscuro definido y probado en implementación; foco visible de 2px.
- **Secondary:** transparente con borde de 1px, texto heredado y contraste adecuado a la sección; en hero oscuro usar borde blanco translúcido y texto claro.
- **Text link:** texto con flecha o subrayado al hover; área de interacción mínima 44×44px en móvil.
- Estados hover/focus/active claros y breves, sin rebotes ni transiciones de escala. Respetar `prefers-reduced-motion`.

### Tarjetas

- Radio 12–16px; borde neutro de bajo contraste; padding 24–32px.
- Servicio: icono lineal simple, título, descripción de 1–2 líneas y enlace “Explore service” con flecha. Iconografía consistente, sin mezclar estilos ni depender de emoji.
- Diferencial: título breve y explicación concreta; no usar cifras ni promesas de resultado.
- Proyecto: imagen/preview con proporción estable 4:3 o 16:10, nombre, etiqueta “Concept project” mientras aplique, resumen, tecnologías confirmadas y enlace disponible. Dejar sin renderizar tecnología o URL hasta contar con datos reales.
- Proceso: numeral o índice pequeño, título y una frase de explicación pendiente de validar con el propietario.
- Hover sutil en borde/posición de flecha; toda interacción debe tener alternativa de foco visible y no depender solo del color.

## 5. Especificación de Home

### 1. Header

Header de 80px aprox. sobre Midnight Navy, contenido centrado en el mismo contenedor del sitio. Marca tipográfica “ZENTRA” a la izquierda; descriptor compacto opcional en escritorio si no compite con la marca. Navegación Services, Work, About, Contact centrada o alineada a la derecha; selector EN / ES y CTA “Start a project” al extremo derecho. Estado actual discreto y subrayado/foco accesible.

En móvil, mantener marca y control de menú con botón de 44px; desplegar navegación en panel o pantalla completa con los mismos enlaces, selector y CTA. El menú es una especificación, no una funcionalidad implementada ahora.

### 2. Hero

Bloque inicial oscuro, amplio y visualmente dominante; altura orientativa de 680–780px en desktop sin forzar altura fija. Composición editorial de dos columnas: texto en 6–7 columnas a la izquierda y pieza gráfica propia/preview abstracto a la derecha. La pieza debe sentirse como interfaz digital diseñada para ZENTRA —capas geométricas limpias, módulos alineados y acento azul/teal—, no como mockup genérico de dashboard ni imagen stock. Mantenerla secundaria a la promesa.

Orden del contenido: eyebrow “DIGITAL DEVELOPMENT”; H1 “Build your digital presence. Move your business forward.”; descripción provista; botones “Explore our services” y “View our work”; remate “Built for what's next.” como firma visual pequeña. Un solo acento teal y una forma radial o línea técnica estática como máximo.

En móvil, columna única, titular primero, descripción y botones apilados o en fila solo si caben sin apretar; la pieza gráfica se simplifica, ocupa menos espacio y aparece después de la acción principal. No ocultar el eslogan.

### 3. Services

Superficie Cloud White. Eyebrow, título de sección orientado a servicios digitales y párrafo corto. Cuatro tarjetas en grilla 2×2 o cuatro columnas según ancho; cada una incluye icono, nombre solicitado, descripción de una línea y enlace. Las descripciones finales requieren revisión comercial; usar copy descriptivo sin prometer resultados. En móvil, lista de tarjetas a una columna.

### 4. Why ZENTRA

Bloque Midnight Navy con título y breve encuadre; cuatro diferenciales —Custom approach, Clear communication, Responsive development, Thoughtful design— en grilla 2×2. A cada título se le asigna texto explicativo de alcance, pendiente de validar, en lenguaje concreto y sin reclamar resultados, certificaciones ni trayectoria. Usar numeración fina o líneas divisorias, no cuatro cajas pesadas.

### 5. Selected Work

Fondo claro. Presentación editorial con título, contexto y tarjetas de Nexo Digital, La Espiga, Bistro Verde y NovaTech. Cada item debe soportar imagen, descripción, tecnologías y enlace. Mostrar indicador “Concept project” en los cuatro hasta que el propietario confirme si son reales o conceptuales; no enlazar destinos inventados. Diseñar una grilla irregular controlada: primer proyecto ancho, los siguientes en dos columnas, siempre con proporciones de imagen consistentes y etiquetas visibles.

### 6. Process

Cinco etapas: Discovery, Planning, Design, Development y Delivery. Representación en línea horizontal de cinco pasos en desktop, con conectores finos; en móvil, línea vertical o lista numerada. Título, descripción breve por etapa y estados visuales sobrios. Las actividades y entregables concretos de cada fase quedan por confirmar para no describir un proceso contractual inexistente.

### 7. CTA

Bloque de alto contraste en Electric Blue o Midnight Navy con acento geométrico discreto. Mensaje de invitación a iniciar un proyecto y un único botón prominente “Start a project” o “Get in touch”. No incluir plazos, garantías, precios ni tiempos de respuesta sin autorización. El canal/enlace de contacto queda pendiente de definir.

### 8. FAQ

Sección clara, título y lista de acordeón de una columna con divisores. Preguntas sugeridas para validar: “What services do you offer?”, “How does a project begin?”, “Can you redesign an existing website?”, “Do you work with clients outside Argentina?” y “What information should I prepare?”. Las respuestas no se redactan como compromisos hasta confirmar proceso, alcance, disponibilidad internacional y canales. El comportamiento accesible del acordeón corresponde a implementación posterior.

### 9. Footer

Fondo Midnight Navy, marca y eslogan, descriptor, resumen corto aprobado, columnas de navegación, servicios y redes/contacto. Enlaces de redes y datos de contacto solo al disponer de URLs reales. Copyright con año dinámico durante implementación. Contraste Cloud White; acento teal para detalle, no para bloques de texto pequeño.

## 6. Criterios responsive

Breakpoints orientativos: mobile hasta `639px`; tablet `640–1023px`; desktop desde `1024px`. Ajustar por contenido durante la implementación, no por modelo de dispositivo.

- **Desktop:** hero dividido; navegación completa; grillas de 4 columnas en servicios y 2×2 para diferenciales; proyectos editoriales; proceso horizontal.
- **Tablet:** hero 55/45 o apilado según ancho real; reducir columnas de tarjetas a 2; colapsar navegación cuando deje de caber con el selector y CTA; proceso de 5 etapas en dos filas o lista.
- **Mobile:** menú compacto; una columna para servicios, diferenciales, trabajo y FAQ; proceso vertical; CTA de ancho completo cuando ayude al toque; controles >=44px; imágenes recortadas con punto focal deliberado. El orden prioriza promesa, acciones, contenido y prueba visual; no confiar en hover.
- Evitar desbordamiento horizontal, titulares de una sola palabra aislada y botones apretados. Respetar zoom, navegación por teclado, contraste y reducción de movimiento. La implementación debe revisar contraste de cada combinación real de texto/fondo, incluidos estados.

## 7. Organización propuesta de Astro

Propuesta, aún no creada:

```text
src/
  components/
    site/SiteHeader.astro
    site/MobileMenu.astro
    site/SiteFooter.astro
    ui/Button.astro
    ui/SectionHeading.astro
    cards/ServiceCard.astro
    cards/ValueCard.astro
    cards/ProjectCard.astro
    cards/ProcessStep.astro
    home/Hero.astro
    home/ServicesSection.astro
    home/WhyZentraSection.astro
    home/SelectedWorkSection.astro
    home/ProcessSection.astro
    home/ProjectCtaSection.astro
    home/FaqSection.astro
  layouts/SiteLayout.astro
  pages/index.astro
  styles/tokens.css
  styles/global.css
```

`index.astro` compone secciones y recibe contenido; `SiteLayout` centraliza `<head>`, fuentes autorizadas y estilos globales; `SiteHeader`/`SiteFooter` se reutilizan en futuras páginas. Los componentes reciben datos por props y no contienen contenido comercial no verificado. Las variantes visuales se manejan con clases/atributos y tokens CSS, sin framework CSS ni framework de UI. La estructura es propuesta y no añade funcionalidades.

## 8. Pendientes antes de implementar Home

1. Obtener el documento maestro y verificar cualquier decisión prioritaria o contradicción.
2. Aprobar esta dirección visual, la alternancia de superficies y la composición del hero.
3. Confirmar idioma inicial y alcance real del selector EN / ES.
4. Confirmar la naturaleza y autorización de Nexo Digital, La Espiga, Bistro Verde y NovaTech; recopilar capturas, descripciones, tecnologías y URLs reales.
5. Validar textos finales de servicios, proceso y FAQ, además de canal de contacto y redes.
6. Elegir origen/forma de carga de Space Grotesk e Inter cuando se inicie la implementación.

La revisión de esta especificación es la decisión necesaria antes de construir la Home completa. No se ha desplegado el sitio ni se ha creado un archivo en Figma.
