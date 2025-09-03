const RAPIDAPI_KEY = "REPLACE_WITH_YOUR_RAPIDAPI_KEY"; 

// ✅ Multiple YouTube V3 API keys
const YT_KEYS = [
  "AIzaSyDCSkERob5c-KMz_dIUHXS3bXQ2NmbMt0k", 
  "AIzaSyDGmjm1-ZgBKjHbh9r9slExiHZNWCxpbZ4",
  "AIzaSyAPK8ak0UEvqkc0qBmmXXC_XqivmJLrDnQ",
  "AIzaSyB0K6-pLIRsU8NaoIGRb3uzgkHm0CsbqjM"
];

// --- Helper Functions ---
function formatDuration(iso) { ... }
function makeYouTubeV3Provider(apiKey) { ... }

// --- Providers Object ---
const Providers = { ... };

// --- State Management ---
const state = { ... };

// --- Render + Load Functions ---
function renderVideos(target, items) { ... }
async function loadNews(token=null) { ... }
async function loadSearch(token=null) { ... }

// --- Event Listeners ---
document.getElementById("apiSelector").addEventListener("change", ...);
document.getElementById("searchForm").addEventListener("submit", ...);
document.getElementById("newsNext").addEventListener("click", ...);
document.getElementById("newsPrev").addEventListener("click", ...);
document.getElementById("resNext").addEventListener("click", ...);
document.getElementById("resPrev").addEventListener("click", ...);

// --- Init ---
loadNews();
