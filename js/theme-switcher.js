document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTimeElement = document.getElementById('current-time');
    
    // 检查本地存储中的主题设置
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // 添加事件监听器
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // 更新当前时间的函数
    function updateCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // 初始更新时间
    updateCurrentTime();

    // 每秒更新一次时间
    setInterval(updateCurrentTime, 1000);

    // 移动端导航菜单处理
    const navItems = document.querySelectorAll('.nav-item');
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.dropdown');

            if (dropdown) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    item.classList.toggle('active');
                });
            }
        });
    }

    // 检测窗口大小变化
    window.addEventListener('resize', () => {
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            location.reload();
        }
    });
});