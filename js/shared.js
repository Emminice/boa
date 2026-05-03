/* ============================================================
   BANK OF AMERICA DEMO — Shared JavaScript
   ============================================================ */

// ── Demo Data ────────────────────────────────────────────────
const DEMO_USERS = [
  {
    id: 1, name: 'James Wilson', email: 'james.wilson@email.com', password: 'password',
    pin: '1234', role: 'customer', accountType: 'Advantage Banking',
    accountNumber: '483920174650', routingNumber: '026009593',
    balance: 24518.73, availableBalance: 24518.73,
    phone: '(555) 312-7841', address: '1248 Oak Street', city: 'Charlotte', state: 'NC', zip: '28201',
    memberSince: '2018-03-15', isActive: true,
    transactions: [
      { id:101, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'ACME CORP PAYROLL', amount:3250.00, balanceAfter:24518.73, ref:'AC847291035', status:'completed', date:'2024-01-15T09:00:00' },
      { id:102, type:'debit',  description:'WHOLEFDS MKT Purchase', category:'groceries', counterparty:'Whole Foods Market', amount:87.34, balanceAfter:21268.73, ref:'WF192837465', status:'completed', date:'2024-01-14T14:22:00' },
      { id:103, type:'debit',  description:'Netflix Subscription', category:'subscription', counterparty:'NETFLIX.COM', amount:15.99, balanceAfter:21180.39, ref:'NF384729301', status:'completed', date:'2024-01-13T08:01:00' },
      { id:104, type:'debit',  description:'Restaurant Purchase', category:'dining', counterparty:'Chipotle Mexican Grill', amount:23.50, balanceAfter:21156.89, ref:'CM294837561', status:'completed', date:'2024-01-12T13:45:00' },
      { id:105, type:'credit', description:'Zelle Transfer Received', category:'transfer', counterparty:'Alex Thompson', amount:150.00, balanceAfter:21306.89, ref:'ZL847261095', status:'completed', date:'2024-01-11T16:30:00' },
      { id:106, type:'debit',  description:'Gas Station Purchase', category:'gas', counterparty:'Shell Gas Station', amount:62.18, balanceAfter:21244.71, ref:'SH394827165', status:'completed', date:'2024-01-10T07:55:00' },
      { id:107, type:'debit',  description:'Electric Bill Payment', category:'utilities', counterparty:'Duke Energy', amount:134.50, balanceAfter:21110.21, ref:'DE847392016', status:'completed', date:'2024-01-09T11:00:00' },
      { id:108, type:'debit',  description:'Amazon Purchase', category:'shopping', counterparty:'AMAZON.COM', amount:45.99, balanceAfter:21064.22, ref:'AM738291640', status:'completed', date:'2024-01-08T20:33:00' },
      { id:109, type:'credit', description:'Interest Earned', category:'payroll', counterparty:'Bank of America', amount:12.44, balanceAfter:21076.66, ref:'IA037284610', status:'completed', date:'2024-01-07T00:01:00' },
      { id:110, type:'debit',  description:'CVS Pharmacy', category:'healthcare', counterparty:'CVS/Pharmacy', amount:28.75, balanceAfter:21047.91, ref:'CV293847512', status:'completed', date:'2024-01-06T09:20:00' },
      { id:111, type:'debit',  description:'ATM Withdrawal', category:'atm', counterparty:'BofA ATM', amount:200.00, balanceAfter:20847.91, ref:'AT847261503', status:'completed', date:'2024-01-05T12:00:00' },
      { id:112, type:'credit', description:'ACH Credit - Refund', category:'shopping', counterparty:'AMAZON.COM', amount:32.99, balanceAfter:20880.90, ref:'AX948273610', status:'completed', date:'2024-01-04T15:12:00' },
      { id:113, type:'debit',  description:'Online Transfer Sent', category:'transfer', counterparty:'Sarah Johnson', amount:500.00, balanceAfter:20380.90, ref:'TR847261950', status:'completed', date:'2024-01-03T10:45:00' },
    ]
  },
  {
    id: 2, name: 'Sarah Johnson', email: 'sarah.johnson@email.com', password: 'password',
    pin: '2345', role: 'customer', accountType: 'Advantage Savings',
    accountNumber: '291847503826', routingNumber: '026009593',
    balance: 8942.50, availableBalance: 8942.50,
    phone: '(555) 489-2301', address: '7632 Maple Ave', city: 'Dallas', state: 'TX', zip: '75201',
    memberSince: '2020-07-22', isActive: true,
    transactions: [
      { id:201, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'TECH SOLUTIONS INC', amount:2800.00, balanceAfter:8942.50, ref:'TP847391026', status:'completed', date:'2024-01-15T09:00:00' },
      { id:202, type:'debit',  description:'Rent Payment', category:'utilities', counterparty:'Property Management Co', amount:1450.00, balanceAfter:6142.50, ref:'RM948273610', status:'completed', date:'2024-01-14T08:00:00' },
      { id:203, type:'debit',  description:'Grocery Store', category:'groceries', counterparty:'Kroger', amount:92.14, balanceAfter:6050.36, ref:'KR394827651', status:'completed', date:'2024-01-13T17:30:00' },
      { id:204, type:'debit',  description:'Spotify Premium', category:'subscription', counterparty:'SPOTIFY USA', amount:9.99, balanceAfter:6040.37, ref:'SP847261503', status:'completed', date:'2024-01-12T08:00:00' },
      { id:205, type:'credit', description:'Freelance Payment', category:'payroll', counterparty:'UPWORK GLOBAL INC', amount:350.00, balanceAfter:6390.37, ref:'UP293847162', status:'completed', date:'2024-01-11T14:20:00' },
    ]
  },
  {
    id: 3, name: 'Michael Chen', email: 'michael.chen@email.com', password: 'password',
    pin: '3456', role: 'customer', accountType: 'Advantage Banking',
    accountNumber: '837462019384', routingNumber: '026009593',
    balance: 142305.00, availableBalance: 142305.00,
    phone: '(555) 671-4482', address: '3901 Pacific Coast Hwy', city: 'Los Angeles', state: 'CA', zip: '90001',
    memberSince: '2015-11-08', isActive: true,
    transactions: [
      { id:301, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'GOOGLE LLC', amount:8200.00, balanceAfter:142305.00, ref:'GL847291635', status:'completed', date:'2024-01-15T09:00:00' },
      { id:302, type:'debit',  description:'Mortgage Payment', category:'utilities', counterparty:'Chase Mortgage', amount:3800.00, balanceAfter:138505.00, ref:'CM293847165', status:'completed', date:'2024-01-14T08:00:00' },
      { id:303, type:'debit',  description:'Car Payment', category:'travel', counterparty:'BMW Financial Services', amount:890.00, balanceAfter:137615.00, ref:'BW948273610', status:'completed', date:'2024-01-13T10:00:00' },
      { id:304, type:'debit',  description:'Restaurant - Fine Dining', category:'dining', counterparty:'Nobu Restaurant', amount:285.00, balanceAfter:137330.00, ref:'NB394827651', status:'completed', date:'2024-01-12T20:30:00' },
      { id:305, type:'credit', description:'Investment Dividend', category:'payroll', counterparty:'Merrill Lynch', amount:1250.00, balanceAfter:138580.00, ref:'ML847261509', status:'completed', date:'2024-01-10T09:00:00' },
    ]
  },
  {
    id: 4, name: 'Emily Davis', email: 'emily.davis@email.com', password: 'password',
    pin: '4567', role: 'customer', accountType: 'SafeBalance Banking',
    accountNumber: '104938572641', routingNumber: '026009593',
    balance: 3216.88, availableBalance: 3216.88,
    phone: '(555) 203-9157', address: '560 W 34th Street', city: 'New York', state: 'NY', zip: '10001',
    memberSince: '2022-01-10', isActive: true,
    transactions: [
      { id:401, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'NYC SCHOOL DISTRICT', amount:2200.00, balanceAfter:3216.88, ref:'NY847291635', status:'completed', date:'2024-01-15T09:00:00' },
      { id:402, type:'debit',  description:'Subway Card Reload', category:'travel', counterparty:'MTA New York', amount:33.00, balanceAfter:1016.88, ref:'MT293847165', status:'completed', date:'2024-01-14T07:30:00' },
      { id:403, type:'debit',  description:'Duane Reade Purchase', category:'healthcare', counterparty:'Duane Reade', amount:22.50, balanceAfter:994.38, ref:'DR948273610', status:'completed', date:'2024-01-13T12:00:00' },
    ]
  },
  {
    id: 5, name: 'Robert Martinez', email: 'robert.martinez@email.com', password: 'password',
    pin: '5678', role: 'customer', accountType: 'Advantage Banking',
    accountNumber: '659201847302', routingNumber: '026009593',
    balance: 56780.22, availableBalance: 56780.22,
    phone: '(555) 847-3620', address: '2200 S Miami Ave', city: 'Miami', state: 'FL', zip: '33130',
    memberSince: '2017-05-30', isActive: true,
    transactions: [
      { id:501, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'MIAMI DADE COUNTY', amount:4100.00, balanceAfter:56780.22, ref:'MD847291635', status:'completed', date:'2024-01-15T09:00:00' },
      { id:502, type:'debit',  description:'Restaurant on Brickell', category:'dining', counterparty:'STK Miami', amount:178.50, balanceAfter:52680.22, ref:'ST293847165', status:'completed', date:'2024-01-14T21:00:00' },
      { id:503, type:'debit',  description:'Online Transfer Sent', category:'transfer', counterparty:'Maria Martinez', amount:2500.00, balanceAfter:50180.22, ref:'TR948273610', status:'completed', date:'2024-01-13T11:30:00' },
      { id:504, type:'credit', description:'Rental Income', category:'payroll', counterparty:'John Williams', amount:3200.00, balanceAfter:53380.22, ref:'RI394827651', status:'completed', date:'2024-01-12T09:00:00' },
    ]
  },
  {
    id: 6, name: 'Jennifer Lee', email: 'jennifer.lee@email.com', password: 'password',
    pin: '6789', role: 'customer', accountType: 'Advantage Savings',
    accountNumber: '372918460253', routingNumber: '026009593',
    balance: 11430.15, availableBalance: 11430.15,
    phone: '(555) 920-4473', address: '4521 N Clark Street', city: 'Chicago', state: 'IL', zip: '60640',
    memberSince: '2019-09-14', isActive: true,
    transactions: [
      { id:601, type:'credit', description:'Direct Deposit - Payroll', category:'payroll', counterparty:'NORTHWESTERN UNIV', amount:3600.00, balanceAfter:11430.15, ref:'NW847291635', status:'completed', date:'2024-01-15T09:00:00' },
      { id:602, type:'debit',  description:'Whole Foods Market', category:'groceries', counterparty:'Whole Foods Market', amount:113.22, balanceAfter:7830.15, ref:'WF293847165', status:'completed', date:'2024-01-14T16:00:00' },
      { id:603, type:'debit',  description:'Planet Fitness', category:'healthcare', counterparty:'Planet Fitness', amount:24.99, balanceAfter:7805.16, ref:'PF948273610', status:'completed', date:'2024-01-13T06:00:00' },
      { id:604, type:'debit',  description:'Amazon Purchase', category:'shopping', counterparty:'AMAZON.COM', amount:89.99, balanceAfter:7715.17, ref:'AM394827651', status:'completed', date:'2024-01-12T14:30:00' },
    ]
  },
  {
    id: 99, name: 'Admin', email: 'admin@bankofamerica.com', password: 'password',
    pin: null, role: 'admin', accountType: null, accountNumber: null, balance: 0,
    isActive: true, transactions: []
  }
];

