/**
 * Safari Integrated Business Solutions - Core Interactive Engine
 * Handles console mockups, ROI calculations, USALI explorer, modals, and toasts.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Mobile Menu Toggle
  setupMobileMenu();

  // Hero Interactive Console Switcher
  setupHeroConsole();

  // Live Integrated Simulator
  setupIntegratedSimulator();

  // ROI Calculator
  setupRoiCalculator();

  // USALI Departmental Schedules Explorer
  setupUsaliExplorer();

  // FAQ Accordion
  setupFaqAccordion();

  // Modals & Demo Booking Forms
  setupDemoForms();

  // Network Status Simulation
  setupNetworkStatus();

  // WhatsApp Floating Widget
  setupWhatsAppWidget();

  // Industry-Leading Reporting & BI System
  setupReportingSystem();

  // 120+ Pre-Built Reports Catalog Modal
  setupReportsModal();
});

/* -------------------------------------------------------------
 * 1. Mobile Menu
 * ----------------------------------------------------------- */
function setupMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-menu-drawer');
  const navLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.remove('hidden');
    drawer.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.add('hidden');
    drawer.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
      closeMenu();
    }
  });
}

/* -------------------------------------------------------------
 * 2. Hero Interactive Console
 * ----------------------------------------------------------- */
const consoleViews = {
  pms: {
    title: 'Safari PMS • Front Desk & Room Matrix',
    metric1Label: 'Occupancy Rate (Today)',
    metric1Value: '91.8%',
    metric1Sub: '165 of 180 Rooms Occupied',
    metric2Label: 'Average Daily Rate (ADR)',
    metric2Value: '$198.50',
    metric2Sub: 'RevPAR: $182.22 (+14.2%)',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Arrivals / Departures (Live)</span>
          <span class="text-safari-100 font-semibold font-mono">42 In / 38 Out</span>
        </div>
        <div class="grid grid-cols-4 gap-2 text-center text-[11px] pt-1 font-mono">
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">RM 301</span>
            <span class="text-green-400 font-bold">Checked-In</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">RM 302</span>
            <span class="text-amber-400 font-bold">Cleaning</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">RM 303</span>
            <span class="text-blue-400 font-bold">Reserved</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-safari/50 bg-safari-950/30">
            <span class="text-safari-100 block text-[9px]">RM 304</span>
            <span class="text-white font-bold">VIP Folio</span>
          </div>
        </div>
      </div>
    `,
    badge: 'Express Digital Key & Channel Sync Active'
  },
  pos: {
    title: 'Safari POS • Fine Dining & Outlets KDS',
    metric1Label: 'Active Tables / Covers',
    metric1Value: '38 Tables',
    metric1Sub: '142 Active Guests Seated',
    metric2Label: 'F&B Gross Today',
    metric2Value: '$18,420.00',
    metric2Sub: 'Sub-second sync with PMS folios',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Live Kitchen Display (KDS Routing)</span>
          <span class="text-safari-100 font-semibold font-mono">Avg Prep: 7.4 min</span>
        </div>
        <div class="space-y-1.5 text-[11px] font-mono">
          <div class="flex items-center justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-200">Table #14 • 4 Covers</span>
            <span class="text-emerald-400 font-semibold">KOT Sent → Bar & Grill (Auto-Stock Out)</span>
          </div>
          <div class="flex items-center justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-200">Room 304 Room Charge</span>
            <span class="text-safari-100 font-semibold">$145.00 Posted to Folio</span>
          </div>
        </div>
      </div>
    `,
    badge: 'Offline-First POS • Multi-Printer KOT Engine'
  },
  erp: {
    title: 'Safari ERP • USALI Ledger & Procurement',
    metric1Label: 'USALI Operating Revenue',
    metric1Value: '$142,850',
    metric1Sub: '+18.4% vs same period last mo',
    metric2Label: 'Gross Operating Profit (GOP)',
    metric2Value: '46.8%',
    metric2Sub: 'Standard USALI 11th Edition Format',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Automated Ledger Posting</span>
          <span class="text-safari-100 font-semibold font-mono">CA Verified</span>
        </div>
        <div class="space-y-1 text-[11px] font-mono">
          <div class="flex justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-300">4000 Rooms Revenue Schedule</span>
            <span class="text-green-400 font-bold">$84,200.00</span>
          </div>
          <div class="flex justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-300">5000 Food & Beverage Schedule</span>
            <span class="text-green-400 font-bold">$32,650.00</span>
          </div>
        </div>
      </div>
    `,
    badge: '100% USALI Certified • Biometric Payroll Ready'
  }
};

function setupHeroConsole() {
  const tabs = document.querySelectorAll('[data-console-tab]');
  const titleEl = document.getElementById('console-title');
  const metric1Label = document.getElementById('console-m1-label');
  const metric1Val = document.getElementById('console-m1-val');
  const metric1Sub = document.getElementById('console-m1-sub');
  const metric2Label = document.getElementById('console-m2-label');
  const metric2Val = document.getElementById('console-m2-val');
  const metric2Sub = document.getElementById('console-m2-sub');
  const bodyContainer = document.getElementById('console-body-content');
  const badgeEl = document.getElementById('console-badge-text');

  if (!tabs.length || !titleEl) return;

  function renderView(viewKey) {
    const data = consoleViews[viewKey];
    if (!data) return;

    // Update active tab buttons
    tabs.forEach(tab => {
      const isSelected = tab.getAttribute('data-console-tab') === viewKey;
      if (isSelected) {
        tab.className = 'px-3 py-1 rounded-md text-xs font-bold bg-safari text-white shadow-sm transition';
      } else {
        tab.className = 'px-3 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition';
      }
    });

    titleEl.textContent = data.title;
    metric1Label.textContent = data.metric1Label;
    metric1Val.textContent = data.metric1Value;
    metric1Sub.textContent = data.metric1Sub;
    metric2Label.textContent = data.metric2Label;
    metric2Val.textContent = data.metric2Value;
    metric2Sub.textContent = data.metric2Sub;
    bodyContainer.innerHTML = data.content;
    badgeEl.textContent = data.badge;

    if (window.lucide) lucide.createIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-console-tab');
      renderView(key);
    });
  });

  // Default initial render
  renderView('erp');
}

/* -------------------------------------------------------------
 * 3. Live Integrated Simulation (POS -> PMS -> ERP Chain)
 * ----------------------------------------------------------- */
function setupIntegratedSimulator() {
  const triggerBtn = document.getElementById('simulate-order-btn');
  const feedContainer = document.getElementById('sim-event-feed');
  if (!triggerBtn || !feedContainer) return;

  const sampleGuests = [
    { name: 'Dr. Sarah Mitchell', room: 'Suite 408', item: 'Prime Wagyu Filet & Cabernet', amount: '$168.00' },
    { name: 'Marcus Sterling', room: 'Room 214', item: 'Executive Breakfast Buffet (x2)', amount: '$54.00' },
    { name: 'Elena Rostova', room: 'Villa 10', item: 'Spa Signature Therapy + Champagne', amount: '$240.00' }
  ];

  let guestIdx = 0;

  triggerBtn.addEventListener('click', () => {
    const guest = sampleGuests[guestIdx % sampleGuests.length];
    guestIdx++;

    triggerBtn.disabled = true;
    triggerBtn.innerHTML = '<i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> Processing Chain...';
    if (window.lucide) lucide.createIcons();

    // Step 1: POS
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const posStep = document.createElement('div');
    posStep.className = 'p-2 rounded bg-slate-900/90 border border-safari/40 text-xs font-mono text-slate-300 animate-fadeIn';
    posStep.innerHTML = `
      <div class="flex items-center justify-between text-[11px] text-safari-100 font-bold">
        <span>STEP 1: POS OUTLET BILLING</span>
        <span>${time}</span>
      </div>
      <p class="text-white mt-0.5">Order placed for <strong>${guest.item}</strong> (${guest.amount})</p>
      <span class="text-[10px] text-green-400">✓ KOT printed to kitchen • Stock depleted</span>
    `;
    feedContainer.prepend(posStep);

    showToast(`POS: Order created for ${guest.room} (${guest.amount})`, 'info');

    // Step 2: PMS (after 800ms)
    setTimeout(() => {
      const pmsStep = document.createElement('div');
      pmsStep.className = 'p-2 rounded bg-slate-900/90 border border-blue-500/40 text-xs font-mono text-slate-300 animate-fadeIn';
      pmsStep.innerHTML = `
        <div class="flex items-center justify-between text-[11px] text-blue-300 font-bold">
          <span>STEP 2: PMS FOLIO SYNC</span>
          <span>Instant</span>
        </div>
        <p class="text-white mt-0.5">Charge posted to <strong>${guest.room}</strong> (${guest.name})</p>
        <span class="text-[10px] text-blue-400">✓ Guest balance updated in real-time</span>
      `;
      feedContainer.prepend(pmsStep);
      showToast(`PMS: Auto-routed charge to ${guest.room} folio`, 'info');
    }, 800);

    // Step 3: ERP USALI Ledger (after 1600ms)
    setTimeout(() => {
      const erpStep = document.createElement('div');
      erpStep.className = 'p-2 rounded bg-slate-900/90 border border-emerald-500/40 text-xs font-mono text-slate-300 animate-fadeIn';
      erpStep.innerHTML = `
        <div class="flex items-center justify-between text-[11px] text-emerald-300 font-bold">
          <span>STEP 3: USALI ERP LEDGER POST</span>
          <span>Automated</span>
        </div>
        <p class="text-white mt-0.5">Credit to <strong>Schedule 2: F&B Revenue</strong> (${guest.amount})</p>
        <span class="text-[10px] text-emerald-400">✓ Journal Entry Reconciled • CA Auditable</span>
      `;
      feedContainer.prepend(erpStep);
      showToast(`ERP: USALI General Ledger auto-credited & reconciled!`, 'success');

      // Re-enable button
      triggerBtn.disabled = false;
      triggerBtn.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i> Run Another Live Simulation';
      if (window.lucide) lucide.createIcons();

      // Keep maximum 4 items
      while (feedContainer.children.length > 4) {
        feedContainer.removeChild(feedContainer.lastChild);
      }
    }, 1600);
  });
}

/* -------------------------------------------------------------
 * 4. Interactive Hospitality ROI & Savings Calculator
 * ----------------------------------------------------------- */
function setupRoiCalculator() {
  const roomsSlider = document.getElementById('roi-rooms');
  const adrSlider = document.getElementById('roi-adr');
  const occSlider = document.getElementById('roi-occ');
  const outletsSlider = document.getElementById('roi-outlets');

  const roomsVal = document.getElementById('val-rooms');
  const adrVal = document.getElementById('val-adr');
  const occVal = document.getElementById('val-occ');
  const outletsVal = document.getElementById('val-outlets');

  const outAnnualSavings = document.getElementById('calc-annual-savings');
  const outHoursSaved = document.getElementById('calc-hours-saved');
  const outLeakage = document.getElementById('calc-leakage-prevented');
  const outRoi = document.getElementById('calc-roi-multiple');

  if (!roomsSlider || !outAnnualSavings) return;

  function calculate() {
    const rooms = parseInt(roomsSlider.value, 10);
    const adr = parseInt(adrSlider.value, 10);
    const occ = parseInt(occSlider.value, 10) / 100;
    const outlets = parseInt(outletsSlider.value, 10);

    // Update display values
    roomsVal.textContent = rooms.toString();
    adrVal.textContent = `$${adr}`;
    occVal.textContent = `${Math.round(occ * 100)}%`;
    outletsVal.textContent = outlets.toString();

    // Calculations based on industry hotel benchmark metrics
    // Annual room revenue = rooms * 365 * adr * occ
    const annualRoomRev = rooms * 365 * adr * occ;
    
    // Revenue leakage prevented (billing mismatches, unposted KOTs, minibar lost charges ~1.8% of room + F&B revenue)
    const annualFbRev = outlets * 120000;
    const totalRev = annualRoomRev + annualFbRev;
    const leakagePreventedYearly = Math.round(totalRev * 0.017);
    const leakagePreventedMonthly = Math.round(leakagePreventedYearly / 12);

    // Audit and accounting hours saved (automated night audit + USALI ledger vs manual reconciliations)
    // Approx 2.5 hours/day saved on night audit + 40 hours/month on month-end closing
    const monthlyHoursSaved = Math.round((2.5 * 30) + 35 + (rooms * 0.25));

    // Annual operational savings (labor hours @ $32/hr + prevented leakage + inventory waste reduction)
    const laborSavings = monthlyHoursSaved * 12 * 30;
    const inventorySavings = outlets * 8500;
    const totalAnnualSavings = Math.round(laborSavings + leakagePreventedYearly + inventorySavings);

    // Estimated software cost is approximately $180/month base + $1.80/room/month
    const estimatedSoftwareCost = (180 + (rooms * 2.2) + (outlets * 75)) * 12;
    const roiMultiple = ((totalAnnualSavings / estimatedSoftwareCost)).toFixed(1);

    // Format output
    outAnnualSavings.textContent = `$${totalAnnualSavings.toLocaleString()}`;
    outHoursSaved.textContent = `${monthlyHoursSaved.toLocaleString()} hrs`;
    outLeakage.textContent = `$${leakagePreventedMonthly.toLocaleString()}`;
    outRoi.textContent = `${roiMultiple}x ROI`;
  }

  [roomsSlider, adrSlider, occSlider, outletsSlider].forEach(slider => {
    slider.addEventListener('input', calculate);
  });

  calculate();
}

/* -------------------------------------------------------------
 * 5. USALI Departmental Schedules Explorer
 * ----------------------------------------------------------- */
const usaliData = {
  summary: {
    title: 'Summary Operating Statement (USALI 11th Edition)',
    scheduleNumber: 'Summary Matrix',
    desc: 'Unified macro P&L rolling up all departmental operating revenues, departmental expenses, undistributed expenses, and Gross Operating Profit (GOP).',
    rows: [
      { code: '4000', name: 'Operating Revenue: Rooms Department', val: 84200.00, type: 'revenue' },
      { code: '5000', name: 'Operating Revenue: Food & Beverage', val: 32650.00, type: 'revenue' },
      { code: '6000', name: 'Operating Revenue: Other Operated Depts (Spa/Gift)', val: 4120.00, type: 'revenue' },
      { code: '6900', name: 'Miscellaneous Income', val: 1250.00, type: 'revenue' },
      { code: '7100', name: 'Total Departmental Expenses (Payroll & Opex)', val: -42800.00, type: 'expense' },
      { code: '7500', name: 'Undistributed Operating Expenses (A&G, S&M, POM)', val: -19850.00, type: 'expense' }
    ],
    highlightLabel: 'Gross Operating Profit (GOP)',
    highlightValue: '$59,570.00 (48.7%)'
  },
  sch1: {
    title: 'Schedule 1: Rooms Department',
    scheduleNumber: 'Schedule 1',
    desc: 'Detailed breakdown of transient, group, and contract room revenues alongside room cleaning labor, guest supplies, and laundry costs.',
    rows: [
      { code: '4110', name: 'Transient Rooms Revenue', val: 56400.00, type: 'revenue' },
      { code: '4120', name: 'Group Rooms Revenue (Corporate / Tour)', val: 21800.00, type: 'revenue' },
      { code: '4130', name: 'Contract & Extended Stay Revenue', val: 6000.00, type: 'revenue' },
      { code: '5110', name: 'Rooms Labor & Housekeeping Payroll', val: -16400.00, type: 'expense' },
      { code: '5120', name: 'Guest Supplies, Linens & Laundry Requisition', val: -4200.00, type: 'expense' },
      { code: '5130', name: 'Reservation & OTA Distribution Commissions', val: -3800.00, type: 'expense' }
    ],
    highlightLabel: 'Departmental Profit - Rooms',
    highlightValue: '$59,800.00 (71.0%)'
  },
  sch2: {
    title: 'Schedule 2: Food & Beverage Department',
    scheduleNumber: 'Schedule 2',
    desc: 'Direct departmental reporting for restaurant dining, lounge & bars, room service, banquet catering, and ingredient cost-of-sales (COGS).',
    rows: [
      { code: '4210', name: 'Restaurant Outlets Food Revenue', val: 18200.00, type: 'revenue' },
      { code: '4220', name: 'Beverage & Bar Revenue', val: 7850.00, type: 'revenue' },
      { code: '4230', name: 'Banquet & Catering Food Revenue', val: 5100.00, type: 'revenue' },
      { code: '4240', name: 'In-Room Dining (Room Service)', val: 1500.00, type: 'revenue' },
      { code: '5210', name: 'Cost of Food & Beverage Sold (COGS)', val: -9800.00, type: 'expense' },
      { code: '5220', name: 'Kitchen & Service Staff Payroll', val: -11400.00, type: 'expense' }
    ],
    highlightLabel: 'Departmental Profit - Food & Beverage',
    highlightValue: '$11,450.00 (35.1%)'
  },
  sch4: {
    title: 'Schedule 4: Administrative & General (A&G)',
    scheduleNumber: 'Schedule 4',
    desc: 'Undistributed operating expenses including executive management, accounting audit fees, legal compliance, credit card commissions, and IT subscriptions.',
    rows: [
      { code: '7110', name: 'Executive & Front Office Management Payroll', val: -6800.00, type: 'expense' },
      { code: '7120', name: 'Credit Card Merchant Processing Fees', val: -2450.00, type: 'expense' },
      { code: '7130', name: 'IT Infrastructure & Software Subscriptions', val: -1100.00, type: 'expense' },
      { code: '7140', name: 'Audit & Professional Advisory Fees', val: -950.00, type: 'expense' },
      { code: '7150', name: 'Office Supplies & Telecommunications', val: -620.00, type: 'expense' }
    ],
    highlightLabel: 'Total A&G Undistributed Cost',
    highlightValue: '-$11,920.00 (Benchmark: < 10% Rev)'
  }
};

function setupUsaliExplorer() {
  const tabs = document.querySelectorAll('[data-usali-tab]');
  const scheduleNumEl = document.getElementById('usali-sch-num');
  const titleEl = document.getElementById('usali-sch-title');
  const descEl = document.getElementById('usali-sch-desc');
  const tableBody = document.getElementById('usali-table-body');
  const highlightLabel = document.getElementById('usali-highlight-label');
  const highlightVal = document.getElementById('usali-highlight-val');
  const searchInput = document.getElementById('usali-search-input');

  if (!tabs.length || !tableBody) return;

  let currentTab = 'summary';

  function renderRows(rows) {
    tableBody.innerHTML = '';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    const filtered = rows.filter(r => 
      r.name.toLowerCase().includes(query) || r.code.includes(query)
    );

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <div class="p-6 text-center text-xs text-slate-400">
          No ledger accounts found matching "${query}". Try searching "Rooms", "Food", or account code "4000".
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between p-2.5 rounded bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition font-mono text-xs';
      
      const isPositive = item.val >= 0;
      const formattedVal = `${isPositive ? '' : '-'}$${Math.abs(item.val).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
      const valColor = isPositive ? 'text-green-400 font-bold' : 'text-slate-300';
      const badge = isPositive 
        ? '<span class="text-[9px] uppercase px-1.5 py-0.5 rounded bg-green-950/60 text-green-400 border border-green-800/50">Credit (Rev)</span>'
        : '<span class="text-[9px] uppercase px-1.5 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-800/50">Debit (Exp)</span>';

      row.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="text-safari font-bold">${item.code}</span>
          <span class="text-slate-200">${item.name}</span>
        </div>
        <div class="flex items-center gap-3">
          ${badge}
          <span class="${valColor}">${formattedVal}</span>
        </div>
      `;
      tableBody.appendChild(row);
    });
  }

  function setTab(tabKey) {
    currentTab = tabKey;
    const data = usaliData[tabKey];
    if (!data) return;

    tabs.forEach(tab => {
      const isActive = tab.getAttribute('data-usali-tab') === tabKey;
      if (isActive) {
        tab.className = 'px-3 py-1.5 rounded-lg text-xs font-bold bg-safari text-white shadow-sm';
      } else {
        tab.className = 'px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition';
      }
    });

    scheduleNumEl.textContent = data.scheduleNumber;
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
    highlightLabel.textContent = data.highlightLabel;
    highlightVal.textContent = data.highlightValue;

    renderRows(data.rows);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-usali-tab');
      setTab(key);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const data = usaliData[currentTab];
      if (data) renderRows(data.rows);
    });
  }

  // Initial tab
  setTab('summary');
}

/* -------------------------------------------------------------
 * 6. FAQ Accordion
 * ----------------------------------------------------------- */
function setupFaqAccordion() {
  const faqItems = document.querySelectorAll('[data-faq-item]');
  const filterBtns = document.querySelectorAll('[data-faq-filter]');

  faqItems.forEach(item => {
    const trigger = item.querySelector('[data-faq-trigger]');
    const content = item.querySelector('[data-faq-content]');
    const icon = item.querySelector('[data-faq-icon]');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other items
      faqItems.forEach(other => {
        if (other !== item) {
          const otherTrigger = other.querySelector('[data-faq-trigger]');
          const otherContent = other.querySelector('[data-faq-content]');
          const otherIcon = other.querySelector('[data-faq-icon]');
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.classList.add('hidden');
            if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
          }
        }
      });

      // Toggle current
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // Filter categories
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-faq-filter');
        filterBtns.forEach(b => {
          b.className = b === btn
            ? 'px-4 py-1.5 rounded-full text-xs font-bold bg-safari text-white shadow-sm'
            : 'px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition';
        });

        faqItems.forEach(item => {
          const itemCat = item.getAttribute('data-faq-cat');
          if (cat === 'all' || itemCat === cat) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }
}

/* -------------------------------------------------------------
 * 7. Demo Forms & Modals
 * ----------------------------------------------------------- */
function setupDemoForms() {
  const inlineForm = document.getElementById('lead-demo-form');
  const modal = document.getElementById('demo-modal');
  const modalForm = document.getElementById('modal-demo-form');
  const openModalBtns = document.querySelectorAll('[data-open-demo-modal]');
  const closeModalBtns = document.querySelectorAll('[data-close-demo-modal]');

  // USALI COA Modal
  const coaModal = document.getElementById('coa-modal');
  const openCoaBtns = document.querySelectorAll('[data-open-coa-modal]');
  const closeCoaBtns = document.querySelectorAll('[data-close-coa-modal]');

  // Handle Demo Modal Open/Close
  if (modal) {
    openModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
      });
    });

    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', () => modal.close());
    });

    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) modal.close();
    });
  }

  // Handle COA Modal Open/Close
  if (coaModal) {
    openCoaBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        coaModal.showModal();
      });
    });

    closeCoaBtns.forEach(btn => {
      btn.addEventListener('click', () => coaModal.close());
    });

    coaModal.addEventListener('click', (e) => {
      const rect = coaModal.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) coaModal.close();
    });
  }

  // Form submission handler
  function handleSubmission(formEl, successContainerId) {
    if (!formEl) return;
    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = formEl.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader" class="w-4 h-4 animate-spin inline-block mr-2"></i> Registering Property...';
        if (window.lucide) lucide.createIcons();
      }

      setTimeout(() => {
        const refId = `SAF-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        const successContainer = document.getElementById(successContainerId);

        if (successContainer) {
          formEl.classList.add('hidden');
          successContainer.classList.remove('hidden');
          const refPlaceholder = successContainer.querySelector('[data-ref-id]');
          if (refPlaceholder) refPlaceholder.textContent = refId;
        }

        showToast(`Demo Consultation confirmed! Reference ID: ${refId}`, 'success');

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 1000);
    });
  }

  handleSubmission(inlineForm, 'lead-demo-success');
  handleSubmission(modalForm, 'modal-demo-success');
}

