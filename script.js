window.alert("﴿ الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يئوده حفظهما وهو العلي العظيم ﴾ ")

document.getElementById('zakah-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // الحصول على القيم من النموذج
    const totalWealth = parseFloat(document.getElementById('total-wealth').value);
    const debt = parseFloat(document.getElementById('debt').value);

    // حساب الزكاة
    const zakahAmount = (totalWealth - debt) * 0.025; // نسبة الزكاة 2.5%

    // عرض النتيجة
    document.getElementById('result').textContent = `الزكاة المستحقة: ${zakahAmount.toFixed(2)>=0} ريال`;
});

