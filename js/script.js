// تفعيل القائمة المنسدلة للجوال
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // إضافة تأثيرات للتمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // تفعيل الأسئلة الشائعة
    const faqButtons = document.querySelectorAll('.bg-white.rounded-lg.shadow-md.p-6 button');
    
    if (faqButtons.length > 0) {
        faqButtons.forEach(button => {
            button.addEventListener('click', function() {
                const answer = this.parentElement.querySelector('.mt-4');
                const icon = this.querySelector('svg');
                
                // إغلاق جميع الإجابات الأخرى
                faqButtons.forEach(otherButton => {
                    if (otherButton !== this) {
                        const otherAnswer = otherButton.parentElement.querySelector('.mt-4');
                        const otherIcon = otherButton.querySelector('svg');
                        otherAnswer.classList.add('hidden');
                        otherIcon.classList.remove('rotate-180');
                    }
                });
                
                // تبديل حالة الإجابة الحالية
                answer.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        });
    }
});