/* -------------------------------------------------------------
 * 8. Network Status Simulator (Demonstrates Offline-First)
 * ----------------------------------------------------------- */
function setupNetworkStatus() {
  const toggleBtn = document.getElementById('toggle-offline-btn');
  const statusPill = document.getElementById('network-status-pill');
  const statusText = document.getElementById('network-status-text');

  if (!toggleBtn || !statusPill) return;

  let isOnline = true;

  toggleBtn.addEventListener('click', () => {
    isOnline = !isOnline;

    if (isOnline) {
      statusPill.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200';
      statusPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Cloud & Offline Synced';
      toggleBtn.innerHTML = '<i data-lucide="wifi-off" class="w-3.5 h-3.5 text-slate-500"></i> Test Offline Mode';
      showToast('Network Reconnected: All offline transactions instantly synchronized.', 'success');
    } else {
      statusPill.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-[11px] font-semibold border border-amber-200';
      statusPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-500"></span> Offline Mode (Local Cache Active)';
      toggleBtn.innerHTML = '<i data-lucide="wifi" class="w-3.5 h-3.5 text-slate-500"></i> Restore Cloud Link';
      showToast('Offline Mode: Safari continues printing KOTs & billing without internet!', 'info');
    }

    if (window.lucide) lucide.createIcons();
  });
}

