// Mock Telegram Groups Data (25+ groups)
const mockGroups = [
    {
        id: 1,
        name: "Crypto Signals Pro",
        description: "Daily cryptocurrency trading signals and market analysis. Join 50K+ traders making profits daily with our accurate signals.",
        members: 52300,
        category: "crypto",
        link: "https://t.me/cryptosignalspro",
        created: "2023-01-15",
        image: "http://static.photos/crypto/200x200/1"
    },
    {
        id: 2,
        name: "Web Dev Masters",
        description: "Learn web development from scratch. HTML, CSS, JavaScript, React, Node.js tutorials and resources for developers.",
        members: 28400,
        category: "programming",
        link: "https://t.me/webdevmasters",
        created: "2023-02-20",
        image: "http://static.photos/technology/200x200/2"
    },
    {
        id: 3,
        name: "Anime Universe",
        description: "Latest anime episodes, manga releases, and discussions. Join the biggest anime community on Telegram!",
        members: 89100,
        category: "anime",
        link: "https://t.me/animeuniverse",
        created: "2022-11-10",
        image: "http://static.photos/minimal/200x200/3"
    },
    {
        id: 4,
        name: "Stock Trading Hub",
        description: "Real-time stock alerts, market news, and trading strategies. Perfect for day traders and investors.",
        members: 45600,
        category: "trading",
        link: "https://t.me/stocktradinghub",
        created: "2023-03-05",
        image: "http://static.photos/finance/200x200/4"
    },
    {
        id: 5,
        name: "Movie Buffs Central",
        description: "Download latest movies in HD quality. Hollywood, Bollywood, Netflix series and more. 1000+ movies shared weekly.",
        members: 127000,
        category: "movies",
        link: "https://t.me/moviebuffscentral",
        created: "2022-08-15",
        image: "http://static.photos/season/200x200/5"
    },
    {
        id: 6,
        name: "Python Developers",
        description: "Python programming discussions, code reviews, job postings, and learning resources for all skill levels.",
        members: 34200,
        category: "programming",
        link: "https://t.me/pythondevelopers",
        created: "2023-04-12",
        image: "http://static.photos/technology/200x200/6"
    },
    {
        id: 7,
        name: "Crypto News Daily",
        description: "Breaking cryptocurrency news, price updates, and blockchain technology developments. Stay informed 24/7.",
        members: 67800,
        category: "crypto",
        link: "https://t.me/cryptonewsdaily",
        created: "2022-12-01",
        image: "http://static.photos/crypto/200x200/7"
    },
    {
        id: 8,
        name: "Gamers Paradise",
        description: "Gaming news, free game keys, tournaments, and multiplayer lobbies. PC, Console, and Mobile gaming community.",
        members: 41500,
        category: "gaming",
        link: "https://t.me/gamersparadise",
        created: "2023-01-28",
        image: "http://static.photos/gaming/200x200/8"
    },
    {
        id: 9,
        name: "Remote Jobs Board",
        description: "Daily remote job postings from top companies. Work from anywhere in the world. Updated every 6 hours.",
        members: 56300,
        category: "jobs",
        link: "https://t.me/remotejobsboard",
        created: "2023-05-10",
        image: "http://static.photos/office/200x200/9"
    },
    {
        id: 10,
        name: "World News Network",
        description: "Breaking news from around the world. Politics, technology, science, and entertainment updates.",
        members: 93400,
        category: "news",
        link: "https://t.me/worldnewsnetwork",
        created: "2022-09-20",
        image: "http://static.photos/news/200x200/10"
    },
    {
        id: 11,
        name: "Forex Trading Pro",
        description: "Forex signals, currency analysis, and trading strategies. Learn from professional forex traders.",
        members: 28900,
        category: "trading",
        link: "https://t.me/forextradingpro",
        created: "2023-02-14",
        image: "http://static.photos/finance/200x200/11"
    },
    {
        id: 12,
        name: "React Native Devs",
        description: "Mobile app development with React Native. Share projects, get help, and find job opportunities.",
        members: 19500,
        category: "programming",
        link: "https://t.me/reactnativedevs",
        created: "2023-06-01",
        image: "http://static.photos/technology/200x200/12"
    },
    {
        id: 13,
        name: "Manga Readers",
        description: "Latest manga chapters, recommendations, and discussions. All genres available daily.",
        members: 72400,
        category: "anime",
        link: "https://t.me/mangareaders",
        created: "2022-10-05",
        image: "http://static.photos/minimal/200x200/13"
    },
    {
        id: 14,
        name: "Blockchain Developers",
        description: "Smart contract development, Web3, Solidity, and blockchain architecture discussions.",
        members: 21300,
        category: "crypto",
        link: "https://t.me/blockchaindevs",
        created: "2023-03-22",
        image: "http://static.photos/crypto/200x200/14"
    },
    {
        id: 15,
        name: "Netflix Series HD",
        description: "Download Netflix series in high quality. All popular shows available with subtitles.",
        members: 156000,
        category: "movies",
        link: "https://t.me/netflixserieshd",
        created: "2022-07-18",
        image: "http://static.photos/season/200x200/15"
    },
    {
        id: 16,
        name: "eSports Tournament",
        description: "eSports news, tournament schedules, and live match updates. CS:GO, Dota 2, League of Legends.",
        members: 38200,
        category: "gaming",
        link: "https://t.me/esportstournament",
        created: "2023-01-08",
        image: "http://static.photos/gaming/200x200/16"
    },
    {
        id: 17,
        name: "Tech Jobs Alert",
        description: "Software engineering jobs at FAANG and startups. Daily postings for developers, designers, and PMs.",
        members: 44700,
        category: "jobs",
        link: "https://t.me/techjobsalert",
        created: "2023-04-30",
        image: "http://static.photos/technology/200x200/17"
    },
    {
        id: 18,
        name: "Science Daily",
        description: "Latest scientific discoveries, research papers, and technology breakthroughs explained simply.",
        members: 52100,
        category: "news",
        link: "https://t.me/sciencedaily",
        created: "2022-11-25",
        image: "http://static.photos/science/200x200/18"
    },
    {
        id: 19,
        name: "Day Trading Academy",
        description: "Learn day trading from experts. Live trading sessions, risk management, and psychology tips.",
        members: 31200,
        category: "trading",
        link: "https://t.me/daytradingacademy",
        created: "2023-02-28",
        image: "http://static.photos/finance/200x200/19"
    },
    {
        id: 20,
        name: "Machine Learning Hub",
        description: "AI and ML resources, tutorials, dataset sharing, and research paper discussions.",
        members: 26800,
        category: "programming",
        link: "https://t.me/mlhub",
        created: "2023-05-15",
        image: "http://static.photos/technology/200x200/20"
    },
    {
        id: 21,
        name: "Cosplay Community",
        description: "Cosplay tutorials, convention updates, and costume sharing. Join creative artists worldwide.",
        members: 18300,
        category: "anime",
        link: "https://t.me/cosplaycommunity",
        created: "2023-01-20",
        image: "http://static.photos/event/200x200/21"
    },
    {
        id: 22,
        name: "Altcoin Gems",
        description: "Discover hidden gem altcoins before they pump. Early signals and fundamental analysis.",
        members: 39500,
        category: "crypto",
        link: "https://t.me/altcoingems",
        created: "2023-03-10",
        image: "http://static.photos/crypto/200x200/22"
    },
    {
        id: 23,
        name: "Classic Cinema",
        description: "Classic and vintage movies from all eras. Film noir, classics, and golden age Hollywood.",
        members: 22400,
        category: "movies",
        link: "https://t.me/classiccinema",
        created: "2022-12-12",
        image: "http://static.photos/vintage/200x200/23"
    },
    {
        id: 24,
        name: "Indie Game Dev",
        description: "Independent game development community. Share your projects, get feedback, and collaborate.",
        members: 15600,
        category: "gaming",
        link: "https://t.me/indiegamedev",
        created: "2023-06-20",
        image: "http://static.photos/gaming/200x200/24"
    },
    {
        id: 25,
        name: "Design Jobs",
        description: "Graphic design, UI/UX, and creative job postings. Freelance and full-time opportunities.",
        members: 29800,
        category: "jobs",
        link: "https://t.me/designjobs",
        created: "2023-04-05",
        image: "http://static.photos/workspace/200x200/25"
    }
];

