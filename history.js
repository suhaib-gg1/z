document.addEventListener('DOMContentLoaded', () => {
    // نصوص الترجمة لكل لغة
    const translations = {
        ar: {
            col: "حاسبة الزكاة",
            chz: 'تحدي حساب الزكاة',
            story: "قصص",
            about: "عَنْ",
            t: "التاريخ",
            m: "المال (بالريال)",
            d: "الدين (بالريال)",
            km: "الزكاة المستحقة (بالريال)",
            a: "السجل",
            nom: "ترتيب العمليات", // الترجمة بالعربية
        },
        en: {
            col: "Zakat Calculator",
            chz: 'Zakat Calculation Challenge',
            story: "storys",
            about: "about",
            t: "date",
            m: "money (in Riyals)",
            d: "debt (in Riyals)",
            km: "due zakat (in Riyals)",
            a: "history", // تم استبدال "record" بـ "history"
            nom: "Sort Operations", // الترجمة بالإنجليزية
        },
        ur: {
            col: "زکات کیلکولیٹر",
            chz: 'زکات کیلکولیشن چیلنج',
            story: "کہانیاں",
            about: "کے بارے میں",
            t: "تاریخ",
            m: "پیسہ (ریال میں)",
            d: "قرض (ریال میں)",
            km: "مستحق زکات (ریال میں)",
            a: "تاریخ", // تم استبدال "ریکارڈ" بـ "تاریخ"
            nom: "عملیات کو ترتیب دیں", // الترجمة بالأردية
        },
        id: {
            chz: 'Tantangan Perhitungan Zakat',
            story: "cerita",
            about: "tentang",
            t: "tanggal",
            m: "uang (dalam Riyal)",
            d: "hutang (dalam Riyal)",
            km: "zakat yang harus dibayar (dalam Riyal)",
            a: "sejarah", // تم استبدال "catatan" بـ "sejarah" (التاريخ)
            nom: "Urutkan Operasi", // الترجمة الإندونيسية
        }
    };
    
    

    const langSelect = document.getElementById('lang');

    // استرجاع اللغة المخزنة من localStorage
    const savedLang = localStorage.getItem('language') || 'ar'; // إذا لم تكن هناك لغة مخزنة، استخدم العربية كافتراضية
    langSelect.value = savedLang; // تعيين اللغة المخزنة للقائمة المنسدلة

    const updateText = (lang) => {
        document.getElementById('col').textContent = translations[lang].col;
        document.getElementById('chz').textContent = translations[lang].chz;
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('about').textContent = translations[lang].about;
        document.getElementById('t').textContent = translations[lang].t;
        document.getElementById('m').textContent = translations[lang].m;
        document.getElementById('d').textContent = translations[lang].d;
        document.getElementById('km').textContent = translations[lang].km;
        document.getElementById('a').textContent = translations[lang].a; // إضافة الترجمة للتاريخ
        document.getElementById('nom').textContent = translations[lang].nom; // إضافة الترجمة للتاريخ
    };

    // تحديث النصوص عندما يقوم المستخدم بتغيير اللغة
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
        localStorage.setItem('language', selectedLang); // تخزين اللغة في localStorage
    });

    // تحديث النصوص بناءً على اللغة المخزنة عند تحميل الصفحة
    updateText(savedLang);
});

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
document.addEventListener('DOMContentLoaded', () => {
    const historyTable = document.getElementById('history-table').getElementsByTagName('tbody')[0];

    // استرجاع السجل المخزن من localStorage
    const history = JSON.parse(localStorage.getItem('zakahHistory')) || [];

    // وظيفة لعرض السجل في الجدول
    function displayHistory() {
        historyTable.innerHTML = ''; // مسح الجدول الحالي

        history.forEach((entry, index) => {
            const row = historyTable.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td> <!-- عرض عدد العمليات -->
                <td>${entry.date}</td>
                <td>${entry.totalWealth}</td>
                <td>${entry.debt}</td>
                <td>${entry.zakahAmount}</td>
            `;
        });

     
    }

    // وظيفة لحذف السجل من التاريخ
    function deleteHistoryEntry(index) {
        // حذف العنصر من المصفوفة
        history.splice(index, 1);
        
        // تحديث localStorage بعد الحذف
        localStorage.setItem('zakahHistory', JSON.stringify(history));
        
        // إعادة عرض السجل بعد التحديث
        displayHistory();
    }

    // عرض السجل عند تحميل الصفحة
    displayHistory();
});
