/**
 * Julie's Website - Core Interactive Engine
 * Version: 1.0.0
 * Features: SPA Router, Theme Toggle, IUPAC Explorer, Equation Balancer, Trial Booking Form
 */

// =========================================================================
// 1. IUPAC CHEMISTRY KNOWLEDGE BASE (GDPT 2018 Standard)
// =========================================================================
const IUPAC_DATABASE = [
  {
    id: "methane",
    category: "alkane",
    categoryName: "Alkane (Hydrocarbon No)",
    formula: "CH4",
    structure: "CH4",
    oldName: "Metan",
    iupacName: "Methane",
    ipa: "/ˈmeθ.eɪn/",
    prefix: "",
    root: "meth",
    suffix: "ane",
    description: "Khí thiên nhiên, thành phần chính của khí đầm lầy và biogas. Phản ứng thế halogen đặc trưng.",
    level: "Lớp 9, 11"
  },
  {
    id: "ethane",
    category: "alkane",
    categoryName: "Alkane (Hydrocarbon No)",
    formula: "C2H6",
    structure: "CH3-CH3",
    oldName: "Etan",
    iupacName: "Ethane",
    ipa: "/ˈiː.θeɪn/",
    prefix: "",
    root: "eth",
    suffix: "ane",
    description: "Alkane mạch thẳng 2 carbon, tồn tại ở thể khí không màu, không mùi.",
    level: "Lớp 9, 11"
  },
  {
    id: "propane",
    category: "alkane",
    categoryName: "Alkane (Hydrocarbon No)",
    formula: "C3H8",
    structure: "CH3-CH2-CH3",
    oldName: "Propan",
    iupacName: "Propane",
    ipa: "/ˈprəʊ.peɪn/",
    prefix: "",
    root: "prop",
    suffix: "ane",
    description: "Thành phần chính của khí hóa lỏng LPG (bình gas gia đình).",
    level: "Lớp 11"
  },
  {
    id: "ethene",
    category: "alkene",
    categoryName: "Alkene (Hydrocarbon Không No)",
    formula: "C2H4",
    structure: "CH2=CH2",
    oldName: "Etilen",
    iupacName: "Ethene",
    ipa: "/ˈiː.θiːn/",
    prefix: "",
    root: "eth",
    suffix: "ene",
    description: "Hormone thực vật kích thích quả chín mau, nguyên liệu trùng hợp PE.",
    level: "Lớp 9, 11"
  },
  {
    id: "ethyne",
    category: "alkyne",
    categoryName: "Alkyne (Hydrocarbon Có Nối Ba)",
    formula: "C2H2",
    structure: "CH≡CH",
    oldName: "Axetilen",
    iupacName: "Ethyne",
    ipa: "/ˈeθ.aɪn/",
    prefix: "",
    root: "eth",
    suffix: "yne",
    description: "Khí hàn xì oxy-acetylene, phản ứng thế ion kim loại đặc trưng của alk-1-yne.",
    level: "Lớp 9, 11"
  },
  {
    id: "methanol",
    category: "alcohol",
    categoryName: "Alcohol (Cồn / Rượu)",
    formula: "CH3OH",
    structure: "CH3-OH",
    oldName: "Metanol / Rượu metylic",
    iupacName: "Methanol",
    ipa: "/ˈmeθ.ə.nɒl/",
    prefix: "",
    root: "methan",
    suffix: "ol",
    description: "Cực kỳ độc hại, gây mù lòa hoặc tử vong nếu uống nhầm rượu giả pha tạp.",
    level: "Lớp 9, 11"
  },
  {
    id: "ethanol",
    category: "alcohol",
    categoryName: "Alcohol (Cồn / Rượu)",
    formula: "C2H5OH",
    structure: "CH3-CH2-OH",
    oldName: "Etanol / Rượu etylic",
    iupacName: "Ethanol",
    ipa: "/ˈeθ.ə.nɒl/",
    prefix: "",
    root: "ethan",
    suffix: "ol",
    description: "Cồn thực phẩm, cồn y tế 70 độ sát khuẩn, nhiên liệu sinh học E5.",
    level: "Lớp 9, 11, 12"
  },
  {
    id: "methanal",
    category: "aldehyde",
    categoryName: "Aldehyde (Hợp chất chứa -CHO)",
    formula: "HCHO",
    structure: "H-CHO",
    oldName: "Focmanđehit / Focmon",
    iupacName: "Methanal",
    ipa: "/ˈmeθ.ə.næl/",
    prefix: "",
    root: "methan",
    suffix: "al",
    description: "Dung dịch 37-40% trong nước gọi là formalin dùng ướp xác, độc tính cao.",
    level: "Lớp 11"
  },
  {
    id: "ethanoic_acid",
    category: "carboxylic_acid",
    categoryName: "Carboxylic Acid (Axit Hữu Cơ)",
    formula: "CH3COOH",
    structure: "CH3-COOH",
    oldName: "Axit axetic / Giấm ăn",
    iupacName: "Ethanoic acid",
    ipa: "/ˌeθ.əˈnəʊ.ɪk ˈæs.ɪd/",
    prefix: "",
    root: "ethan",
    suffix: "oic acid",
    description: "Giấm ăn thông thường (dung dịch 2-5%), vị chua thanh, làm gia vị và bảo quản.",
    level: "Lớp 9, 11, 12"
  },
  {
    id: "methyl_ethanoate",
    category: "ester",
    categoryName: "Ester (Mùi Thơm Trái Cây)",
    formula: "C3H6O2",
    structure: "CH3-COO-CH3",
    oldName: "Metyl axetat",
    iupacName: "Methyl ethanoate",
    ipa: "/ˈmeθ.ɪl ˌeθ.əˈnəʊ.eɪt/",
    prefix: "methyl",
    root: "ethan",
    suffix: "oate",
    description: "Ester có mùi thơm dễ chịu, dung môi trong sơn móng tay và chiết xuất hương liệu.",
    level: "Lớp 12"
  },
  {
    id: "methanamine",
    category: "amine",
    categoryName: "Amine (Gốc Chứa Nitrogen)",
    formula: "CH5N",
    structure: "CH3-NH2",
    oldName: "Metylamin",
    iupacName: "Methanamine",
    ipa: "/ˌmeθ.ənˈeɪ.miːn/",
    prefix: "",
    root: "methan",
    suffix: "amine",
    description: "Khí có mùi khai tương tự amoniac, tính base làm quỳ tím hóa xanh.",
    level: "Lớp 12"
  },
  {
    id: "benzene",
    category: "aromatic",
    categoryName: "Arene (Hydrocarbon Thơm)",
    formula: "C6H6",
    structure: "C6H6 (Vòng 6 cạnh)",
    oldName: "Benzen",
    iupacName: "Benzene",
    ipa: "/ˈben.ziːn/",
    prefix: "",
    root: "benz",
    suffix: "ene",
    description: "Cấu trúc vòng thơm Kekulé liên hợp bền vững, phản ứng thế ưu thế hơn phản ứng cộng.",
    level: "Lớp 11"
  }
];

