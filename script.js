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
            history: "السجل",
            chz: 'تحدي حساب الزكاة',
            story: "قصص",
            about: "عَنْ",
            z: 'حاسبة الزكاة',
            totalWealthLabel: 'المال الذي حال عليه الحول (بالريال):',
            debtLabel: 'الدين (بالريال):',
            calculateButton: 'احسب الزكاة',
            warning: 'تحذير : الحاسبة تم صنعها لغرض تعليمي لا أكثر لذلك قد تكون هناك بعض الأخطاء',
            resultText: 'الزكاة المستحقة هي:',
            noZakahMessage: 'لا يوجد زكاة مستحقة بناءً على القيم المدخلة.',
            a: 'ريال',
            cb: "اختيار خلفية",
            rb: "إعادة الخلفية الافتراضية",
        },
        en: {
            history: "history",
            chz: 'Zakat Calculation Challenge',
            story: "stories",
            about: "about",
            z: 'Zakat Calculator',
            totalWealthLabel: 'Money over which one year has passed (in Riyals):',
            debtLabel: 'Debt (in Riyals):',
            calculateButton: 'Calculate Zakat',
            warning: 'Warning: This calculator is made for educational purposes only, so there may be some errors.',
            resultText: 'The zakat due is:',
            noZakahMessage: 'No zakat due based on the entered values.',
            a: 'SR',
            cb: "Choose Background",
            rb: "Reset Default Background",
        },
        ur: {
            history: "تاریخ",
            chz: 'زکات کیلکولیشن چیلنج',
            story: "کہانیاں",
            about: "کے بارے میں",
            z: 'زکات کیلکولیٹر',
            totalWealthLabel: 'وہ پیسہ جس پر ایک سال گزر چکا ہے (ریال میں):',
            debtLabel: 'قرض (ریال میں):',
            calculateButton: 'زکات کا حساب کریں',
            warning: 'خبردار: یہ کیلکولیٹر صرف تعلیمی مقاصد کے لئے بنایا گیا ہے، اس میں کچھ غلطیاں ہو سکتی ہیں۔',
            resultText: 'زکات کی مقدار ہے:',
            noZakahMessage: 'دی گئی قیمتوں کی بنیاد پر کوئی زکات مستحق نہیں ہے۔',
            a: 'ریال',
            cb: "پس منظر منتخب کریں",
            rb: "ڈیفالٹ پس منظر ری سیٹ کریں",
        },
        id: {
            history: "sejarah",
            chz: 'Tantangan Perhitungan Zakat',
            story: "cerita",
            about: "tentang",
            z: 'Kalkulator Zakat',
            totalWealthLabel: 'Uang yang telah genap setahun (dalam Riyal):',
            debtLabel: 'Hutang (dalam Riyal):',
            calculateButton: 'Hitung Zakat',
            warning: 'Peringatan: Kalkulator ini dibuat untuk tujuan pendidikan saja, jadi mungkin ada beberapa kesalahan.',
            resultText: 'Zakat yang harus dibayar adalah:',
            noZakahMessage: 'Tidak ada zakat yang harus dibayar berdasarkan nilai yang dimasukkan.',
            a: 'SR',
            cb: "Pilih Latar Belakang",
            rb: "Setel Ulang Latar Belakang Default",
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
        document.getElementById('about').textContent = translations[lang].about;
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

    document.getElementById('zakah-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // الحصول على القيم من النموذج
        const totalWealth = parseFloat(document.getElementById('total-wealth').value);
        const debt = parseFloat(document.getElementById('debt').value);
    
        // حساب الزكاة
        let zakahAmount = (totalWealth - debt) * 0.025; // نسبة الزكاة 2.5%
    
        // التأكد من أن قيمة الزكاة لا تكون سلبية
        if (zakahAmount < 0) {
            zakahAmount = 0;
        }
    
        // عرض النتيجة للمستخدم
        const selectedLang = langSelect.value;
        const resultText = translations[selectedLang].resultText;
        const noZakahMessage = translations[selectedLang].noZakahMessage;
    
        const resultElement = document.getElementById('result');
    
        // إظهار رسالة مختلفة إذا كانت الزكاة 0
        if (zakahAmount === 0) {
            resultElement.textContent = noZakahMessage;
            resultElement.style.color = 'red';  // لون أحمر عند عدم وجود زكاة
        } else {
            resultElement.textContent = `${resultText} ${zakahAmount.toFixed(2)} ${translations[selectedLang].a}`;
            resultElement.style.color = '#00aa09';  // لون أخضر عندما تكون الزكاة أكبر من 0
        }
    
        // إذا كانت الزكاة 0 أو أقل، لا تتم إضافة السجل
        if (zakahAmount <= 0) {
            console.log("الزكاة تساوي 0 أو أقل. لن تتم إضافة السجل.");
            return; // الخروج من الدالة بدون إضافة السجل
        }
    
        // الحصول على السجل المخزن من localStorage
        const history = JSON.parse(localStorage.getItem('zakahHistory')) || [];
    
        // التحقق من آخر سجل فقط (إن وجد)
        const lastEntry = history[history.length - 1];
    
        // التحقق إذا كانت القيم الحالية هي نفسها القيم في آخر سجل
        if (lastEntry && lastEntry.totalWealth === totalWealth && lastEntry.debt === debt && lastEntry.zakahAmount === zakahAmount.toFixed(2)) {
            console.log("القيم هي نفسها القيم الأخيرة. لن تتم إضافة السجل.");
        } else {
            // إذا كانت القيم مختلفة، إضافة السجل الجديد
            const date = new Date().toLocaleString();
            const zakahRecord = {
                date: date,
                totalWealth: totalWealth,
                debt: debt,
                zakahAmount: zakahAmount.toFixed(2)
            };
    
            // إضافة السجل إلى السجل الحالي في localStorage
            history.push(zakahRecord);
            localStorage.setItem('zakahHistory', JSON.stringify(history));
            console.log("تم إضافة السجل الجديد.");
        }
    });
    
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
    
