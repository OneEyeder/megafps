// document.addEventListener('DOMContentLoaded', () => {
//     function redirectIfMobile() {
//         if (window.innerWidth < 768) {
//             window.location.href = './glavnaya--phone.html';
//         }
//     }

//     // Проверяем размер экрана сразу при загрузке
//     redirectIfMobile();

//     // Слушаем изменения размера экрана
//     window.addEventListener('resize', redirectIfMobile);
// });



document.addEventListener('DOMContentLoaded', () => {
    function redirectIfMobile() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const screenIsSmall = window.innerWidth <= 768;

        if (isMobile || screenIsSmall) {
            window.location.href = './index--mobile.html';
        }
    }

    // Проверяем сразу при загрузке страницы
    redirectIfMobile();
});
