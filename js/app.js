/**
 * Hunar Saarthi prototype
 */

const APP_STATE = {
  currentTab: 'artisans', // 'artisans', 'catalog', 'impact'
  currentStep: 1, // 1: Profiles, 2: Training, 3: Catalog, 4: Order, 5: PO, 6: Tracker, 7: Impact
  lang: 'en', // 'en', 'hi', 'mr'
  selectedFilter: 'all',

  artisans: [
    { id: 'sb', name: 'Sunita Bai', role: 'Artisan Lead', craft: 'Jhoomar & Wall Hangings', exp: '5–6 years', status: 'ready_packaging', score: 100, hamlet: 'Artisan Group · Rampur' },
    { id: 'rp', name: 'Ramesh Pawar', role: 'Procurement & Sales', craft: 'Raw Materials & Distribution', exp: '8 years', status: 'pending', score: 0, hamlet: 'Artisan Group · Rampur' },
    { id: 'mk', name: 'Meena Kumari', role: 'Youth Digital Champion', craft: 'Quality Check & Cataloging', exp: '2 years', status: 'in_stock', score: 95, hamlet: 'Artisan Group · Rampur' },
    { id: 'ld', name: 'Lakshmi Devi', role: 'Artisan Maker', craft: 'Torans & Festoon Weaving', exp: '10 years', status: 'training_pass', score: 92, hamlet: 'Artisan Group · Rampur' },
    { id: 'rr', name: 'Rajeshwar Rao', role: 'Artisan Maker', craft: 'Wood & Bamboo Armatures', exp: '4 years', status: 'needs_practice', score: 68, hamlet: 'Artisan Group · Rampur' },
    { id: 'rb', name: 'Radha Bai', role: 'Artisan Maker', craft: 'Beaded Jewellery & Decor', exp: '6 years', status: 'ready_packaging', score: 88, hamlet: 'Artisan Group · Rampur' }
  ],

  products: [
    { id: 'p1', name: 'Eco Hampers – Festive Edition', price: 1250, moq: 25, cat: 'Home Décor & Gifting', desc: 'Handcrafted gift hamper with sustainable kraft packaging.', icon: '🎁', inStock: 35 },
    { id: 'p2', name: 'Terracotta Planter Set', price: 750, moq: 50, cat: 'Home & Living', desc: 'Set of 3 hand-molded terracotta planters with jute cords.', icon: '🪴', inStock: 40 },
    { id: 'p3', name: 'Palm Leaf Storage Basket', price: 950, moq: 30, cat: 'Storage & Organizers', desc: 'Natural palm leaf storage basket with woven rim.', icon: '🧺', inStock: 25 },
    { id: 'p4', name: 'Handwoven Storage Basket (Medium)', price: 1200, moq: 20, cat: 'Storage & Organizers', desc: 'Multi-utility woven basket with reinforced carrying handles.', icon: '🧺', inStock: 18 },
    { id: 'p5', name: 'Jute Coaster Set (Pack of 6)', price: 350, moq: 50, cat: 'Home & Living', desc: 'Natural hand-braided jute coasters with organic cotton binding.', icon: '☕', inStock: 60 },
    { id: 'p6', name: 'Handloom Table Runner', price: 1050, moq: 25, cat: 'Home & Living', desc: 'Traditional handwoven decorative runner with fringe details.', icon: '🧣', inStock: 22 }
  ],

  currentOrder: {
    poNumber: 'HS/PO/00087',
    date: '27 May 2026',
    buyer: 'Sample Buyer',
    address: 'Sample delivery address',
    productId: 'p4',
    productName: 'Handwoven Storage Basket (Medium)',
    qty: 10,
    unitPrice: 1200,
    subtotal: 12000,
    gst: 1440,
    shipping: 200,
    total: 13640,
    currentTrackerStage: 3 // 1: Confirmed, 2: Materials Allocated, 3: In Production, 4: Quality Check, 5: Dispatched, 6: Delivered
  },

  monthlyUnitsSold: 80
};

