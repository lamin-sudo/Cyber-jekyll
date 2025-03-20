/* Dark mode toggle with localStorage */
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const currentMode = localStorage.getItem('theme') || 'light';

if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌞';
} else {
    darkModeToggle.textContent = '🌙';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? '🌞' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

/* Sidebar menu toggle with smooth animation */
const sidebarToggle = document.querySelector('#hamburger-menu');
const sidebar = document.querySelector('#sidebar');
const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
overlay.style.zIndex = '1001';
overlay.style.display = 'none';
document.body.appendChild(overlay);

sidebarToggle.addEventListener('click', () => {
    const isActive = sidebar.classList.toggle('active');
    overlay.style.display = isActive ? 'block' : 'none';
    sidebarToggle.classList.toggle('open', isActive);
});

overlay.addEventListener('click', () => {
    closeSidebar();
});

/* Close sidebar when a link is clicked */
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href && href !== "#") {
            setTimeout(() => {
                window.location.href = href;
                closeSidebar();
            }, 300);
        }
    });
});

/* Helper function to close the sidebar */
function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.style.display = 'none';
    sidebarToggle.classList.remove('open');
}