// ── Session helpers ────────────────────────────────────────
const Auth = {
  login(user) {
    sessionStorage.setItem('boa_user', JSON.stringify({ id: user.id, name: user.name, email: user.email, role: user.role }));
  },
  logout() {
    sessionStorage.removeItem('boa_user');
    sessionStorage.removeItem('boa_pending_transfer');
  },
  user() {
    const u = sessionStorage.getItem('boa_user');
    return u ? JSON.parse(u) : null;
  },
  fullUser() {
    const u = this.user();
    if (!u) return null;
    return DEMO_USERS.find(x => x.id === u.id);
  },
  check() { return !!this.user(); },
  isAdmin() { const u = this.user(); return u && u.role === 'admin'; },
  requireAuth(redirect = 'login.html') {
    if (!this.check()) { window.location.href = redirect; return false; }
    return true;
  },
  requireCustomer(redirect = 'dashboard.html') {
    if (this.isAdmin()) { window.location.href = 'admin-dashboard.html'; return false; }
    return this.requireAuth();
  },
  requireAdmin() {
    if (!this.check()) { window.location.href = 'login.html'; return false; }
    if (!this.isAdmin()) { window.location.href = 'dashboard.html'; return false; }
    return true;
  }
};

// ── Data helpers ───────────────────────────────────────────
const DB = {
  getUsers()    { return JSON.parse(localStorage.getItem('boa_users') || 'null') || DEMO_USERS; },
  saveUsers(u)  { localStorage.setItem('boa_users', JSON.stringify(u)); },
  reset()       { localStorage.removeItem('boa_users'); },
  getUserById(id) { return this.getUsers().find(u => u.id === id); },
  getUserByEmail(email) { return this.getUsers().find(u => u.email.toLowerCase() === email.toLowerCase()); },
  updateUser(id, data) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === id);
    if (idx >= 0) { users[idx] = { ...users[idx], ...data }; this.saveUsers(users); }
    return users[idx];
  },
  addTransaction(userId, tx) {
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === userId);
    if (idx >= 0) {
      users[idx].transactions.unshift(tx);
      this.saveUsers(users);
    }
  }
};