/* -------------------------------------------------------------
 * 9. Toast Notification System
 * ----------------------------------------------------------- */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-root');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-root';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' 
    ? 'bg-slate-900 border-safari text-white' 
    : 'bg-slate-900 border-slate-700 text-slate-200';
  const iconMarkup = type === 'success'
    ? '<i data-lucide="check-circle" class="w-4 h-4 text-safari shrink-0"></i>'
    : '<i data-lucide="info" class="w-4 h-4 text-safari-100 shrink-0"></i>';

  toast.className = `toast max-w-sm px-4 py-3 rounded-xl border shadow-xl flex items-center gap-3 text-xs font-medium ${bgColor}`;
  toast.innerHTML = `
    ${iconMarkup}
    <span class="flex-1">${message}</span>
    <button type="button" class="text-slate-400 hover:text-white" aria-label="Dismiss">
      <i data-lucide="x" class="w-3.5 h-3.5"></i>
    </button>
  `;

  const closeBtn = toast.querySelector('button');
  closeBtn.addEventListener('click', () => dismiss());

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  function dismiss() {
    toast.classList.add('toast-hiding');
    setTimeout(() => toast.remove(), 250);
  }

  setTimeout(dismiss, 4500);
}

/* -------------------------------------------------------------
 * 10. WhatsApp Floating Chat Widget Engine
 * ----------------------------------------------------------- */
