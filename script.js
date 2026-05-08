// 1. Vos données d'articles
const mesArticles = [
    {
        id: 101,
        titre: "L'inflation ralentit",
        resume: "Les marchés réagissent aux chiffres...",
        image: "image/action.jpg",
        contenu: "Voici le texte complet de l'article... <br><br> Plusieurs paragraphes."
    },
    {
        id: 102,
        titre: "Bitcoin : Analyse Pro",
        resume: "Le BTC franchit une résistance...",
        image: "image/FED.jpg",
        contenu: `
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p><h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            `

    },

    {
        id: 103,
        titre: "Bitcoin : Analyse Pro",
        resume: "Le BTC franchit une résistance...",
        image: "image/tradingworld.jpg",
        contenu: "Anssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {
        id: 104,
        titre: "Bitcoin : Analyse Pro",
        resume: "Le BTC franchit une résistance...",
        image: "image/dxy.jpg",
        contenu: "Anssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {
        id: 105,
        titre: "Bitcoin : Analyse Pro",
        resume: "Le BTC franchit une résistance...",
        image: "image/analytics3.jpg",
        contenu:  `
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p><h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            `
    },

     {
        id: 105,
        titre: "Bitcoin : Analyse Pro",
        resume: "Le BTC franchit une résistance...",
        image: "image/analytics9.jpg",
        contenu:  `
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            <h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p><h3>Analyse du jour</h3>
            <p>Le taux d'inflation a chuté plus rapidement que prévu ce mois-ci...</p>
            <p>Les banques centrales pourraient réagir en baissant les taux dès le prochain trimestre.</p>
            <p>MAGA ANALYTICS restera attentif aux prochaines annonces de la FED.</p>
            `
    }
];

// 2. Afficher les articles dans la grille
function afficherLesNews() {
    const grille = document.getElementById('news-grid');
    if(!grille) return;

    grille.innerHTML = mesArticles.map(art => `
        <div class="card-news">
            <img src="${art.image}">
            <div class="card-content">
                <h3>${art.titre}</h3>
                <p>${art.resume}</p>
                <button class="btn-open-article" onclick="ouvrirArticle(${art.id})">
                    LIRE L'ARTICLE
                </button>
            </div>
        </div>
    `).join('');
}

// 3. Ouvrir l'article
function ouvrirArticle(id) {
    const article = mesArticles.find(a => a.id === id);
    if(!article) return;

    // Remplissage des champs
    document.getElementById('modal-art-title').innerText = article.titre;
    document.getElementById('modal-art-img').src = article.image;
    document.getElementById('modal-art-text').innerHTML = article.contenu;
    
    // Configuration du lien WhatsApp
    const message = encodeURIComponent(`Lu sur MAGA ANALYTICS : ${article.titre}`);
    document.getElementById('wa-share-link').href = `https://wa.me{message}`;

    // Affichage
    document.getElementById('modal-article').style.display = "block";
    document.body.style.overflow = "hidden"; // Empêche le scroll en arrière-plan
}

// 4. Fermer l'article
function fermerArticle() {
    document.getElementById('modal-article').style.display = "none";
    document.body.style.overflow = "auto";
}

// 5. Lancement au démarrage
window.addEventListener('load', () => {
    afficherLesNews();
});



// Données Marchés
const marketData = {
    crypto: [
        { name: "Bitcoin (BTC)",
             price: "67,450$", 
             change: "+2.4%", 
             trend: "up" },
        { name: "Ethereum (ETH)",
             price: "3,450$", 
             change: "+1.8%", 
             trend: "up" 
        }
    ],
    stocks: [
        { name: "Nvidia (NVDA)", price: "920.45$", change: "+3.2%", trend: "up" },
        { name: "Apple (AAPL)", price: "175.20$", change: "-0.5%", trend: "down" }
    ],
    forex: [
        { name: "EUR/USD", price: "1.0845", change: "+0.1%", trend: "up" },
        { name: "GBP/USD", price: "1.2630", change: "-0.2%", trend: "down" }
    ],
    commodities: [
        { name: "Or (Gold)", price: "2,340$", change: "+0.8%", trend: "up" },
        { name: "Pétrole (Brent)", price: "85.20$", change: "-1.1%", trend: "down" }
    ]
};

