// 获取当前时间并显示在状态栏
function updateStatusBarTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const timeElement = document.querySelector('.status-bar-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    // 更新状态栏时间
    updateStatusBarTime();
    setInterval(updateStatusBarTime, 60000); // 每分钟更新一次
    
    // 设置当前活跃的导航项
    const currentPage = window.location.pathname.split('/').pop();
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
});

// 模拟点击书籍封面跳转到详情页
function navigateToBookDetail() {
    window.location.href = 'book_detail.html';
}

// 模拟点击阅读按钮跳转到阅读页
function navigateToReader() {
    window.location.href = 'reader.html';
}

// 分类切换
function switchCategory(elem) {
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(cat => cat.classList.remove('active'));
    elem.classList.add('active');
} 