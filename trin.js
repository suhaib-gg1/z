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
            history:"السجل",
            story: "قصص",
            col:"حاسبة الزكاة",
            about:"عَنْ",
            chz: 'تحدي حساب الزكاة',
            checkAnswer: 'تحقق الإجابة',
            changeNumber: 'تغيير الرقم',
            no:'الإجابة غير صحيحة. الإجابة الصحيحة هي',
            cb: "اختيار خلفية",
            rb: "إعادة الخلفية الافتراضية",
        },
        en: {
            history:"history",
            story: "storys",
            col:"Zakat Calculator",
            about:"about",
            chz: 'Zakat Calculation Challenge',
            checkAnswer: 'Check Answer',
            changeNumber: 'Change Number',
            cb: "Choose Background",
            rb: "Reset Default Background",
        },
        ur: {
            history:"تاریخ",
            story: "کہانیاں",
            col:"زکات کیلکولیٹر",
            about:"کے بارے میں",
            chz: 'زکات کیلکولیشن چیلنج',
            checkAnswer: 'جواب چیک کریں',
            changeNumber: 'نیا نمبر تبدیل کریں',
            cb: "پس منظر منتخب کریں",
            rb: "ڈیفالٹ پس منظر ری سیٹ کریں",
        },
        id: {
            history:"sejarah",
            story: "cerita",
            col:"Kalkulator Zakat",
            about:"tentang",
            chz: 'Tantangan Perhitungan Zakat',
            checkAnswer: 'Periksa Jawaban',
            changeNumber: 'Ganti Angka',
            cb: "Pilih Latar Belakang",
            rb: "Setel Ulang Latar Belakang Default",
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
        document.getElementById('userAnswer').textContent = translations[lang].userAnswer;
        document.getElementById('checkAnswer').textContent = translations[lang].checkAnswer;
        document.getElementById('changeNumber').textContent = translations[lang].changeNumber;
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
})
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
// متغير لتخزين النقاط
let score = parseInt(localStorage.getItem('score')) || 0;  // استرجاع النقاط من localStorage إذا كانت موجودة

// تحديث عرض النقاط في الصفحة
function updateScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = ` ${score}`;
    localStorage.setItem('score', score);  // حفظ النقاط في localStorage
}

// وظيفة لتوليد رقم عشوائي من مضاعفات 10 بين 1 و 100000
function generateRandomNumber() {
    return Math.floor(Math.random() * 10000) * 10 + 10;
}

// تحديث الرقم العشوائي في الصفحة
function updateRandomNumber() {
    // إخفاء العناصر المتعلّقة بالرقم السابق
    document.getElementById("result").classList.add("hidden");
    document.getElementById("userAnswer").value = "";  // إعادة تعيين حقل الإدخال
    document.getElementById("userAnswer").classList.remove("hidden");

    const randomNum = generateRandomNumber();
    document.getElementById("randomNumber").textContent = ` ${randomNum}`;
    
    // حفظ الرقم العشوائي في المتغير لاستخدامه لاحقاً
    window.currentRandomNumber = randomNum;
}

// التحقق من الإجابة
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById("userAnswer").value);
    const correctAnswer = (window.currentRandomNumber * 2.5) / 100;
    const resultDiv = document.getElementById("result");

    // إزالة أي تأثيرات سابقة
    resultDiv.classList.remove("correct-answer");
     // تعطيل الزر لمنع الإجابة مجددًا
     document.getElementById("checkAnswer").disabled = true;

    
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = "🎉✨🏆";
        resultDiv.style.color = "green";
        resultDiv.classList.add("correct-answer");  // إضافة التأثير
        score++; // زيادة النقاط عند الإجابة الصحيحة
        document.getElementById('scoreDisplay').classList.add('green');
            
          // تحديد المدة التي سيظل فيها الزر معطلاً (مثلاً لمدة 1 ثانية)
    // تعطيل الزر لمدة ثانيتين ثم إعادة تفعيله
    setTimeout(() => {
        document.getElementById("checkAnswer").disabled = false;  // إعادة تفعيل الزر بعد 2 ثانية
        updateRandomNumber(); // تحديث الرقم العشوائي الجديد بعد إعادة تفعيل الزر
    }, 400); // تعطيل الزر لمدة 2 ثانية
    } else {
        resultDiv.textContent = `الإجابة الصحيحة هي: ${correctAnswer}`;
        resultDiv.style.color = "red";
        document.getElementById('scoreDisplay').classList.remove('green');
        setTimeout(() => {
            // تحديث السؤال بعد المدة المحددة
            updateRandomNumber(); // تحديث السؤال الجديد
            document.getElementById("checkAnswer").disabled = false;  // إعادة تفعيل الزر
        }, 1500);  // تعطيل الزر لمدة 1 ثانية (1000 ملي ثانية)
        
    }

    resultDiv.classList.remove("hidden");
    updateScore(); // تحديث عرض النقاط
}




// إضافة الأحداث إلى الأزرار
document.getElementById("checkAnswer").addEventListener("click", checkAnswer);
document.getElementById("changeNumber").addEventListener("click", updateRandomNumber);

// إضافة حدث "Enter" لإرسال الجواب عند الضغط على زر "Enter"
document.getElementById("userAnswer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // تحقق إذا كان مفتاح "Enter" مضغوطًا
        event.preventDefault(); // لمنع السلوك الافتراضي مثل إرسال النموذج
        checkAnswer();  // استدعاء دالة التحقق من الإجابة
    }
});

// عند تحميل الصفحة، نعرض الرقم العشوائي لأول مرة
window.onload = updateRandomNumber;
// عند تحميل الصفحة، نعرض النقاط المخزنة
updateScore();

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