// Navigation
// Dictionnaire des titres par menu
const pageTitles = {
    'home': 'Bienvenue sur <span class="highlight">MAGA ANALYTICS</span>',
    'news': 'Actualités & Analyses <span class="highlight">Marchés</span>',
    'cal': 'Calendrier <span class="highlight">Économique</span> Global',
    'market': 'Tableau de Bord des <span class="highlight">Cotations</span>',
    'edu': 'Centre de <span class="highlight">Formation</span> Investisseur',
    'reg': 'Rejoignez la Communauté <span class="highlight">MAGA</span>',
    'broker': 'Nos Courtiers <span class="highlight">Certifiés</span>'
};

function showPage(pageId) {
    // 1. Cacher toutes les pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // 2. Afficher la page sélectionnée
    const activePage = document.getElementById(pageId);
    activePage.classList.add('active');

    // 3. MISE À JOUR DYNAMIQUE DU TITRE
    // On cherche la balise h1 ou h2 principale de la page active pour changer son texte
    const titleElement = activePage.querySelector('h1') || activePage.querySelector('h2');
    if (titleElement && pageTitles[pageId]) {
        titleElement.innerHTML = pageTitles[pageId];
    }
    
    // 4. Mettre à jour le menu actif (couleur jaune)
    document.querySelectorAll('nav ul li').forEach(n => n.classList.remove('active'));
    const navItem = document.getElementById('nav-' + pageId);
    if(navItem) navItem.classList.add('active');

    // 5. Fonctions spécifiques
    if(pageId === 'news') renderNews();
    if(pageId === 'cal') {
    const iframe = document.querySelector('#tradays-widget-container iframe');
    iframe.src = iframe.src; // Force le rafraîchissement propre du widget
}

}




// Rendu des News
function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = newsData.map(item => `
        <div class="card-news">
            <img src="${item.img}">
            <div class="card-content">
                <span class="category">${item.cat}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="#" class="read-more">Lire la suite →</a>
            </div>
        </div>
    `).join('');
}

/* Rendu des Marchés
function showSubMarket(category) {
    const body = document.getElementById('market-body');
    body.innerHTML = marketData[category].map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td style="color:${item.trend === 'up' ? '#00ff00' : '#ff4d4d'}">${item.change}</td>
            <td><a href="#" class="btn-trade">TRADER</a></td>
        </tr>
    `).join('');

    document.querySelectorAll('.sub-nav').forEach(btn => {
        btn.classList.remove('active-sub');
        if(btn.innerText.toLowerCase().includes(category.substring(0,3))) btn.classList.add('active-sub');
    });
}

*/

// Fonction pour récupérer les prix réels sur Binance
async function fetchCryptoPrices() {
    // Liste des symboles Binance correspondant à vos cryptos
    const symbols = ["BTCUSDT", "ETHUSDT", "SOLUSDT"]; 
    const url = `https://binance.com["${symbols.join('","')}"]`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Mise à jour de votre objet marketData.crypto avec les vrais chiffres
        marketData.crypto = data.map(item => ({
            name: item.symbol === "BTCUSDT" ? "Bitcoin (BTC)" : 
                  item.symbol === "ETHUSDT" ? "Ethereum (ETH)" : "Solana (SOL)",
            price: parseFloat(item.lastPrice).toLocaleString('en-US') + "$",
            change: parseFloat(item.priceChangePercent).toFixed(2) + "%",
            trend: parseFloat(item.priceChangePercent) >= 0 ? "up" : "down",
            tvSymbol: `BINANCE:${item.symbol}`
        }));

        // Rafraîchir l'affichage du tableau
        renderMarketTable('crypto');
    } catch (error) {
        console.error("Erreur lors de la récupération des prix :", error);
    }
}
// Fonction pour gérer le compte à rebours
function startAutoRefresh() {

    // On réinitialise si un intervalle existe déjà
    let countdownSeconds = 30;
    let refreshInterval;
    if (refreshInterval) clearInterval(refreshInterval);

    refreshInterval = setInterval(() => {
        countdownSeconds--;
        
        const timerElement = document.getElementById('seconds');
        if (timerElement) timerElement.innerText = countdownSeconds;

        if (countdownSeconds <= 0) {
            countdownSeconds = 30; // Réinitialise à 30s
            fetchCryptoPrices();    // Actualise les prix via l'API Binance
        }
    }, 1000); // S'exécute toutes les 1 seconde
}
// Modifier la fonction de changement d'onglet
function showSubMarket(category) {
    if (category === 'crypto') {
        fetchCryptoPrices(); 
        startAutoRefresh(); // Lance le minuteur uniquement pour la crypto
        document.getElementById('refresh-timer').style.display = 'block';
    } else {
        renderMarketTable(category);
        clearInterval(refreshInterval); // Arrête le minuteur pour les autres rubriques
        document.getElementById('refresh-timer').style.display = 'none';
    }
    // ... reste de votre code pour gérer les classes 'active-sub'
}