// ── Format helpers ─────────────────────────────────────────
const Fmt = {
  money(n) { return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); },
  date(d)  { return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); },
  dateTime(d) { return new Date(d).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }); },
  maskAccount(n) { return n ? '••••' + String(n).slice(-4) : '—'; },
  categoryIcon(c) {
    const map = { groceries:'🛒', dining:'🍽️', transfer:'💸', payroll:'💼', utilities:'💡', shopping:'🛍️', healthcare:'🏥', travel:'✈️', gas:'⛽', atm:'🏧', subscription:'📱', insurance:'🛡️' };
    return map[c] || '💳';
  },
  greet() {
    const h = new Date().getHours();
    return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  },
  initials(name) { return name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0,2); }
};

// ── Shared header render ───────────────────────────────────
function renderPublicHeader(activePage = '') {
  const user = Auth.user();
  return `
  <div class="utility-bar">
    <div class="container">
      <a href="#">En Español</a><a href="#">Privacy &amp; Security</a><a href="#">Contact Us</a><a href="#">Help</a>
    </div>
  </div>
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo-link">
        <div class="logo-icon">B</div>
        <div class="logo-text">
          <strong>Bank of America</strong>
          <span>Better Money Habits®</span>
        </div>
      </a>
      <div class="header-actions">
        ${user ? `
          <a href="${user.role==='admin'?'admin-dashboard.html':'dashboard.html'}" class="btn btn-outline-blue btn-sm">My Dashboard</a>
          <button onclick="handleLogout()" class="btn btn-red btn-sm">Sign Out</button>
        ` : `
          <a href="login.html" class="btn btn-red">Sign In</a>
          <a href="#" class="btn btn-outline-blue hide-mobile">Open an Account</a>
        `}
      </div>
    </div>
    <nav class="main-nav">
      <div class="container">
        <ul class="nav-list">
          <li><a href="#" class="${activePage==='checking'?'active':''}">Checking</a></li>
          <li><a href="#" class="${activePage==='savings'?'active':''}">Savings &amp; CDs</a></li>
          <li><a href="#" class="${activePage==='cards'?'active':''}">Credit Cards</a></li>
          <li><a href="#" class="${activePage==='home'?'active':''}">Home Loans</a></li>
          <li><a href="#" class="${activePage==='auto'?'active':''}">Auto Loans</a></li>
          <li><a href="#" class="${activePage==='biz'?'active':''}">Small Business</a></li>
          <li><a href="#" class="${activePage==='invest'?'active':''}">Investing</a></li>
          <li><a href="#" class="${activePage==='student'?'active':''}">Student</a></li>
        </ul>
      </div>
    </nav>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="fdic-row">
        <span class="fdic-badge">FDIC</span>
        <span class="ehl-badge">⊞</span>
        <span style="font-size:12px;color:#888;">Equal Housing Lender</span>
      </div>
      <div class="footer-links-row">
        <a href="#">Privacy Notice</a><a href="#">Security Center</a><a href="#">About Bank of America</a>
        <a href="#">Careers</a><a href="#">Community</a><a href="#">Investor Relations</a>
        <a href="#">News Room</a><a href="#">Contact Us</a><a href="#">Sitemap</a>
        <a href="#">Accessibility</a><a href="#">Important Disclosures</a><a href="#">Ad Choices</a>
      </div>
      <div class="footer-legal">
        <p>Bank of America, N.A. Member FDIC. Equal Housing Lender</p>
        <p>© 2024 Bank of America Corporation. All rights reserved.</p>
        <p>Investment products: Are Not FDIC Insured | Are Not Bank Guaranteed | May Lose Value</p>
      </div>
    </div>
  </footer>`;
}

function handleLogout() {
  Auth.logout();
  window.location.href = 'index.html';
}

// ── Toast notification ─────────────────────────────────────
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.style.cssText = `position:fixed;bottom:24px;right:24px;z-index:9999;padding:14px 20px;border-radius:6px;font-size:13px;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.2);animation:fadeUp 0.3s ease;max-width:360px;`;
  t.style.background = type === 'success' ? '#1b5e20' : (type === 'error' ? '#b71c1c' : '#0d47a1');
  t.style.color = '#fff';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// ── Init on every page ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // If no DB data yet, init from defaults
  if (!localStorage.getItem('boa_users')) DB.saveUsers(DEMO_USERS);
});
