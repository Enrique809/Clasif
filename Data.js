const tools = [
    {
        name: "ChatGPT",
        description: "Un modelo de lenguaje avanzado para conversaciones y generación de texto.",
        link: "https://chat.openai.com/",
        pago: "freemium", // gratuita, pago, freemium
        categoria: "texto", // audio, video, fotos, texto, general
        tags: ["conversación", "generación de texto", "asistente"]
    },
    {
        name: "Midjourney",
        description: "Generación de imágenes a partir de descripciones de texto.",
        link: "https://www.midjourney.com/",
        pago: "pago",
        categoria: "fotos",
        tags: ["generación de imágenes", "arte"]
    },
    {
        name: "ElevenLabs",
        description: "Generación de voz de alta calidad y clonación de voz.",
        link: "https://beta.elevenlabs.io/",
        pago: "freemium",
        categoria: "audio",
        tags: ["texto a voz", "clonación de voz"]
    },
    {
        name: "RunwayML",
        description: "Suite de herramientas de IA para edición y generación de video.",
        link: "https://runwayml.com/",
        pago: "freemium",
        categoria: "video",
        tags: ["edición de video", "generación de video", "efectos visuales"]
    },
    {
        name: "Canva Magic Studio",
        description: "Funcionalidades de IA para diseño gráfico, incluyendo edición de fotos y texto.",
        link: "https://www.canva.com/magic-studio/",
        pago: "freemium",
        categoria: "fotos",
        tags: ["diseño gráfico", "edición de fotos", "generación de texto"]
    },
    {
        name: "Google Gemini",
        description: "Familia de modelos de IA de Google para diversas tareas, incluyendo texto, código, audio e imagen.",
        link: "https://gemini.google.com/",
        pago: "freemium",
        categoria: "general",
        tags: ["asistente", "multimodal", "programación"]
    },
    {
        name: "CapCut",
        description: "Editor de video con herramientas de IA como subtítulos automáticos y eliminación de fondo.",
        link: "https://www.capcut.com/",
        pago: "gratuita",
        categoria: "video",
        tags: ["edición de video", "subtítulos", "efectos"]
    },
    {
        name: "DALL-E 3",
        description: "Generador de imágenes de OpenAI que crea imágenes a partir de descripciones de texto.",
        link: "https://openai.com/dall-e-3/",
        pago: "pago", // A través de ChatGPT Plus o API
        categoria: "fotos",
        tags: ["generación de imágenes", "arte digital"]
    },
    {
        name: "Synthesia",
        description: "Crea videos con avatares de IA realistas a partir de texto.",
        link: "https://www.synthesia.io/",
        pago: "pago",
        categoria: "video",
        tags: ["avatares de IA", "texto a video", "presentaciones"]
    },
    {
        name: "Descript",
        description: "Editor de audio y video que permite editar el contenido de la misma forma que editas texto.",
        link: "https://www.descript.com/",
        pago: "freemium",
        categoria: "audio",
        tags: ["edición de audio", "edición de video", "transcripción"]
    },
    {
        name: "Adobe Firefly",
        description: "Familia de modelos de IA generativa de Adobe para crear imágenes, efectos de texto y más.",
        link: "https://firefly.adobe.com/",
        pago: "freemium",
        categoria: "fotos",
        tags: ["generación de imágenes", "efectos de texto", "diseño"]
    },
    {
        name: "Rytr",
        description: "Asistente de escritura de IA para generar contenido para blogs, correos electrónicos y más.",
        link: "https://rytr.me/",
        pago: "freemium",
        categoria: "texto",
        tags: ["escritura", "generación de contenido", "marketing"]
    },
    {
        name: "Beautiful.ai",
        description: "Creador de presentaciones que usa IA para diseñar diapositivas visualmente atractivas.",
        link: "https://www.beautiful.ai/",
        pago: "pago",
        categoria: "general",
        tags: ["presentaciones", "diseño", "productividad"]
    },
    {
        name: "Lumen5",
        description: "Transforma texto en video de forma automática usando IA.",
        link: "https://lumen5.com/",
        pago: "freemium",
        categoria: "video",
        tags: ["texto a video", "marketing de video", "creación de contenido"]
    },
    {
        name: "Voice AI",
        description: "Modificador de voz en tiempo real con una amplia gama de voces y efectos.",
        link: "https://voice.ai/",
        pago: "freemium",
        categoria: "audio",
        tags: ["modificador de voz", "voz en tiempo real"]
    },
    {
        name: "Lexica Art",
        description: "Un motor de búsqueda y galería para imágenes generadas por IA (Stable Diffusion).",
        link: "https://lexica.art/",
        pago: "gratuita",
        categoria: "fotos",
        tags: ["generación de imágenes", "galería"]
    },
    {
        name: "DeepL Translate",
        description: "Traductor de IA que ofrece traducciones de alta calidad para múltiples idiomas.",
        link: "https://www.deepl.com/translator",
        pago: "freemium",
        categoria: "texto",
        tags: ["traducción", "idiomas"]
    },
    {
        name: "Remove.bg",
        description: "Elimina el fondo de cualquier imagen de forma automática con IA.",
        link: "https://www.remove.bg/",
        pago: "freemium",
        categoria: "fotos",
        tags: ["edición de fotos", "fondo transparente"]
    }
];
