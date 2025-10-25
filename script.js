// Seleccionar el toggle del modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');

// Mapa de iconos para modo oscuro
const iconMap = {
  'lluvia': './assets/Iconos_dark/lluvia_icon_dark.svg',
  'nublado': './assets/Iconos_dark/nublado_icon_dark.svg',
  'llovizna': './assets/Iconos_dark/llovizna_icon_dark.svg',
  'granizo': './assets/Iconos_dark/granizo_icon_dark.svg',
  'sombrilla': './assets/Iconos_dark/sombrilla_icon_dark.svg',
  'humedad': './assets/Iconos_dark/humedad_icon_dark.svg',
  'viento': './assets/Iconos_dark/viento_icon_dark.svg',
  'menu': './assets/Iconos_dark/menu_icon_dark.svg',
  'luna': './assets/Iconos_dark/luna_icon_dark.svg',
  'user': './assets/Iconos_dark/user_icon_dark.svg'
};

// Escuchar el click para cambiar modo
darkModeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');

  // Cambiar todos los iconos con data-icon
  document.querySelectorAll('img[data-icon]').forEach(img => {
    const iconName = img.dataset.icon;

    if (isDark) {
      // Guardar la ruta original si no existe
      img.dataset.original = img.dataset.original || img.src;
      // Cambiar a versión dark
      img.src = iconMap[iconName] || img.src;
    } else {
      // Volver a versión original
      img.src = img.dataset.original || img.src;
    }
  });
});

