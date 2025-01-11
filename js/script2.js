document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Отменяем стандартное поведение формы

    const formData = new FormData(this);
    formData.append('action', 'submit_contact_form'); // Указываем действие для WordPress

    try {
        const response = await fetch('/wp-admin/admin-ajax.php', { // WordPress AJAX URL
            method: 'POST',
            body: formData,
        });

        const result = await response.text();
        document.getElementById('response').innerHTML = `<p>${result}</p>`;
    } catch (error) {
        document.getElementById('response').innerHTML = '<p>Ошибка при отправке данных.</p>';
    }
});