// =========================================================================
// 2. CHEMICAL EQUATIONS DATABASE FOR BALANCER
// =========================================================================
const EQUATIONS_DATABASE = [
  {
    query: "fe + hno3",
    raw: "Fe + HNO3 (loãng) -> Fe(NO3)3 + NO + H2O",
    balanced: "Fe + 4HNO3 -> Fe(NO3)3 + NO↑ + 2H2O",
    type: "Phản ứng Oxi hóa - Khử",
    explanation: "• Chất khử: Fe (0 -> +3, nhường 3e)<br>• Chất oxi hóa: N (+5 trong HNO3 -> +2 trong NO, nhận 3e)<br>• Bản chất: Kim loại tác dụng với acid có tính oxi hóa mạnh."
  },
  {
    query: "al + h2so4",
    raw: "Al + H2SO4 (đặc, nóng) -> Al2(SO4)3 + SO2 + H2O",
    balanced: "2Al + 6H2SO4(đ,n) -> Al2(SO4)3 + 3SO2↑ + 6H2O",
    type: "Phản ứng Oxi hóa - Khử",
    explanation: "• Chất khử: Al (0 -> +3, nhường 3e x 2 = 6e)<br>• Chất oxi hóa: S (+6 -> +4 trong SO2, nhận 2e x 3 = 6e)<br>• Lưu ý: Al thụ động trong H2SO4 đặc nguội."
  },
  {
    query: "c2h5oh + o2",
    raw: "C2H5OH + O2 -> CO2 + H2O",
    balanced: "C2H5OH + 3O2 -> 2CO2 + 3H2O (to)",
    type: "Phản ứng Cháy Hoàn Toàn (Oxi hóa hữu cơ)",
    explanation: "• Bản chất: Đốt cháy alcohol no đơn chức tỏa nhiều nhiệt.<br>• Tỉ lệ: nH2O > nCO2 => Hợp chất là alcohol no mạch hở."
  },
  {
    query: "caco3",
    raw: "CaCO3 (nung nóng) -> CaO + CO2",
    balanced: "CaCO3 -> CaO + CO2↑ (ở ~900°C)",
    type: "Phản ứng Phân hủy Nhiệt",
    explanation: "• Bản chất: Muối cacbonat không tan bị nhiệt phân tạo oxit base và khí CO2.<br>• Ứng dụng: Lò nung vôi công nghiệp."
  },
  {
    query: "ch4 + cl2",
    raw: "CH4 + Cl2 (ánh sáng) -> CH3Cl + HCl",
    balanced: "CH4 + Cl2 -> CH3Cl + HCl (ánh sáng khuếch tán 1:1)",
    type: "Phản ứng Thế Halogen (Cơ chế Gốc Tự Do SR)",
    explanation: "• Bản chất: Cắt đứt liên kết C-H để thay thế bằng liên kết C-Cl dưới tác dụng photon ánh sáng."
  }
];

