# Bank of America — HTML/CSS/JS Demo

A pixel-perfect, fully interactive Bank of America clone built with
**pure HTML, CSS, and JavaScript** — no frameworks, no build step, no server needed.
Deploy straight to **Vercel**, **GitHub Pages**, or open locally.

---

## 📁 File Structure

```
boa-demo/
├── index.html                 ← Homepage (BoA clone)
├── login.html                 ← Sign-in page
├── dashboard.html             ← Customer account overview
├── transfer.html              ← Transfer money (3-step flow)
├── activity.html              ← Full transaction history
├── admin-dashboard.html       ← Admin overview
├── admin-customers.html       ← Admin customer list
├── admin-edit-customer.html   ← Admin edit customer + transactions
├── admin-transactions.html    ← Admin all transactions ledger
├── css/
│   └── style.css              ← Shared styles
├── js/
│   └── shared.js              ← Shared JS, demo data, auth, DB
├── vercel.json                ← Vercel routing config
└── README.md
```

---

## 🚀 Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Other** (static site)
4. Root directory: leave as-is (or the folder if nested)
5. Click **Deploy** — done in ~30 seconds ✅

---

## 🖥️ Run Locally

Just open `index.html` in any browser — no server needed.

For a proper local server (avoids CORS quirks):
```bash
# Python
python -m http.server 3000

# Node
npx serve .

# VS Code
Install "Live Server" extension → right-click index.html → Open with Live Server
```

Then visit: `http://localhost:3000`

---

## 🔐 Demo Accounts

| Name             | Email                         | Password   | PIN  | Role     |
|------------------|-------------------------------|------------|------|----------|
| **Admin**        | admin@bankofamerica.com       | password   | —    | Admin    |
| James Wilson     | james.wilson@email.com        | password   | 1234 | Customer |
| Sarah Johnson    | sarah.johnson@email.com       | password   | 2345 | Customer |
| Michael Chen     | michael.chen@email.com        | password   | 3456 | Customer |
| Emily Davis      | emily.davis@email.com         | password   | 4567 | Customer |
| Robert Martinez  | robert.martinez@email.com     | password   | 5678 | Customer |
| Jennifer Lee     | jennifer.lee@email.com        | password   | 6789 | Customer |

> On the login page, click **Fill** next to any row to auto-fill credentials.

---

## ✨ Features

### Homepage
- Full BoA homepage clone — hero, products grid, benefits, news, connect strip
- Inline sign-in widget with live login

### Authentication
- Role-based login (customer → dashboard, admin → admin panel)
- Session stored in `sessionStorage` (clears on tab close)
- Account deactivation check on login

### Customer Dashboard
- Real-time balance display (updates after transfers)
- Recent 5 transactions with icons, amounts, status
- Account meta (masked number, routing, member since)
- PIN change with 4-box animated input

### Transfer Flow (3 steps)
- Step 1: Enter recipient name, account, amount, memo
- Step 2: Review summary + 4-digit PIN authorization
- Step 3: Success page with receipt + confetti + print button

### Activity Page
- Full transaction history with pagination
- Filter by type (credit/debit), category, free-text search
- Summary stats: total credits, debits, count, pending

### Admin Panel
- **Dashboard**: stat cards, recent customers, recent transactions
- **Customers**: searchable/filterable table, activate/deactivate
- **Edit Customer**: full profile form, real-time balance editor, add/delete transactions (max 13)
- **All Transactions**: system-wide ledger, filter, delete with balance reversal

### Data Persistence
- All changes saved to `localStorage` — survives page refresh
- Reset anytime by calling `DB.reset()` in browser console

---

## 🛠️ Tech Stack

| Layer  | Technology |
|--------|-----------|
| Markup | Semantic HTML5 |
| Styles | Pure CSS3 with CSS Variables |
| Logic  | Vanilla JavaScript (ES6+) |
| Fonts  | Google Fonts (Merriweather + Source Sans 3) |
| Deploy | Vercel (static) |

No npm, no webpack, no React — just files. 🎉
