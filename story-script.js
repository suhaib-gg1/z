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
setupToggle('toggleButton4', 'content4');
setupToggle('toggleButton5', 'content5');



document.addEventListener('DOMContentLoaded', () => {
       // جلب اللغة المخزنة من localStorage أو تعيين اللغة الافتراضية (مثلاً: العربية)
       let currentLang = localStorage.getItem('language') || 'ar';
    // الترجمة
     const translations = { 
        ar:{
            chz: 'تحدي حساب الزكاة',
            col:"حاسبة الزكاة",
            about:"القائمون على هذا التطبيق",
            storys:"قصص",
            nom:"عائشة -رضي الله عنها- و العنبة",
            p1:"جاء مسكين إلى عائشة -رضي الله عنها- فطلب منها الصدقة، فبحثت السيدة عائشة في البيت فلم تجد إلا عنبة واحدة فأعطته إياها، فقال أحدهم: ما تغني هذه العنبة؟ قالت: إن فيها ذرات كثيرة لأن الله يقول: (فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ* وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ)؛ بل شق التمرة يكتبها الله -تعالى- عنده، وأصغر من ذلك الذرة الواحدة. ",
            nom2:"عثمان بن عفان -رضي الله عنه- و البئر.", 
            p2:"عندما أصاب الناس القحط والمجاعة والمشقة نادى رسول الله -صلى الله عليه وسلم-: (مَن يشتَري بئرَ رومةَ فيجعَلُ فيها دلوَهُ معَ دلاءِ المسلمينَ بخيرٍ لَهُ منها في الجنَّةِ)، فاشتراها عثمان بن عفان -رضي الله عنه-.",
            nom3:"قصة سورة قريش",  
            p3:"أنعم الله -سبحانه وتعالى- على أهل مكة زمن الرسول محمد -صلى الله عليه وسلم- بنِعَم كثيرة. فقد جعل الله لهم رحلتين للتجارة يحصلون منهما على أرزاقهم؛ الرحلة الأولى إلى اليمن في فصل الشتاء، والرحلة الثانية إلى الشّام في فصل الصيف. كما منحهم الله -سبحانه وتعالى- نعمة الأمن ونعمة الغِنى، فأطعمهم من بعد جوع شديد، وأعطاهم الأمان من بعد خوف شديد. لذلك وجب عليهم أن يشكروا الله تعالى على هذه النعم ويعبدوه حقّ عبادته",
            nom4:"قصة لقمان الحكيم مع ابنه",
            p4:"عاش في قديم الزمان رجل اسمه لقمان، وقد كان رجلًا صالحًا ويمتاز بالحكمة والعلم، فعُرِف عنه الرأي الصائب حتى أصبح يُطلق عليه_لقمان الحكي_.  وفي يوم من الأيام جلس لقمان مع ابنه ليُعلّمه بعض الأمور في الحياة، فأعطاه نصائح ووصايا ستنفعه في دينه ودُنياه.  فقال لقمان لابنه الذي جلس يستمع إليه بحرص وانتباه: يا بني إنّ أهم أمر عليكِ أن تحرص عليه هو عبادة الله تعالى وحده، فمن يفعل غير ذلك سيظلم نفسه ظلمًا كبيرًا.  وأتبع لقمان وصاياه موضحًا له أنّ الله عالم بجميع الأمور الظاهر منها والمخفيّ: وحافظ يا بُني على الصلاة فهي أساس الدين، واحرص على دعوة الناس إلى الفضائل، وحذّرهم من اتباع الرذائل.  كما أوصاه بالصبر على المصائب والشدائد، فهذا له أجر كبير وعظيم عند الله تعالى.  ثم قال لقمان لابنه مُحذرًا: واحذر يا بني من أن تكون متكبرًا على الناس ومغرورًا، فهذا من أسوأ الصفات في الإنسان، والله تعالى لا يحب المتكبّرين، فعليكَ أن تكون متواضعًا مع الجميع مهما بلغت منزلتك.  واختتم لقمان وصاياه لابنه بإرشاده إلى ضرورة الاعتدال والتوسط في الأمور، وذلك حتّى في المشي فلا يمشي بسرعة زائدة ولا ببطء شديد، وأمره أيضًا بخفض صوته عند التحدّث، وهذا فيه احترام للآخرين.  ينبغي لنا جميعًا أن نتعلّم من وصايا لقمان لابنه ونُطبّقها في حياتنا.  إقرأ المزيد على حكاياتنا",
            nom5:"قصة عن سيدنا إدريس عليه السلام ",
            p5:"ذكر نبي الله إدريس عليه السلام أنه أول من كتب بالقلم, وأول من لبس الثياب, وقد ذكره نبينا محمد عليه الصلاة والسلام بأنه رآه في السماء الرابعة, وقد وصفه الله عز وجل في كتابه الكريم بأنه من الصابرين "
        },
        en: {
            chz: 'Zakat Calculation Challenge',
            col:"Zakat Calculator",
            about:"The creators of this application",
            storys: "Stories",
            nom:"Aisha - may God be pleased with her - and grapes",
            p1:"A poor person came to Aisha - may God be pleased with her - and asked her for alms. Mrs. Aisha searched the house and found only one grape, so she gave it to him. One of them said: What is the use of this grape? She said: It contains many atoms because God says: (So whoever does an atom’s weight of good will see it* and whoever does an atom’s weight of evil will see it); Rather, the portion of a date is recorded by God Almighty with Him, and it is smaller than that of a single corn.",
            nom2:"Othman bin Affan - may God be pleased with him - and the well.",
            p2:"When people were struck by drought, famine, and hardship, the Messenger of God - may God bless him and grant him peace - called: (Whoever buys the well of Rumah and puts his bucket in it with the buckets of the Muslims, will be better for him in Paradise), so Othman bin Affan - may God be pleased with him - bought it.",
            nom3:"The story of Surat Quraish",
            p3: "God - Glory be to Him - bestowed many blessings on the people of Mecca at the time of the Messenger Muhammad - may God bless him and grant him peace. God made them two trade trips from which they obtained their livelihood. The first trip to Yemen in the winter, and the second trip to the Levant in the summer. God - Glory be to Him - also granted them the blessing of security and the blessing of wealth, so He fed them after severe hunger, and gave them security after severe fear. Therefore, they must thank God Almighty for these blessings and worship Him truly. Read more on our stories:",
            nom4:"The story of Luqman Al-Hakim with his son",
            p4: `Once upon a time there lived a man named Luqman. He was a righteous man who was distinguished by his wisdom and knowledge. He was known for his sound opinion, so much so that he was called “Luqman the Wise.”

        One day, Luqman sat with his son to teach him some things about life. He gave him advice and commandments that would benefit him in his religion and his worldly life.

        Then Luqman said to his son, who was sitting listening to him carefully and attentively: My son, the most important thing that you must be keen on is to worship God Almighty alone. Whoever does otherwise will be greatly wronging himself.

        Luqman followed his advice, explaining to him that God knows all matters, both apparent and hidden: “And, my son, maintain the prayer, for it is the foundation of religion, and be keen to call people to virtues, and warn them against following vices.”

        He also advised him to be patient in the face of calamities and hardships, as this brings him a great and immense reward from God Almighty.

        Then Luqman said to his son, warning him: Beware, my son, of being arrogant and conceited towards people, for this is one of the worst qualities in a person, and God Almighty does not love the arrogant, so you must be humble with everyone, no matter how high your status is.

        Luqman concluded his advice to his son by advising him to be moderate and balanced in all matters, even when walking, so he should neither walk too quickly nor too slowly. He also ordered him to lower his voice when speaking, as this shows respect for others.

        We should all learn from Luqman's advice to his son and apply it in our lives.`,
        nom5: "The story about our Prophet Idris (peace be upon him)",
        p5: "It is mentioned that Prophet Idris (peace be upon him) was the first to write with a pen and the first to wear clothes. Our Prophet Muhammad (peace be upon him) mentioned that he saw Idris in the fourth heaven. Allah described him in the Qur'an as one of the patient and righteous "
        
    
    },
        ur: {
            chz: 'زکات کیلکولیشن چیلنج',
            col:"زکات کیلکولیٹر",
            about:"اس ایپلیکیشن کے تخلیق کار",
            storys: "کہانیاں",
            nom: "عائشہ - اللہ ان سے راضی ہو - اور انگور",
            p1: "ایک غریب شخص عائشہ - اللہ ان سے راضی ہو - کے پاس آیا اور ان سے صدقہ طلب کیا۔ عائشہ نے گھر میں تلاش کیا اور صرف ایک انگور پایا، تو انہوں نے اسے دے دیا۔ ایک شخص نے کہا: اس انگور کا کیا فائدہ؟ انہوں نے کہا: اس میں بہت سی ذرات ہیں کیونکہ اللہ فرماتا ہے: (پس جو شخص ایک ذرہ کے برابر نیکی کرے گا وہ اسے دیکھے گا* اور جو ایک ذرہ کے برابر برائی کرے گا وہ اسے دیکھے گا)؛ بلکہ ایک کھجور کا حصہ اللہ تعالیٰ کے پاس لکھا جاتا ہے، اور یہ ایک اکیلے دانے سے بھی چھوٹا ہے۔",
            nom2: "عثمان بن عفان - اللہ ان سے راضی ہو - اور کنواں۔",
            p2: "جب لوگوں کو خشک سالی، قحط اور مشکلات کا سامنا کرنا پڑا تو رسول اللہ - اللہ ان پر درود بھیجے - نے پکارا: (کون رُمہ کے کنویں کو خریدے گا اور اپنی بالٹی مسلمانوں کی بالٹیوں کے ساتھ رکھے گا، اس کے لیے جنت میں بہتر ہوگا)، تو عثمان بن عفان - اللہ ان سے راضی ہو - نے اسے خریدا۔",
            nom3: "سورۃ قریش کی کہانی",
            p3: "اللہ - سبحانہ وتعالی - نے رسول محمد - اللہ ان پر درود بھیجے - کے زمانے میں مکہ کے لوگوں پر بہت ساری نعمتیں نازل کیں۔ اللہ نے انہیں دو تجارتی سفر عطا کیے جن سے وہ اپنا روزگار حاصل کرتے تھے؛ پہلا سفر یمن کی طرف سردیوں میں، اور دوسرا سفر شام کی طرف گرمیوں میں۔ اللہ نے انہیں امن اور دولت کی نعمت بھی عطا کی، پس انہوں نے شدید بھوک کے بعد کھانا پایا، اور شدید خوف کے بعد امن حاصل کیا۔ اس لیے انہیں اللہ تعالیٰ کا شکر ادا کرنا چاہیے اور اس کی عبادت کرنی چاہیے۔",
            nom4: "لقمان حکیم اور ان کے بیٹے کی کہانی",
            p4: "ایک زمانے میں ایک شخص تھا جس کا نام لقمان تھا۔ وہ ایک نیک شخص تھا جو اپنی حکمت اور علم کے لیے جانا جاتا تھا۔ اس کی صحیح رائے کی وجہ سے اسے 'لقمان حکیم' کہا جاتا تھا۔ ایک دن، لقمان اپنے بیٹے کے ساتھ بیٹھا تاکہ اسے زندگی کے کچھ امور سکھائے۔ اس نے اسے نصیحتیں اور ہدایات دیں جو اس کے دین اور دنیا میں فائدہ مند ہوں گی۔ پھر لقمان نے اپنے بیٹے سے کہا: میرے بیٹے، تمہیں جس چیز کا خیال رکھنا چاہیے وہ اللہ تعالیٰ کی اکیلے عبادت کرنا ہے۔ جو اس کے علاوہ کچھ کرے گا، وہ اپنی جان پر بڑا ظلم کرے گا۔ لقمان نے اپنی نصیحتوں کی وضاحت کی کہ اللہ سب کچھ جانتا ہے، ظاہری اور پوشیدہ دونوں؛ اور، میرے بیٹے، نماز قائم رکھو، کیونکہ یہ دین کا اساس ہے، اور لوگوں کو نیکیوں کی دعوت دینے کے لیے کوشش کرو، اور انہیں برائیوں سے بچنے کی نصیحت کرو۔ اس نے اس کو مشکلات اور آزمائشوں میں صبر کرنے کی بھی نصیحت کی، کیونکہ اس کا اللہ تعالیٰ کے ہاں بڑا انعام ہے۔ پھر لقمان نے اپنے بیٹے سے کہا: میرے بیٹے، لوگوں پر تکبر کرنے اور مغرور ہونے سے بچو، کیونکہ یہ انسان کی سب سے بدترین صفات میں سے ایک ہے، اور اللہ تعالیٰ تکبّر کرنے والوں کو پسند نہیں کرتا، لہذا تمہیں ہر ایک کے ساتھ عاجزی سے پیش آنا چاہیے، چاہے تمہاری حیثیت کتنی بھی بلند ہو۔ لقمان نے اپنے بیٹے کو اعتدال اور توازن کی ضرورت پر نصیحت کرتے ہوئے کہا، یہاں تک کہ چلنے میں بھی، اسے نہ تو زیادہ تیز چلنا چاہیے اور نہ ہی بہت آہستہ۔ اس نے اسے بات کرتے وقت اپنی آواز بھی کم کرنے کا حکم دیا، کیونکہ یہ دوسروں کے لیے احترام کا اظہار ہے۔ ہمیں سب کو لقمان کی نصیحتوں سے سیکھنا چاہیے اور انہیں اپنی زندگیوں میں نافذ کرنا چاہیے۔",
     nom5: "حضرت ادریس علیہ السلام کی کہانی",
     p5:"حضرت ادریس علیہ السلام کا ذکر ہے کہ وہ پہلا شخص تھے جس نے قلم سے لکھا اور پہلا شخص تھے جس نے کپڑے پہنے۔ ہمارے نبی محمد صلی اللہ علیہ وسلم نے فرمایا کہ انہوں نے ادریس کو چوتھے آسمان پر دیکھا۔ اللہ تعالیٰ نے قرآن میں انہیں صابر اور صالحین میں سے قرار دیا ہے"
        
        },
        
        id: {
            chz: 'Tantangan Perhitungan Zakat',
            col:"Kalkulator Zakat",
            about:"Pencipta aplikasi ini",
            storys: "Cerita",
            nom: "Aisha - semoga Allah meridhoi dia - dan anggur",
            p1: "Seorang miskin datang kepada Aisha - semoga Allah meridhoi dia - dan meminta sedekah. Nyonya Aisha mencari di rumah dan hanya menemukan satu anggur, jadi dia memberikannya kepadanya. Salah seorang berkata: Apa gunanya anggur ini? Dia berkata: Di dalamnya terdapat banyak atom karena Allah berfirman: (Jadi siapa yang melakukan kebaikan seberat atom akan melihatnya* dan siapa yang melakukan kejahatan seberat atom akan melihatnya); Bahkan, sepotong kurma dicatat oleh Allah Yang Mahakuasa di sisinya, dan itu lebih kecil dari satu butir. ",
            nom2: "Utsman bin Affan - semoga Allah meridhoi dia - dan sumur.",
            p2: "Ketika orang-orang dilanda kemarau, kelaparan, dan kesulitan, Rasul Allah - semoga Allah memberinya berkah dan keselamatan - berseru: (Siapa yang membeli sumur Rumah dan meletakkan embernya di sana bersama ember-ember orang Muslim, maka itu lebih baik baginya di surga), maka Utsman bin Affan - semoga Allah meridhoi dia - membelinya.",
            nom3: "Kisah Surat Quraisy",
            p3: "Allah - Mahasuci Dia - melimpahkan banyak berkah kepada penduduk Mekah pada masa Rasul Muhammad - semoga Allah memberinya berkah dan keselamatan. Allah menjadikan mereka dua perjalanan dagang dari mana mereka memperoleh rezeki; perjalanan pertama ke Yaman di musim dingin, dan perjalanan kedua ke Syam di musim panas. Allah - Mahasuci Dia - juga memberi mereka berkah keamanan dan berkah kekayaan, sehingga Dia memberi mereka makanan setelah kelaparan yang parah, dan memberi mereka keamanan setelah ketakutan yang parah. Oleh karena itu, mereka harus bersyukur kepada Allah Yang Mahakuasa atas berkah ini dan benar-benar menyembah-Nya.",
            nom4: "Kisah Luqman Al-Hakim dengan putranya",
            p4: `Dahulu kala, ada seorang lelaki bernama Luqman. Dia adalah seorang yang saleh yang dikenal karena kebijaksanaan dan pengetahuannya. Dia dikenal karena pendapatnya yang bijaksana, sehingga dia dijuluki "Luqman yang Bijak."
        
                Suatu hari, Luqman duduk bersama putranya untuk mengajarinya beberapa hal tentang kehidupan. Dia memberinya nasihat dan perintah yang akan bermanfaat baginya dalam agama dan kehidupan dunianya.
        
                Kemudian Luqman berkata kepada putranya, yang duduk mendengarkannya dengan hati-hati: Putraku, hal terpenting yang harus kamu perhatikan adalah menyembah Allah Yang Mahakuasa sendiri. Siapa pun yang melakukan sebaliknya akan sangat merugikan dirinya sendiri.
        
                Luqman mengikuti nasihatnya, menjelaskan kepadanya bahwa Allah mengetahui segala perkara, baik yang tampak maupun yang tersembunyi: "Dan, putraku, peliharalah shalat, karena itu adalah dasar agama, dan berusaha mengajak orang kepada kebaikan, dan memperingatkan mereka agar tidak mengikuti keburukan."
        
                Dia juga menasihatinya untuk bersabar dalam menghadapi musibah dan kesulitan, karena ini membawa pahala yang besar dan luar biasa dari Allah Yang Mahakuasa.
        
                Kemudian Luqman berkata kepada putranya, memperingatkannya: Hati-hatilah, putraku, agar tidak sombong dan angkuh terhadap orang lain, karena ini adalah salah satu sifat terburuk dalam diri manusia, dan Allah Yang Mahakuasa tidak mencintai orang yang sombong, maka kamu harus rendah hati terhadap semua orang, tidak peduli seberapa tinggi kedudukanmu.
        
                Luqman mengakhiri nasihatnya kepada putranya dengan menyarankan agar ia bersikap moderat dan seimbang dalam segala hal, bahkan ketika berjalan, sehingga ia tidak berjalan terlalu cepat atau terlalu lambat. Dia juga memerintahkannya untuk merendahkan suaranya saat berbicara, karena ini menunjukkan penghormatan kepada orang lain.
        
                Kita semua harus belajar dari nasihat Luqman kepada putranya dan menerapkannya dalam kehidupan kita.`,
                nom5: "Kisah Nabi Idris (semoga keselamatan baginya)",
                p5: "Dikatakan bahwa Nabi Idris (semoga keselamatan baginya) adalah orang pertama yang menulis dengan pena dan orang pertama yang mengenakan pakaian. Nabi Muhammad (semoga Allah memberinya berkah dan keselamatan) menyebutkan bahwa beliau melihat Idris di langit keempat. Allah menggambarkan beliau dalam Al-Qur'an sebagai salah seorang yang sabar dan saleh"
                
       
            }
        
    
     }; // كما في الشيفرة السابقة
     const langSelect = document.getElementById('lang');

     // دالة لتحديث النصوص بناءً على اللغة المختارة
     const updateText = (lang) => {
         document.getElementById('col').textContent = translations[lang].col;
         document.getElementById('storys').textContent = translations[lang].storys;
         document.getElementById('nom').textContent = translations[lang].nom;
         document.getElementById('nom2').textContent = translations[lang].nom2;
         document.getElementById('nom3').textContent = translations[lang].nom3;
         document.getElementById('nom4').textContent = translations[lang].nom4;
         document.getElementById('nom5').textContent = translations[lang].nom5;
         document.getElementById('p1').textContent = translations[lang].p1;
         document.getElementById('p2').textContent = translations[lang].p2;
         document.getElementById('p3').textContent = translations[lang].p3;
         document.getElementById('p4').textContent = translations[lang].p4;
         document.getElementById('p5').textContent = translations[lang].p5;
         document.getElementById('chz').textContent = translations[lang].chz;
         document.getElementById('about').textContent = translations[lang].about;


     };

 
    
    // تعيين اللغة الافتراضية بناءً على اللغة المخزنة أو اللغة الافتراضية
    updateText(currentLang);
    
    // تحديث اللغة عند اختيارها من المستخدم
    langSelect.value = currentLang;  // تعيين القيمة في الـ select
    langSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        // تخزين اللغة الجديدة في localStorage
        localStorage.setItem('language', selectedLang);
        // تحديث النصوص بناءً على اللغة الجديدة
        updateText(selectedLang);
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