// =========================================================================
// 3. APP INITIALIZATION & SPA ROUTER
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRouter();
  initIUPACExplorer();
  initEquationBalancer();
  initTrialForm();
  initProjectFilters();
  registerServiceWorker();
});

// SPA Router
function initRouter() {
  const navLinks = document.querySelectorAll('[data-route]');
  
  function handleRoute(hash) {
    const route = (hash.replace('#', '') || 'home').toLowerCase();
    
    // Hide all screens
    document.querySelectorAll('.tab-screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(`screen-${route}`) || document.getElementById('screen-home');
    if (targetScreen) {
      targetScreen.classList.add('active');
    }

    // Update active nav styling
    document.querySelectorAll('[data-route]').forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      if (linkRoute === route) {
        link.classList.add('nav-tab-active');
      } else {
        link.classList.remove('nav-tab-active');
      }
    });

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update document title
    const titles = {
      home: "Julies (iamjulies) — Sư Phạm & Công Nghệ",
      teaching: "Góc Học Thuật Hóa Học — Julies (Đức Hạo)",
      projects: "Lab Dự Án Số & EdTech Apps — Julies (iamjulies)",
      about: "Về Julies — Hành Trình & Kết Nối"
    };
    document.title = titles[route] || "Julies — Personal Website";
  }

  // Click event on nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      window.location.hash = route;
    });
  });

  // Hash change listener
  window.addEventListener('hashchange', () => {
    handleRoute(window.location.hash);
  });

  // Initial route
  handleRoute(window.location.hash);
}

// =========================================================================
// 4. THEME CONTROLLER (Dark / Light)
// =========================================================================
function initTheme() {
  const themeToggleButtons = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('julie_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  themeToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('julie_theme', isDark ? 'dark' : 'light');
      showToast(isDark ? '🌙 Đã chuyển sang chế độ Ban đêm' : '☀️ Đã chuyển sang chế độ Ban ngày');
    });
  });
}