function setupWhatsAppWidget() {
  const triggerBtn = document.getElementById('whatsapp-trigger-btn');
  const chatBox = document.getElementById('whatsapp-chat-box');
  const closeBtn = document.getElementById('whatsapp-close-btn');
  const sendForm = document.getElementById('whatsapp-send-form');
  const inputEl = document.getElementById('whatsapp-msg-input');
  const quickChips = document.querySelectorAll('[data-wa-prompt]');

  if (!triggerBtn || !chatBox) return;

  function toggleChat() {
    const isHidden = chatBox.classList.contains('hidden');
    if (isHidden) {
      chatBox.classList.remove('hidden');
      if (inputEl) inputEl.focus();
    } else {
      chatBox.classList.add('hidden');
    }
  }

  function closeChat() {
    if (chatBox) chatBox.classList.add('hidden');
  }

  triggerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleChat();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!chatBox.classList.contains('hidden') && 
        !chatBox.contains(e.target) && 
        !triggerBtn.contains(e.target)) {
      closeChat();
    }
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !chatBox.classList.contains('hidden')) {
      closeChat();
    }
  });

  // Phone number (can be configured via data-phone on chatBox or defaults to direct chat)
  const phone = chatBox.getAttribute('data-phone') || '';

  function openWhatsApp(message) {
    const text = encodeURIComponent(message || "Hi Safari Solutions! I'd like to inquire about your POS, PMS & ERP software.");
    const waUrl = phone 
      ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${text}`
      : `https://wa.me/?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    closeChat();
  }

  if (sendForm) {
    sendForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = inputEl ? inputEl.value.trim() : '';
      openWhatsApp(msg);
      if (inputEl) inputEl.value = '';
    });
  }

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-wa-prompt') || chip.textContent.trim();
      openWhatsApp(prompt);
    });
  });
}

/* -------------------------------------------------------------
 * 11. Industry-Leading Reporting & BI Engine
 * ----------------------------------------------------------- */
