// SVG Icon paths for services
const SERVICE_ICONS = {
  desain_grafis: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
  branding: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>`,
  social_media: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>`,
  fotografi: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><circle cx="12" cy="13" r="4" stroke-width="2" /></svg>`,
  videografi: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>`,
  website: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`,
  copywriting: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`,
  marketing: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`
};

// Default static content of TIGI Media & Creative Agency
const DEFAULT_TIGI_DATA = {
  agencyName: "TIGI Media & Creative Agency",
  tagline: "Create. Connect. Grow.",
  whatsapp: "6282164448558", // Banda Aceh local mockup number or active wa
  telegramBot: "TigiAgencyBot",
  primaryColor: "#f43f5e",   // Vivid Rose
  secondaryColor: "#0ea5e9", // Sky Blue
  services: [
    {
      id: "desain_grafis",
      name: "Desain Grafis",
      desc: "Pembuatan logo profesional, desain menu, feeds Instagram, banner promosi, kemasan makanan, serta kebutuhan cetak UMKM Banda Aceh.",
      minPrice: 150000,
      maxPrice: 800000
    },
    {
      id: "branding",
      name: "Branding",
      desc: "Identitas visual lengkap (brand guidelines), riset logo, filosofi warna, tipografi, serta mockup kemasan eksklusif penunjang bisnis.",
      minPrice: 1500000,
      maxPrice: 4500000
    },
    {
      id: "social_media",
      name: "Social Media Management",
      desc: "Layanan optimasi Instagram & TikTok: pembuatan konten (reels/feeds), caption copy yang persuasif, riset hashtag potensial, & monthly report.",
      minPrice: 900000,
      maxPrice: 2500000
    },
    {
      id: "fotografi",
      name: "Fotografi Produk",
      desc: "Sesi foto komersil profesional untuk menu kuliner, produk kopi di Coffee Shop, fashion, atau etalase e-commerce menggunakan lighting khusus.",
      minPrice: 350000,
      maxPrice: 1200000
    },
    {
      id: "videografi",
      name: "Videografi Konten",
      desc: "Produksi video promosi sinematik berdurasi pendek untuk reels, TikTok, maupun iklan digital. Proses termasuk konsep, syuting, dan editing.",
      minPrice: 500000,
      maxPrice: 2000000
    },
    {
      id: "website",
      name: "Website Landing Page",
      desc: "Pembuatan landing page profil bisnis atau e-commerce sederhana yang super cepat, responsif di semua perangkat, SEO-friendly, dan modern.",
      minPrice: 1200000,
      maxPrice: 3500000
    },
    {
      id: "copywriting",
      name: "Copywriting",
      desc: "Naskah iklan media sosial, sales page landing page, penulisan brosur, tagline kreatif, dan copywriting promosi yang ampuh menaikkan konversi.",
      minPrice: 150000,
      maxPrice: 600000
    },
    {
      id: "marketing",
      name: "Digital Marketing",
      desc: "Konfigurasi kampanye iklan berbayar (Meta Ads / Instagram & FB Ads, Google Ads) lengkap dengan penargetan demografi wilayah Aceh dan sekitarnya.",
      minPrice: 800000,
      maxPrice: 3000000
    }
  ]
};

// State holding current data loaded from LocalStorage or Defaults
let appState = {};

// Helper to format IDR currency dynamically
function formatIDR(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount).replace('Rp', 'Rp ');
}

// Deep clone helper
function cloneData(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Load state on startup
function init() {
  const savedData = localStorage.getItem('tigi_agency_data');
  if (savedData) {
    try {
      appState = JSON.parse(savedData);
      
      // Verification: Make sure all services are present
      if (!appState.services || appState.services.length !== 8) {
        appState = cloneData(DEFAULT_TIGI_DATA);
      }
      // Set default Telegram bot if not already set in saved state
      if (!appState.telegramBot) {
        appState.telegramBot = DEFAULT_TIGI_DATA.telegramBot;
      }
    } catch (e) {
      console.error("Error parsing saved state. Restoring default.", e);
      appState = cloneData(DEFAULT_TIGI_DATA);
    }
  } else {
    appState = cloneData(DEFAULT_TIGI_DATA);
  }

  applyColors();
  updateDOM();
  populateAdminPanel();
  setupEventListeners();
}

// Update primary and secondary colors on :root
function applyColors() {
  document.documentElement.style.setProperty('--primary', appState.primaryColor);
  document.documentElement.style.setProperty('--secondary', appState.secondaryColor);
}

// Update DOM elements based on state
function updateDOM() {
  // 1. Text Fields
  document.querySelectorAll('[data-field="agency-name"]').forEach(el => {
    el.innerText = appState.agencyName;
  });
  document.querySelectorAll('[data-field="tagline"]').forEach(el => {
    el.innerText = appState.tagline;
  });
  document.querySelectorAll('[data-field="whatsapp-num"]').forEach(el => {
    el.innerText = "+" + appState.whatsapp;
  });

  // 2. WhatsApp & Telegram Links
  document.querySelectorAll('[data-field="whatsapp-btn"]').forEach(el => {
    const defaultText = `Halo ${appState.agencyName}, saya berkonsultasi mengenai jasa media dan kreatif untuk usaha saya.`;
    const encodedText = encodeURIComponent(defaultText);
    el.setAttribute('href', `https://wa.me/${appState.whatsapp}?text=${encodedText}`);
  });

  document.querySelectorAll('[data-field="telegram-username"]').forEach(el => {
    el.innerText = "@" + appState.telegramBot;
  });

  document.querySelectorAll('[data-field="telegram-btn"]').forEach(el => {
    el.setAttribute('href', `https://t.me/${appState.telegramBot}`);
  });

  // 3. Render Services Grid
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid) {
    servicesGrid.innerHTML = '';
    appState.services.forEach(service => {
      const card = document.createElement('div');
      card.id = `card-${service.id}`;
      card.className = "service-card bg-white rounded-3xl p-8 border border-slate-100 flex flex-col justify-between shadow-xs relative overflow-hidden group";
      
      // Inline visual accent line
      const accentBar = document.createElement('div');
      accentBar.className = "absolute top-0 left-0 w-2 h-full bg-primary transition-all duration-300 group-hover:w-3";
      card.appendChild(accentBar);

      // Card Content
      card.innerHTML += `
        <div>
          <div class="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:scale-110">
            ${SERVICE_ICONS[service.id] || SERVICE_ICONS.desain_grafis}
          </div>
          <h3 class="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
            ${service.name}
          </h3>
          <p class="text-sm leading-relaxed text-slate-500 mb-8">
            ${service.desc}
          </p>
        </div>
        <div class="pt-6 border-t border-slate-100 flex flex-col justify-end mt-4">
          <span class="text-xs text-slate-400 font-medium tracking-wider uppercase mb-1">Estimasi Investasi</span>
          <div class="flex items-baseline gap-1.5 flex-wrap">
            <span class="text-lg font-bold text-slate-900 font-mono">
              ${formatIDR(service.minPrice)}
            </span>
            <span class="text-xs text-slate-400 font-medium">s/d</span>
            <span class="text-lg font-bold text-slate-900 font-mono">
              ${formatIDR(service.maxPrice)}
            </span>
          </div>
        </div>
      `;
      servicesGrid.appendChild(card);
    });
  }
}