// Multilingual Strings dictionary
const I18N = {
  en: {
    hubTitle: 'Hunar Saarthi',
    trackName: 'Artisan livelihood workspace',
    tabArtisans: 'Artisan Groups',
    tabCatalog: 'Products & Orders',
    tabImpact: 'Earnings Overview',
    step1: 'Profiles', step2: 'Training', step3: 'Catalog', step4: 'Order', step5: 'Purchase Order', step6: 'Tracker', step7: 'Impact',
    activeArtisans: '15 Active Artisans',
    hamletName: 'Artisan Group',
    leadName: 'Sunita Bai (Artisan Lead)',
    skillModule: 'Skill Progress',
    standardSize: 'Standard Sizing & Finishing',
    gradeA: 'Quality checked',
    targetIncome: 'Target Income: ₹10,500/mo ↑',
    directPayout: '80% Direct Artisan Payout',
    totalArtisans: 'Total Artisans',
    trainingCompleted: 'Training Completed',
    readyEcoPack: 'Ready for Eco-Packaging',
    inStock: 'In Stock',
    filterAll: 'ALL',
    filterPending: 'Pending Training',
    filterPass: 'Training Pass',
    filterNeeds: 'Needs Practice',
    filterPackaging: 'Ready for Eco-Packaging',
    filterStock: 'In Stock',
    createSampleOrder: 'Create sample order',
    sampleOrderDesc: 'See how a sample order moves from selection to delivery.',
    logMicro: 'Log Micro-Training Session',
    saveTraining: 'Save Training Result',
    genPO: 'Generate Purchase Order',
    confirmTrack: 'Confirm & Track Order',
    downloadPO: 'Download PO (PDF)',
    orderConfirmed: 'Order Confirmed',
    materialsAllocated: 'Materials Allocated',
    productionProgress: 'Production In Progress',
    readyDispatch: 'Ready for Dispatch',
    delivered: 'Delivered',
    orderSummary: 'Order & Impact Summary',
    unitEconomics: 'Unit Economics (per unit)',
    sellingPrice: 'Selling Price',
    artisanPayout: 'Artisan Payout',
    materialCost: 'Material Cost',
    communityShare: 'Community operations share',
    impactDesc: 'Supports livelihoods, preserves crafts, and builds sustainable communities.'
  },
  hi: {
    hubTitle: 'हुनर सारथी',
    trackName: 'कारीगर आजीविका कार्यक्षेत्र',
    tabArtisans: 'कारीगर समूह',
    tabCatalog: 'उत्पाद और ऑर्डर',
    tabImpact: 'कमाई का सारांश',
    step1: 'प्रोफाइल', step2: 'प्रशिक्षण', step3: 'कैटलॉग', step4: 'ऑर्डर', step5: 'खरीद आदेश', step6: 'ट्रैकर', step7: 'प्रभाव',
    activeArtisans: '15 सक्रिय कारीगर',
    hamletName: 'कारीगर समूह',
    leadName: 'सुनीता बाई (कारीगर प्रमुख)',
    skillModule: 'कौशल की प्रगति',
    standardSize: 'मानक आकार व फिनिशिंग',
    gradeA: 'गुणवत्ता जाँची गई',
    targetIncome: 'लक्षित आय: ₹10,500/माह ↑',
    directPayout: '80% प्रत्यक्ष कारीगर भुगतान',
    totalArtisans: 'कुल कारीगर',
    trainingCompleted: 'प्रशिक्षण पूर्ण',
    readyEcoPack: 'इको-पैकिंग हेतु तैयार',
    inStock: 'स्टॉक में उपलब्ध',
    filterAll: 'सभी',
    filterPending: 'प्रशिक्षण प्रतीक्षारत',
    filterPass: 'प्रशिक्षण उत्तीर्ण',
    filterNeeds: 'अभ्यास की आवश्यकता',
    filterPackaging: 'इको-पैकिंग तैयार',
    filterStock: 'स्टॉक में',
    createSampleOrder: 'नमूना ऑर्डर बनाएं',
    sampleOrderDesc: 'ऑर्डर चुनने से डिलीवरी तक की प्रक्रिया देखें।',
    logMicro: 'माइक्रो-प्रशिक्षण सत्र दर्ज करें',
    saveTraining: 'प्रशिक्षण परिणाम सहेजें',
    genPO: 'खरीद आदेश (PO) बनाएं',
    confirmTrack: 'पुष्टि करें और ट्रैक करें',
    downloadPO: 'PO डाउनलोड करें',
    orderConfirmed: 'ऑर्डर स्वीकृत',
    materialsAllocated: 'सामग्री आवंटित',
    productionProgress: 'उत्पादन प्रगति पर',
    readyDispatch: 'भेजने के लिए तैयार',
    delivered: 'सफलतापूर्वक वितरित',
    orderSummary: 'ऑर्डर व प्रभाव सारांश',
    unitEconomics: 'इकाई अर्थशास्त्र (प्रति पीस)',
    sellingPrice: 'विक्रय मूल्य',
    artisanPayout: 'कारीगर की कमाई',
    materialCost: 'कच्चा माल लागत',
    communityShare: 'सामुदायिक संचालन हिस्सा',
    impactDesc: 'आजीविका सशक्तिकरण, कला संरक्षण और आत्मनिर्भर समुदाय निर्माण।'
  },
  mr: {
    hubTitle: 'हुनर सारथी',
    trackName: 'कारागीर उपजीविका कार्यक्षेत्र',
    tabArtisans: 'कारागीर गट',
    tabCatalog: 'उत्पादने आणि ऑर्डर',
    tabImpact: 'कमाईचा आढावा',
    step1: 'प्रोफाइल्स', step2: 'प्रशिक्षण', step3: 'कॅटलॉग', step4: 'ऑर्डर', step5: 'खरेदी आदेश', step6: 'ट्रॅकर', step7: 'प्रभाव',
    activeArtisans: '15 सक्रिय कारागीर',
    hamletName: 'कारागीर गट',
    leadName: 'सुनीता बाई (कारागीर प्रमुख)',
    skillModule: 'कौशल्याची प्रगती',
    standardSize: 'प्रमाणित आकार व फिनिशिंग',
    gradeA: 'गुणवत्ता तपासली',
    targetIncome: 'लक्ष्य उत्पन्न: ₹10,500/महिना ↑',
    directPayout: '80% थेट कारागीर परतावा',
    totalArtisans: 'एकूण कारागीर',
    trainingCompleted: 'प्रशिक्षण पूर्ण',
    readyEcoPack: 'इको-पॅकिंगसाठी सज्ज',
    inStock: 'स्टॉकमध्ये उपलब्ध',
    filterAll: 'सर्व',
    filterPending: 'प्रशिक्षण बाकी',
    filterPass: 'प्रशिक्षण उत्तीर्ण',
    filterNeeds: 'सराव आवश्यक',
    filterPackaging: 'इको-पॅकिंग सज्ज',
    filterStock: 'स्टॉकमध्ये',
    createSampleOrder: 'नमुना ऑर्डर तयार करा',
    sampleOrderDesc: 'निवडीपासून वितरणापर्यंतची प्रक्रिया पहा.',
    logMicro: 'प्रशिक्षण सत्र नोंदवा',
    saveTraining: 'प्रशिक्षण निकाल जतन करा',
    genPO: 'खरेदी आदेश (PO) तयार करा',
    confirmTrack: 'पुष्टी करा आणि ट्रॅक करा',
    downloadPO: 'PO डाउनलोड करा',
    orderConfirmed: 'ऑर्डर निश्चित',
    materialsAllocated: 'साहित्य वाटप',
    productionProgress: 'उत्पादन सुरू',
    readyDispatch: 'पाठवण्यासाठी सज्ज',
    delivered: 'वितरित केले',
    orderSummary: 'ऑर्डर व प्रभाव सारांश',
    unitEconomics: 'युनिट अर्थशास्त्र (प्रति नग)',
    sellingPrice: 'विक्री किंमत',
    artisanPayout: 'कारागीर वाटा',
    materialCost: 'कच्चा माल खर्च',
    communityShare: 'समुदाय संचालन हिस्सा',
    impactDesc: 'उपजीविका बळकटीकरण आणि स्वावलंबी समुदाय निर्मिती.'
  }
};

