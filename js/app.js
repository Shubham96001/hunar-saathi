/**
 * Hunar Saarthi prototype
 */

const APP_STATE = {
  currentStep: 1, // 1: Profiles, 2: Training, 3: Catalog, 4: Order, 5: PO, 6: Tracker, 7: Impact
  lang: 'en', // 'en', 'hi', 'mr'
  selectedFilter: 'all',
  voiceRecognition: null,
  voiceListening: false,

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
    stepCounter: 'Step',
    stepOf: 'of',
    previousStep: 'Previous step',
    voiceTitle: 'Voice help',
    speakInstructions: 'Hear instructions',
    startVoiceCommands: 'Use voice commands',
    stopVoiceCommands: 'Stop listening',
    voiceReady: 'Voice help is optional. Hear this step or say “next”, “back”, or “repeat”.',
    voiceUnavailable: 'Voice commands are not supported in this browser. Try Chrome or Edge over localhost or HTTPS.',
    voiceMicError: 'Microphone access failed. Check browser permissions and try again.',
    voiceRecognitionError: 'Voice recognition could not start. Check microphone access and try again.',
    voiceListening: 'Listening. Say “next”, “back”, or “repeat”.',
    voiceStopped: 'Voice command listening stopped.',
    voiceNotHeard: 'I did not catch that. Please try “next”, “back”, or “repeat”.',
    voiceInstructionsUnavailable: 'Spoken instructions are not supported in this browser.',
    voicePrivacy: 'Microphone access is used only after you press the button. Your browser may process voice commands.',
    voiceWorkflowComplete: 'You are at the end of the demo. Say “back” to review the previous step or start again on screen.',
    voiceAtStart: 'This is the first step. Say “next” to continue.',
    voiceGuidance: [
      'Review the artisan profiles, then choose Continue to skill check.',
      'Choose an artisan, complete the skill checks, then say “next” to save the result.',
      'Choose a product, or say “next” to use the first product, to continue to the sample order.',
      'Review the sample order and choose Generate Purchase Order.',
      'Review the sample purchase order, then choose Confirm and Track Order.',
      'Review the order status. Choose Continue to Impact when ready.',
      'Review the sample earnings estimate. You can start the workflow again.'
    ],
    voiceNext: ['next', 'continue', 'आगे', 'अगला', 'जारी रखें', 'पुढे', 'चला'],
    voiceBack: ['back', 'previous', 'वापस', 'पीछे', 'पिछला', 'मागे'],
    voiceRepeat: ['repeat', 'help', 'दोहराएं', 'दोहराइए', 'फिर से', 'पुन्हा', 'मदत'],
    step1: 'Profiles', step2: 'Training', step3: 'Catalog', step4: 'Order', step5: 'Purchase Order', step6: 'Tracker', step7: 'Impact',
    hamletName: 'Artisan Group',
    groupLocation: 'Rampur group',
    peopleInGroup: 'people in this group',
    continueToTraining: 'Continue to skill check',
    totalArtisans: 'Total Artisans',
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
    downloadPO: 'Download PO',
    orderConfirmed: 'Order Confirmed',
    materialsAllocated: 'Materials Allocated',
    productionProgress: 'Production In Progress',
    readyDispatch: 'Ready for Dispatch',
    delivered: 'Delivered',
    unitEconomics: 'Unit Economics (per unit)',
    sellingPrice: 'Selling Price',
    artisanPayout: 'Artisan Payout',
    materialCost: 'Material Cost',
    communityShare: 'Community operations share'
  },
  hi: {
    hubTitle: 'हुनर सारथी',
    trackName: 'कारीगर आजीविका कार्यक्षेत्र',
    stepCounter: 'चरण',
    stepOf: '/',
    previousStep: 'पिछला चरण',
    voiceTitle: 'आवाज़ से मदद',
    speakInstructions: 'निर्देश सुनें',
    startVoiceCommands: 'आवाज़ से निर्देश दें',
    stopVoiceCommands: 'सुनना बंद करें',
    voiceReady: 'आवाज़ से मदद वैकल्पिक है। निर्देश सुनें या “आगे”, “वापस” अथवा “दोहराएं” कहें।',
    voiceUnavailable: 'इस ब्राउज़र में आवाज़ से निर्देश उपलब्ध नहीं हैं। Chrome या Edge में localhost अथवा HTTPS पर खोलें।',
    voiceMicError: 'माइक्रोफ़ोन नहीं चला। ब्राउज़र की अनुमति जाँचें और फिर कोशिश करें।',
    voiceRecognitionError: 'आवाज़ की पहचान शुरू नहीं हुई। माइक्रोफ़ोन की अनुमति जाँचें और फिर कोशिश करें।',
    voiceListening: 'सुन रहा है। “आगे”, “वापस” या “दोहराएं” कहें।',
    voiceStopped: 'आवाज़ सुनना बंद है।',
    voiceNotHeard: 'समझ नहीं आया। “आगे”, “वापस” या “दोहराएं” कहें।',
    voiceInstructionsUnavailable: 'इस ब्राउज़र में आवाज़ में निर्देश उपलब्ध नहीं हैं।',
    voicePrivacy: 'माइक्रोफ़ोन बटन दबाने पर ही चालू होता है। आपका ब्राउज़र आवाज़ के निर्देश संसाधित कर सकता है।',
    voiceWorkflowComplete: 'डेमो पूरा हुआ। पिछला चरण देखने के लिए “वापस” कहें या स्क्रीन से फिर शुरू करें।',
    voiceAtStart: 'यह पहला चरण है। आगे जाने के लिए “आगे” कहें।',
    voiceGuidance: [
      'कारीगरों की प्रोफ़ाइल देखें, फिर कौशल जाँच पर जाएँ चुनें।',
      'कारीगर चुनें, कौशल जाँच पूरी करें और परिणाम सहेजने के लिए “आगे” कहें।',
      'एक उत्पाद चुनें। पहला उत्पाद चुनने के लिए “आगे” कहें।',
      'नमूना ऑर्डर देखें और खरीद आदेश बनाएं चुनें।',
      'नमूना खरीद आदेश देखें, फिर पुष्टि करें और ऑर्डर ट्रैक करें चुनें।',
      'ऑर्डर की स्थिति देखें। तैयार होने पर प्रभाव देखें चुनें।',
      'कमाई का नमूना अनुमान देखें। आप कार्यप्रवाह फिर से शुरू कर सकते हैं।'
    ],
    voiceNext: ['आगे', 'अगला', 'जारी रखें'],
    voiceBack: ['वापस', 'पीछे', 'पिछला'],
    voiceRepeat: ['दोहराएं', 'दोहराइए', 'फिर से'],
    step1: 'प्रोफाइल', step2: 'प्रशिक्षण', step3: 'कैटलॉग', step4: 'ऑर्डर', step5: 'खरीद आदेश', step6: 'ट्रैकर', step7: 'प्रभाव',
    hamletName: 'कारीगर समूह',
    groupLocation: 'रामपुर समूह',
    peopleInGroup: 'इस समूह में लोग',
    continueToTraining: 'कौशल जाँच पर जाएँ',
    totalArtisans: 'कुल कारीगर',
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
    unitEconomics: 'इकाई अर्थशास्त्र (प्रति पीस)',
    sellingPrice: 'विक्रय मूल्य',
    artisanPayout: 'कारीगर की कमाई',
    materialCost: 'कच्चा माल लागत',
    communityShare: 'सामुदायिक संचालन हिस्सा'
  },
  mr: {
    hubTitle: 'हुनर सारथी',
    trackName: 'कारागीर उपजीविका कार्यक्षेत्र',
    stepCounter: 'टप्पा',
    stepOf: '/',
    previousStep: 'मागील टप्पा',
    voiceTitle: 'आवाज मदत',
    speakInstructions: 'सूचना ऐका',
    startVoiceCommands: 'आवाजाने सूचना द्या',
    stopVoiceCommands: 'ऐकणे थांबवा',
    voiceReady: 'आवाज मदत ऐच्छिक आहे. सूचना ऐका किंवा “पुढे”, “मागे” अथवा “पुन्हा” म्हणा.',
    voiceUnavailable: 'या ब्राउझरमध्ये आवाज सूचना उपलब्ध नाहीत. Chrome किंवा Edge मध्ये localhost अथवा HTTPS वापरा.',
    voiceMicError: 'मायक्रोफोन सुरू झाला नाही. ब्राउझरची परवानगी तपासा आणि पुन्हा प्रयत्न करा.',
    voiceRecognitionError: 'आवाज ओळख सुरू झाली नाही. मायक्रोफोनची परवानगी तपासा आणि पुन्हा प्रयत्न करा.',
    voiceListening: 'ऐकत आहे. “पुढे”, “मागे” किंवा “पुन्हा” म्हणा.',
    voiceStopped: 'आवाज ऐकणे थांबवले.',
    voiceNotHeard: 'समजले नाही. “पुढे”, “मागे” किंवा “पुन्हा” म्हणा.',
    voiceInstructionsUnavailable: 'या ब्राउझरमध्ये बोललेल्या सूचना उपलब्ध नाहीत.',
    voicePrivacy: 'मायक्रोफोन बटण दाबल्यावरच सुरू होतो. ब्राउझर आवाज सूचना प्रक्रिया करू शकतो.',
    voiceWorkflowComplete: 'डेमो पूर्ण झाला. मागील टप्प्यासाठी “मागे” म्हणा किंवा स्क्रीनवरून पुन्हा सुरू करा.',
    voiceAtStart: 'हा पहिला टप्पा आहे. पुढे जाण्यासाठी “पुढे” म्हणा.',
    voiceGuidance: [
      'कारागिरांच्या प्रोफाइल पाहा, नंतर कौशल्य तपासणीकडे जा निवडा.',
      'कारागीर निवडा, कौशल्य तपासणी पूर्ण करा आणि निकाल जतन करण्यासाठी “पुढे” म्हणा.',
      'उत्पादन निवडा. पहिले उत्पादन निवडण्यासाठी “पुढे” म्हणा.',
      'नमुना ऑर्डर तपासा आणि खरेदी आदेश तयार करा निवडा.',
      'नमुना खरेदी आदेश तपासा, नंतर पुष्टी करून ऑर्डर ट्रॅक करा निवडा.',
      'ऑर्डरची स्थिती पाहा. तयार झाल्यावर परिणामाकडे पुढे जा निवडा.',
      'कमाईचा नमुना अंदाज पाहा. कार्यप्रवाह पुन्हा सुरू करू शकता.'
    ],
    voiceNext: ['पुढे', 'चला'],
    voiceBack: ['मागे', 'मागील'],
    voiceRepeat: ['पुन्हा', 'मदत'],
    step1: 'प्रोफाइल्स', step2: 'प्रशिक्षण', step3: 'कॅटलॉग', step4: 'ऑर्डर', step5: 'खरेदी आदेश', step6: 'ट्रॅकर', step7: 'प्रभाव',
    hamletName: 'कारागीर गट',
    groupLocation: 'रामपूर गट',
    peopleInGroup: 'या गटातील सदस्य',
    continueToTraining: 'कौशल्य तपासणीकडे जा',
    totalArtisans: 'एकूण कारागीर',
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
    unitEconomics: 'युनिट अर्थशास्त्र (प्रति नग)',
    sellingPrice: 'विक्री किंमत',
    artisanPayout: 'कारागीर वाटा',
    materialCost: 'कच्चा माल खर्च',
    communityShare: 'समुदाय संचालन हिस्सा'
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
  if (!Number.isInteger(step) || step < 1 || step > 7 || step > APP_STATE.currentStep + 1) {
    return;
  }

  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  APP_STATE.currentStep = step;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Change Language
function switchLang(lang) {
  if (APP_STATE.voiceListening) APP_STATE.voiceRecognition.stop();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  APP_STATE.lang = lang;
  render();
}

function voiceLanguage() {
  return { en: 'en-IN', hi: 'hi-IN', mr: 'mr-IN' }[APP_STATE.lang] || 'en-IN';
}

function setVoiceStatus(message) {
  const status = document.getElementById('voice-status');
  if (status) status.textContent = message;
}

function speakStepGuidance() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    setVoiceStatus(t('voiceInstructionsUnavailable'));
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(t('voiceGuidance')[APP_STATE.currentStep - 1]);
  utterance.lang = voiceLanguage();
  const voice = window.speechSynthesis.getVoices().find(item => item.lang.toLowerCase().startsWith(APP_STATE.lang));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
  setVoiceStatus(t('voiceGuidance')[APP_STATE.currentStep - 1]);
}

