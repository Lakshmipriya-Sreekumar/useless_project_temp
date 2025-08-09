
const languageLabels = {
    en: 'Current Time',
    ja: '現在の時刻',
    ko: '현재 시간',
    ar: 'الوقت الحالي',
    zh: '当前时间',
    ru: 'Текущее время'
};

const languageFonts = {
    en: 'Roboto Mono',
    ja: 'Noto Sans JP',
    ko: 'Noto Sans KR',
    ar: 'Noto Naskh Arabic',
    zh: 'Noto Serif SC',
    ru: 'Noto Sans'
};

const languages = Object.keys(languageLabels);
const clockDiv = document.getElementById('clock');
const fonts = ['Roboto Mono', 'Bebas Neue', 'Orbitron', 'Impact', 'Courier New'];
const colors = ['#fff', '#ff5722', '#03a9f4', '#4caf50', '#9c27b0', '#ffeb3b'];

let lastTime = '';

function updateClock() {
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    if (currentTime !== lastTime) {
    // Random font, color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // 🔁 RANDOM LANGUAGE SWITCH
    const randomLang = languages[Math.floor(Math.random() * languages.length)];
    const label = languageLabels[randomLang];
    const font = languageFonts[randomLang];

    const clockLabelDiv = document.getElementById('clock-label');
    clockLabelDiv.textContent = label;
    clockLabelDiv.style.fontFamily = font;
    clockLabelDiv.setAttribute('lang', randomLang);

    clockDiv.setAttribute('lang', randomLang);
    clockDiv.style.fontFamily = font;
    clockDiv.style.color = randomColor;
    clockDiv.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;
    
    // Animate digit changes
    let animatedHTML = '';
    for (let i = 0; i < currentTime.length; i++) {
        const char = currentTime[i];
        if (char !== (lastTime[i] || '')) {
            animatedHTML += `<span class="digit-transition">${char}</span>`;
        } else {
            animatedHTML += `<span>${char}</span>`;
        }
        
    }

    clockDiv.innerHTML = animatedHTML;
    lastTime = currentTime;
}
const dayElement = document.getElementById("dayName");

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const today = new Date();
    const currentDay = days[today.getDay()];

    dayElement.textContent = currentDay;

    if (currentTime !== lastTime) {
        // Change font, color, and text shadow
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        clockDiv.style.fontFamily = randomFont;
        clockDiv.style.color = randomColor;
        clockDiv.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;

        // Animate the time display by updating innerHTML
        let animatedHTML = '';
        for (let i = 0; i < currentTime.length; i++) {
            const char = currentTime[i];
            if (char !== (lastTime[i] || '')) {
                animatedHTML += `<span class="digit-transition">${char}</span>`;
            } else {
                animatedHTML += `<span>${char}</span>`;
            }
        }
        clockDiv.innerHTML = animatedHTML;
        lastTime = currentTime;
        
    }

    requestAnimationFrame(updateClock);
}

// Start the clock
updateClock();