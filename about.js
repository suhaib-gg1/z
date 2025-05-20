

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    // التعامل مع قائمة الهامبورغر
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // إضافة أو إزالة الفئة 'show'
    });

    // إخفاء القائمة إذا تم النقر خارجها
    document.addEventListener('click', (event) => {
        // التحقق إذا كان النقر خارج زر الهامبورغر أو القائمة
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show'); // إخفاء القائمة
        }
    });
});


function setupToggle(buttonId, contentId) {
    const toggleButton = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    toggleButton.addEventListener('click', function() {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; // إظهار المحتوى
            toggleButton.innerHTML = '&#9650;'; // تغيير السهم لأعلى
        } else {
            content.style.display = 'none'; // إخفاء المحتوى
            toggleButton.innerHTML = '&#9660;'; // تغيير السهم لأسفل
        }
    });
}

// إعداد الوظائف لكل جزء
setupToggle('toggleButton1', 'content1');
setupToggle('toggleButton2', 'content2');
setupToggle('toggleButton3', 'content3');


document.addEventListener('DOMContentLoaded', () => {
    // نصوص الترجمة لكل لغة
    const translations = {
        ar: {
            history:"السجل",
            story: "قصص",
            col: "حاسبة الزكاة",
            chz: 'تحدي حساب الزكاة',
            t: "القائمون على هذا المشروع",
            nom1: "💻الموقع والتطبيق💻",
            nom2: "📝الشرح داخل الفصل📝",
            nom3: "📊العروض التقديمية📊",
            p1: "صهيب بوزيدان",
            name1: "1- صهيب بوزيدان",
            name2: "2-عبدالرحمن خطيري",
            name3: "3-راكان الشهري",
            p3: "وديع ابويوسف",
            cb: "اختيار خلفية",
            rb: "إعادة الخلفية الافتراضية",
            p2: "صهيب بوزيدان",
        },
        en: {
            history:"history",
            story: "Stories",
            col: "Zakat Calculator",
            chz: 'Zakat Calculation Challenge',
            t: "Those responsible for this project",
            nom1: "💻Website and App💻",
            nom2: "📝Explanation Inside the Class📝",
            nom3: "📊Presentations📊",
            p1: "Suhayb Bouzidan",
            name1: "1- Suhayb Bouzidan",
            name2: "2- Abdulrahman Khatiri",
            name3: "3- Rakan Al-Shahri",
            p3: "Wadi' Abu Yusuf",
            cb: "Choose Background",
            rb: "Reset Default Background",
            p2: "Suhayb Bouzidan",
        },
        ur: {
            history:"تاریخ",
            story: "کہانیاں",
            col: "زکات کیلکولیٹر",
            chz: 'زکات کیلکولیشن چیلنج',
            t: "اس منصوبے کے ذمہ دار",
            nom1: "💻ویب سائٹ اور ایپ💻",
            nom2: "📝کلاس میں وضاحت📝",
            nom3: "📊پریزنٹیشنز📊",
            p1: "صہیب بوزیدان",
            name1: "1- صہیب بوزیدان",
            name2: "2- عبدالرحمن خطیری",
            name3: "3- راکان الشہری",
            p3: "وديع ابو يوسف",
            cb: "پس منظر منتخب کریں",
            rb: "ڈیفالٹ پس منظر ری سیٹ کریں",
            p2: "صہیب بوزیدان",
        },
        id: {
            history:"sejarah",
            story: "Cerita",
            col: "Kalkulator Zakat",
            chz: 'Tantangan Perhitungan Zakat',
            t: "Mereka yang bertanggung jawab atas proyek ini",
            nom1: "💻Situs web dan Aplikasi💻",
            nom2: "📝Penjelasan di Kelas📝",
            nom3: "📊Presentasi📊",
            p1: "Suhayb Bouzidan",
            name1: "1- Suhayb Bouzidan",
            name2: "2- Abdulrahman Khatiri",
            name3: "3- Rakan Al-Shahri",
            p3: "Wadi' Abu Yusuf",
            cb: "Pilih Latar Belakang",
            rb: "Setel Ulang Latar Belakang Default",
            p2: "Suhayb Bouzidan",
        }
    };
    
    const langSelect = document.getElementById('lang');

   // استرجاع اللغة المخزنة من localStorage
    const savedLang = localStorage.getItem('language') || 'ar'; // إذا لم تكن هناك لغة مخزنة، استخدم الإنجليزية كافتراضية
    langSelect.value = savedLang; // تعيين اللغة المخزنة للقائمة المنسدلة
    const updateText = (lang) => {
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('col').textContent = translations[lang].col;
        document.getElementById('chz').textContent = translations[lang].chz;
        document.getElementById('nom1').textContent = translations[lang].nom1;
         document.getElementById('nom2').textContent = translations[lang].nom2;
         document.getElementById('nom3').textContent = translations[lang].nom3;
         document.getElementById('p1').textContent = translations[lang].p1;
         document.getElementById('t').textContent = translations[lang].t;
         document.getElementById('name1').textContent = translations[lang].name1;
         document.getElementById('name2').textContent = translations[lang].name2;
         document.getElementById('name3').textContent = translations[lang].name3;
         document.getElementById('p3').textContent = translations[lang].p3;
         document.getElementById('history').textContent = translations[lang].history;
         document.getElementById('cb').textContent = translations[lang].cb;
         document.getElementById('rb').textContent = translations[lang].rb;

    };

    // تحديث النصوص عندما يقوم المستخدم بتغيير اللغة
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
        localStorage.setItem('language', selectedLang); // تخزين اللغة في localStorage
    });

    // تعيين النصوص عند تحميل الصفحة بناءً على اللغة المخزنة
    updateText(savedLang);
})
    // الدالة لاختيار صورة كخلفية
    document.getElementById('cb').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function() {
                    // حفظ الصورة في localStorage
                    localStorage.setItem('background-image', reader.result);
                    document.body.style.backgroundImage = `url(${reader.result})`;
                    document.body.style.backgroundSize = 'cover';  // لجعل الصورة تغطي الشاشة بالكامل
                    document.body.style.backgroundAttachment = 'fixed';  // لجعل الخلفية ثابتة أثناء التمرير
                };
                
                reader.readAsDataURL(file);  // تحويل الصورة إلى قاعدة بيانات URL لتمكين استخدامها كخلفية
            }
        });
        
        input.click();  // فتح نافذة اختيار الملفات
    });

    // دالة لإعادة الخلفية الافتراضية
    document.getElementById('rb').addEventListener('click', function() {
        localStorage.removeItem('background-image');
        document.body.style.backgroundImage = '';  // إزالة الخلفية
    });

    // عند تحميل الصفحة، يتم تطبيق الخلفية المخزنة إذا كانت موجودة
    window.addEventListener('load', function() {
        const savedBackground = localStorage.getItem('background-image');
        if (savedBackground) {
            document.body.style.backgroundImage = `url(${savedBackground})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    });