function toggleVoiceCommands() {
  if (APP_STATE.voiceListening) {
    APP_STATE.voiceRecognition.stop();
    return;
  }

  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    setVoiceStatus(t('voiceUnavailable'));
    return;
  }

  const recognition = new Recognition();
  recognition.lang = voiceLanguage();
  recognition.continuous = false;
  recognition.interimResults = false;
  APP_STATE.voiceRecognition = recognition;
  recognition.onstart = () => {
    APP_STATE.voiceListening = true;
    const button = document.getElementById('voice-command-button');
    if (button) button.textContent = `🎙 ${t('stopVoiceCommands')}`;
    setVoiceStatus(t('voiceListening'));
  };
  recognition.onresult = event => {
    const transcript = event.results[event.resultIndex][0].transcript.trim().toLocaleLowerCase(APP_STATE.lang);
    if (t('voiceNext').some(command => transcript.includes(command))) {
      advanceWorkflowByVoice();
    } else if (t('voiceBack').some(command => transcript.includes(command))) {
      if (APP_STATE.currentStep === 1) {
        setVoiceStatus(t('voiceAtStart'));
      } else {
        goToStep(APP_STATE.currentStep - 1);
      }
    } else if (t('voiceRepeat').some(command => transcript.includes(command))) {
      speakStepGuidance();
    } else {
      setVoiceStatus(t('voiceNotHeard'));
    }
  };
  recognition.onerror = event => {
    APP_STATE.voiceListening = false;
    const button = document.getElementById('voice-command-button');
    if (button) button.textContent = `🎙 ${t('startVoiceCommands')}`;
    setVoiceStatus(event.error === 'not-allowed' || event.error === 'service-not-allowed'
      ? t('voiceMicError')
      : t('voiceRecognitionError'));
  };
  recognition.onend = () => {
    APP_STATE.voiceListening = false;
    APP_STATE.voiceRecognition = null;
    const button = document.getElementById('voice-command-button');
    if (button) button.textContent = `🎙 ${t('startVoiceCommands')}`;
  };

  recognition.start();
}