// Categories configuration
const categories = [
    { id: 'crypto', name: 'Crypto', icon: 'bitcoin', color: 'from-orange-400 to-yellow-500', desc: 'Trading signals & news' },
    { id: 'trading', name: 'Trading', icon: 'trending-up', color: 'from-green-400 to-emerald-600', desc: 'Stocks & forex' },
    { id: 'programming', name: 'Programming', icon: 'code-2', color: 'from-blue-400 to-indigo-600', desc: 'Dev resources' },
    { id: 'anime', name: 'Anime', icon: 'tv', color: 'from-pink-400 to-rose-600', desc: 'Anime & manga' },
    { id: 'movies', name: 'Movies', icon: 'film', color: 'from-purple-400 to-violet-600', desc: 'Movies & series' },
    { id: 'education', name: 'Education', icon: 'graduation-cap', color: 'from-teal-400 to-cyan-600', desc: 'Learning resources' },
    { id: 'gaming', name: 'Gaming', icon: 'gamepad-2', color: 'from-red-400 to-red-600', desc: 'Gaming community' },
    { id: 'jobs', name: 'Jobs', icon: 'briefcase', color: 'from-slate-400 to-slate-600', desc: 'Career opportunities' },
    { id: 'news', name: 'News', icon: 'newspaper', color: 'from-sky-400 to-blue-600', desc: 'Breaking news' }
];