function t(key) {
  const dict = I18N[APP_STATE.lang] || I18N.en;
  return dict[key] || I18N.en[key] || key;
}

// Format Currency
function formatInr(n) {
  return '₹' + Math.round(n).toLocaleString('en-IN');
}

// Initialize Application
function initApp() {
  render();
}

// Change Step (1 to 7)
function goToStep(step) {
  APP_STATE.currentStep = step;
  if (step === 1 || step === 2) {
    APP_STATE.currentTab = 'artisans';
  } else if (step >= 3 && step <= 6) {
    APP_STATE.currentTab = 'catalog';
  } else if (step === 7) {
    APP_STATE.currentTab = 'impact';
  }
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Change Tab
function switchTab(tab) {
  APP_STATE.currentTab = tab;
  if (tab === 'artisans') {
    APP_STATE.currentStep = 1;
  } else if (tab === 'catalog') {
    APP_STATE.currentStep = 3;
  } else if (tab === 'impact') {
    APP_STATE.currentStep = 7;
  }
  render();
}

// Change Language
function switchLang(lang) {
  APP_STATE.lang = lang;
  render();
}

// Set Filter
function setArtisanFilter(filter) {
  APP_STATE.selectedFilter = filter;
  render();
}

// Render Master Screen
function render() {
  const root = document.getElementById('app-root');
  if (!root) return;

  const currentStep = APP_STATE.currentStep;

  let mainContentHtml = '';
  switch (currentStep) {
    case 1:
      mainContentHtml = renderProfilesScreen();
      break;
    case 2:
      mainContentHtml = renderTrainingScreen();
      break;
    case 3:
      mainContentHtml = renderCatalogScreen();
      break;
    case 4:
      mainContentHtml = renderOrderScreen();
      break;
    case 5:
      mainContentHtml = renderPurchaseOrderScreen();
      break;
    case 6:
      mainContentHtml = renderTrackerScreen();
      break;
    case 7:
      mainContentHtml = renderImpactScreen();
      break;
    default:
      mainContentHtml = renderProfilesScreen();
  }

  root.innerHTML = `
    <!-- Top Header -->
    <header class="app-header">
      <div class="header-top-row">
        <div class="brand-block">
          <div class="brand-icon">🎨</div>
          <div>
            <div class="brand-title">${t('hubTitle')}</div>
            <div class="brand-subtitle">${t('trackName')}</div>
          </div>
        </div>

        <div class="header-actions">
          <span class="badge badge-gold">Demo · sample data</span>
          <div class="lang-selector">
            <button class="lang-btn ${APP_STATE.lang === 'en' ? 'active' : ''}" onclick="switchLang('en')">EN</button>
            <button class="lang-btn ${APP_STATE.lang === 'hi' ? 'active' : ''}" onclick="switchLang('hi')">हिन्दी</button>
            <button class="lang-btn ${APP_STATE.lang === 'mr' ? 'active' : ''}" onclick="switchLang('mr')">मराठी</button>
          </div>

          <a href="landing.html" class="portal-nav-link">🏠 Overview</a>
        </div>
      </div>
    </header>

    <!-- Top 3 Categories Tabs -->
    <nav class="tabs-bar">
      <div class="tabs-inner">
        <div class="tab-item ${APP_STATE.currentTab === 'artisans' ? 'active' : ''}" onclick="switchTab('artisans')">
          <span>👥</span> ${t('tabArtisans')}
        </div>
        <div class="tab-item ${APP_STATE.currentTab === 'catalog' ? 'active' : ''}" onclick="switchTab('catalog')">
          <span>📦</span> ${t('tabCatalog')}
        </div>
        <div class="tab-item ${APP_STATE.currentTab === 'impact' ? 'active' : ''}" onclick="switchTab('impact')">
          <span>📊</span> ${t('tabImpact')}
        </div>
      </div>
    </nav>

    <!-- Main Dynamic Container -->
    <main class="main-container">
      ${mainContentHtml}
    </main>

    <!-- Fixed 7-Step Bottom Navigation Bar -->
    <footer class="bottom-stepper-bar">
      <div class="bottom-stepper-inner">
        <div class="nav-step-item ${currentStep === 1 ? 'active' : ''}" onclick="goToStep(1)">
          <span class="nav-step-num">1</span>
          <span>${t('step1')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 2 ? 'active' : ''}" onclick="goToStep(2)">
          <span class="nav-step-num">2</span>
          <span>${t('step2')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 3 ? 'active' : ''}" onclick="goToStep(3)">
          <span class="nav-step-num">3</span>
          <span>${t('step3')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 4 ? 'active' : ''}" onclick="goToStep(4)">
          <span class="nav-step-num">4</span>
          <span>${t('step4')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 5 ? 'active' : ''}" onclick="goToStep(5)">
          <span class="nav-step-num">5</span>
          <span>${t('step5')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 6 ? 'active' : ''}" onclick="goToStep(6)">
          <span class="nav-step-num">6</span>
          <span>${t('step6')}</span>
        </div>
        <span class="nav-arrow">→</span>

        <div class="nav-step-item ${currentStep === 7 ? 'active' : ''}" onclick="goToStep(7)">
          <span class="nav-step-num">7</span>
          <span>${t('step7')}</span>
        </div>
      </div>
    </footer>
  `;
}

// ─────────────────────────────────────────────
// SCREEN 1: ARTISAN GROUPS
// ─────────────────────────────────────────────
function renderProfilesScreen() {
  const filtered = APP_STATE.artisans.filter(a => {
    if (APP_STATE.selectedFilter === 'all') return true;
    return a.status === APP_STATE.selectedFilter;
  });

  return `
    <!-- Artisan group summary -->
    <div class="hub-card" style="background: linear-gradient(135deg, #182438, #25334D); color:#fff;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:14px;">
          <div style="width:52px; height:52px; border-radius:50%; background:#E05A36; display:flex; align-items:center; justify-content:center; font-size:24px; font-weight:800; border:2px solid rgba(255,255,255,0.4);">
            SB
          </div>
          <div>
            <h2 style="font-size:20px; font-weight:800; margin-bottom:2px;">${t('hamletName')} — Sunita Bai (Artisan Lead)</h2>
            <div style="font-size:13px; color:rgba(255,255,255,0.8);">📍 Rampur Cluster · ${t('activeArtisans')}</div>
          </div>
        </div>
        <div class="badge badge-green" style="font-size:13px; padding:6px 14px;">
          ✓ ${t('gradeA')}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin-top:16px; border-top:1px solid rgba(255,255,255,0.15); padding-top:16px;">
        <div>
          <div style="font-size:12px; color:rgba(255,255,255,0.7);">${t('skillModule')}</div>
          <div style="font-size:18px; font-weight:800; color:#4ade80;">100% Complete</div>
          <div style="font-size:12px; color:rgba(255,255,255,0.9);">✓ ${t('standardSize')}</div>
        </div>
        <div>
          <div style="font-size:12px; color:rgba(255,255,255,0.7);">${t('orderSummary')}</div>
          <div style="font-size:18px; font-weight:800; color:#fbbf24;">₹10,500/mo ↑</div>
          <div style="font-size:12px; color:rgba(255,255,255,0.9);">${t('directPayout')}</div>
        </div>
        <div style="display:flex; align-items:center; justify-content:flex-end;">
          <button class="btn-primary" onclick="goToStep(2)">
            ${t('logMicro')} →
          </button>
        </div>
      </div>
    </div>

    <!-- Stats Row (20, 5, 4, 6) -->
    <div class="stat-chips-grid">
      <div class="stat-chip-box">
        <div class="stat-chip-num">20</div>
        <div class="stat-chip-label">${t('totalArtisans')}</div>
      </div>
      <div class="stat-chip-box">
        <div class="stat-chip-num" style="color:var(--green)">5</div>
        <div class="stat-chip-label">${t('trainingCompleted')}</div>
      </div>
      <div class="stat-chip-box">
        <div class="stat-chip-num" style="color:var(--gold)">4</div>
        <div class="stat-chip-label">${t('readyEcoPack')}</div>
      </div>
      <div class="stat-chip-box">
        <div class="stat-chip-num" style="color:var(--blue)">6</div>
        <div class="stat-chip-label">${t('inStock')}</div>
      </div>
    </div>

    <!-- Filter Pills -->
    <div class="filter-pills-bar">
      <button class="pill-btn ${APP_STATE.selectedFilter === 'all' ? 'active' : ''}" onclick="setArtisanFilter('all')">${t('filterAll')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'pending' ? 'active' : ''}" onclick="setArtisanFilter('pending')">${t('filterPending')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'training_pass' ? 'active' : ''}" onclick="setArtisanFilter('training_pass')">${t('filterPass')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'needs_practice' ? 'active' : ''}" onclick="setArtisanFilter('needs_practice')">${t('filterNeeds')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'ready_packaging' ? 'active' : ''}" onclick="setArtisanFilter('ready_packaging')">${t('filterPackaging')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'in_stock' ? 'active' : ''}" onclick="setArtisanFilter('in_stock')">${t('filterStock')}</button>
    </div>

    <!-- Artisan Cards List -->
    <div class="artisan-list-grid">
      ${filtered.map(a => {
        let badgeClass = 'badge-orange';
        let badgeText = a.status;
        if (a.status === 'training_pass') { badgeClass = 'badge-green'; badgeText = 'Pass (Grade A)'; }
        else if (a.status === 'ready_packaging') { badgeClass = 'badge-gold'; badgeText = 'Ready for Eco-Pack'; }
        else if (a.status === 'in_stock') { badgeClass = 'badge-blue'; badgeText = 'In Stock'; }
        else if (a.status === 'pending') { badgeClass = 'badge-orange'; badgeText = 'Pending Training'; }
        else if (a.status === 'needs_practice') { badgeClass = 'badge-gold'; badgeText = 'Needs Practice'; }

        return `
          <div class="artisan-item-card" onclick="goToStep(2)">
            <div class="artisan-avatar-block">
              <div class="artisan-avatar">${a.id.toUpperCase()}</div>
              <div class="artisan-info">
                <h4>${a.name}</h4>
                <p>${a.craft} · ${a.exp}</p>
                <p style="color:var(--slate); font-size:11px;">${a.hamlet}</p>
              </div>
            </div>
            <div>
              <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Bottom Action Card -->
    <div class="hub-card" style="margin-top:24px; text-align:center; background:linear-gradient(135deg, #FFF7ED, #FFFFFF);">
      <h3 style="font-size:18px; font-weight:800; color:var(--primary); margin-bottom:6px;">${t('createSampleOrder')}</h3>
      <p style="font-size:13px; color:var(--slate); margin-bottom:14px;">${t('sampleOrderDesc')}</p>
      <button class="btn-primary" onclick="goToStep(3)">
        View products & orders →
      </button>
    </div>
  `;
}

// ─────────────────────────────────────────────
// SCREEN 2: TRAINING (Log Micro-Training Session)
// ─────────────────────────────────────────────
function renderTrainingScreen() {
  return `
    <div class="hub-card">
      <div class="card-header-row">
        <div>
          <h2 class="card-title">📝 ${t('logMicro')}</h2>
          <p class="card-desc" style="margin-bottom:0;">
            30-minute on-site micro-training so artisans never lose a single day's wage.
          </p>
        </div>
        <span class="badge badge-green">Quality standards</span>
      </div>

      <div style="background:var(--bg-page); border:1px solid var(--border); border-radius:12px; padding:18px; margin-bottom:20px;">
        <label style="font-size:13px; font-weight:700; color:var(--navy); display:block; margin-bottom:6px;">
          Select Artisan:
        </label>
        <select id="trainArtisanSelect" class="input-field" style="margin-top:0;">
          ${APP_STATE.artisans.map(a => `<option value="${a.id}">${a.name} (${a.craft} - Current: ${a.status})</option>`).join('')}
        </select>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:18px; margin-bottom:20px;">
        <div style="border:1px solid var(--border); border-radius:12px; padding:16px;">
          <h4 style="font-size:14px; font-weight:800; margin-bottom:8px;">1. Standard Sizing Check (±5mm)</h4>
          <p style="font-size:13px; color:var(--slate); margin-bottom:12px;">Measured against the selected product standard.</p>
          <div style="display:flex; gap:10px;">
            <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600;">
              <input type="radio" name="sizeCheck" value="pass" checked> Pass
            </label>
            <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600;">
              <input type="radio" name="sizeCheck" value="redo"> Needs Practice
            </label>
          </div>
        </div>

        <div style="border:1px solid var(--border); border-radius:12px; padding:16px;">
          <h4 style="font-size:14px; font-weight:800; margin-bottom:8px;">2. Knot & Finish Integrity</h4>
          <p style="font-size:13px; color:var(--slate); margin-bottom:12px;">No loose fringe ends; uniform bead density.</p>
          <div style="display:flex; gap:10px;">
            <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600;">
              <input type="radio" name="knotCheck" value="pass" checked> Pass
            </label>
            <label style="display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600;">
              <input type="radio" name="knotCheck" value="redo"> Needs Practice
            </label>
          </div>
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-size:13px; font-weight:700; color:var(--navy); display:block; margin-bottom:6px;">
          Evaluator Voice / Text Notes (Optional):
        </label>
        <textarea id="trainNotes" class="input-field" rows="3" placeholder="Example: Medium jhoomar batch checked and approved."></textarea>
      </div>

      <div style="display:flex; gap:12px; justify-content:flex-end; flex-wrap:wrap;">
        <button class="btn-outline" onclick="goToStep(1)">← Back to Profiles</button>
        <button class="btn-primary" onclick="submitTraining()">✓ ${t('saveTraining')} & Proceed to Catalog →</button>
      </div>
    </div>
  `;
}

function submitTraining() {
  const select = document.getElementById('trainArtisanSelect');
  const artisanId = select.value;
  const artisan = APP_STATE.artisans.find(a => a.id === artisanId);
  if (artisan) {
    artisan.status = 'training_pass';
    artisan.score = 100;
  }
  goToStep(3);
}

// ─────────────────────────────────────────────
// SCREEN 3: PRODUCTS
// ─────────────────────────────────────────────
function renderCatalogScreen() {
  return `
    <div class="hub-card">
      <div class="card-header-row">
        <div>
          <h2 class="card-title">🎁 ${t('tabCatalog')}</h2>
          <p class="card-desc" style="margin-bottom:0;">
            Browse products and prices.
          </p>
        </div>
        <button class="btn-primary" onclick="goToStep(4)">
          + ${t('createSampleOrder')} →
        </button>
      </div>

      <div class="product-catalog-grid">
        ${APP_STATE.products.map(p => `
          <div class="product-item-card">
            <div class="product-image-box">
              <span>${p.icon}</span>
              <span class="badge badge-green" style="position:absolute; top:12px; right:12px; font-size:11px;">
                Quality checked
              </span>
            </div>
            <div class="product-body">
              <div>
                <div class="product-meta-row">
                  <span class="product-name">${p.name}</span>
                  <span class="product-price">${formatInr(p.price)}</span>
                </div>
                <div class="product-desc">${p.desc}</div>
              </div>
              <div class="product-footer-row">
                <span>MOQ: ${p.moq} units</span>
                <button class="btn-primary" style="padding:6px 12px; font-size:12px;" onclick="selectProductForOrder('${p.id}')">
                  Select for Order
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function selectProductForOrder(prodId) {
  const p = APP_STATE.products.find(x => x.id === prodId);
  if (p) {
    APP_STATE.currentOrder.productId = p.id;
    APP_STATE.currentOrder.productName = p.name;
    APP_STATE.currentOrder.unitPrice = p.price;
    APP_STATE.currentOrder.qty = p.moq;
    calculateOrderTotals();
  }
  goToStep(4);
}

// ─────────────────────────────────────────────
// SCREEN 4: SAMPLE ORDER
// ─────────────────────────────────────────────
function renderOrderScreen() {
  const ord = APP_STATE.currentOrder;

  return `
    <div class="hub-card" style="max-width:700px; margin:0 auto;">
      <div class="card-header-row">
        <h2 class="card-title">🛒 ${t('createSampleOrder')}</h2>
        <span class="badge badge-gold">Live Simulation</span>
      </div>
      <p class="card-desc">Configure order parameters to generate an official Purchase Order (PO).</p>

      <div style="margin-bottom:16px;">
        <label style="font-weight:700; font-size:13px;">Selected Craft Product:</label>
        <select id="orderProdSelect" class="input-field" onchange="onOrderProdChange()">
          ${APP_STATE.products.map(p => `<option value="${p.id}" ${p.id === ord.productId ? 'selected' : ''}>${p.name} (${formatInr(p.price)})</option>`).join('')}
        </select>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
        <div>
          <label style="font-weight:700; font-size:13px;">Order Quantity (Units):</label>
          <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
            <button class="btn-outline" style="padding:8px 14px;" onclick="adjustOrderQty(-5)">-5</button>
            <input type="number" id="orderQtyInput" class="input-field" style="margin-top:0; text-align:center; font-weight:800;" value="${ord.qty}" onchange="onOrderQtyChange()">
            <button class="btn-outline" style="padding:8px 14px;" onclick="adjustOrderQty(5)">+5</button>
          </div>
        </div>

        <div>
          <label style="font-weight:700; font-size:13px;">Buyer:</label>
          <select id="orderBuyerSelect" class="input-field" onchange="onOrderBuyerChange()">
            <option value="Sample Buyer">Sample Buyer</option>
          </select>
        </div>
      </div>

      <div style="margin-bottom:20px;">
        <label style="font-weight:700; font-size:13px;">Delivery Location:</label>
        <input type="text" id="orderAddressInput" class="input-field" value="${ord.address}">
      </div>

      <!-- Pricing Summary Box -->
      <div style="background:var(--bg-page); border:1px solid var(--border); border-radius:12px; padding:18px; margin-bottom:24px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
          <span>Unit Price:</span>
          <strong>${formatInr(ord.unitPrice)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
          <span>Subtotal (${ord.qty} units):</span>
          <strong id="orderSubtotalText">${formatInr(ord.subtotal)}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
          <span>GST (12%):</span>
          <span id="orderGstText">${formatInr(ord.gst)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:14px;">
          <span>Shipping & Eco-Packaging:</span>
          <span>${formatInr(ord.shipping)}</span>
        </div>
        <div style="display:flex; justify-content:space-between; border-top:2px solid var(--border); padding-top:10px; font-size:18px; font-weight:800; color:var(--primary);">
          <span>Total Order Value:</span>
          <span id="orderTotalText">${formatInr(ord.total)}</span>
        </div>
      </div>

      <div style="display:flex; gap:12px; justify-content:flex-end;">
        <button class="btn-outline" onclick="goToStep(3)">Cancel</button>
        <button class="btn-primary" onclick="generatePO()">
          ✓ ${t('genPO')} →
        </button>
      </div>
    </div>
  `;
}

function adjustOrderQty(delta) {
  const current = APP_STATE.currentOrder.qty;
  const next = Math.max(5, current + delta);
  APP_STATE.currentOrder.qty = next;
  calculateOrderTotals();
  render();
}

function onOrderQtyChange() {
  const val = parseInt(document.getElementById('orderQtyInput').value) || 5;
  APP_STATE.currentOrder.qty = Math.max(5, val);
  calculateOrderTotals();
  render();
}

function onOrderProdChange() {
  const prodId = document.getElementById('orderProdSelect').value;
  const p = APP_STATE.products.find(x => x.id === prodId);
  if (p) {
    APP_STATE.currentOrder.productId = p.id;
    APP_STATE.currentOrder.productName = p.name;
    APP_STATE.currentOrder.unitPrice = p.price;
    calculateOrderTotals();
    render();
  }
}

function onOrderBuyerChange() {
  APP_STATE.currentOrder.buyer = document.getElementById('orderBuyerSelect').value;
}

function calculateOrderTotals() {
  const ord = APP_STATE.currentOrder;
  ord.subtotal = ord.qty * ord.unitPrice;
  ord.gst = Math.round(ord.subtotal * 0.12);
  ord.shipping = 200;
  ord.total = ord.subtotal + ord.gst + ord.shipping;
}

function generatePO() {
  APP_STATE.currentOrder.poNumber = 'HS/PO/000' + Math.floor(10 + Math.random() * 89);
  APP_STATE.currentOrder.date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  goToStep(5);
}

// ─────────────────────────────────────────────
// SCREEN 5: PURCHASE ORDER (Generated Document View)
// ─────────────────────────────────────────────
function renderPurchaseOrderScreen() {
  const ord = APP_STATE.currentOrder;

  return `
    <div class="hub-card" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div>
          <h2 style="font-size:20px; font-weight:800;">📄 ${t('step5')} (PO)</h2>
          <p style="font-size:13px; color:var(--slate);">Generated purchase order for corporate gifting & artisan fulfillment.</p>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn-outline" onclick="downloadPODocument()">
            📥 ${t('downloadPO')}
          </button>
          <button class="btn-primary" onclick="goToStep(6)">
            🚀 ${t('confirmTrack')} →
          </button>
        </div>
      </div>
    </div>

    <!-- Official PO Document Form (Matches Page 5 of PDF) -->
    <div class="po-document-box">
      <div class="po-header-grid">
        <div class="po-title-block">
          <h2>Hunar Saarthi</h2>
          <p>Artisan production workspace</p>
          <p>Sample purchase order</p>
        </div>
        <div class="po-meta-block">
          <div style="font-size:16px; font-weight:800; color:var(--primary);">${ord.poNumber}</div>
          <div style="color:var(--slate); margin-top:2px;">Date: ${ord.date}</div>
          <span class="badge badge-green" style="margin-top:6px;">PO Status: Approved</span>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; font-size:13px;">
        <div>
          <strong style="color:var(--navy); display:block; margin-bottom:4px;">Billed to:</strong>
          <div style="font-weight:700; color:var(--primary);">${ord.buyer}</div>
          <div>${ord.address}</div>
        </div>
        <div>
          <strong style="color:var(--navy); display:block; margin-bottom:4px;">Delivery & Lead Artisan:</strong>
          <div>Sunita Bai (Circle Coordinator)</div>
          <div>Artisan Group · Rampur</div>
          <div>Dispatch Target: 5 Business Days</div>
        </div>
      </div>

      <table class="po-table">
        <thead>
          <tr>
            <th>Item Description</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Unit Price</th>
            <th style="text-align:right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>${ord.productName}</strong><br>
              <small style="color:var(--slate);">Handcrafted · Standard Size · Certified Grade A</small>
            </td>
            <td style="text-align:center;">${ord.qty}</td>
            <td style="text-align:right;">${formatInr(ord.unitPrice)}</td>
            <td style="text-align:right;">${formatInr(ord.subtotal)}</td>
          </tr>
        </tbody>
      </table>

      <div class="po-totals-box">
        <div class="po-total-row">
          <span>Subtotal:</span>
          <strong>${formatInr(ord.subtotal)}</strong>
        </div>
        <div class="po-total-row">
          <span>GST (12%):</span>
          <span>${formatInr(ord.gst)}</span>
        </div>
        <div class="po-total-row">
          <span>Eco-Packaging & Logistics:</span>
          <span>${formatInr(ord.shipping)}</span>
        </div>
        <div class="po-total-row grand">
          <span>Total Payable:</span>
          <span>${formatInr(ord.total)}</span>
        </div>
      </div>

      <div style="border-top:1px dashed var(--border); margin-top:24px; padding-top:16px; font-size:12px; color:var(--slate);">
        <p><strong>Impact Note:</strong> 80% of this purchase order (${formatInr(ord.subtotal * 0.8)}) directly credits the artisan bank accounts within 48 hours of quality verification.</p>
      </div>
    </div>
  `;
}

function downloadPODocument() {
  const ord = APP_STATE.currentOrder;
  const content = `HUNAR SAARTHI - PURCHASE ORDER\nPO Number: ${ord.poNumber}\nDate: ${ord.date}\nBuyer: ${ord.buyer}\nDelivery Address: ${ord.address}\n\nItem: ${ord.productName} x ${ord.qty}\nTotal Amount: ${formatInr(ord.total)}\n\nThank you for supporting artisan livelihoods!`;
  const blob = new Blob([content], { type: 'text/plain' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `PO-${ord.poNumber.replace(/\//g, '-')}.txt`;
  a.click();
}

// ─────────────────────────────────────────────
// SCREEN 6: TRACKER (Order Tracker Stepper)
// ─────────────────────────────────────────────
function renderTrackerScreen() {
  const ord = APP_STATE.currentOrder;
  const stage = ord.currentTrackerStage;

  const stages = [
    { num: 1, label: t('orderConfirmed'), date: '30/09/2026' },
    { num: 2, label: t('materialsAllocated'), date: '01/10/2026' },
    { num: 3, label: t('productionProgress'), date: '03/10/2026' },
    { num: 4, label: 'Quality Check Grade A', date: '04/10/2026' },
    { num: 5, label: t('readyDispatch'), date: '06/10/2026' },
    { num: 6, label: t('delivered'), date: '10/10/2026' }
  ];

  return `
    <div class="hub-card">
      <div class="card-header-row">
        <div>
          <h2 class="card-title">🚚 ORDER TRACKER</h2>
          <p class="card-desc" style="margin-bottom:0;">
            Track production status, quality gate approvals, and dispatch in real time.
          </p>
        </div>
        <div style="display:flex; gap:8px;">
          <button class="btn-outline" onclick="advanceTrackerStage()">
            Simulate Next Step ⏩
          </button>
        </div>
      </div>

      <!-- PO Status Banner -->
      <div style="background:var(--bg-page); border:1px solid var(--border); border-radius:12px; padding:18px; margin:16px 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:32px;">📦</div>
          <div>
            <div style="font-size:16px; font-weight:800; color:var(--navy);">${ord.poNumber}</div>
            <div style="font-size:13px; color:var(--slate);">${ord.buyer} · ${ord.productName} (${ord.qty} units)</div>
          </div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:18px; font-weight:800; color:var(--primary);">${formatInr(ord.total)}</div>
          <span class="badge badge-green">Live Pipeline</span>
        </div>
      </div>

      <!-- Stepper Visual Timeline (Matches Page 6 of PDF) -->
      <div class="order-stepper-box">
        <h4 style="font-size:14px; font-weight:800; color:var(--navy); margin-bottom:12px; text-transform:uppercase;">Order Progress</h4>
        
        <div class="stepper-timeline">
          ${stages.map(s => {
            let statusClass = '';
            if (s.num < stage) statusClass = 'completed';
            else if (s.num === stage) statusClass = 'active';

            return `
              <div class="step-node ${statusClass}">
                <div class="step-circle">${s.num < stage ? '✓' : s.num}</div>
                <div class="step-label">${s.label}</div>
                <div class="step-date">${s.date}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Details Summary Grid -->
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:16px; margin-top:20px;">
        <div style="border:1px solid var(--border); border-radius:12px; padding:16px;">
          <div style="font-size:12px; color:var(--slate);">Group lead</div>
          <div style="font-size:15px; font-weight:800; color:var(--navy); margin-top:2px;">Sunita Bai · Artisan Group (Rampur)</div>
        </div>
        <div style="border:1px solid var(--border); border-radius:12px; padding:16px;">
          <div style="font-size:12px; color:var(--slate);">Target Delivery Date</div>
          <div style="font-size:15px; font-weight:800; color:var(--green); margin-top:2px;">10 October 2026 (On Schedule)</div>
        </div>
        <div style="border:1px solid var(--border); border-radius:12px; padding:16px;">
          <div style="font-size:12px; color:var(--slate);">Quality Verification</div>
          <div style="font-size:15px; font-weight:800; color:var(--primary); margin-top:2px;">Grade A (Verified by Meena Kumari)</div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:24px;">
        <button class="btn-outline" onclick="goToStep(5)">← View Purchase Order</button>
        <button class="btn-primary" onclick="goToStep(7)">Proceed to Impact & Financial Calculator →</button>
      </div>
    </div>
  `;
}

function advanceTrackerStage() {
  if (APP_STATE.currentOrder.currentTrackerStage < 6) {
    APP_STATE.currentOrder.currentTrackerStage++;
  } else {
    APP_STATE.currentOrder.currentTrackerStage = 1;
  }
  render();
}

// ─────────────────────────────────────────────
// SCREEN 7: IMPACT (Impact & Financial Calculator)
// ─────────────────────────────────────────────
function renderImpactScreen() {
  const units = APP_STATE.monthlyUnitsSold;
  const avgPrice = 1200;
  const totalRev = units * avgPrice;
  const artisanShare = totalRev * 0.60;
  const materialShare = totalRev * 0.20;
  const communityShare = totalRev * 0.20;

  // Monthly income lift calculation
  const families = 20;
  const baseMonthly = 4500;
  const addedPerFamily = Math.round(artisanShare / families);
  const targetMonthly = baseMonthly + addedPerFamily;
  const liftPct = Math.round(((targetMonthly - baseMonthly) / baseMonthly) * 100);

  return `
    <div class="hub-card">
      <div class="card-header-row">
        <div>
          <h2 class="card-title">📊 ${t('tabImpact')}</h2>
          <p class="card-desc" style="margin-bottom:0;">
            See the impact of every order and understand self-sustaining unit economics.
          </p>
        </div>
        <button class="btn-primary" onclick="downloadImpactSummary()">
          📥 Download Impact Summary
        </button>
      </div>

      <!-- Top 3 Lifetime Metric Cards (Matches Page 7 of PDF) -->
      <div class="stat-chips-grid" style="margin-bottom:24px;">
        <div class="stat-chip-box">
          <div class="stat-chip-num" style="color:var(--navy)">128</div>
          <div class="stat-chip-label">Total Artisans Benefitted</div>
        </div>
        <div class="stat-chip-box">
          <div class="stat-chip-num" style="color:var(--green)">24</div>
          <div class="stat-chip-label">Total Orders Fulfilled</div>
        </div>
        <div class="stat-chip-box" style="grid-column: span 2;">
          <div class="stat-chip-num" style="color:var(--primary)">₹34,81,200</div>
          <div class="stat-chip-label">Total Gross Revenue Generated</div>
        </div>
      </div>

      <!-- Unit Economics Box (per unit) -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:20px; margin-bottom:24px;">
        <h4 style="font-size:14px; font-weight:800; color:var(--navy); margin-bottom:14px; text-transform:uppercase;">
          ${t('unitEconomics')}
        </h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; text-align:center;">
          <div style="background:var(--bg-page); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--slate);">${t('sellingPrice')}</div>
            <div style="font-size:22px; font-weight:800; color:var(--navy); margin-top:4px;">₹1,200</div>
          </div>
          <div style="background:var(--green-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--green); font-weight:700;">${t('artisanPayout')} (60%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--green); margin-top:4px;">₹720</div>
          </div>
          <div style="background:var(--gold-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--gold); font-weight:700;">${t('materialCost')} (20%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--gold); margin-top:4px;">₹240</div>
          </div>
          <div style="background:var(--primary-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--primary); font-weight:700;">${t('communityShare')} (20%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--primary); margin-top:4px;">₹240</div>
          </div>
        </div>
      </div>

      <!-- Interactive Dynamic Volume Simulator (Matches Page 8 of PDF) -->
      <div style="background:var(--bg-page); border:1px solid var(--border); border-radius:14px; padding:24px; margin-bottom:24px;">
        <h4 style="font-size:16px; font-weight:800; color:var(--navy); margin-bottom:6px;">
          Impact & Unit Economics Live Volume Simulator
        </h4>
        <p style="font-size:13px; color:var(--slate); margin-bottom:18px;">
          Adjust the monthly sales volume to explore estimated artisan earnings.
        </p>

        <div style="margin-bottom:20px;">
          <div style="display:flex; justify-content:space-between; font-size:14px; font-weight:700; margin-bottom:6px;">
            <span>Monthly units sold:</span>
            <span style="color:var(--primary); font-size:18px;">${units} Units</span>
          </div>
          <input type="range" min="10" max="300" step="5" value="${units}" style="width:100%; accent-color:var(--primary);" oninput="onVolumeChange(this.value)">
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--slate); margin-top:4px;">
            <span>10 units (Pilot minimum)</span>
            <span>80 units (Cohort target)</span>
            <span>300 units (Cluster scale)</span>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px;">
          <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:16px;">
            <div style="font-size:12px; color:var(--slate);">Total Monthly Revenue</div>
            <div style="font-size:24px; font-weight:800; color:var(--navy); margin-top:4px;">${formatInr(totalRev)}</div>
            <div style="font-size:12px; color:var(--green); font-weight:600; margin-top:4px;">Artisan pool: ${formatInr(artisanShare)}</div>
          </div>

          <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:16px;">
            <div style="font-size:12px; color:var(--slate);">Family Income Lift (${families} Families)</div>
            <div style="font-size:24px; font-weight:800; color:var(--primary); margin-top:4px;">${formatInr(targetMonthly)}/mo</div>
            <div style="font-size:12px; color:var(--green); font-weight:600; margin-top:4px;">+${liftPct}% over ₹${baseMonthly.toLocaleString('en-IN')} baseline</div>
          </div>

          <div style="background:#fff; border:1px solid var(--border); border-radius:12px; padding:16px;">
            <div style="font-size:12px; color:var(--slate);">Zero Recurring NGO Cost</div>
            <div style="font-size:24px; font-weight:800; color:var(--green); margin-top:4px;">Self-Funding</div>
            <div style="font-size:12px; color:var(--slate); margin-top:4px;">Operating: ₹6,200 | Community share: ${formatInr(communityShare)}</div>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:20px;">
        <button class="btn-outline" onclick="goToStep(6)">← Back to Order Tracker</button>
        <button class="btn-primary" onclick="goToStep(1)">Return to artisan groups ↺</button>
      </div>
    </div>
  `;
}

function onVolumeChange(val) {
  APP_STATE.monthlyUnitsSold = parseInt(val) || 80;
  render();
}

function downloadImpactSummary() {
  const units = APP_STATE.monthlyUnitsSold;
  const rev = units * 1200;
  const csv = `Metric,Value\nTotal Artisans,128\nOrders Fulfilled,24\nLifetime Revenue,₹34,81,200\nSimulated Monthly Units,${units}\nSimulated Monthly Revenue,₹${rev.toLocaleString('en-IN')}\nTarget Family Income,₹10,500/mo\nIncome Lift,+162%\nDirect Artisan Payout,80%\nSelf-Sufficiency,100% (Zero Grant Required)\n`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Hunar_Saarthi_Impact_Summary.csv';
  a.click();
}

// Window load trigger
window.addEventListener('DOMContentLoaded', initApp);
