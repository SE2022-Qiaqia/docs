export function isDarkTheme() {
  return document.getElementsByTagName('html')[0].classList.contains('dark');
}

export function watchThemeChange(callback: (isDark: boolean) => void) {
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        callback(isDarkTheme());
      }
    });
  }).observe(document.querySelector('html'), { attributes: true, childList: false, subtree: false, attributeFilter: ['class'] });
}