// =========================================================================
// 5. IUPAC NOMENCLATURE INTERACTIVE EXPLORER
// =========================================================================
function initIUPACExplorer() {
  const searchInput = document.getElementById('iupac-search-input');
  const categoryFilter = document.getElementById('iupac-category-filter');
  const resultsContainer = document.getElementById('iupac-results-grid');
  const countBadge = document.getElementById('iupac-count-badge');

  if (!resultsContainer) return;

  function renderIUPACCards(items) {
    if (countBadge) {
      countBadge.textContent = `${items.length} chất`;
    }

    if (items.length === 0) {
      resultsContainer.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-500 dark:text-slate-400">
          <p class="text-4xl mb-3">🔍</p>
          <p class="font-semibold text-lg">Không tìm thấy hợp chất phù hợp</p>
          <p class="text-sm">Hãy thử tìm theo tên tiếng Việt (ví dụ: 'etilen', 'axit axetic') hoặc tên IUPAC ('ethane', 'alcohol').</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = items.map(item => `
      <div class="glass-card rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-500/50 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ${item.categoryName}
            </span>
            <span class="text-xs text-slate-400 font-mono">${item.level}</span>
          </div>
          
          <div class="flex items-baseline gap-2 mt-1">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white font-heading">${item.iupacName}</h3>
            <span class="text-xs text-slate-400 font-mono">${item.ipa}</span>
          </div>

          <div class="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">
            Tên cũ: <span class="italic">${item.oldName}</span>
          </div>

          <div class="my-3 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 font-mono text-center text-base font-bold text-indigo-600 dark:text-indigo-400">
            ${item.structure}
          </div>

          <div class="flex flex-wrap gap-1 mb-3">
            ${item.prefix ? `<span class="iupac-tag bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Tiền tố: ${item.prefix}</span>` : ''}
            <span class="iupac-tag bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">Mạch: ${item.root}</span>
            <span class="iupac-tag bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">Đuôi: ${item.suffix}</span>
          </div>

          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            ${item.description}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between text-xs">
          <span class="font-mono text-slate-400">CTPT: <strong>${item.formula}</strong></span>
          <button onclick="speakText('${item.iupacName}')" class="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-medium">
            <span>🔊</span> Nghe phát âm
          </button>
        </div>
      </div>
    `).join('');
  }

  function filterData() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const category = categoryFilter ? categoryFilter.value : 'all';

    const filtered = IUPAC_DATABASE.filter(item => {
      const matchesCategory = category === 'all' || item.category === category;
      const matchesQuery = !query || 
        item.iupacName.toLowerCase().includes(query) ||
        item.oldName.toLowerCase().includes(query) ||
        item.formula.toLowerCase().includes(query) ||
        item.structure.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    renderIUPACCards(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterData);
  if (categoryFilter) categoryFilter.addEventListener('change', filterData);

  // Initial render
  filterData();
}

// Text-to-Speech Pronunciation Helper
window.speakText = function(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } else {
    showToast(`Đọc: ${text}`);
  }
};

// =========================================================================
// 6. CHEMICAL EQUATION BALANCER (MINI-TOOL)
// =========================================================================
function initEquationBalancer() {
  const input = document.getElementById('balancer-input');
  const btn = document.getElementById('balancer-submit-btn');
  const resultBox = document.getElementById('balancer-result');

  if (!btn || !input || !resultBox) return;

  function handleBalance() {
    const rawVal = input.value.toLowerCase().trim();
    if (!rawVal) {
      showToast('⚠️ Vui lòng nhập chất phản ứng hoặc phương trình');
      return;
    }

    const matched = EQUATIONS_DATABASE.find(eq => rawVal.includes(eq.query) || eq.query.includes(rawVal));

    if (matched) {
      resultBox.classList.remove('hidden');
      resultBox.innerHTML = `
        <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
          <div class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
            ✨ ${matched.type}
          </div>
          <div class="text-lg font-mono font-bold text-slate-900 dark:text-white mb-2">
            ${matched.balanced}
          </div>
          <div class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-emerald-500/20 pt-2">
            ${matched.explanation}
          </div>
        </div>
      `;
    } else {
      resultBox.classList.remove('hidden');
      resultBox.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700">
          <div class="text-sm font-semibold text-slate-800 dark:text-slate-200">
            🧪 Đang phân tích phương trình: <span class="font-mono text-indigo-500">${input.value}</span>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Gợi ý: Thử gõ các phản ứng mẫu: <code>fe + hno3</code>, <code>al + h2so4</code>, <code>c2h5oh + o2</code>, <code>caco3</code>, <code>ch4 + cl2</code>.
          </p>
        </div>
      `;
    }
  }

  btn.addEventListener('click', handleBalance);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleBalance();
  });
}

// =========================================================================
// 7. TRIAL CLASS BOOKING FORM HANDLER
// =========================================================================
function initTrialForm() {
  const form = document.getElementById('trial-booking-form');
  const successModal = document.getElementById('modal-booking-success');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const grade = document.getElementById('form-grade')?.value;
    const goal = document.getElementById('form-goal')?.value;
    const note = document.getElementById('form-note')?.value.trim();

    if (!name || !phone) {
      showToast('⚠️ Vui lòng điền đủ Tên và Số điện thoại/Zalo');
      return;
    }

    const payload = {
      name,
      phone,
      grade,
      goal,
      note,
      timestamp: new Date().toISOString()
    };

    // Save to local storage cache
    const existing = JSON.parse(localStorage.getItem('julie_trial_registrations') || '[]');
    existing.push(payload);
    localStorage.setItem('julie_trial_registrations', JSON.stringify(existing));

    // Show Success Modal
    if (successModal) {
      document.getElementById('success-student-name').textContent = name;
      document.getElementById('success-student-phone').textContent = phone;
      document.getElementById('success-student-grade').textContent = grade;
      successModal.classList.remove('hidden');
    }

    form.reset();
  });
}

window.closeBookingSuccessModal = function() {
  const modal = document.getElementById('modal-booking-success');
  if (modal) modal.classList.add('hidden');
};

// =========================================================================
// 8. PROJECTS FILTER
// =========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('bg-indigo-600', 'text-white', 'dark:bg-indigo-500'));
      filterButtons.forEach(b => b.classList.add('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300'));
      
      btn.classList.remove('bg-slate-200', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
      btn.classList.add('bg-indigo-600', 'text-white', 'dark:bg-indigo-500');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// =========================================================================
// 9. TOAST NOTIFICATION UTILITY
// =========================================================================
function showToast(message, duration = 3000) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto px-4 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700 text-sm font-medium flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300';
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Copy to clipboard helper
window.copyContactInfo = function(text, label = "thông tin") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`📋 Đã copy ${label}: ${text}`);
  }).catch(() => {
    showToast(`Email: ${text}`);
  });
};

// =========================================================================
// 10. PWA SERVICE WORKER REGISTRATION
// =========================================================================
function registerServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker Active:', reg.scope))
      .catch(err => console.warn('SW Registration:', err));
  }
}
