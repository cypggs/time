const cities = [
    { name_en: 'Beijing', name_zh: '北京', country_en: 'China', country_zh: '中国', timezone: 'Asia/Shanghai', position: { top: '20%', left: '70%' } },
    { name_en: 'London', name_zh: '伦敦', country_en: 'UK', country_zh: '英国', timezone: 'Europe/London', position: { top: '25%', left: '30%' } },
    { name_en: 'New York', name_zh: '纽约', country_en: 'USA', country_zh: '美国', timezone: 'America/New_York', position: { top: '30%', left: '10%' } },
    { name_en: 'Tokyo', name_zh: '东京', country_en: 'Japan', country_zh: '日本', timezone: 'Asia/Tokyo', position: { top: '25%', left: '80%' } },
    { name_en: 'Sydney', name_zh: '悉尼', country_en: 'Australia', country_zh: '澳大利亚', timezone: 'Australia/Sydney', position: { top: '70%', left: '85%' } }
];

const mapDiv = document.getElementById('map');

cities.forEach(city => {
    const cityClockDiv = document.createElement('div');
    cityClockDiv.classList.add('city-clock');
    cityClockDiv.style.top = city.position.top;
    cityClockDiv.style.left = city.position.left;

    cityClockDiv.innerHTML = `
        <div class="city-name">${city.name_en} / ${city.name_zh}</div>
        <div class="country-name">${city.country_en} / ${city.country_zh}</div>
        <div class="time" id="${city.name_en.toLowerCase().replace(' ', '-')}"></div>
    `;

    mapDiv.appendChild(cityClockDiv);

    function updateClock() {
        const now = new Date().toLocaleString('en-US', { timeZone: city.timezone });
        const time = new Date(now).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        document.getElementById(city.name_en.toLowerCase().replace(' ', '-')).textContent = time;
    }

    updateClock();
    setInterval(updateClock, 1000);
});
</script>