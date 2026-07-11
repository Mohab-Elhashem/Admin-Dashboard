export const toggleTheme = () => {
    const root = window.document.documentElement;    // html select
    const isDark = root.classList.toggle('dark');   // add or remove class dark
    localStorage.setItem('theme', isDark ? 'dark' : 'light');  // save on localstorage
};