
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const notification = document.getElementById('notification');

    // استرجاع الوضع المخزن في localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = '🌞'; // تغيير الأيقونة في الوضع الليلي
    }

    // تفعيل أو تعطيل الوضع الليلي
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // تغيير الأيقونة
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.textContent = '🌞'; // أيقونة الشمس
            notification.textContent = "تم التبديل إلى الوضع الليلي!";
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.textContent = '🌚'; // أيقونة القمر
            notification.textContent = "تم التبديل إلى الوضع النهاري!";
        }
        
        // إظهار الإشعار
        notification.classList.add('show');

        // إخفاء الإشعار بعد 3 ثوانٍ
        setTimeout(() => {
            notification.classList.remove('show');
        }, 500); // 3000 ملي ثانية (3 ثوانٍ)
    });
});
