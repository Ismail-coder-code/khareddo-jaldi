const games = [
    { id: 1, title: 'Red Dead Redemption II',  image: 'https://c4.wallpaperflare.com/wallpaper/562/164/960/sunset-the-game-art-rockstar-concept-art-hd-wallpaper-preview.jpg' },
    { id: 2, title: 'GTA V',  image: 'https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg' },
    { id: 3, title: 'Mafia II',  image: 'https://c4.wallpaperflare.com/wallpaper/260/958/507/mafia-ii-wallpaper-preview.jpg' },
    { id: 4, title: 'Forza Horizon 4',  image: 'https://c4.wallpaperflare.com/wallpaper/123/724/933/pc-games-forza-horizon-4-5k-e3-2018-wallpaper-preview.jpg' },
    { id: 5, title: 'Call of Duty',  image: 'https://c4.wallpaperflare.com/wallpaper/659/121/260/call-of-duty-captain-price-m4-carbine-rifles-hd-wallpaper-preview.jpg' },
    { id: 6, title: 'BattleField 2042',  image: 'https://c4.wallpaperflare.com/wallpaper/826/768/1017/battlefield-2042-battlefield-hd-wallpaper-preview.jpg' },
    { id: 7, title: 'Assassins Creed Valhalla',  image: 'https://c4.wallpaperflare.com/wallpaper/837/942/437/assassin-s-creed-valhalla-viking-video-games-video-game-art-digital-art-hd-wallpaper-preview.jpg' },
    { id: 8, title: 'Tomb Raider', image: 'https://c4.wallpaperflare.com/wallpaper/43/657/286/video-games-ultrawide-ultra-wide-shadow-of-the-tomb-raider-wallpaper-preview.jpg' },
    { id: 9, title: 'Far Cry 5',  image: 'https://c4.wallpaperflare.com/wallpaper/341/271/730/far-cry-5-wallpaper-preview.jpg' },
    { id: 10, title: 'Max-Payne-3',  image: 'https://c4.wallpaperflare.com/wallpaper/247/100/843/max-payne-rockstar-games-max-payne-3-movies-wallpaper-preview.jpg' },
    { id: 11, title: 'CyberPunk 2077',  image: 'https://c4.wallpaperflare.com/wallpaper/410/716/989/cyberpunk-2077-video-games-gun-3d-yellow-background-hd-wallpaper-preview.jpg' },
    { id: 12, title: 'Spider-Man', image: 'https://c4.wallpaperflare.com/wallpaper/496/549/315/spider-man-2018-video-game-wallpaper-preview.jpg' },
];

function renderGameItems() {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <span>${game.title}</span>
            <button class="buy-btn" onclick="checkout('${game.title}', ${game.price})">
                <i class="fab fa-whatsapp whatsapp-icon"></i> Buy on WhatsApp
            </button>
        `;
        gameList.appendChild(gameItem);
    });
}

function checkout(title, price) {
    const whatsappNumber = +918383853597; 
    const message = encodeURIComponent(`I want to buy ${title} for $${price.toFixed(2)}`);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.location.href = whatsappURL;
}

function getCartItemsText(){
    return 'Game 1\nGame 2\nGame 3';
}

renderGameItems();
//<span>$${game.price.toFixed(2)}</span>