// Populate values in the Admin Controls form
function populateAdminPanel() {
  document.getElementById('inputAgencyName').value = appState.agencyName;
  document.getElementById('inputTagline').value = appState.tagline;
  document.getElementById('inputWhatsApp').value = appState.whatsapp;
  document.getElementById('inputTelegram').value = appState.telegramBot || "";
  document.getElementById('inputPrimaryColor').value = appState.primaryColor;
  document.getElementById('inputSecondaryColor').value = appState.secondaryColor;

  // Render the service editor selector and current active service form
  const selectService = document.getElementById('selectService');
  if (selectService) {
    // Keep selection if exists, else select the first one
    const prevVal = selectService.value;
    selectService.innerHTML = '';
    appState.services.forEach(service => {
      const opt = document.createElement('option');
      opt.value = service.id;
      opt.innerText = service.name;
      selectService.appendChild(opt);
    });

    if (prevVal && appState.services.find(s => s.id === prevVal)) {
      selectService.value = prevVal;
    } else {
      selectService.value = appState.services[0].id;
    }

    loadActiveServiceEditor();
  }
}

// Load active service data into the service editor subform
function loadActiveServiceEditor() {
  const serviceId = document.getElementById('selectService').value;
  const service = appState.services.find(s => s.id === serviceId);
  if (!service) return;

  document.getElementById('inputServiceName').value = service.name;
  document.getElementById('inputServiceDesc').value = service.desc;
  document.getElementById('inputServiceMinPrice').value = service.minPrice;
  document.getElementById('inputServiceMaxPrice').value = service.maxPrice;
}