// Initialisation
window.onload = () => { showSubMarket('crypto'); };
// Liste des images extraites de vos actualités
const bgImages = newsData.map(item => item.img);
let currentImgIndex = 0;

function startBgSlider() {
    const slider = document.getElementById('bg-slides');
    if (!slider) return;

    // Initialisation
    slider.style.backgroundImage = `url(${bgImages[currentImgIndex]})`;

    // Changement automatique
    setInterval(() => {
        currentImgIndex = (currentImgIndex + 1) % bgImages.length;
        slider.style.backgroundImage = `url(${bgImages[currentImgIndex]})`;
    }, 5000); // 5 secondes par image
}
//  fonction pour charger le graphique
function openChart(symbol, name) {
    const container = document.getElementById('chart-container');
    const widgetContainer = document.getElementById('tradingview_widget');
    
    container.style.display = "block";
    document.getElementById('chart-title').innerText = "Analyse Temps Réel : " + name;
    widgetContainer.innerHTML = ""; // Reset du widget

    new TradingView.widget({
        "width": "100%",
        "height": 450,
        "symbol": symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "fr",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_widget"
    });
    
    // Scroll automatique vers le graphique
    container.scrollIntoView({ behavior: 'smooth' });
}

// Modifiez la boucle dans showSubMarket
function showSubMarket(category) {
    const body = document.getElementById('market-body');
    // On ajoute 'symbol' dans vos données pour TradingView (ex: BINANCE:BTCUSDT)
    body.innerHTML = marketData[category].map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td style="color:${item.trend === 'up' ? '#00ff00' : '#ff4d4d'}">${item.change}</td>
            <td>
                <button onclick="openChart('${item.tvSymbol}', '${item.name}')" class="btn-chart">📈 Voir</button>
            </td>
            <td><a href="#" class="btn-trade">TRADER</a></td>
        </tr>
    `).join('');
    
    // ... reste de la fonction (gestion des classes active-sub)
}
// Fonction pour ouvrir la modale et charger le graphique
function openChart(symbol, name) {
    const modal = document.getElementById('chart-modal');
    const widgetContainer = document.getElementById('tradingview_widget');
    
    modal.style.display = "block";
    document.getElementById('modal-title').innerHTML = `Analyse : <span class="highlight">${name}</span>`;
    
    // Nettoyage et chargement du widget TradingView
    widgetContainer.innerHTML = ""; 
    new TradingView.widget({
        "width": "100%",
        "height": "100%",
        "symbol": symbol,
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "fr",
        "container_id": "tradingview_widget"
    });

    // Empêcher le défilement de la page derrière la modale
    document.body.style.overflow = "hidden";
}

// Fonction pour fermer la modale
function closeChart() {
    document.getElementById('chart-modal').style.display = "none";
    document.body.style.overflow = "auto"; // Réactiver le défilement
}

// Fermer la modale si on clique en dehors du cadre
window.onclick = function(event) {
    const modal = document.getElementById('chart-modal');
    if (event.target == modal) {
        closeChart();
    }
}
let countdownSeconds = 30;
let refreshInterval;

// Fonction pour gérer le compte à rebours
function startAutoRefresh() {
    // On réinitialise si un intervalle existe déjà
    if (refreshInterval) clearInterval(refreshInterval);

    refreshInterval = setInterval(() => {
        countdownSeconds--;
        
        const timerElement = document.getElementById('seconds');
        if (timerElement) timerElement.innerText = countdownSeconds;

        if (countdownSeconds <= 0) {
            countdownSeconds = 30; // Réinitialise à 30s
            fetchCryptoPrices();    // Actualise les prix via l'API Binance
        }
    }, 1000); // S'exécute toutes les 1 seconde
}


// Modifier l'initialisation existante
window.onload = () => { 
    showSubMarket('crypto');
    startBgSlider(); // Lancer le slider d'accueil
};
