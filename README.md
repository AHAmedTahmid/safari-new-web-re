# Safari Integrated Business Solutions | Web Application

A modern, high-performance, enterprise-grade website and interactive showcase built for **Safari Integrated Business Solutions** — delivering unified **Point of Sale (POS)**, **Property Management (PMS)**, and **Chartered Accountant-verified USALI ERP** software for hotels, luxury resorts, and restaurant groups.

---

## 🌟 Key Features & Interactivity

1. **Interactive Console in Hero Section**
   - Live tab switcher to preview **Safari PMS** (room matrix & occupancy), **Safari POS** (kitchen KDS routing & table billing), and **Safari ERP** (operating revenue & GOP metrics).
   
2. **Real-Time Integration Simulator**
   - Click the *"Run Live Transaction Simulation"* button to trace an order as it moves in sub-second speed:
     - **Step 1: POS** creates order & depletes kitchen inventory.
     - **Step 2: PMS** auto-routes the charge to the guest room folio.
     - **Step 3: USALI ERP** auto-credits the Schedule 2 F&B Ledger with full CA-audit reconciliation.

3. **Hospitality ROI & Operational Savings Calculator**
   - Live range sliders for:
     - Total Room Inventory (10 to 400 keys)
     - Average Daily Rate (ADR: $50 to $600+)
     - Average Occupancy Rate (30% to 95%)
     - F&B, Bar & Retail Outlets (1 to 10 outlets)
   - Real-time calculations of:
     - Annual Operational Cost Savings ($)
     - Monthly Night Audit & Accounting Hours Saved
     - Prevented Billing & Inventory Leakage ($)
     - Software Investment Payback Multiple (e.g., 7.2x ROI)

4. **USALI Financial Compliance Deep-Dive**
   - Interactive departmental schedule viewer for:
     - **Summary Operating Statement (USALI 11th & 12th Edition)**
     - **Schedule 1: Rooms Department** (Transient, Group, Contract, Linen, Laundry)
     - **Schedule 2: Food & Beverage** (Outlets, Banquets, COGS, Kitchen Staff)
     - **Schedule 4: Administrative & General (A&G)**
   - Real-time search filter by account code or account name.
   - Pop-up modal with complete USALI Chart of Accounts (COA) structure.

5. **Head-to-Head Comparison Matrix**
   - Safari vs. Legacy Systems (Oracle MICROS / Opera, IDS Next, Generic ERP) across offline resilience, USALI certification, 8-day SLA, and hardware compatibility.

6. **8-Day Zero-Downtime Implementation Timeline**
   - Visual 4-phase rollout (Discovery, Config & Pairing, Staff Enablement, 24/7 Go-Live).

7. **Client Testimonials & Industry Social Proof**
   - Verified feedback from General Managers, Chartered Accountants (FCA), and F&B Directors.

8. **Accessible FAQ Accordion**
   - Category filtering (All, USALI & Accounting, Hardware & Offline, 8-Day Deployment) with smooth expand/collapse.

9. **Interactive Lead Capture & Demo Booking**
   - Both in-page and popup `<dialog>` modal with instant validation, interactive reference ID generation (`SAF-2026-XXXX`), and toast notifications.

10. **Offline-First Mode Simulation**
    - Click *"Test Offline Mode"* in the top bar to simulate an internet drop and see how Safari's local cache ensures zero downtime for hospitality operations.

---

## 🚀 How to Open and Preview

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](file:///C:/Users/enana/.gemini/antigravity/scratch/safari-solutions/index.html) or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Option 2: Local HTTP Server (PowerShell)
To run a local web server:

```powershell
cd C:\Users\enana\.gemini\antigravity\scratch\safari-solutions
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📁 Project Structure

```
safari-solutions/
├── index.html        # Main semantic, accessible website markup
├── styles.css        # Custom CSS, custom range sliders, animations, modals & toasts
├── app.js            # Interactive calculators, simulators, USALI engine & form logic
└── README.md         # Documentation & guide
```

---

## 🎨 Branding & Customization

- **Primary Brand Color**: Safari Olive (`#6A760C` / Tailwind `safari`)
- **Dark Elements**: Enterprise Slate (`#0f172a`, `#020617`)
- **Accents**: Emerald Green (`#10b981`) for real-time status and financial credits
- All phone numbers, emails, and address placeholders in `index.html` can be easily updated to match your live business contact details.
