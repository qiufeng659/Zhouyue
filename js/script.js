// Файл: js/script.js

document.addEventListener('DOMContentLoaded', function () {
    
    // Логика для мобильного меню (гамбургера)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('header nav'); // Убедитесь, что это правильный селектор для вашей <nav>

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active'); // 'active' - класс, который делает меню видимым
            // Опционально: меняем иконку гамбургера на крестик и обратно
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            // Управление aria-expanded для доступности
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Логика для выпадающих списков в навигации (если нужно по клику на мобильных)
    if (window.innerWidth <= 768) { // Например, для экранов <= 768px
        const dropdownToggles = document.querySelectorAll('.nav-item-dropdown > a');
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(event) {
                // Предотвращаем переход по основной ссылке, если это просто переключатель
                if (this.parentElement.classList.contains('nav-item-dropdown')) {
                    event.preventDefault();
                }
                this.parentElement.classList.toggle('open'); // Класс для показа/скрытия .dropdown-menu
                
                // Управление aria-expanded для доступности
                const SiblingDropdownMenu = this.nextElementSibling;
                if (SiblingDropdownMenu && SiblingDropdownMenu.classList.contains('dropdown-menu')) {
                    const isDropdownOpen = SiblingDropdownMenu.style.display === 'block' || this.parentElement.classList.contains('open');
                    this.setAttribute('aria-expanded', isDropdownOpen);
                }
            });
        });
    }


    // Логика для FAQ аккордеона
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Получаем текущее состояние (открыт/закрыт)
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Переключаем состояние
            question.setAttribute('aria-expanded', !isExpanded);
            
            // Опционально: Закрыть все другие открытые вопросы
            // Раскомментируйте этот блок для работы в режиме аккордеона
            
            /*
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            });
            */
        });
    });

    // Логика для отображения статуса логина (из вашего auth.js или auth_display.js)
    // Важно: убедитесь, что этот код выполняется ПОСЛЕ загрузки DOM
    const authLinks = document.getElementById('authLinks');
    const userWelcome = document.getElementById('userWelcome');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const logoutButton = document.getElementById('logoutButton');
    const loggedInUser = localStorage.getItem('loggedInUser');

    // Также применяем к блоку в мобильном меню, если он есть и имеет свои ID
    const navAuthMobile = document.querySelector('.nav-auth-mobile'); // Если вы создали этот блок

    if (loggedInUser) {
        if (authLinks) authLinks.style.display = 'none';
        if (userWelcome) userWelcome.style.display = 'flex'; // или 'block' в зависимости от вашего CSS
        if (usernameDisplay) usernameDisplay.textContent = loggedInUser.split('@')[0]; // Показываем часть email как имя

        if (navAuthMobile) { // Обновляем и мобильный блок, если он есть
            navAuthMobile.innerHTML = `
                <span>Привет, ${loggedInUser.split('@')[0]}!</span>
                <button id="logoutButtonMobile" class="btn btn-outline btn-sm">Выйти</button>
            `;
            const logoutButtonMobile = document.getElementById('logoutButtonMobile');
            if (logoutButtonMobile) {
                logoutButtonMobile.addEventListener('click', function() {
                    localStorage.removeItem('loggedInUser');
                    window.location.reload();
                });
            }
        }

    } else {
        if (authLinks) authLinks.style.display = 'flex'; // или 'block'
        if (userWelcome) userWelcome.style.display = 'none';
        if (navAuthMobile) { // Показываем ссылки на вход/регистрацию и в мобильном меню
             navAuthMobile.innerHTML = `
                <a href="login.html" class="btn btn-outline btn-sm">Войти</a>
                <a href="register.html" class="btn btn-primary btn-sm">Регистрация</a>
            `;
        }
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.reload(); // Перезагружаем страницу для обновления хедера
        });
    }

    // Плавная прокрутка к якорям
    const scrollLinks = document.querySelectorAll('.scroll-to');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Хедер "прилипает" и меняет вид при скролле
    const header = document.querySelector('header.main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) { // Начинаем менять хедер после прокрутки на 50px
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

});