function setupReportingSystem() {
  const tabBtns = document.querySelectorAll('[data-report-tab]');
  const periodBtns = document.querySelectorAll('[data-report-period]');
  const bodyEl = document.getElementById('report-tab-body');
  const excelBtn = document.getElementById('report-export-excel-btn');
  const pdfBtn = document.getElementById('report-export-pdf-btn');
  const waDigestBtn = document.getElementById('report-whatsapp-digest-btn');
  const timestampEl = document.getElementById('report-timestamp');

  if (!bodyEl) return;

  let currentTab = 'flash';
  let currentPeriod = 'today';

  // Format real-time timestamp
  if (timestampEl) {
    const now = new Date();
    timestampEl.textContent = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  // Reports data definitions
  const reportData = {
    flash: {
      render: (period) => {
        let revpar = '$182.20';
        let adr = '$198.50';
        let occ = '91.8%';
        let occSub = '165 of 180 Rooms Sold';
        let totalRev = '$142,850.00';
        let gop = '$54,283.00 (38.0% margin)';
        let roomsRev = '$32,752.50';
        let fnbRev = '$86,400.00';
        let banquetRev = '$18,500.00';
        let spaRev = '$5,197.50';

        if (period === 'mtd') {
          revpar = '$176.40';
          adr = '$194.20';
          occ = '90.8%';
          occSub = '4,903 Room Nights MTD';
          totalRev = '$4,285,500.00';
          gop = '$1,671,345.00 (39.0% margin)';
          roomsRev = '$952,160.00';
          fnbRev = '$2,592,000.00';
          banquetRev = '$585,000.00';
          spaRev = '$156,340.00';
        } else if (period === 'ytd') {
          revpar = '$171.10';
          adr = '$189.50';
          occ = '89.2%';
          occSub = '58,600 Room Nights YTD';
          totalRev = '$51,426,000.00';
          gop = '$20,056,140.00 (39.0% margin)';
          roomsRev = '$11,104,700.00';
          fnbRev = '$31,104,000.00';
          banquetRev = '$7,020,000.00';
          spaRev = '$2,197,300.00';
        }

        return `
          <div class="space-y-6">
            <!-- Top Flash KPI Cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="flex items-center justify-between text-slate-400 text-xs">
                  <span>RevPAR (${period.toUpperCase()})</span>
                  <span class="text-emerald-400 text-[11px] font-bold flex items-center gap-0.5">
                    <i data-lucide="trending-up" class="w-3 h-3"></i> +14.2%
                  </span>
                </div>
                <div class="text-2xl font-bold font-mono text-white mt-1">${revpar}</div>
                <div class="text-[11px] text-slate-400 mt-0.5">Revenue Per Available Room</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="flex items-center justify-between text-slate-400 text-xs">
                  <span>Average Daily Rate (ADR)</span>
                  <span class="text-emerald-400 text-[11px] font-bold flex items-center gap-0.5">
                    <i data-lucide="trending-up" class="w-3 h-3"></i> +8.4%
                  </span>
                </div>
                <div class="text-2xl font-bold font-mono text-white mt-1">${adr}</div>
                <div class="text-[11px] text-slate-400 mt-0.5">Avg Rate Across All Segments</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="flex items-center justify-between text-slate-400 text-xs">
                  <span>Occupancy %</span>
                  <span class="text-emerald-400 text-[11px] font-bold flex items-center gap-0.5">
                    <i data-lucide="trending-up" class="w-3 h-3"></i> +6.1%
                  </span>
                </div>
                <div class="text-2xl font-bold font-mono text-safari-100 mt-1">${occ}</div>
                <div class="text-[11px] text-slate-400 mt-0.5">${occSub}</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="flex items-center justify-between text-slate-400 text-xs">
                  <span>Total Operating Revenue</span>
                  <span class="text-emerald-400 text-[11px] font-bold flex items-center gap-0.5">
                    <i data-lucide="trending-up" class="w-3 h-3"></i> +18.9%
                  </span>
                </div>
                <div class="text-2xl font-bold font-mono text-white mt-1">${totalRev}</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-0.5">GOP: ${gop}</div>
              </div>
            </div>

            <!-- Departmental Operating Revenue Statement (USALI Standard) -->
            <div class="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
              <div class="p-4 bg-slate-800/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <i data-lucide="table" class="w-4 h-4 text-safari"></i>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-200">USALI Departmental Operating Revenue &amp; Cost Contribution</span>
                </div>
                <span class="text-[11px] font-mono text-slate-400">Ledger Status: 100% Balanced</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left">
                  <thead class="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th class="py-3 px-4">USALI Schedule</th>
                      <th class="py-3 px-4">Department / Outlet</th>
                      <th class="py-3 px-4 text-right">Gross Revenue</th>
                      <th class="py-3 px-4 text-right">Cost of Sales (COGS)</th>
                      <th class="py-3 px-4 text-right">Dept Payroll</th>
                      <th class="py-3 px-4 text-right">Dept Profit</th>
                      <th class="py-3 px-4 text-center">Profit Margin</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800 font-mono text-[12px]">
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 text-safari-100 font-bold">Schedule 1</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Rooms Department (Front Desk &amp; Housekeeping)</td>
                      <td class="py-3 px-4 text-right font-bold text-white">${roomsRev}</td>
                      <td class="py-3 px-4 text-right text-slate-400">$0.00</td>
                      <td class="py-3 px-4 text-right text-slate-400">-$3,920.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$28,832.50</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">88.0%</span></td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 text-safari-100 font-bold">Schedule 2</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Food &amp; Beverage Outlets (Restaurants &amp; Bars)</td>
                      <td class="py-3 px-4 text-right font-bold text-white">${fnbRev}</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">-$24,537.60 (28.4%)</td>
                      <td class="py-3 px-4 text-right text-slate-400">-$18,144.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$43,718.40</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">50.6%</span></td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 text-safari-100 font-bold">Schedule 3</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Banquets &amp; Catering (Conferences &amp; Weddings)</td>
                      <td class="py-3 px-4 text-right font-bold text-white">${banquetRev}</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">-$4,255.00 (23.0%)</td>
                      <td class="py-3 px-4 text-right text-slate-400">-$2,960.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$11,285.00</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">61.0%</span></td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 text-safari-100 font-bold">Schedule 4</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Spa, Wellness &amp; Recreation</td>
                      <td class="py-3 px-4 text-right font-bold text-white">${spaRev}</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">-$779.60 (15.0%)</td>
                      <td class="py-3 px-4 text-right text-slate-400">-$1,400.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$3,017.90</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">58.1%</span></td>
                    </tr>
                  </tbody>
                  <tfoot class="bg-slate-900 border-t-2 border-slate-700 font-mono text-[12px] font-bold">
                    <tr>
                      <td colspan="2" class="py-3 px-4 text-white uppercase">Consolidated Operating Totals</td>
                      <td class="py-3 px-4 text-right text-safari-100">${totalRev}</td>
                      <td class="py-3 px-4 text-right text-rose-300">-$29,572.20</td>
                      <td class="py-3 px-4 text-right text-slate-300">-$26,424.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400">+$86,853.80</td>
                      <td class="py-3 px-4 text-center text-safari-100">60.8% Total</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        `;
      }
    },
    audit: {
      render: () => {
        return `
          <div class="space-y-6">
            <!-- Audit Banner -->
            <div class="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/80 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <i data-lucide="check-circle-2" class="w-6 h-6"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white flex items-center gap-2">
                    <span>Night Audit Packet: Closed &amp; Reconciled</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-black text-[10px] uppercase">0 Discrepancy</span>
                  </h4>
                  <p class="text-xs text-emerald-300/80">Automated midnight audit completed at 03:15:22 AM. All POS outlets closed and balanced to General Ledger.</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-slate-400">Dual-Entry Integrity:</span>
                <span class="px-2.5 py-1 rounded-lg bg-emerald-900 text-emerald-200 border border-emerald-700 font-mono text-xs font-bold">100.00% MATCH</span>
              </div>
            </div>

            <!-- Ledger Reconciliation Trial Balance Table -->
            <div class="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
              <div class="p-4 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <i data-lucide="scale" class="w-4 h-4 text-safari"></i>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-200">Daily Night Audit Trial Balance &amp; Control Account Proof</span>
                </div>
                <span class="text-xs font-mono text-emerald-400 font-bold">Ledger Variance = $0.00</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left">
                  <thead class="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th class="py-3 px-4">Account Code</th>
                      <th class="py-3 px-4">Ledger Account Description</th>
                      <th class="py-3 px-4 text-right">Debit ($)</th>
                      <th class="py-3 px-4 text-right">Credit ($)</th>
                      <th class="py-3 px-4 text-right">Net Activity</th>
                      <th class="py-3 px-4 text-center">Audit Check</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800 font-mono text-[12px]">
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-1100</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Guest Ledger (In-House Rooms Control)</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-semibold">$47,032.50</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">$58,250.00</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">-$11,217.50</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ Reconciled</span></td>
                    </tr>
                    <tr class="hover:bg-slate-850/50">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-1120</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">City Ledger (Corporate AR Direct Billings)</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-semibold">$8,401.00</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">$0.00</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">+$8,401.00</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ Reconciled</span></td>
                    </tr>
                    <tr class="hover:bg-slate-850/50">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-1010</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Merchant Card Settlement (Visa / MC / Amex Batched)</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-semibold">$49,850.00</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">$0.00</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">+$49,850.00</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ Bank Verified</span></td>
                    </tr>
                    <tr class="hover:bg-slate-850/50">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-1000</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Front Desk &amp; POS Cash Drops</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-semibold">$16,799.00</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-semibold">$0.00</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">+$16,799.00</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ Safe Vault Checked</span></td>
                    </tr>
                    <tr class="hover:bg-slate-850/50">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-4100</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Room Revenue (Daily Automatic Night Post)</td>
                      <td class="py-3 px-4 text-right text-slate-400">$0.00</td>
                      <td class="py-3 px-4 text-safari-100 font-semibold">$32,752.50</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">+$32,752.50</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ 165 Rooms Posted</span></td>
                    </tr>
                    <tr class="hover:bg-slate-850/50">
                      <td class="py-3 px-4 text-safari-100 font-bold">GL-4200</td>
                      <td class="py-3 px-4 font-sans font-medium text-white">Food &amp; Beverage Sales (4 Outlets Closed)</td>
                      <td class="py-3 px-4 text-right text-slate-400">$0.00</td>
                      <td class="py-3 px-4 text-safari-100 font-semibold">$86,400.00</td>
                      <td class="py-3 px-4 text-right font-bold text-slate-200">+$86,400.00</td>
                      <td class="py-3 px-4 text-center"><span class="text-emerald-400 font-bold">✔ KOTs Settled</span></td>
                    </tr>
                  </tbody>
                  <tfoot class="bg-slate-950 border-t-2 border-slate-700 font-mono text-[12px] font-bold">
                    <tr>
                      <td colspan="2" class="py-3 px-4 text-white uppercase">Night Audit Proof Totals</td>
                      <td class="py-3 px-4 text-right text-emerald-400">$122,082.50</td>
                      <td class="py-3 px-4 text-right text-emerald-400">$122,082.50</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-mono">$0.00 Variance</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-black">100% BALANCED</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        `;
      }
    },
    menu: {
      render: () => {
        return `
          <div class="space-y-6">
            <!-- Menu Engineering Matrix Overview -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="p-3.5 rounded-xl bg-emerald-950/70 border border-emerald-800 text-xs">
                <div class="flex items-center justify-between text-emerald-400 font-bold">
                  <span>🌟 Stars (38 Items)</span>
                  <span class="px-1.5 py-0.5 rounded bg-emerald-900 text-[10px]">High Profit • High Vol</span>
                </div>
                <p class="text-slate-300 text-[11px] mt-1.5 leading-relaxed">Your flagship revenue drivers. Protect portion specs &amp; maintain consistent presentation.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-blue-950/70 border border-blue-800 text-xs">
                <div class="flex items-center justify-between text-blue-400 font-bold">
                  <span>🐎 Plowhorses (22 Items)</span>
                  <span class="px-1.5 py-0.5 rounded bg-blue-900 text-[10px]">Low Profit • High Vol</span>
                </div>
                <p class="text-slate-300 text-[11px] mt-1.5 leading-relaxed">Popular but low margin. Recommendation: Increase price +$1.50 or reduce portion size by 8%.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-950/70 border border-amber-800 text-xs">
                <div class="flex items-center justify-between text-amber-400 font-bold">
                  <span>❓ Puzzles (14 Items)</span>
                  <span class="px-1.5 py-0.5 rounded bg-amber-900 text-[10px]">High Profit • Low Vol</span>
                </div>
                <p class="text-slate-300 text-[11px] mt-1.5 leading-relaxed">High profit dishes needing visibility. Recommendation: Train servers to upsell or feature in specials.</p>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-950/70 border border-rose-800 text-xs">
                <div class="flex items-center justify-between text-rose-400 font-bold">
                  <span>🐕 Dogs (6 Items)</span>
                  <span class="px-1.5 py-0.5 rounded bg-rose-900 text-[10px]">Low Profit • Low Vol</span>
                </div>
                <p class="text-slate-300 text-[11px] mt-1.5 leading-relaxed">Drag on inventory &amp; prep labor. Recommendation: Retire on next menu update to cut raw wastage.</p>
              </div>
            </div>

            <!-- Detailed Item Contribution Matrix Table -->
            <div class="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
              <div class="p-4 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <i data-lucide="utensils-crossed" class="w-4 h-4 text-safari"></i>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-200">Live POS Item Sales &amp; Recipe BOM Depletion Analysis</span>
                </div>
                <span class="text-xs font-mono text-safari-100">Depleted in Real-Time via Safari POS</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left">
                  <thead class="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th class="py-3 px-4">Menu Item &amp; Recipe Code</th>
                      <th class="py-3 px-4">Quadrant</th>
                      <th class="py-3 px-4 text-right">Sold Qty</th>
                      <th class="py-3 px-4 text-right">Sale Price</th>
                      <th class="py-3 px-4 text-right">Recipe Cost</th>
                      <th class="py-3 px-4 text-center">Food Cost %</th>
                      <th class="py-3 px-4 text-right">Total Margin</th>
                      <th class="py-3 px-4">Algorithmic Recommendation</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800 font-mono text-[12px]">
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-medium text-white">
                        <span class="block font-bold">Wagyu Ribeye 300g</span>
                        <span class="text-[10px] text-slate-400 font-mono">BOM-STEAK-01</span>
                      </td>
                      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">🌟 Star</span></td>
                      <td class="py-3 px-4 text-right font-bold text-white">142</td>
                      <td class="py-3 px-4 text-right text-white font-semibold">$68.00</td>
                      <td class="py-3 px-4 text-right text-slate-300">$18.50</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">27.2%</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$7,029.00</td>
                      <td class="py-3 px-4 font-sans text-[11px] text-slate-300">Maintain current supplier contract. Prime earner.</td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-medium text-white">
                        <span class="block font-bold">Truffle Tagliolini</span>
                        <span class="text-[10px] text-slate-400 font-mono">BOM-PASTA-04</span>
                      </td>
                      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">🌟 Star</span></td>
                      <td class="py-3 px-4 text-right font-bold text-white">188</td>
                      <td class="py-3 px-4 text-right text-white font-semibold">$34.00</td>
                      <td class="py-3 px-4 text-right text-slate-300">$6.80</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">20.0%</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$5,113.60</td>
                      <td class="py-3 px-4 font-sans text-[11px] text-slate-300">Exceptional 80% margin. Train floor staff to pair with wine.</td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-medium text-white">
                        <span class="block font-bold">Classic Club Sandwich</span>
                        <span class="text-[10px] text-slate-400 font-mono">BOM-SAND-02</span>
                      </td>
                      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-bold border border-blue-800">🐎 Plowhorse</span></td>
                      <td class="py-3 px-4 text-right font-bold text-white">245</td>
                      <td class="py-3 px-4 text-right text-white font-semibold">$19.00</td>
                      <td class="py-3 px-4 text-right text-rose-300">$7.60</td>
                      <td class="py-3 px-4 text-center text-amber-400 font-bold">40.0%</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$2,793.00</td>
                      <td class="py-3 px-4 font-sans text-[11px] text-amber-300">High volume! Increase price to $21.00 to add +$490 profit.</td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-medium text-white">
                        <span class="block font-bold">Chilean Sea Bass</span>
                        <span class="text-[10px] text-slate-400 font-mono">BOM-FISH-06</span>
                      </td>
                      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 font-bold border border-amber-800">❓ Puzzle</span></td>
                      <td class="py-3 px-4 text-right font-bold text-white">24</td>
                      <td class="py-3 px-4 text-right text-white font-semibold">$72.00</td>
                      <td class="py-3 px-4 text-right text-slate-300">$19.40</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">26.9%</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">+$1,262.40</td>
                      <td class="py-3 px-4 font-sans text-[11px] text-slate-300">Feature on evening Chef's Table specials board.</td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-medium text-white">
                        <span class="block font-bold">Duck Liver Terrine</span>
                        <span class="text-[10px] text-slate-400 font-mono">BOM-APP-09</span>
                      </td>
                      <td class="py-3 px-4"><span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold border border-rose-800">🐕 Dog</span></td>
                      <td class="py-3 px-4 text-right font-bold text-white">8</td>
                      <td class="py-3 px-4 text-right text-white font-semibold">$28.00</td>
                      <td class="py-3 px-4 text-right text-rose-400 font-bold">$15.20</td>
                      <td class="py-3 px-4 text-center text-rose-400 font-bold">54.3%</td>
                      <td class="py-3 px-4 text-right text-rose-300 font-bold">+$102.40</td>
                      <td class="py-3 px-4 font-sans text-[11px] text-rose-300">Replace with seasonal ceviche; prevents perishable waste.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      }
    },
    group: {
      render: () => {
        return `
          <div class="space-y-6">
            <!-- Group Consolidated Summary -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="text-slate-400 text-xs">Total Portfolio Keys</div>
                <div class="text-2xl font-bold font-mono text-white mt-1">515 Rooms</div>
                <div class="text-[11px] text-safari-100 mt-0.5">3 Active Properties</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="text-slate-400 text-xs">Blended Occupancy Rate</div>
                <div class="text-2xl font-bold font-mono text-safari-100 mt-1">90.7%</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-0.5">+5.8% vs Group Budget</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="text-slate-400 text-xs">Consolidated Gross Revenue</div>
                <div class="text-2xl font-bold font-mono text-white mt-1">$393,750.00</div>
                <div class="text-[11px] text-slate-400 mt-0.5">Rooms + F&amp;B + Banquets</div>
              </div>

              <div class="bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                <div class="text-slate-400 text-xs">Consolidated Group GOP</div>
                <div class="text-2xl font-bold font-mono text-emerald-400 mt-1">$154,753.00</div>
                <div class="text-[11px] text-emerald-400 font-semibold mt-0.5">39.3% Blended Operating Margin</div>
              </div>
            </div>

            <!-- Group Rollup Table -->
            <div class="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
              <div class="p-4 bg-slate-800/60 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <i data-lucide="layers" class="w-4 h-4 text-safari"></i>
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-200">Cross-Property Operational &amp; Financial Comparison</span>
                </div>
                <span class="text-xs font-mono text-emerald-400 font-bold">1-Click Multi-Property Consolidation</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left">
                  <thead class="bg-slate-950 text-slate-400 font-mono text-[11px] uppercase border-b border-slate-800">
                    <tr>
                      <th class="py-3 px-4">Hotel Property</th>
                      <th class="py-3 px-4">Type / Location</th>
                      <th class="py-3 px-4 text-center">Keys</th>
                      <th class="py-3 px-4 text-center">Occ %</th>
                      <th class="py-3 px-4 text-right">ADR ($)</th>
                      <th class="py-3 px-4 text-right">RevPAR ($)</th>
                      <th class="py-3 px-4 text-right">Daily Revenue</th>
                      <th class="py-3 px-4 text-right">GOP Profit</th>
                      <th class="py-3 px-4 text-center">Operating Margin</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800 font-mono text-[12px]">
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-bold text-white">Safari Grand Hotel &amp; Suites</td>
                      <td class="py-3 px-4 font-sans text-slate-300">5-Star Luxury Resort • City Center</td>
                      <td class="py-3 px-4 text-center text-white">180</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">91.8%</td>
                      <td class="py-3 px-4 text-right text-white">$198.50</td>
                      <td class="py-3 px-4 text-right text-safari-100 font-bold">$182.20</td>
                      <td class="py-3 px-4 text-right text-white font-bold">$142,850.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">$54,283.00</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">38.0%</span></td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-bold text-white">Safari Bay Resort &amp; Marina</td>
                      <td class="py-3 px-4 font-sans text-slate-300">Beachfront Resort &amp; Private Spa</td>
                      <td class="py-3 px-4 text-center text-white">240</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">88.5%</td>
                      <td class="py-3 px-4 text-right text-white">$237.30</td>
                      <td class="py-3 px-4 text-right text-safari-100 font-bold">$210.00</td>
                      <td class="py-3 px-4 text-right text-white font-bold">$188,500.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">$72,150.00</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">38.3%</span></td>
                    </tr>
                    <tr class="hover:bg-slate-800/40">
                      <td class="py-3 px-4 font-sans font-bold text-white">Safari Downtown Boutique</td>
                      <td class="py-3 px-4 font-sans text-slate-300">Executive Corporate Suites</td>
                      <td class="py-3 px-4 text-center text-white">95</td>
                      <td class="py-3 px-4 text-center text-emerald-400 font-bold">94.2%</td>
                      <td class="py-3 px-4 text-right text-white">$153.90</td>
                      <td class="py-3 px-4 text-right text-safari-100 font-bold">$145.00</td>
                      <td class="py-3 px-4 text-right text-white font-bold">$62,400.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">$28,320.00</td>
                      <td class="py-3 px-4 text-center"><span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-800">45.4%</span></td>
                    </tr>
                  </tbody>
                  <tfoot class="bg-slate-950 border-t-2 border-slate-700 font-mono text-[12px] font-bold">
                    <tr>
                      <td colspan="2" class="py-3 px-4 text-white uppercase">Portfolio Consolidated Rollup</td>
                      <td class="py-3 px-4 text-center text-safari-100">515</td>
                      <td class="py-3 px-4 text-center text-emerald-400">90.7%</td>
                      <td class="py-3 px-4 text-right text-white">$208.40</td>
                      <td class="py-3 px-4 text-right text-safari-100">$189.00</td>
                      <td class="py-3 px-4 text-right text-safari-100 font-bold">$393,750.00</td>
                      <td class="py-3 px-4 text-right text-emerald-400 font-bold">$154,753.00</td>
                      <td class="py-3 px-4 text-center text-safari-100">39.3% Total</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        `;
      }
    }
  };

  function renderCurrentReport() {
    if (reportData[currentTab]) {
      bodyEl.innerHTML = reportData[currentTab].render(currentPeriod);
      if (window.lucide) lucide.createIcons();
    }
  }

  // Initial render
  renderCurrentReport();

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-report-tab');
      if (!tabId || tabId === currentTab) return;

      currentTab = tabId;

      // Update button styles
      tabBtns.forEach(b => {
        b.className = 'px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition flex items-center gap-2';
        b.setAttribute('aria-selected', 'false');
      });
      btn.className = 'px-4 py-2 rounded-lg text-xs font-bold bg-safari text-white shadow-sm transition flex items-center gap-2';
      btn.setAttribute('aria-selected', 'true');

      renderCurrentReport();
    });
  });

  // Period switching
  periodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const periodId = btn.getAttribute('data-report-period');
      if (!periodId || periodId === currentPeriod) return;

      currentPeriod = periodId;

      periodBtns.forEach(b => {
        b.className = 'px-2.5 py-1 rounded text-slate-400 hover:text-white';
      });
      btn.className = 'px-2.5 py-1 rounded font-bold bg-slate-800 text-safari-100';

      renderCurrentReport();
      showToast(`Updated view to ${periodId.toUpperCase()} reporting window.`, 'info');
    });
  });

  // Export to Excel
  if (excelBtn) {
    excelBtn.addEventListener('click', () => {
      showToast('Exporting Safari_' + currentTab.toUpperCase() + '_Report.xlsx... 100% USALI verified.', 'success');
    });
  }

  // Export to PDF
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      showToast('Generating Board-Ready Executive PDF... Download ready!', 'success');
    });
  }

  // WhatsApp Flash preview
  if (waDigestBtn) {
    waDigestBtn.addEventListener('click', () => {
      const msg = "🏨 *SAFARI EXECUTIVE FLASH (07:00 AM)*\nProperty: Safari Grand Hotel & Suites\nRevPAR: $182.20 (+14.2%)\nADR: $198.50 | Occ: 91.8%\nTotal Sales: $142,850.00 | GOP: $54,283 (38%)\nNight Audit: BALANCED ($0.00 Variance)";
      const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      showToast('Opening 07:00 AM Executive WhatsApp Flash digest...', 'success');
    });
  }
}

/* -------------------------------------------------------------
 * 12. 120+ Standardized Reports Catalog Modal Engine
 * ----------------------------------------------------------- */
function setupReportsModal() {
  const modal = document.getElementById('reports-modal');
  const openBtns = document.querySelectorAll('[data-open-reports-modal]');
  const closeBtns = document.querySelectorAll('[data-close-reports-modal]');
  const searchInput = document.getElementById('reports-search-input');
  const categoryPills = document.querySelectorAll('#reports-category-pills button');
  const listContainer = document.getElementById('reports-list-container');

  if (!modal || !listContainer) return;

  const catalog = [
    { code: 'REP-0101', cat: 'rooms', title: "Manager's Daily Flash Report", desc: 'Real-time Occupancy %, ADR, RevPAR, and room revenue variance vs budget.', usali: 'Schedule 1' },
    { code: 'REP-0102', cat: 'audit', title: 'Night Audit Trial Balance & Reconciliation Proof', desc: 'Zero-discrepancy dual-entry balance between Guest Ledger, City Ledger, and GL.', usali: 'Audit Control' },
    { code: 'REP-0103', cat: 'rooms', title: '14-Day Room Demand & Revenue Forecast', desc: 'Forward-looking booking pace, unconstrained pickup, and rate tier recommendations.', usali: 'Forecasting' },
    { code: 'REP-0104', cat: 'rooms', title: 'OTA Channel & Direct Booking Production Matrix', desc: 'Net ADR contribution after factoring in OTA merchant commissions and channel costs.', usali: 'Distribution' },
    { code: 'REP-0105', cat: 'rooms', title: 'Rate Code Variance & Complimentary Room Audit', desc: 'Audit log of discounted rates, manager overrides, and complimentary room nights.', usali: 'Internal Audit' },
    { code: 'REP-0106', cat: 'rooms', title: 'Housekeeping Turnover & Room Inspection Velocity', desc: 'Turnaround duration from guest departure to inspected clean room status.', usali: 'Operations' },
    { code: 'REP-0201', cat: 'fnb', title: 'F&B Outlets Daily Sales & Meal Cover Summary', desc: 'Itemized revenue, covers, average guest check across all restaurants and bars.', usali: 'Schedule 2' },
    { code: 'REP-0202', cat: 'fnb', title: 'Menu Engineering Matrix (Stars, Plowhorses, Dogs)', desc: 'Algorithmic classification of dish popularity vs recipe gross profit margin.', usali: 'Profit Matrix' },
    { code: 'REP-0203', cat: 'fnb', title: 'Real-Time Recipe BOM & Ingredient Depletion Audit', desc: 'Sub-second raw material stock deduction and kitchen recipe yield variances.', usali: 'Recipe Control' },
    { code: 'REP-0204', cat: 'fnb', title: 'Kitchen Wastage & KOT Void Discrepancy Log', desc: 'Time-stamped log of kitchen canceled orders, returned dishes, and pilferage.', usali: 'Loss Prevention' },
    { code: 'REP-0205', cat: 'fnb', title: 'Banquet Event Order (BEO) Revenue & Advance Ledger', desc: 'Banqueting revenue tracking, deposit receipts, and final invoice settlement.', usali: 'Banqueting' },
    { code: 'REP-0206', cat: 'fnb', title: 'Bar & Liquor Spillage vs Yield Reconciliation', desc: 'Bottle weigh-in audit vs POS shot pour sales to detect shrinkage.', usali: 'Bar Yield' },
    { code: 'REP-0301', cat: 'usali', title: 'USALI 11th Edition Consolidated Operating Statement (P&L)', desc: 'Standardized global hospitality profit and loss statement, certified by CAs.', usali: 'Master P&L' },
    { code: 'REP-0302', cat: 'usali', title: 'Departmental Operating Schedules 1 to 9 Matrix', desc: 'Full drilldown schedules from Rooms and F&B to Admin, Maintenance, and Utilities.', usali: 'Schedules 1-9' },
    { code: 'REP-0303', cat: 'usali', title: 'Gross Operating Profit (GOP) & EBITDA Analysis', desc: 'Executive bottom-line calculation for owners, asset managers, and investors.', usali: 'Executive KPI' },
    { code: 'REP-0304', cat: 'usali', title: 'City Ledger Corporate AR Aging & Credit Limits', desc: '30, 60, 90+ day debtor aging with automatic credit hold notifications.', usali: 'Accounts Rec' },
    { code: 'REP-0305', cat: 'group', title: 'Multi-Property Consolidated Portfolio Statement', desc: 'Single-currency consolidated balance sheet across multiple hotel branches.', usali: 'Group Consolidation' },
    { code: 'REP-0401', cat: 'inventory', title: 'Store Reorder Level & Auto-Purchase Trigger', desc: 'Automated requisition generation when stock breaches minimum safety threshold.', usali: 'Procurement' },
    { code: 'REP-0402', cat: 'inventory', title: 'Purchase Price Variance (Invoice vs Contract PO)', desc: 'Flags supplier price creep and unauthorized vendor surcharges on deliveries.', usali: 'Cost Control' },
    { code: 'REP-0403', cat: 'inventory', title: 'Departmental Store Issue Requisition Ledger', desc: 'Traces inventory transfer from central warehouse to individual kitchens/floors.', usali: 'Store Issue' },
    { code: 'REP-0501', cat: 'audit', title: 'Cashier Shift Balance & Safe Vault Reconciliation', desc: 'End-of-shift cash drawer settlement, cashier envelope drops, and shortage logs.', usali: 'Cashiering' },
    { code: 'REP-0502', cat: 'audit', title: 'VAT / GST & Service Charge Tax Summary', desc: 'Pre-formatted statutory tax filings with drill-down invoice numbers for auditors.', usali: 'Tax Compliance' },
    { code: 'REP-0503', cat: 'audit', title: 'Immutable System Activity & Security Audit Trail', desc: 'Cryptographically logged record of all invoice revisions, discounts, and user logins.', usali: 'Compliance' }
  ];

  let selectedCategory = 'all';
  let searchQuery = '';

  function renderList() {
    const filtered = catalog.filter(item => {
      const matchCat = selectedCategory === 'all' || item.cat === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q || 
        item.title.toLowerCase().includes(q) || 
        item.code.toLowerCase().includes(q) || 
        item.desc.toLowerCase().includes(q) ||
        item.usali.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div class="p-6 text-center text-slate-500 font-medium space-y-1">
          <p class="text-sm">No reports matching "${searchQuery}".</p>
          <p class="text-[11px] text-slate-400">Our engineering desk can configure custom SQL reports for your property during setup.</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(item => `
      <div class="p-3 rounded-xl border border-slate-200 hover:border-safari hover:bg-slate-50/80 transition flex items-center justify-between gap-3 group">
        <div class="space-y-0.5 flex-1">
          <div class="flex items-center gap-2">
            <span class="font-mono font-bold text-safari text-[11px]">${item.code}</span>
            <span class="font-bold text-slate-900 text-xs">${item.title}</span>
            <span class="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded font-mono">${item.usali}</span>
          </div>
          <p class="text-[11px] text-slate-500 line-clamp-1">${item.desc}</p>
        </div>
        <button type="button" class="px-2.5 py-1 rounded-lg bg-slate-100 group-hover:bg-safari group-hover:text-white text-slate-700 text-[11px] font-semibold transition shrink-0" onclick="showToast('Sample template for ${item.code} loaded.', 'info')">
          Preview
        </button>
      </div>
    `).join('');
  }

  // Open / Close modal
  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.showModal();
      renderList();
      if (searchInput) searchInput.focus();
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.close();
    });
  });

  // Category filter
  categoryPills.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-rep-cat');
      if (!cat) return;
      selectedCategory = cat;

      categoryPills.forEach(b => {
        b.className = 'px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200';
      });
      btn.className = 'px-3 py-1 rounded-lg bg-safari text-white shadow-xs';

      renderList();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderList();
    });
  }

  // Close on outside backdrop click
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      modal.close();
    }
  });
}