function advanceWorkflowByVoice() {
  switch (APP_STATE.currentStep) {
    case 1:
      goToStep(2);
      break;
    case 2:
      submitTraining();
      break;
    case 3:
      selectProductForOrder(APP_STATE.products[0].id);
      break;
    case 4:
      generatePO();
      break;
    case 5:
      goToStep(6);
      break;
    case 6:
      goToStep(7);
      break;
    case 7:
      setVoiceStatus(t('voiceWorkflowComplete'));
      break;
    default:
      setVoiceStatus(t('voiceNotHeard'));
  }
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
  const currentStepLabel = t(`step${currentStep}`);
  const progressPercent = (currentStep / 7) * 100;

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

    <!-- Show the current task only; do not expose future workflow stages as navigation. -->
    <main class="main-container">
      <section class="workflow-progress" aria-label="Workflow progress">
        <div class="workflow-progress-heading">
          <span>${t('stepCounter')} ${currentStep} ${t('stepOf')} 7</span>
          <h1>${currentStepLabel}</h1>
        </div>
        <div
          class="workflow-progress-track"
          role="progressbar"
          aria-label="${t('stepCounter')} ${currentStep} ${t('stepOf')} 7"
          aria-valuemin="1"
          aria-valuemax="7"
          aria-valuenow="${currentStep}"
        >
          <span style="width:${progressPercent}%"></span>
        </div>
        <div class="voice-help">
          <div class="voice-help-copy">
            <strong>${t('voiceTitle')}</strong>
            <p>${t('voicePrivacy')}</p>
          </div>
          <div class="voice-help-actions">
            <button class="btn-outline voice-button" onclick="speakStepGuidance()">🔊 ${t('speakInstructions')}</button>
            <button id="voice-command-button" class="btn-outline voice-button" onclick="toggleVoiceCommands()">🎙 ${t('startVoiceCommands')}</button>
          </div>
          <p id="voice-status" class="voice-status" role="status" aria-live="polite">${t('voiceReady')}</p>
        </div>
      </section>
      ${mainContentHtml}
      ${currentStep > 1 ? `
        <nav class="workflow-navigation" aria-label="Workflow navigation">
          <button class="btn-outline" onclick="goToStep(${currentStep - 1})">← ${t('previousStep')}</button>
        </nav>
      ` : ''}
    </main>
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
    <div class="group-summary">
      <div class="group-summary-details">
        <div class="group-summary-avatar" aria-hidden="true">SB</div>
        <div>
          <h2>${t('hamletName')}</h2>
          <p>${t('groupLocation')} · ${APP_STATE.artisans.length} ${t('peopleInGroup')}</p>
        </div>
      </div>
      <button class="btn-primary" onclick="goToStep(2)">${t('continueToTraining')} →</button>
    </div>

    <!-- Filter Pills -->
    <div class="artisan-list-heading">
      <h2>${t('totalArtisans')}</h2>
      <div class="filter-pills-bar">
        <button class="pill-btn ${APP_STATE.selectedFilter === 'all' ? 'active' : ''}" onclick="setArtisanFilter('all')">${t('filterAll')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'pending' ? 'active' : ''}" onclick="setArtisanFilter('pending')">${t('filterPending')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'training_pass' ? 'active' : ''}" onclick="setArtisanFilter('training_pass')">${t('filterPass')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'needs_practice' ? 'active' : ''}" onclick="setArtisanFilter('needs_practice')">${t('filterNeeds')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'ready_packaging' ? 'active' : ''}" onclick="setArtisanFilter('ready_packaging')">${t('filterPackaging')}</button>
      <button class="pill-btn ${APP_STATE.selectedFilter === 'in_stock' ? 'active' : ''}" onclick="setArtisanFilter('in_stock')">${t('filterStock')}</button>
      </div>
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
          <div class="artisan-item-card">
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
        <button class="btn-primary" onclick="submitTraining()">✓ ${t('saveTraining')} & Continue to ${t('step3')} →</button>
      </div>
    </div>
  `;
}

function submitTraining() {
  const select = document.getElementById('trainArtisanSelect');
  const artisanId = select.value;
  const artisan = APP_STATE.artisans.find(a => a.id === artisanId);
  const checks = ['sizeCheck', 'knotCheck'].map(name =>
    document.querySelector(`input[name="${name}"]:checked`)?.value
  );
  const passedChecks = checks.filter(result => result === 'pass').length;

  if (artisan) {
    artisan.status = passedChecks === checks.length ? 'training_pass' : 'needs_practice';
    artisan.score = Math.round((passedChecks / checks.length) * 100);
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
          <h2 class="card-title">🎁 ${t('step3')}</h2>
          <p class="card-desc" style="margin-bottom:0;">
            Browse products and prices.
          </p>
        </div>
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

      <div style="display:flex; justify-content:flex-end; margin-top:24px;">
        <button class="btn-primary" onclick="goToStep(7)">Continue to ${t('step7')} →</button>
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
  const avgPrice = APP_STATE.currentOrder.unitPrice;
  const totalRev = units * avgPrice;
  const artisanShare = totalRev * 0.80;
  const materialShare = totalRev * 0.10;
  const communityShare = totalRev * 0.10;

  return `
    <div class="hub-card">
      <div class="card-header-row">
        <div>
          <h2 class="card-title">📊 ${t('step7')}</h2>
          <p class="card-desc" style="margin-bottom:0;">A sample estimate based on the selected product and monthly sales.</p>
        </div>
        <button class="btn-primary" onclick="downloadImpactSummary()">
          📥 Download Impact Summary
        </button>
      </div>

      <!-- Sample revenue split per unit -->
      <div style="background:#fff; border:1px solid var(--border); border-radius:14px; padding:20px; margin-bottom:24px;">
        <h4 style="font-size:14px; font-weight:800; color:var(--navy); margin-bottom:14px; text-transform:uppercase;">
          ${t('unitEconomics')}
        </h4>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:12px; text-align:center;">
          <div style="background:var(--bg-page); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--slate);">${t('sellingPrice')}</div>
            <div style="font-size:22px; font-weight:800; color:var(--navy); margin-top:4px;">${formatInr(avgPrice)}</div>
          </div>
          <div style="background:var(--green-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--green); font-weight:700;">${t('artisanPayout')} (80%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--green); margin-top:4px;">${formatInr(avgPrice * 0.8)}</div>
          </div>
          <div style="background:var(--gold-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--gold); font-weight:700;">${t('materialCost')} (10%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--gold); margin-top:4px;">${formatInr(avgPrice * 0.1)}</div>
          </div>
          <div style="background:var(--primary-light); padding:14px; border-radius:10px;">
            <div style="font-size:12px; color:var(--primary); font-weight:700;">${t('communityShare')} (10%)</div>
            <div style="font-size:22px; font-weight:800; color:var(--primary); margin-top:4px;">${formatInr(avgPrice * 0.1)}</div>
          </div>
        </div>
      </div>

      <!-- Interactive Dynamic Volume Simulator (Matches Page 8 of PDF) -->
      <div style="background:var(--bg-page); border:1px solid var(--border); border-radius:14px; padding:24px; margin-bottom:24px;">
        <h4 style="font-size:16px; font-weight:800; color:var(--navy); margin-bottom:6px;">
          Monthly estimate
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
            <div style="font-size:12px; color:var(--slate);">Materials & operations (20%)</div>
            <div style="font-size:24px; font-weight:800; color:var(--primary); margin-top:4px;">${formatInr(materialShare + communityShare)}</div>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:20px;">
        <button class="btn-primary" onclick="goToStep(1)">Start workflow again ↺</button>
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
  const unitPrice = APP_STATE.currentOrder.unitPrice;
  const revenue = units * unitPrice;
  const csv = `Metric,Value\nProduct,${APP_STATE.currentOrder.productName}\nMonthly units,${units}\nUnit price,${formatInr(unitPrice)}\nEstimated monthly revenue,${formatInr(revenue)}\nEstimated artisan share (80%),${formatInr(revenue * 0.8)}\nEstimated materials share (10%),${formatInr(revenue * 0.1)}\nEstimated community share (10%),${formatInr(revenue * 0.1)}\n`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Hunar_Saarthi_Impact_Summary.csv';
  a.click();
}

// Window load trigger
window.addEventListener('DOMContentLoaded', initApp);
