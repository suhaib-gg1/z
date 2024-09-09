document.getElementById('zakah-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // الحصول على القيم من النموذج
    const totalWealth = parseFloat(document.getElementById('total-wealth').value);
    const debt = parseFloat(document.getElementById('debt').value);

    // حساب الزكاة
    const zakahAmount = (totalWealth - debt) * 0.025; // نسبة الزكاة 2.5%

    // عرض النتيجة
    document.getElementById('result').textContent = `الزكاة المستحقة: ${zakahAmount.toFixed(2)} ريال`;
});
