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

            del: "حذف السجل",  // الترجمة بالعربية

            nom: "ترتيب العمليات", // الترجمة بالعربية

            cb: "اختيار خلفية",

            rb: "إعادة الخلفية الافتراضية",

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

            del: "Delete Record", // الترجمة بالإنجليزية

            nom: "Sort Operations", // الترجمة بالإنجليزية

            cb: "Choose Background",

            rb: "Reset Default Background",

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

            del: "ریکارڈ حذف کریں", // الترجمة بالأردية

            nom: "عملیات کو ترتیب دیں", // الترجمة بالأردية

            cb: "پس منظر منتخب کریں",

            rb: "ڈیفالٹ پس منظر ری سیٹ کریں",

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

            del: "Hapus Rekaman", // الترجمة الإندونيسية

            nom: "Urutkan Operasi", // الترجمة الإندونيسية

            cb: "Pilih Latar Belakang",

            rb: "Setel Ulang Latar Belakang Default",

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

        document.getElementById('del').textContent = translations[lang].del;

        document.getElementById('a').textContent = translations[lang].a; // إضافة الترجمة للتاريخ

        document.getElementById('nom').textContent = translations[lang].nom; // إضافة الترجمة للتاريخ

        document.getElementById('cb').textContent = translations[lang].cb;

        document.getElementById('rb').textContent = translations[lang].rb;

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

                <td>${entry.zakahAmount}</td>

                <td><button class="delete-btn" data-index="${index}">🗑️</button></td>

            `;

        });



        // إضافة مستمع الحدث لأزرار الحذف

        const deleteButtons = document.querySelectorAll('.delete-btn');

        deleteButtons.forEach(button => {

            button.addEventListener('click', (event) => {

                const index = event.target.getAttribute('data-index');

                deleteHistoryEntry(index);

            });

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
