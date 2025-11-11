// ===== КАЛЬКУЛЯТОР СТОИМОСТИ =====
function calculatePrice() {
    const projectType = document.getElementById('project-type').value;
    const platform = document.getElementById('platform').value;
    const features = document.getElementById('features').value;
    const resultDiv = document.getElementById('calculator-result');
    const priceDiv = document.getElementById('price');
    const descriptionDiv = document.getElementById('description');
    
    if (!projectType || !platform || !features) {
        resultDiv.style.display = 'none';
        return;
    }
    
    // Базовые цены по типу проекта
    const projectPrices = {
        'fitness': 5000,
        'education': 6000,
        'booking': 4000,
        'corporate': 3500
    };
    
    // Множители по платформе
    const platformMultipliers = {
        'web': 1,
        'mobile': 1.5,
        'web-mobile': 2.2,
        'telegram': 0.8
    };
    
    // Множители по функциональности
    const featureMultipliers = {
        'basic': 1,
        'standard': 1.4,
        'advanced': 1.8,
        'premium': 2.5
    };
    
    const basePrice = projectPrices[projectType];
    const platformMultiplier = platformMultipliers[platform];
    const featureMultiplier = featureMultipliers[features];
    
    const totalPrice = Math.round(basePrice * platformMultiplier * featureMultiplier);
    
    // Описание
    const descriptions = {
        'fitness': 'Фитнес-платформа с тренировками и трекингом',
        'education': 'Образовательная платформа с курсами',
        'booking': 'Система бронирования и записи',
        'corporate': 'Корпоративный сайт с функционалом'
    };
    
    const platformNames = {
        'web': 'веб-сайт',
        'mobile': 'мобильное приложение',
        'web-mobile': 'веб + мобильное',
        'telegram': 'Telegram Mini App'
    };
    
    const featureNames = {
        'basic': 'базовый функционал',
        'standard': 'стандартный функционал',
        'advanced': 'расширенный функционал',
        'premium': 'премиум функционал'
    };
    
    priceDiv.textContent = `$${totalPrice.toLocaleString()}`;
    descriptionDiv.textContent = `${descriptions[projectType]} (${platformNames[platform]}, ${featureNames[features]})`;
    
    resultDiv.style.display = 'block';
    
    // Анимация появления
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultDiv.style.transition = 'all 0.3s ease';
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    }, 10);
}

// ===== ОБРАБОТКА ФОРМЫ =====
function submitForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const phoneInput = form.querySelector('input[type="tel"]');
    const phone = phoneInput.value.trim();
    
    // Простая валидация телефона
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phone || phone.length < 10) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
    }
    
    // Показываем индикатор загрузки
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Отправка...';
    
    // Имитация отправки
    setTimeout(() => {
        alert('Спасибо! Мы свяжемся с вами в течение 24 часов.');
        form.reset();
        button.disabled = false;
        button.textContent = originalText;
    }, 1500);
}

// ===== АНИМАЦИИ ПРИ СКРОЛЛЕ =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.advantage-card, .process-step, .testimonial-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// ===== ПЛАВНАЯ НАВИГАЦИЯ =====
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== ОБРАБОТКА НАВИГАЦИИ =====
function handleNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Для внутренних якорей
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                smoothScrollTo(targetId);
            }
        });
    });
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    // Анимации при скролле
    window.addEventListener('scroll', animateOnScroll);
    
    // Начальная проверка для анимаций
    animateOnScroll();
    
    // Обработка навигации
    handleNavigation();
    
    // Инициализация калькулятора
    const calculatorInputs = document.querySelectorAll('#project-type, #platform, #features');
    calculatorInputs.forEach(input => {
        input.addEventListener('change', calculatePrice);
    });
    
    // Обработка всех форм
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', submitForm);
    });
    
    // Маска для телефона
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 1) {
                    value = '+' + value;
                } else if (value.length <= 4) {
                    value = '+' + value;
                } else if (value.length <= 7) {
                    value = '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4);
                } else if (value.length <= 9) {
                    value = '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7);
                } else {
                    value = '+' + value.slice(0, 1) + ' (' + value.slice(1, 4) + ') ' + value.slice(4, 7) + '-' + value.slice(7, 9) + '-' + value.slice(9, 11);
                }
            }
            e.target.value = value;
        });
    });
});

// ===== ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ =====

// Показ/скрытие мобильного меню
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Кнопка "Наверх"
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563EB;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Инициализация кнопки "Наверх"
if (window.innerWidth > 768) {
    initBackToTop();
}

// ===== ОБРАБОТКА ОШИБОК =====
window.addEventListener('error', function(e) {
    console.error('Произошла ошибка:', e.error);
});

// Предотвращение утечек памяти
window.addEventListener('beforeunload', function() {
    // Очистка обработчиков событий
    window.removeEventListener('scroll', animateOnScroll);
});