// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check saved preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    darkModeToggle.textContent = '☀️ Light Mode';
} else {
    darkModeToggle.textContent = '🌙 Dark Mode';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});