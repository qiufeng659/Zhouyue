document.addEventListener("DOMContentLoaded", function() {
    // Обработчик регистрации
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let email = document.getElementById("registerEmail").value;
            let password = document.getElementById("registerPassword").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let privacyConsent = document.getElementById("privacyConsent");

            if (password !== confirmPassword) {
                alert("Пароли не совпадают!");
                return;
            }
            
            if (privacyConsent && !privacyConsent.checked) {
                alert("Для регистрации необходимо согласие на обработку персональных данных");
                return;
            }

            localStorage.setItem(email, password);
            localStorage.setItem("loggedInUser", email);
            alert("Регистрация успешна!");
            window.location.href = "index.html";
        });
    }

    // Обработчик входа
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let email = document.getElementById("loginEmail").value;
            let password = document.getElementById("loginPassword").value;
            let storedPassword = localStorage.getItem(email);
            if (storedPassword === password) {
                alert("Вход выполнен!");
                localStorage.setItem("loggedInUser", email);
                window.location.href = "index.html";
            } else {
                alert("Неверный email или пароль!");
            }
        });
    }
});
