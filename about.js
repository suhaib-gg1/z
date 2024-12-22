

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

document.addEventListener('DOMContentLoaded', () => {
    // استرجاع الوضع المخزن
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌞';
    }

    // تفعيل أو تعطيل الوضع الليلي
    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // حفظ الوضع في localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            document.getElementById('toggle-dark-mode').textContent = '🌞';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            document.getElementById('toggle-dark-mode').textContent = '🌚';
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
            story: "قصص",
            col: "حاسبة الزكاة",
            chz: 'تحدي حساب الزكاة',
            t: "القائمون على هذا التطبيق",
            nom1: "💻الموقع والتطبيق💻",
            nom2: "📝الشرح داخل الفصل📝",
            nom3: "📊العروض التقديمية",
            p1: "صهيب بوزيدان",
            name1: "1- صهيب بوزيدان",
            name2: "2-عبدالرحمن خطيري",
            name3: "3-خالد القحطاني",
            p3: "وديع ابويوسف",
        },
        en: {
            story: "Stories",
            col: "Zakat Calculator",
            chz: 'Zakat Calculation Challenge',
            t: "The creators of this application",
            nom1: "💻Website and App💻",
            nom2: "📝Explanation Inside the Class📝",
            nom3: "📊Presentations",
            p1: "Suhayb Bouzidan",
            name1: "1- Suhayb Bouzidan",
            name2: "2- Abdulrahman Khatiri",
            name3: "3- Khalid Al-Qahtani",
            p3: "Wadi' Abu Yusuf",
        },
        ur: {
            story: "کہانیاں",
            col: "زکات کیلکولیٹر",
            chz: 'زکات کیلکولیشن چیلنج',
            t: "اس ایپلیکیشن کے تخلیق کار",
            nom1: "💻ویب سائٹ اور ایپ💻",
            nom2: "📝کلاس میں وضاحت📝",
            nom3: "📊پریزنٹیشنز",
            p1: "صہیب بوزیدان",
            name1: "1- صہیب بوزیدان",
            name2: "2- عبدالرحمن خطیری",
            name3: "3- خالد القحطانی",
            p3: "وديع ابو يوسف",
        },
        id: {
            story: "Cerita",
            col: "Kalkulator Zakat",
            chz: 'Tantangan Perhitungan Zakat',
            t: "Pencipta aplikasi ini",
            nom1: "💻Situs web dan Aplikasi💻",
            nom2: "📝Penjelasan di Kelas📝",
            nom3: "📊Presentasi",
            p1: "Suhayb Bouzidan",
            name1: "1- Suhayb Bouzidan",
            name2: "2- Abdulrahman Khatiri",
            name3: "3- Khalid Al-Qahtani",
            p3: "Wadi' Abu Yusuf",
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