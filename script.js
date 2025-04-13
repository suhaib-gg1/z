document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    // التعامل مع قائمة الهامبورغر
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // إخفاء القائمة إذا تم النقر خارجها
    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    });

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
            g: 'سعر جرام الذهب (بالريال):',
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
            g: 'Gold Price per Gram (in Riyals):',
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
            warning: 'خبردار: یہ کیلکولیشر صرف تعلیمی مقاصد کے لئے بنایا گیا ہے، اس میں کچھ غلطیاں ہو سکتی ہیں۔',
            resultText: 'زکات کی مقدار ہے:',
            noZakahMessage: 'دی گئی قیمتوں کی بنیاد پر کوئی زکات مستحق نہیں ہے۔',
            a: 'ریال',
            cb: "پس منظر منتخب کریں",
            rb: "ڈیفالٹ پس منظر ری سیٹ کریں",
            g: 'سونے کی قیمت فی گرام (ریال میں):',
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
            g: 'Harga Emas per Gram (dalam Riyal):',
        }
    };

    const langSelect = document.getElementById('lang');
    const savedLang = localStorage.getItem('language') || 'ar';
    langSelect.value = savedLang;

    // حفظ واسترجاع سعر الذهب
    const goldPriceInput = document.getElementById('gold-price');
    const savedGoldPrice = localStorage.getItem('goldPrice');
    if (savedGoldPrice) {
        goldPriceInput.value = savedGoldPrice;
    }

    goldPriceInput.addEventListener('input', function() {
        localStorage.setItem('goldPrice', this.value);
    });

    const updateText = (lang) => {
        // تحديث النصوص الأساسية
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
        document.getElementById('g').textContent = translations[lang].g;

        // تحديث النتيجة إذا كانت معروضة
        const resultElement = document.getElementById('result');
        if (resultElement.textContent) {
            const totalWealth = parseFloat(document.getElementById('total-wealth').value) || 0;
            const debt = parseFloat(document.getElementById('debt').value) || 0;
            const goldPrice = parseFloat(document.getElementById('gold-price').value) || 0;
            
            const netWealth = totalWealth - debt;
            const nisab = 85 * goldPrice;
            
            if (netWealth < nisab) {
                resultElement.textContent = translations[lang].noZakahMessage;
                resultElement.style.color = 'red';
            } else {
                const zakahAmount = netWealth * 0.025;
                resultElement.textContent = `${translations[lang].resultText} ${zakahAmount.toFixed(2)} ${translations[lang].a}`;
                resultElement.style.color = '#00aa09';
            }
        }
    };

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
        localStorage.setItem('language', selectedLang);
    });

    updateText(savedLang);

    const resultElement = document.getElementById('result');

    document.getElementById('zakah-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const totalWealth = parseFloat(document.getElementById('total-wealth').value) || 0;
        const debt = parseFloat(document.getElementById('debt').value) || 0;
        const goldPrice = parseFloat(document.getElementById('gold-price').value) || 0;
        
        const netWealth = totalWealth - debt;
        const nisab = 85 * goldPrice;

        const lang = langSelect.value;
        const t = translations[lang];

        if (netWealth < nisab) {
            resultElement.textContent = t.noZakahMessage;
            resultElement.style.color = 'red';
            return;
        }

        const zakahAmount = netWealth * 0.025;
        resultElement.textContent = `${t.resultText} ${zakahAmount.toFixed(2)} ${t.a}`;
        resultElement.style.color = '#00aa09';

        const history = JSON.parse(localStorage.getItem('zakahHistory')) || [];
        const lastEntry = history[history.length - 1];

        if (!lastEntry || lastEntry.totalWealth !== totalWealth || lastEntry.debt !== debt || lastEntry.zakahAmount !== zakahAmount.toFixed(2)) {
            const zakahRecord = {
                date: new Date().toLocaleString(),
                totalWealth,
                debt,
                zakahAmount: zakahAmount.toFixed(2)
            };
            history.push(zakahRecord);
            localStorage.setItem('zakahHistory', JSON.stringify(history));
        }
    });

    // باقي الكود الخاص بخلفية الصورة...
    document.getElementById('cb').addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();

                reader.onload = function() {
                    localStorage.setItem('background-image', reader.result);
                    document.body.style.backgroundImage = `url(${reader.result})`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundAttachment = 'fixed';
                };

                reader.readAsDataURL(file);
            }
        });

        input.click();
    });

    document.getElementById('rb').addEventListener('click', function() {
        localStorage.removeItem('background-image');
        document.body.style.backgroundImage = '';
    });

    window.addEventListener('load', function() {
        const savedBackground = localStorage.getItem('background-image');
        if (savedBackground) {
            document.body.style.backgroundImage = `url(${savedBackground})`;
            document.body.style.backgroundSize = 'cover';
            document.body.style.backgroundAttachment = 'fixed';
        }
    });
});
