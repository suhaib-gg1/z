
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
    // نصوص الترجمة لكل لغة
    const translations = {
        ar: {
            chz: 'تحدي حساب الزكاة',
            story: "قصص",
            z: 'حاسبة الزكاة',
            totalWealthLabel: 'المال الذي حال عليه الحول (بالريال):',
            debtLabel: 'الدين (بالريال):',
            calculateButton: 'احسب الزكاة',
            warning: 'تحذير : الحاسبة تم صنعها لغرض تعليمي لا أكثر لذلك قد تكون هناك بعض الأخطاء',
            resultText: 'الزكاة المستحقة هي:',
            a: 'ريال'
        },
        en: {
            chz: 'Zakat Calculation Challenge',
            story: "storys",
            z: 'Zakat Calculator',
            totalWealthLabel: 'Money over which one year has passed (in Riyals):',
            debtLabel: 'Debt (in Riyals):',
            calculateButton: 'Calculate Zakat',
            warning: 'Warning: This calculator is made for educational purposes only, so there may be some errors.',
            resultText: 'The zakat due is:',
            a: 'SR'
        },
        ur: {
            chz: 'زکات کیلکولیشن چیلنج',
            story: "کہانیاں",
            z: 'زکات کیلکولیٹر',
            totalWealthLabel: 'وہ پیسہ جس پر ایک سال گزر چکا ہے (ریال میں):',
            debtLabel: 'قرض (ریال میں):',
            calculateButton: 'زکات کا حساب کریں',
            warning: 'خبردار: یہ کیلکولیٹر صرف تعلیمی مقاصد کے لئے بنایا گیا ہے، اس میں کچھ غلطیاں ہو سکتی ہیں۔',
            resultText: 'زکات کی مقدار ہے:',
            a: 'ریال'
        },
        id: {
            chz: 'Tantangan Perhitungan Zakat',
            story: "cerita",
            z: 'Kalkulator Zakat',
            totalWealthLabel: 'Uang yang telah genap setahun (dalam Riyal):',
            debtLabel: 'Hutang (dalam Riyal):',
            calculateButton: 'Hitung Zakat',
            warning: 'Peringatan: Kalkulator ini dibuat untuk tujuan pendidikan saja, jadi mungkin ada beberapa kesalahan.',
            resultText: 'Zakat yang harus dibayar adalah:',
            a: 'SR'
        }
    };
    const langSelect = document.getElementById('lang');

   // استرجاع اللغة المخزنة من localStorage
    const savedLang = localStorage.getItem('language') || 'ar'; // إذا لم تكن هناك لغة مخزنة، استخدم الإنجليزية كافتراضية
    langSelect.value = savedLang; // تعيين اللغة المخزنة للقائمة المنسدلة
    const updateText = (lang) => {
        document.getElementById('chz').textContent = translations[lang].chz;
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('z').textContent = translations[lang].z;
        document.getElementById('total-wealth-label').textContent = translations[lang].totalWealthLabel;
        document.getElementById('debt-label').textContent = translations[lang].debtLabel;
        document.getElementById('calculate-button').textContent = translations[lang].calculateButton;
    };

    // تحديث النصوص عندما يقوم المستخدم بتغيير اللغة
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
        localStorage.setItem('language', selectedLang); // تخزين اللغة في localStorage
    });

    // تعيين النصوص عند تحميل الصفحة بناءً على اللغة المخزنة





    // Handle form submission
    document.getElementById('zakah-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // الحصول على القيم من النموذج
        const totalWealth = parseFloat(document.getElementById('total-wealth').value);
        const debt = parseFloat(document.getElementById('debt').value);

        // حساب الزكاة
        const zakahAmount = (totalWealth - debt) * 0.025; // نسبة الزكاة 2.5%

        // عرض النتيجة
        const selectedLang = langSelect.value;
        const resultText = translations[selectedLang].resultText;
        document.getElementById('result').textContent = `${resultText} ${zakahAmount.toFixed(2)} ${translations[selectedLang].a}`;
    });



    updateText(savedLang);

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
