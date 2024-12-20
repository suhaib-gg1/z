document.addEventListener('DOMContentLoaded', () => {
    // التعامل مع قائمة الهامبورغر
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // إضافة أو إزالة الفئة 'show'
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show'); // إخفاء القائمة
        }
    });

    // نصوص الترجمة
    const translations = {
        ar: {
            chz: 'تحدي حساب الزكاة',
            story: "قصص",
            z: 'حاسبة الزكاة',
            totalWealthLabel: 'المال الذي حال عليه الحول (بالريال):',
            debtLabel: 'الدين (بالريال):',
            calculateButton: 'احسب الزكاة',
            warning: 'تحذير: الحاسبة تم صنعها لغرض تعليمي لا أكثر لذلك قد تكون هناك بعض الأخطاء.',
            resultText: 'الزكاة المستحقة هي:',
            a: 'ريال'
        },
        en: {
            chz: 'Zakat Calculation Challenge',
            story: "Stories",
            z: 'Zakat Calculator',
            totalWealthLabel: 'Money over which one year has passed (in Riyals):',
            debtLabel: 'Debt (in Riyals):',
            calculateButton: 'Calculate Zakat',
            warning: 'Warning: This calculator is made for educational purposes only, so there may be some errors.',
            resultText: 'The zakat due is:',
            a: 'SR'
        }
        // يمكن إضافة لغات أخرى هنا
    };

    const langSelect = document.getElementById('lang');
    const savedLang = localStorage.getItem('language') || 'ar';
    langSelect.value = savedLang;

    const updateText = (lang) => {
        document.getElementById('chz').textContent = translations[lang].chz;
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('z').textContent = translations[lang].z;
        document.getElementById('total-wealth-label').textContent = translations[lang].totalWealthLabel;
        document.getElementById('debt-label').textContent = translations[lang].debtLabel;
        document.getElementById('calculate-button').textContent = translations[lang].calculateButton;
        document.getElementById('warning').textContent = translations[lang].warning;
    };

    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateText(selectedLang);
        localStorage.setItem('language', selectedLang);
    });

    updateText(savedLang);

    // التعامل مع حساب الزكاة
    document.getElementById('zakah-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const totalWealth = parseFloat(document.getElementById('total-wealth').value) || 0;
        const debt = parseFloat(document.getElementById('debt').value) || 0;
        const zakahAmount = (totalWealth - debt) * 0.025;

        const selectedLang = langSelect.value;
        const resultText = translations[selectedLang].resultText;
        const currency = translations[selectedLang].a;

        document.getElementById('result').textContent = `${resultText} ${zakahAmount.toFixed(2)} ${currency}`;
    });

    // الوضع الليلي
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').textContent = '🌞';
    }

    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            document.getElementById('toggle-dark-mode').textContent = '🌞';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            document.getElementById('toggle-dark-mode').textContent = '🌚';
        }
    });
});
