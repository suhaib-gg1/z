document.addEventListener('DOMContentLoaded', () => {
    // نصوص الترجمة لكل لغة
    const translations = {
        ar: {
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
    const updateText = (lang) => {
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('z').textContent = translations[lang].z;
        document.getElementById('total-wealth-label').textContent = translations[lang].totalWealthLabel;
        document.getElementById('debt-label').textContent = translations[lang].debtLabel;
        document.getElementById('calculate-button').textContent = translations[lang].calculateButton;
    };

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
    });






    
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





    // قائمة الهمبرغر
    document.getElementById('hamburger').addEventListener('click', () => {
        const navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show'); // إضافة أو إزالة الفئة 'show'
    })});




    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        // التبديل بين الوضعين
        document.body.classList.toggle('dark-mode');
        
        // تغيير الزر ليعكس الوضع الحالي (نهار أو ليل)
        const button = document.getElementById('toggle-dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            button.textContent = '🌞';  // تغيير رمز الزر إلى الشمس عند تفعيل الوضع الليلي
        } else {
            button.textContent = '🌚';  // تغيير رمز الزر إلى القمر عند العودة للوضع النهاري
        }
    });
    