// Initialize application
function initApp() {
    initDarkMode();
    initMobileMenu();
}

// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    // Check for saved preference or system preference
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('mobile-menu-enter');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Format number (e.g., 12500 -> 12.5K)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Create group card HTML
function createGroupCard(group) {
    const category = categories.find(c => c.id === group.category);
    const initials = group.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    
    return `
        <div class="group-card bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg">
            <div class="p-5">
                <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        ${initials}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="font-bold text-gray-900 dark:text-white truncate mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                            <a href="group.html?id=${group.id}">${group.name}</a>
                        </h3>
                        <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <span class="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 capitalize">${group.category}</span>
                            <span class="flex items-center gap-1">
                                <i data-lucide="users" class="w-3 h-3"></i>
                                ${formatNumber(group.members)}
                            </span>
                        </div>
                    </div>
                </div>
                
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    ${group.description}
                </p>
                
                <a href="${group.link}" target="_blank" class="flex items-center justify-center gap-2 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    <i data-lucide="external-link" class="w-4 h-4"></i>
                    Join Telegram
                </a>
            </div>
        </div>
    `;
}

// Render categories for homepage
function renderHomeCategories() {
    const container = document.getElementById('categoriesGrid');
    if (!container) return;

    const topCategories = categories.slice(0, 8);
    
    container.innerHTML = topCategories.map(cat => {
        const count = mockGroups.filter(g => g.category === cat.id).length;
        return `
            <a href="search.html?category=${cat.id}" class="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition group">
                <div class="w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white">
                    <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                </div>
                <div>
                    <h3 class="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">${cat.name}</h3>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${count} groups</p>
                </div>
            </a>
        `;
    }).join('');
}

// Render popular groups for homepage
function renderPopularGroups() {
    const container = document.getElementById('popularGroups');
    if (!container) return;

    // Sort by members and take top 6
    const popular = [...mockGroups].sort((a, b) => b.members - a.members).slice(0, 6);
    
    container.innerHTML = popular.map(group => createGroupCard(group)).join('');
}

// Get URL parameters
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Simulate API call for form submission
async function simulateApiSubmit(data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Log to console (in real app, this would be fetch('/api/submit', ...))
    console.log('API Submit:', data);
    
    // Return simulated success
    return { success: true, message: 'Group submitted successfully!' };
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mockGroups, categories, formatNumber, createGroupCard };
}