// Set up dynamic event listeners for instant preview (real-time changes)
function setupEventListeners() {
  // Agency Profile fields
  document.getElementById('inputAgencyName').addEventListener('input', (e) => {
    appState.agencyName = e.target.value || "TIGI Media & Creative Agency";
    document.querySelectorAll('[data-field="agency-name"]').forEach(el => {
      el.innerText = appState.agencyName;
    });
  });

  document.getElementById('inputTagline').addEventListener('input', (e) => {
    appState.tagline = e.target.value || "Create. Connect. Grow.";
    document.querySelectorAll('[data-field="tagline"]').forEach(el => {
      el.innerText = appState.tagline;
    });
  });

  document.getElementById('inputWhatsApp').addEventListener('input', (e) => {
    appState.whatsapp = e.target.value.replace(/[^0-9]/g, '') || "6282112345678";
    document.querySelectorAll('[data-field="whatsapp-num"]').forEach(el => {
      el.innerText = "+" + appState.whatsapp;
    });
    document.querySelectorAll('[data-field="whatsapp-btn"]').forEach(el => {
      const defaultText = `Halo ${appState.agencyName}, saya berkonsultasi mengenai jasa media dan kreatif untuk usaha saya.`;
      const encodedText = encodeURIComponent(defaultText);
      el.setAttribute('href', `https://wa.me/${appState.whatsapp}?text=${encodedText}`);
    });
  });

  document.getElementById('inputTelegram').addEventListener('input', (e) => {
    appState.telegramBot = e.target.value.trim().replace(/[^a-zA-Z0-9_]/g, '') || "TigiAgencyBot";
    document.querySelectorAll('[data-field="telegram-username"]').forEach(el => {
      el.innerText = "@" + appState.telegramBot;
    });
    document.querySelectorAll('[data-field="telegram-btn"]').forEach(el => {
      el.setAttribute('href', `https://t.me/${appState.telegramBot}`);
    });
  });

  // Color inputs
  document.getElementById('inputPrimaryColor').addEventListener('input', (e) => {
    appState.primaryColor = e.target.value;
    applyColors();
  });

  document.getElementById('inputSecondaryColor').addEventListener('input', (e) => {
    appState.secondaryColor = e.target.value;
    applyColors();
  });

  // Services dropdown selection change
  document.getElementById('selectService').addEventListener('change', () => {
    loadActiveServiceEditor();
  });

  // Active Service Editor dynamic feedback
  const updateServiceField = (field, value) => {
    const serviceId = document.getElementById('selectService').value;
    const serviceIndex = appState.services.findIndex(s => s.id === serviceId);
    if (serviceIndex === -1) return;

    appState.services[serviceIndex][field] = value;
    
    // Partially update DOM of the specific card to be fast and non-disruptive
    const card = document.getElementById(`card-${serviceId}`);
    if (card) {
      if (field === 'name') {
        const titleEl = card.querySelector('h3');
        if (titleEl) titleEl.innerText = value;
        // Update selection dropdown title as well
        const option = document.querySelector(`#selectService option[value="${serviceId}"]`);
        if (option) option.innerText = value;
      } else if (field === 'desc') {
        const descEl = card.querySelector('p');
        if (descEl) descEl.innerText = value;
      } else if (field === 'minPrice' || field === 'maxPrice') {
        // Redraw prices
        const priceContainer = card.querySelector('.flex.items-baseline');
        if (priceContainer) {
          const minFormatted = formatIDR(appState.services[serviceIndex].minPrice);
          const maxFormatted = formatIDR(appState.services[serviceIndex].maxPrice);
          priceContainer.innerHTML = `
            <span class="text-lg font-bold text-slate-900 font-mono">${minFormatted}</span>
            <span class="text-xs text-slate-400 font-medium">s/d</span>
            <span class="text-lg font-bold text-slate-900 font-mono">${maxFormatted}</span>
          `;
        }
      }
    }
  };

  document.getElementById('inputServiceName').addEventListener('input', (e) => {
    updateServiceField('name', e.target.value);
  });

  document.getElementById('inputServiceDesc').addEventListener('input', (e) => {
    updateServiceField('desc', e.target.value);
  });

  document.getElementById('inputServiceMinPrice').addEventListener('input', (e) => {
    const val = parseInt(e.target.value) || 0;
    updateServiceField('minPrice', val);
  });

  document.getElementById('inputServiceMaxPrice').addEventListener('input', (e) => {
    const val = parseInt(e.target.value) || 0;
    updateServiceField('maxPrice', val);
  });

  // Toggle Admin Panel collapse state
  const adminPanel = document.getElementById('adminPanel');
  const panelToggle = document.getElementById('panelToggle');
  const toggleIcon = document.getElementById('toggleIcon');

  panelToggle.addEventListener('click', () => {
    adminPanel.classList.toggle('collapsed');
    
    // Rotate indicator arrow
    if (adminPanel.classList.contains('collapsed')) {
      toggleIcon.style.transform = 'rotate(0deg)';
      panelToggle.querySelector('span').innerText = 'Buka Admin Panel';
    } else {
      toggleIcon.style.transform = 'rotate(180deg)';
      panelToggle.querySelector('span').innerText = 'Sembunyikan Panel';
    }
  });

  // Save changes to LocalStorage
  document.getElementById('btnSave').addEventListener('click', () => {
    localStorage.setItem('tigi_agency_data', JSON.stringify(appState));
    showToast("Disimpan! Perubahan identitas & harga tersimpan secara aman di browser Anda.");
  });

  // Reset to default
  document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm("Apakah Anda yakin ingin mengembalikan semua profil dan daftar harga ke setelan default TIGI Agency?")) {
      localStorage.removeItem('tigi_agency_data');
      appState = cloneData(DEFAULT_TIGI_DATA);
      applyColors();
      updateDOM();
      populateAdminPanel();
      showToast("Telah direset! Setelan default TIGI Media & Creative Agency berhasil dimuat.");
    }
  });
}

// Interactive custom Toast notification
function showToast(message) {
  // Remove existing toast if present
  const oldToast = document.getElementById('toastNotification');
  if (oldToast) oldToast.remove();

  const toast = document.createElement('div');
  toast.id = "toastNotification";
  toast.className = "toast-notification fixed bottom-24 right-6 left-6 sm:left-auto sm:w-96 glass-dark-effect text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 z-50 border border-primary/30";
  toast.innerHTML = `
    <div class="bg-primary text-white p-2 rounded-xl">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <div class="flex-1 text-sm font-medium leading-normal">${message}</div>
    <button class="text-white/40 hover:text-white transition-colors" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
  `;

  document.body.appendChild(toast);

  // Auto remove after 4 seconds
  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4500);
}

// Initialize the applet!
window.addEventListener('DOMContentLoaded', init);
