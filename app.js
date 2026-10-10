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

  // Unified 3-Layer Contact Widget (WhatsApp, Message, Call)
  setupUnifiedContactWidget();
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
    title: 'Safari PMS • Hotel & Resort Complete Solution',
    metric1Label: 'Occupancy Rate (Live Matrix)',
    metric1Value: '91.8%',
    metric1Sub: '165 of 180 Rooms Occupied',
    metric2Label: 'Daily RevPAR & Services',
    metric2Value: '$198.50',
    metric2Sub: 'Restaurant, Events & Amenities Synced',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Hotel & Resort Complete Operations</span>
          <span class="text-safari-100 font-semibold font-mono">All-in-One Live</span>
        </div>
        <div class="grid grid-cols-4 gap-2 text-center text-[11px] pt-1 font-mono">
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">Front Office</span>
            <span class="text-green-400 font-bold">42 Check-Ins</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">Housekeeping</span>
            <span class="text-amber-400 font-bold">Inspected</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-slate-700/50">
            <span class="text-slate-400 block text-[9px]">Events/Banquet</span>
            <span class="text-blue-400 font-bold">Grand Hall</span>
          </div>
          <div class="bg-slate-900/80 p-2 rounded border border-safari/50 bg-safari-950/30">
            <span class="text-safari-100 block text-[9px]">Ticketing</span>
            <span class="text-white font-bold">Pool/Passes</span>
          </div>
        </div>
      </div>
    `,
    badge: 'Front Office • Restaurant • Housekeeping • Events • Ticketing'
  },
  pos: {
    title: 'Safari POS • Super Shop & Multi-Purpose Retail',
    metric1Label: 'Active Checkout Counters',
    metric1Value: '12 Active Lanes',
    metric1Sub: 'Super Shop & Multi-Store Flow',
    metric2Label: 'Today\'s Checkout Volume',
    metric2Value: '$28,450.00',
    metric2Sub: 'Barcode scan, scales & offline sync',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Super Shop & Multi-Purpose Checkout</span>
          <span class="text-safari-100 font-semibold font-mono">Sub-Second Scan</span>
        </div>
        <div class="space-y-1.5 text-[11px] font-mono">
          <div class="flex items-center justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-200">Lane #03 (Super Shop Express)</span>
            <span class="text-emerald-400 font-semibold">Barcode Scanned • Stock Auto-Deducted</span>
          </div>
          <div class="flex items-center justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-200">Counter #07 (Weighing Scale / Retail)</span>
            <span class="text-safari-100 font-semibold">$42.80 Paid (Drawer #2 Reconciled)</span>
          </div>
        </div>
      </div>
    `,
    badge: 'Super Shop & Retail POS • Multi-Counter Cash Drawers • Offline Ready'
  },
  erp: {
    title: 'Safari ERP • Back-Office Financials, Supply, Inventory & Assets',
    metric1Label: 'USALI Operating Revenue',
    metric1Value: '$142,850',
    metric1Sub: '+18.4% vs same period last mo',
    metric2Label: 'Gross Operating Profit (GOP)',
    metric2Value: '46.8%',
    metric2Sub: 'Standard USALI 11th Edition Format',
    content: `
      <div class="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60 space-y-2">
        <div class="flex justify-between text-xs text-slate-300">
          <span class="font-medium">Complete Back-Office Financials & Supply</span>
          <span class="text-safari-100 font-semibold font-mono">Full Access Active</span>
        </div>
        <div class="space-y-1 text-[11px] font-mono">
          <div class="flex justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-300">USALI Ledger & CA-Certified Balance</span>
            <span class="text-green-400 font-bold">$142,850.00 Verified</span>
          </div>
          <div class="flex justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-300">Central Inventory & Recipe Depletion</span>
            <span class="text-safari-100 font-semibold">14 Warehouses Synced</span>
          </div>
          <div class="flex justify-between p-1.5 bg-slate-900/80 rounded border border-slate-700/50">
            <span class="text-slate-300">Fixed Assets Register & Depreciation</span>
            <span class="text-slate-200 font-semibold">Auto-Calculated Schedules</span>
          </div>
        </div>
      </div>
    `,
    badge: 'USALI Financials • Supply Chain • Inventory • Fixed Assets • Full Access'
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
      statusPill.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-[11px] font-semibold border border-emerald-800/60';
      statusPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Cloud & Offline Synced';
      toggleBtn.innerHTML = '<i data-lucide="wifi-off" class="w-3.5 h-3.5"></i> <span>Test Offline Mode</span>';
      showToast('Network Reconnected: All offline transactions instantly synchronized.', 'success');
    } else {
      statusPill.className = 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 text-[11px] font-semibold border border-amber-800/60';
      statusPill.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400"></span> Offline Mode (Local Cache Active)';
      toggleBtn.innerHTML = '<i data-lucide="wifi" class="w-3.5 h-3.5"></i> <span>Restore Cloud Link</span>';
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
 * 10. Unified 3-Layer Contact Dock & Card (WhatsApp, Message, Call)
 * Matches Safari Brand Olive (#6A760C) & WhatsApp (#25D366) Theme
 * ----------------------------------------------------------- */
function setupUnifiedContactWidget() {
  const dock = document.getElementById('safari-contact-dock');
  const waDockBtn = document.getElementById('dock-whatsapp-btn');
  const msgDockBtn = document.getElementById('dock-message-btn');
  const callDockBtn = document.getElementById('dock-call-btn');

  const card = document.getElementById('safari-contact-card');
  const cardCloseBtn = document.getElementById('safari-card-close-btn');

  const layerWa = document.getElementById('card-layer-whatsapp');
  const layerMsg = document.getElementById('card-layer-message');
  const layerCall = document.getElementById('card-layer-call');

  const msgToggleTrigger = document.getElementById('message-toggle-trigger');
  const msgActionBtn = document.getElementById('message-action-btn');
  const quickInquiryBox = document.getElementById('quick-inquiry-box');
  const msgForm = document.getElementById('safari-quick-msg-form');
  const msgInput = document.getElementById('safari-quick-msg-input');
  const promptChips = document.querySelectorAll('[data-prompt-chip]');

  const countryToggle = document.getElementById('country-numbers-toggle');
  const countryList = document.getElementById('country-numbers-list');

  if (!card) return;

  function openCard(focusLayer) {
    card.classList.remove('hidden');

    // Reset temporary highlight rings
    [layerWa, layerMsg, layerCall].forEach(l => {
      if (l) l.classList.remove('ring-2', 'ring-safari', 'ring-emerald-400');
    });

    if (focusLayer === 'whatsapp' && layerWa) {
      layerWa.classList.add('ring-2', 'ring-emerald-400');
      setTimeout(() => layerWa.classList.remove('ring-2', 'ring-emerald-400'), 1600);
    } else if (focusLayer === 'message' && layerMsg) {
      layerMsg.classList.add('ring-2', 'ring-safari');
      if (quickInquiryBox && quickInquiryBox.classList.contains('hidden')) {
        quickInquiryBox.classList.remove('hidden');
      }
      if (msgInput) msgInput.focus();
      setTimeout(() => layerMsg.classList.remove('ring-2', 'ring-safari'), 1600);
    } else if (focusLayer === 'call' && layerCall) {
      layerCall.classList.add('ring-2', 'ring-safari');
      setTimeout(() => layerCall.classList.remove('ring-2', 'ring-safari'), 1600);
    }
  }

  function closeCard() {
    card.classList.add('hidden');
    if (countryList) countryList.classList.add('hidden');
  }

  function toggleCard() {
    if (card.classList.contains('hidden')) {
      openCard();
    } else {
      closeCard();
    }
  }

  // Dock Buttons Interactions
  if (waDockBtn) {
    waDockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCard('whatsapp');
    });
  }

  if (msgDockBtn) {
    msgDockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCard('message');
    });
  }

  if (callDockBtn) {
    callDockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCard('call');
    });
  }

  // Click on dock background toggles card
  if (dock) {
    dock.addEventListener('click', (e) => {
      if (e.target.closest('.dock-layer-btn')) return;
      toggleCard();
    });
  }

  // Close button inside card
  if (cardCloseBtn) {
    cardCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeCard();
    });
  }

  // Expand / collapse message inquiry panel
  function toggleMessageInquiry() {
    if (quickInquiryBox) {
      quickInquiryBox.classList.toggle('hidden');
      if (!quickInquiryBox.classList.contains('hidden') && msgInput) {
        msgInput.focus();
      }
    }
  }

  if (msgToggleTrigger) {
    msgToggleTrigger.addEventListener('click', (e) => {
      if (e.target.closest('#message-action-btn')) return;
      toggleMessageInquiry();
    });
  }

  if (msgActionBtn) {
    msgActionBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMessageInquiry();
    });
  }

  // Quick prompt chips
  promptChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const text = chip.getAttribute('data-prompt-chip') || chip.textContent.trim();
      if (msgInput) {
        msgInput.value = text;
        msgInput.focus();
      }
    });
  });

  // Message Form Submission (Sends via WhatsApp with clean prompt)
  if (msgForm) {
    msgForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = msgInput ? msgInput.value.trim() : '';
      if (!text) {
        if (msgInput) msgInput.focus();
        return;
      }
      const encoded = encodeURIComponent(`Hi Safari Solutions Team! ${text}`);
      window.open(`https://wa.me/?text=${encoded}`, '_blank', 'noopener,noreferrer');
      showToast('Opening chat with your inquiry...', 'success');
      if (msgInput) msgInput.value = '';
      closeCard();
    });
  }

  // Expandable Country Numbers list
  if (countryToggle && countryList) {
    countryToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      countryList.classList.toggle('hidden');
    });
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!card.classList.contains('hidden') &&
        !card.contains(e.target) &&
        dock && !dock.contains(e.target)) {
      closeCard();
    }
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !card.classList.contains('hidden')) {
      closeCard();
    }
  });
}

// Backward compatibility aliases
function setupWhatsAppWidget() {
  setupUnifiedContactWidget();
}
function setupContactDock() {
  setupUnifiedContactWidget();
}

