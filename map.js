// Создание карты и установка начального вида
var map = L.map('map').setView([24.294629292374356, 101.51922613401767], 6);

// Добавление слоя OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Создание пользовательских иконок для разных регионов
var xishuangbannaIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var daliIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var lijiangIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var shangrilaIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Добавление маркеров для региона Сишуанбаньна
L.marker([21.84873610194144, 100.93410672428152], {icon: xishuangbannaIcon}).addTo(map)
    .bindPopup("<b>Сад Дай в Сишуанбаньне</b><br>Традиционный этнический парк с элементами культуры народности дай<br><a href='xishuangbanna.html'>Подробнее</a>");

L.marker([22.170542625133113, 100.85917608839007], {icon: xishuangbannaIcon}).addTo(map)
    .bindPopup("<b>Долина диких слонов</b><br>Природный заповедник с природными тропами и возможностью увидеть диких слонов<br><a href='xishuangbanna.html'>Подробнее</a>");

L.marker([21.92484800718979, 101.25916068702438], {icon: xishuangbannaIcon}).addTo(map)
    .bindPopup("<b>Ботанический сад CAS</b><br>Крупнейший тропический ботанический сад в Китае с богатой коллекцией тропических растений<br><a href='xishuangbanna.html'>Подробнее</a>");

// Добавление маркеров для региона Дали
L.marker([25.775673891807624, 100.18299045028814], {icon: daliIcon}).addTo(map)
    .bindPopup("<b>Озеро Эрхай</b><br>Живописное высокогорное озеро с возможностью велопрогулок и фотографирования<br><a href='dali.html'>Подробнее</a>");

L.marker([25.694449004697283, 100.14358882624944], {icon: daliIcon}).addTo(map)
    .bindPopup("<b>Гора Цаншань</b><br>Величественный горный хребет с 19 пиками, водопадами и панорамными видами<br><a href='dali.html'>Подробнее</a>");

// Добавление маркеров для региона Лицзян
L.marker([26.869988016362594, 100.23836665894643], {icon: lijiangIcon}).addTo(map)
    .bindPopup("<b>Старый город Лицзян</b><br>Объект Всемирного наследия ЮНЕСКО с традиционной архитектурой и системой водных каналов<br><a href='lijian.html'>Подробнее</a>");

L.marker([27.712113075915326, 100.78006176074537], {icon: lijiangIcon}).addTo(map)
    .bindPopup("<b>Озеро Лугу</b><br>Высокогорное озеро на границе провинций Юньнань и Сычуань, известное матриархальной культурой<br><a href='lijian.html'>Подробнее</a>");

L.marker([27.11374992982161, 100.17051243577895], {icon: lijiangIcon}).addTo(map)
    .bindPopup("<b>Гора Юйлунсюэшань</b><br>Самая южная снежная гора в Китае с ледниками и богатой флорой и фауной<br><a href='lijian.html'>Подробнее</a>");

L.marker([26.828059327873277, 100.21830218210697], {icon: lijiangIcon}).addTo(map)
    .bindPopup("<b>Шоу 'Вечная любовь Лицзяна'</b><br>Грандиозное представление о богатой истории и культуре Лицзяна<br><a href='lijian.html'>Подробнее</a>");

// Добавление маркеров для региона Шангри-Ла
L.marker([27.800761796302993, 99.907165664418], {icon: shangrilaIcon}).addTo(map)
    .bindPopup("<b>Национальный парк Пудацзо</b><br>Первый национальный парк в Китае с озерами, лугами и богатым биоразнообразием<br><a href='shangrila.html'>Подробнее</a>");

L.marker([27.847822291155392, 99.70328532193362], {icon: shangrilaIcon}).addTo(map)
    .bindPopup("<b>Монастырь Сунцзанлин</b><br>Крупнейший тибетский буддийский монастырь в Юньнани, известный как 'Малый Потала'<br><a href='shangrila.html'>Подробнее</a>");

L.marker([27.861879742451176, 99.6438140994534], {icon: shangrilaIcon}).addTo(map)
    .bindPopup("<b>Озеро Напахай</b><br>Сезонное высокогорное озеро, которое летом превращается в обширный луг<br><a href='shangrila.html'>Подробнее</a>");

L.marker([27.918127900829585, 98.88647726879726], {icon: shangrilaIcon}).addTo(map)
    .bindPopup("<b>Долина Наньцзилюо</b><br>Живописная горная долина с заснеженными вершинами и тибетскими деревнями<br><a href='shangrila.html'>Подробнее</a>");

// Добавляем предупреждение о необходимости дополнительных разрешений для посещения некоторых мест
var warningPopup = L.popup()
    .setLatLng([26.5, 100.5])
    .setContent("<div style='text-align:center'><b>Внимание!</b><br>Для некоторых регионов может потребоваться дополнительное разрешение на посещение.<br>Пожалуйста, уточняйте информацию заранее.</div>")
    .openOn(map);

// Предотвращение ошибок загрузки маркеров
setTimeout(function() {
    map.invalidateSize();
}, 100);