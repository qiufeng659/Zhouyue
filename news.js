const newsData = [
    { id: 2,
      title: "Неэтаж За Новый год - культура в десять тысяч домов",
      subtitle: "Фестиваль этнических костюмов",
      img: "imgs/2.1.png",
      content: "Торжественно открывается фестиваль национального костюма «Облако Шелкового пути»! Фестиваль облачной одежды Yunnan Caiyun·China 2025 «Yunren Zhijiu Clothing» будет запущен во всей сети 11 февраля 2025 года! «Нематериальное культурное наследие встречает Новый год, привнося культуру в тысячи домов» — одно из мероприятий, которое наследует традиционные навыки китайской нации и демонстрирует богатое и уникальное нематериальное культурное наследие Юнжэня.",
      tags: ["Культура", "Фестивали", "Традиции"]
    },
    {id: 4,
      title: "Более 40 000 горшков с цветами украшают древний город Лицзян!",
      subtitle: "Экскурсии по наблюдению за цветами пользуются популярностью во время весенних праздников.",
      img: "imgs/4.1.png",
      content: "Yunnan.com (Репортер Ли Явэнь) Где в Лицзяне вы лучше всего почувствуете дыхание весны? Это, безусловно, новогодняя выставка цветов в древнем городе Лицзян. Сейчас праздник Весны, и древний город Лицзян предстает перед горожанами и туристами в лучшем виде.",
      tags: ["Лицзян", "Цветы", "Праздники"]
    },
    {id: 5,
      title: "Традиционное жертвоприношение фестиваля костюмов народности И",
      subtitle: "Празднование Нового года с нематериальным культурным наследием",
      img: "imgs/5.1.png",
      content: "Фестиваль облачных костюмов — это непрекращающееся волнение. Торжественное открытие фестиваля культуры национальных костюмов «Красочный шелковый путь Юньнань 2024» и онлайн-фестиваля национальных костюмов «Юнжэнь Чжицзюй И» состоялось во всей сети 11 февраля! Серия мероприятий включает в себя приобщение тысяч домохозяйств к нематериальному культурному наследию во время Весеннего фестиваля.",
      tags: ["Традиции", "Народность И", "Нематериальное наследие"]
    }
  ];
  
  const newsContainer = document.getElementById('news-container');
  
  newsData.forEach(item => {
    // Генерируем случайную дату от января до июня 2024
    const month = Math.floor(Math.random() * 6) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня'];
    const date = `${day} ${monthNames[month-1]} 2024`;

    // Создаем HTML для тегов
    const tagsHTML = item.tags ? item.tags.map(tag => 
      `<span class="article-tag">${tag}</span>`
    ).join('') : '';

    // Создаем карточку в соответствии с дизайном других статей
    const articleCard = document.createElement('div');
    articleCard.className = 'article-card';
    articleCard.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="article-image">
      <div class="article-content">
        <div class="article-date"><i class="far fa-calendar-alt"></i> ${date}</div>
        <h3 class="article-title">${item.title}</h3>
        <p class="article-excerpt">${item.subtitle} ${item.content.substring(0, 120)}...</p>
        <div class="article-tags">
          ${tagsHTML}
        </div>
        <a href="post.html?id=${item.id}" class="article-link">Читать полностью <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    
    newsContainer.appendChild(articleCard);
  });
  
  