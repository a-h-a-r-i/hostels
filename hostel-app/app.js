/* ===== SPLASH ===== */
(function() {
  window.addEventListener('DOMContentLoaded', function() {
    var splash = document.getElementById('splashScreen');
    var login  = document.getElementById('loginScreen');
    if (!splash || !login) return;
    setTimeout(function() {
      splash.classList.add('hide');
      setTimeout(function() {
        splash.style.display = 'none';
        login.style.display  = 'block';
      }, 450);
    }, 1800);
  });
})();

/* ===== DATA ===== */
const DB = {
  rooms: [
    { id:'R101', type:'Single', beds:1, occupied:1, rent:5000, status:'occupied' },
    { id:'R102', type:'Double', beds:2, occupied:1, rent:4500, status:'partial' },
    { id:'R103', type:'Triple', beds:3, occupied:0, rent:4000, status:'vacant' },
    { id:'R201', type:'Double', beds:2, occupied:2, rent:4500, status:'occupied' },
    { id:'R202', type:'Single', beds:1, occupied:0, rent:5000, status:'maintenance' },
    { id:'R203', type:'Triple', beds:3, occupied:2, rent:4000, status:'partial' },
    { id:'R301', type:'Single', beds:1, occupied:1, rent:5500, status:'occupied' },
    { id:'R302', type:'Double', beds:2, occupied:0, rent:4800, status:'vacant' },
    { id:'R305', type:'Triple', beds:3, occupied:3, rent:4200, status:'occupied' },
  ],
  tenants: [
    { id:1,  name:'Rahul Sharma', room:'R101', phone:'9876543210', joinDate:'2025-01-10', rent:5000, payStatus:'due',     avatar:'RS' },
    { id:2,  name:'Priya Patel',  room:'R305', phone:'9123456780', joinDate:'2025-03-01', rent:4200, payStatus:'paid',    avatar:'PP' },
    { id:3,  name:'Amit Kumar',   room:'R201', phone:'9988776655', joinDate:'2024-11-15', rent:4500, payStatus:'paid',    avatar:'AK' },
    { id:4,  name:'Sneha Reddy',  room:'R203', phone:'9871234560', joinDate:'2025-02-20', rent:4000, payStatus:'partial', avatar:'SR' },
    { id:5,  name:'Vikram Singh', room:'R201', phone:'9765432100', joinDate:'2025-01-05', rent:4500, payStatus:'paid',    avatar:'VS' },
    { id:6,  name:'Neha Gupta',   room:'R102', phone:'9654321098', joinDate:'2025-03-15', rent:4500, payStatus:'due',     avatar:'NG' },
    { id:7,  name:'Rohan Mehta',  room:'R301', phone:'9543210987', joinDate:'2024-12-01', rent:5500, payStatus:'paid',    avatar:'RM' },
    { id:8,  name:'Kavya Nair',   room:'R203', phone:'9432109876', joinDate:'2025-02-10', rent:4000, payStatus:'paid',    avatar:'KN' },
    { id:9,  name:'Arjun Das',    room:'R305', phone:'9321098765', joinDate:'2025-03-20', rent:4200, payStatus:'due',     avatar:'AD' },
    { id:10, name:'Divya Joshi',  room:'R305', phone:'9210987654', joinDate:'2025-03-25', rent:4200, payStatus:'paid',    avatar:'DJ' },
  ],
  payments: [
    { id:1, tenant:'Priya Patel',   room:'R305', amount:4200, date:'2026-03-01', type:'in',  method:'UPI' },
    { id:2, tenant:'Amit Kumar',    room:'R201', amount:4500, date:'2026-03-02', type:'in',  method:'Cash' },
    { id:3, tenant:'Vikram Singh',  room:'R201', amount:4500, date:'2026-03-03', type:'in',  method:'Bank Transfer' },
    { id:4, tenant:'Rohan Mehta',   room:'R301', amount:5500, date:'2026-03-05', type:'in',  method:'UPI' },
    { id:5, tenant:'Kavya Nair',    room:'R203', amount:4000, date:'2026-03-07', type:'in',  method:'Cash' },
    { id:6, tenant:'Divya Joshi',   room:'R305', amount:4200, date:'2026-03-10', type:'in',  method:'UPI' },
    { id:7, name:'Electricity Bill',room:'',     amount:3200, date:'2026-03-12', type:'out', method:'Bank Transfer' },
    { id:8, name:'Water Bill',      room:'',     amount:800,  date:'2026-03-15', type:'out', method:'Cash' },
    { id:9, tenant:'Sneha Reddy',   room:'R203', amount:2000, date:'2026-03-18', type:'in',  method:'UPI' },
  ],
  complaints: [
    { id:1, title:'WiFi Not Working',   room:'R203', desc:'Internet has been down since yesterday evening.', date:'2026-03-28', status:'open' },
    { id:2, title:'Leaking Tap',        room:'R102', desc:'Bathroom tap is leaking continuously.',           date:'2026-03-25', status:'progress' },
    { id:3, title:'AC Not Cooling',     room:'R301', desc:'Air conditioner is not cooling properly.',        date:'2026-03-20', status:'resolved' },
    { id:4, title:'Broken Window Lock', room:'R201', desc:'Window lock is broken, security concern.',        date:'2026-03-29', status:'open' },
    { id:5, title:'Noisy Neighbours',   room:'R103', desc:'Loud noise from adjacent room at night.',         date:'2026-03-27', status:'progress' },
  ],
  expenses: [
    { id:1, name:'Electricity Bill', category:'utility',  amount:3200, date:'2026-03-12', icon:'fa-bolt' },
    { id:2, name:'Water Bill',       category:'utility',  amount:800,  date:'2026-03-15', icon:'fa-droplet' },
    { id:3, name:'Plumber Repair',   category:'repair',   amount:1500, date:'2026-03-18', icon:'fa-wrench' },
    { id:4, name:'Cleaning Supplies',category:'supplies', amount:600,  date:'2026-03-20', icon:'fa-broom' },
    { id:5, name:'Internet Bill',    category:'utility',  amount:1200, date:'2026-03-22', icon:'fa-wifi' },
    { id:6, name:'Pest Control',     category:'repair',   amount:2000, date:'2026-03-25', icon:'fa-bug' },
  ],
  staff: [
    { id:1, name:'Ramesh Kumar', role:'Caretaker', phone:'9876501234', salary:12000, avatar:'RK' },
    { id:2, name:'Sunita Devi',  role:'Cleaner',   phone:'9765401234', salary:8000,  avatar:'SD' },
    { id:3, name:'Mohan Lal',    role:'Security',  phone:'9654301234', salary:10000, avatar:'ML' },
    { id:4, name:'Geeta Bai',    role:'Cook',      phone:'9543201234', salary:9000,  avatar:'GB' },
  ],
  settings: { hostelName:'HostelPro', ownerName:'Owner', phone:'9999999999', address:'123, Main Street, City', rentReminder:true, smsAlerts:false }
};

/* ===== STATE ===== */
let currentUser = { name:'Owner', initials:'OP' };

/* ===== HELPERS ===== */
const fmt = n => '₹' + Number(n).toLocaleString('en-IN');
const ini = name => name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase();
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const statusLabel = s => s === 'progress' ? 'In Progress' : cap(s);

/* ===== AUTH ===== */
function doAdminLogin() {
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();
  if (!u || !p) { alert('Enter admin username and password.'); return; }
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appShell').style.display = 'block';
  currentUser = { name: u, initials: u.slice(0,2).toUpperCase() };
  const av = document.querySelector('.avatar');
  if (av) av.textContent = currentUser.initials;
  navigate('dashboard');
}
function doLogout() {
  document.getElementById('appShell').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'block';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  toggleSidebar(false);
}

/* ===== NAVIGATION ===== */
const pageTitles = {
  dashboard:'Dashboard', rooms:'Rooms & Beds', tenants:'Tenants',
  payments:'Payments', complaints:'Complaints', expenses:'Expenses',
  staff:'Staff', reports:'Reports', settings:'Settings', profile:'Profile'
};
function navigate(page) {
  document.getElementById('pageTitle').textContent = pageTitles[page] || page;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const nav = document.querySelector(`.nav-item[onclick="navigate('${page}')"]`);
  if (nav) nav.classList.add('active');
  document.querySelectorAll('.bnav-item').forEach(el => el.classList.remove('active'));
  const bn = document.getElementById(`bn-${page}`);
  if (bn) bn.classList.add('active');
  toggleSidebar(false);
  const main = document.getElementById('mainContent');
  main.innerHTML = '';
  if (pages[page]) pages[page](main);
  else main.innerHTML = `<div class="empty-state"><i class="fa-solid fa-hammer"></i><p>${pageTitles[page] || page} — coming soon</p></div>`;
}

/* ===== SIDEBAR ===== */
function toggleSidebar(force) {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebarOverlay');
  const open = force !== undefined ? force : !sb.classList.contains('open');
  sb.classList.toggle('open', open);
  ov.classList.toggle('open', open);
}

/* ===== NOTIFICATIONS ===== */
function showNotifications() {
  document.getElementById('notifOverlay').classList.add('open');
  document.getElementById('notifPanel').classList.add('open');
}
function closeNotif() {
  document.getElementById('notifOverlay').classList.remove('open');
  document.getElementById('notifPanel').classList.remove('open');
}

/* ===== MODAL ===== */
function openModal(title, html) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modal').classList.add('open');
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('modal').classList.remove('open');
}

function showProfile() { navigate('profile'); }

/* ===== PAGES ===== */
const pages = {};

/* --- DASHBOARD --- */
pages.dashboard = function(el) {
  const totalRooms   = DB.rooms.length;
  const occupied     = DB.rooms.filter(r => r.status === 'occupied').length;
  const vacant       = DB.rooms.filter(r => r.status === 'vacant').length;
  const partial      = DB.rooms.filter(r => r.status === 'partial').length;
  const maintenance  = DB.rooms.filter(r => r.status === 'maintenance').length;
  const totalTenants = DB.tenants.length;
  const dueList      = DB.tenants.filter(t => t.payStatus !== 'paid');
  const monthIncome  = DB.payments.filter(p => p.type === 'in').reduce((s,p) => s+p.amount, 0);
  const openIssues   = DB.complaints.filter(c => c.status === 'open').length;
  const occRate      = Math.round((occupied / totalRooms) * 100);

  el.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon blue"><i class="fa-solid fa-door-open"></i></div>
        <div class="stat-value">${totalRooms}</div>
        <div class="stat-label">Total Rooms</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green"><i class="fa-solid fa-users"></i></div>
        <div class="stat-value">${totalTenants}</div>
        <div class="stat-label">Tenants</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber"><i class="fa-solid fa-indian-rupee-sign"></i></div>
        <div class="stat-value" style="font-size:17px">${fmt(monthIncome)}</div>
        <div class="stat-label">This Month</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red"><i class="fa-solid fa-triangle-exclamation"></i></div>
        <div class="stat-value">${openIssues}</div>
        <div class="stat-label">Open Issues</div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Occupancy Overview</div>
      <div class="occ-grid">
        <div class="occ-cell"><div class="occ-num" style="color:var(--green)">${occupied}</div><div class="occ-label">Occupied</div></div>
        <div class="occ-cell"><div class="occ-num" style="color:var(--blue)">${vacant}</div><div class="occ-label">Vacant</div></div>
        <div class="occ-cell"><div class="occ-num" style="color:var(--amber)">${partial}</div><div class="occ-label">Partial</div></div>
        <div class="occ-cell"><div class="occ-num" style="color:var(--red)">${maintenance}</div><div class="occ-label">Repair</div></div>
      </div>
      <div class="bar-row" style="margin-bottom:0">
        <div class="bar-label"><span>Occupancy Rate</span><span>${occRate}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${occRate}%"></div></div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">Rent Due (${dueList.length})</div>
      <button class="btn-sm" onclick="navigate('payments')">View All</button>
    </div>
    ${dueList.map(t => `
      <div class="list-item" onclick="showTenantDetail(${t.id})">
        <div class="li-avatar">${t.avatar}</div>
        <div class="li-body">
          <div class="li-name">${t.name}</div>
          <div class="li-sub">Room ${t.room} &bull; ${fmt(t.rent)}/mo</div>
        </div>
        <span class="badge-pill ${t.payStatus}">${t.payStatus}</span>
      </div>`).join('')}

    <div class="section-header" style="margin-top:8px">
      <div class="section-title">Recent Complaints</div>
      <button class="btn-sm" onclick="navigate('complaints')">View All</button>
    </div>
    ${DB.complaints.filter(c => c.status !== 'resolved').slice(0,3).map(c => `
      <div class="complaint-card ${c.status}">
        <div class="cc-top">
          <div><div class="cc-title">${c.title}</div><div class="cc-room">Room ${c.room}</div></div>
          <span class="badge-pill ${c.status}">${statusLabel(c.status)}</span>
        </div>
        <div class="cc-desc">${c.desc}</div>
      </div>`).join('')}
  `;
};

/* --- ROOMS --- */
pages.rooms = function(el) {
  let filter = 'all';
  const render = () => {
    const list = filter === 'all' ? DB.rooms : DB.rooms.filter(r => r.status === filter);
    el.innerHTML = `
      <div class="section-header">
        <div class="section-title">${DB.rooms.length} Rooms</div>
        <button class="btn-sm" onclick="showAddRoom()"><i class="fa-solid fa-plus"></i> Add Room</button>
      </div>
      <div class="filter-tabs">
        ${['all','occupied','partial','vacant','maintenance'].map(s =>
          `<button class="filter-tab ${filter===s?'active':''}" onclick="roomFilter('${s}')">${cap(s)}</button>`
        ).join('')}
      </div>
      <div class="room-grid">
        ${list.map(r => `
          <div class="room-card ${r.status}" onclick="showRoomDetail('${r.id}')">
            <div class="room-num">${r.id}</div>
            <div class="room-type">${r.type}</div>
            <div class="room-beds"><i class="fa-solid fa-bed"></i> ${r.occupied}/${r.beds} beds</div>
            <span class="room-status ${r.status}">${cap(r.status)}</span>
            <div class="room-rent">${fmt(r.rent)}/bed</div>
          </div>`).join('')}
      </div>`;
  };
  window.roomFilter = s => { filter = s; render(); };
  render();
};

window.showRoomDetail = function(id) {
  const r = DB.rooms.find(x => x.id === id);
  const tenants = DB.tenants.filter(t => t.room === id);
  openModal(`Room ${r.id} — ${r.type}`, `
    <div class="stats-grid" style="margin-bottom:16px">
      <div class="stat-card" style="margin:0"><div class="stat-label">Beds</div><div class="stat-value">${r.beds}</div></div>
      <div class="stat-card" style="margin:0"><div class="stat-label">Occupied</div><div class="stat-value">${r.occupied}</div></div>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Tenants</div>
    ${tenants.length ? tenants.map(t => `
      <div class="list-item" style="margin-bottom:8px">
        <div class="li-avatar">${t.avatar}</div>
        <div class="li-body"><div class="li-name">${t.name}</div><div class="li-sub">${t.phone}</div></div>
        <span class="badge-pill ${t.payStatus}">${t.payStatus}</span>
      </div>`).join('') : '<div class="empty-state" style="padding:20px"><i class="fa-solid fa-user-slash"></i><p>No tenants</p></div>'}
    <div class="modal-actions"><button class="btn-primary" onclick="closeModal()">Close</button></div>
  `);
};

window.showAddRoom = function() {
  openModal('Add New Room', `
    <label>Room Number</label><input id="nr-id" placeholder="e.g. R401" />
    <label>Type</label>
    <select id="nr-type"><option>Single</option><option>Double</option><option>Triple</option></select>
    <label>Number of Beds</label><input id="nr-beds" type="number" min="1" max="6" value="1" />
    <label>Rent per Bed (₹)</label><input id="nr-rent" type="number" placeholder="5000" />
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveRoom()">Add Room</button>
    </div>
  `);
};
window.saveRoom = function() {
  const id   = document.getElementById('nr-id').value.trim().toUpperCase();
  const type = document.getElementById('nr-type').value;
  const beds = parseInt(document.getElementById('nr-beds').value) || 1;
  const rent = parseInt(document.getElementById('nr-rent').value) || 0;
  if (!id) { alert('Enter room number'); return; }
  if (DB.rooms.find(r => r.id === id)) { alert('Room already exists'); return; }
  DB.rooms.push({ id, type, beds, occupied:0, rent, status:'vacant' });
  closeModal(); navigate('rooms');
};

/* --- TENANTS --- */
pages.tenants = function(el) {
  let filter = 'all', search = '';
  const render = () => {
    let list = DB.tenants;
    if (filter !== 'all') list = list.filter(t => t.payStatus === filter);
    if (search) list = list.filter(t => t.name.toLowerCase().includes(search) || t.room.toLowerCase().includes(search));
    el.innerHTML = `
      <div class="section-header">
        <div class="section-title">${DB.tenants.length} Tenants</div>
        <button class="btn-sm" onclick="showAddTenant()"><i class="fa-solid fa-plus"></i> Add</button>
      </div>
      <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search name or room..." oninput="tenantSearch(this.value)" value="${search}" />
      </div>
      <div class="filter-tabs">
        ${['all','paid','due','partial'].map(s =>
          `<button class="filter-tab ${filter===s?'active':''}" onclick="tenantFilter('${s}')">${cap(s)}</button>`
        ).join('')}
      </div>
      ${list.length ? list.map(t => `
        <div class="list-item" onclick="showTenantDetail(${t.id})">
          <div class="li-avatar">${t.avatar}</div>
          <div class="li-body">
            <div class="li-name">${t.name}</div>
            <div class="li-sub">Room ${t.room} &bull; Joined ${t.joinDate}</div>
          </div>
          <span class="badge-pill ${t.payStatus}">${t.payStatus}</span>
        </div>`).join('') : '<div class="empty-state"><i class="fa-solid fa-users-slash"></i><p>No tenants found</p></div>'}
    `;
  };
  window.tenantFilter = s => { filter = s; render(); };
  window.tenantSearch = s => { search = s.toLowerCase(); render(); };
  render();
};

window.showTenantDetail = function(id) {
  const t = DB.tenants.find(x => x.id === id);
  const pays = DB.payments.filter(p => p.tenant === t.name);
  openModal(t.name, `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px">
      <div class="li-avatar" style="width:50px;height:50px;font-size:17px;flex-shrink:0">${t.avatar}</div>
      <div>
        <div style="font-weight:800;font-size:15px">${t.name}</div>
        <div style="color:var(--text3);font-size:13px;margin-top:3px">Room ${t.room} &bull; ${t.phone}</div>
        <div style="color:var(--text3);font-size:12px;margin-top:2px">Joined: ${t.joinDate}</div>
      </div>
    </div>
    <div class="stats-grid" style="margin-bottom:16px">
      <div class="stat-card" style="margin:0"><div class="stat-label">Monthly Rent</div><div class="stat-value" style="font-size:18px">${fmt(t.rent)}</div></div>
      <div class="stat-card" style="margin:0"><div class="stat-label">Status</div><div style="margin-top:6px"><span class="badge-pill ${t.payStatus}">${t.payStatus}</span></div></div>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Payment History</div>
    ${pays.length ? pays.map(p => `
      <div class="pay-item" style="margin-bottom:8px">
        <div class="pay-dot in"><i class="fa-solid fa-indian-rupee-sign"></i></div>
        <div class="pay-body"><div class="pay-name">${p.method}</div><div class="pay-meta">${p.date}</div></div>
        <div class="pay-amt in">${fmt(p.amount)}</div>
      </div>`).join('') : '<p style="color:var(--text3);font-size:13px">No payments recorded</p>'}
    <div class="modal-actions">
      <button class="btn-sm danger" onclick="removeTenant(${t.id})">Remove</button>
      <button class="btn-primary" onclick="markPaid(${t.id})">Mark Paid</button>
    </div>
  `);
};

window.markPaid = function(id) {
  const t = DB.tenants.find(x => x.id === id);
  t.payStatus = 'paid';
  DB.payments.unshift({ id:Date.now(), tenant:t.name, room:t.room, amount:t.rent, date:new Date().toISOString().slice(0,10), type:'in', method:'Cash' });
  closeModal(); navigate('tenants');
};
window.removeTenant = function(id) {
  if (!confirm('Remove this tenant?')) return;
  const idx = DB.tenants.findIndex(x => x.id === id);
  const t = DB.tenants[idx];
  const room = DB.rooms.find(r => r.id === t.room);
  if (room && room.occupied > 0) room.occupied--;
  if (room) room.status = room.occupied === 0 ? 'vacant' : room.occupied < room.beds ? 'partial' : 'occupied';
  DB.tenants.splice(idx, 1);
  closeModal(); navigate('tenants');
};
window.showAddTenant = function() {
  const opts = DB.rooms.filter(r => r.occupied < r.beds).map(r => `<option value="${r.id}">${r.id} (${r.type})</option>`).join('');
  openModal('Add Tenant', `
    <label>Full Name</label><input id="nt-name" placeholder="Tenant name" />
    <label>Phone</label><input id="nt-phone" type="tel" placeholder="10-digit number" />
    <label>Room</label><select id="nt-room">${opts}</select>
    <label>Monthly Rent (₹)</label><input id="nt-rent" type="number" placeholder="4500" />
    <label>Join Date</label><input id="nt-date" type="date" value="${new Date().toISOString().slice(0,10)}" />
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveTenant()">Add Tenant</button>
    </div>
  `);
};
window.saveTenant = function() {
  const name  = document.getElementById('nt-name').value.trim();
  const phone = document.getElementById('nt-phone').value.trim();
  const room  = document.getElementById('nt-room').value;
  const rent  = parseInt(document.getElementById('nt-rent').value) || 0;
  const date  = document.getElementById('nt-date').value;
  if (!name || !phone || !room) { alert('Fill all required fields'); return; }
  const r = DB.rooms.find(x => x.id === room);
  r.occupied++;
  r.status = r.occupied >= r.beds ? 'occupied' : 'partial';
  DB.tenants.push({ id:Date.now(), name, room, phone, joinDate:date, rent, payStatus:'due', avatar:ini(name) });
  closeModal(); navigate('tenants');
};

/* --- PAYMENTS --- */
pages.payments = function(el) {
  let filter = 'all';
  const totalIn  = DB.payments.filter(p => p.type==='in').reduce((s,p) => s+p.amount, 0);
  const totalOut = DB.payments.filter(p => p.type==='out').reduce((s,p) => s+p.amount, 0);
  const render = () => {
    const list = filter === 'all' ? DB.payments : DB.payments.filter(p => p.type === filter);
    el.innerHTML = `
      <div class="stats-grid" style="margin-bottom:14px">
        <div class="stat-card">
          <div class="stat-icon green"><i class="fa-solid fa-arrow-down"></i></div>
          <div class="stat-value" style="font-size:17px">${fmt(totalIn)}</div>
          <div class="stat-label">Total Income</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon red"><i class="fa-solid fa-arrow-up"></i></div>
          <div class="stat-value" style="font-size:17px">${fmt(totalOut)}</div>
          <div class="stat-label">Total Expense</div>
        </div>
      </div>
      <div class="section-header">
        <div class="section-title">Transactions</div>
        <button class="btn-sm" onclick="showAddPayment()"><i class="fa-solid fa-plus"></i> Add</button>
      </div>
      <div class="filter-tabs">
        ${[['all','All'],['in','Income'],['out','Expense']].map(([v,l]) =>
          `<button class="filter-tab ${filter===v?'active':''}" onclick="payFilter('${v}')">${l}</button>`
        ).join('')}
      </div>
      ${list.map(p => `
        <div class="pay-item">
          <div class="pay-dot ${p.type}"><i class="fa-solid fa-${p.type==='in'?'arrow-down':'arrow-up'}"></i></div>
          <div class="pay-body">
            <div class="pay-name">${p.tenant || p.name}</div>
            <div class="pay-meta">${p.room ? 'Room '+p.room+' &bull; ':''} ${p.method} &bull; ${p.date}</div>
          </div>
          <div class="pay-amt ${p.type}">${p.type==='in'?'+':'-'}${fmt(p.amount)}</div>
        </div>`).join('')}
    `;
  };
  window.payFilter = s => { filter = s; render(); };
  render();
};

window.showAddPayment = function() {
  openModal('Record Payment', `
    <label>Tenant / Description</label><input id="np-tenant" placeholder="Name or description" />
    <label>Room (optional)</label><input id="np-room" placeholder="e.g. R101" />
    <label>Amount (₹)</label><input id="np-amount" type="number" placeholder="5000" />
    <label>Type</label>
    <select id="np-type"><option value="in">Income (Rent received)</option><option value="out">Expense (Bill paid)</option></select>
    <label>Method</label>
    <select id="np-method"><option>Cash</option><option>UPI</option><option>Bank Transfer</option><option>Cheque</option></select>
    <label>Date</label><input id="np-date" type="date" value="${new Date().toISOString().slice(0,10)}" />
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="savePayment()">Save</button>
    </div>
  `);
};
window.savePayment = function() {
  const tenant = document.getElementById('np-tenant').value.trim();
  const room   = document.getElementById('np-room').value.trim().toUpperCase();
  const amount = parseInt(document.getElementById('np-amount').value) || 0;
  const type   = document.getElementById('np-type').value;
  const method = document.getElementById('np-method').value;
  const date   = document.getElementById('np-date').value;
  if (!tenant || !amount) { alert('Fill required fields'); return; }
  const entry = { id:Date.now(), amount, type, method, date };
  type === 'in' ? (entry.tenant = tenant, entry.room = room) : (entry.name = tenant, entry.room = room);
  DB.payments.unshift(entry);
  if (type === 'in') { const t = DB.tenants.find(x => x.name.toLowerCase()===tenant.toLowerCase()); if(t) t.payStatus='paid'; }
  closeModal(); navigate('payments');
};

/* --- COMPLAINTS --- */
pages.complaints = function(el) {
  let filter = 'all';
  const render = () => {
    const list = filter === 'all' ? DB.complaints : DB.complaints.filter(c => c.status === filter);
    el.innerHTML = `
      <div class="section-header">
        <div class="section-title">${DB.complaints.length} Complaints</div>
        <button class="btn-sm" onclick="showAddComplaint()"><i class="fa-solid fa-plus"></i> Add</button>
      </div>
      <div class="filter-tabs">
        ${[['all','All'],['open','Open'],['progress','In Progress'],['resolved','Resolved']].map(([v,l]) =>
          `<button class="filter-tab ${filter===v?'active':''}" onclick="complaintFilter('${v}')">${l}</button>`
        ).join('')}
      </div>
      ${list.length ? list.map(c => `
        <div class="complaint-card ${c.status}">
          <div class="cc-top">
            <div><div class="cc-title">${c.title}</div><div class="cc-room">Room ${c.room}</div></div>
            <span class="badge-pill ${c.status}">${statusLabel(c.status)}</span>
          </div>
          <div class="cc-desc">${c.desc}</div>
          <div class="cc-foot">
            <span class="cc-date">${c.date}</span>
            <div style="display:flex;gap:6px">
              ${c.status!=='progress' ? `<button class="btn-sm outline" style="font-size:11px;padding:4px 10px" onclick="updateComplaint(${c.id},'progress')">In Progress</button>` : ''}
              ${c.status!=='resolved' ? `<button class="btn-sm success" style="font-size:11px;padding:4px 10px" onclick="updateComplaint(${c.id},'resolved')">Resolve</button>` : ''}
            </div>
          </div>
        </div>`).join('') : '<div class="empty-state"><i class="fa-solid fa-circle-check"></i><p>No complaints here</p></div>'}
    `;
  };
  window.complaintFilter = s => { filter = s; render(); };
  render();
};
window.updateComplaint = function(id, status) {
  DB.complaints.find(x => x.id === id).status = status;
  navigate('complaints');
};
window.showAddComplaint = function() {
  const opts = DB.rooms.map(r => `<option value="${r.id}">${r.id}</option>`).join('');
  openModal('New Complaint', `
    <label>Title</label><input id="nc-title" placeholder="Brief issue title" />
    <label>Room</label><select id="nc-room">${opts}</select>
    <label>Description</label><textarea id="nc-desc" placeholder="Describe the issue..."></textarea>
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveComplaint()">Submit</button>
    </div>
  `);
};
window.saveComplaint = function() {
  const title = document.getElementById('nc-title').value.trim();
  const room  = document.getElementById('nc-room').value;
  const desc  = document.getElementById('nc-desc').value.trim();
  if (!title) { alert('Enter a title'); return; }
  DB.complaints.unshift({ id:Date.now(), title, room, desc, date:new Date().toISOString().slice(0,10), status:'open' });
  closeModal(); navigate('complaints');
};

/* --- EXPENSES --- */
pages.expenses = function(el) {
  const total = DB.expenses.reduce((s,e) => s+e.amount, 0);
  el.innerHTML = `
    <div class="stat-card" style="margin-bottom:14px;flex-direction:row;align-items:center;gap:14px">
      <div class="stat-icon red"><i class="fa-solid fa-receipt"></i></div>
      <div><div class="stat-value">${fmt(total)}</div><div class="stat-label">Total Expenses This Month</div></div>
    </div>
    <div class="section-header">
      <div class="section-title">Expense Log</div>
      <button class="btn-sm" onclick="showAddExpense()"><i class="fa-solid fa-plus"></i> Add</button>
    </div>
    ${DB.expenses.map(e => `
      <div class="expense-item">
        <div class="exp-icon"><i class="fa-solid ${e.icon}"></i></div>
        <div class="exp-body"><div class="exp-name">${e.name}</div><div class="exp-meta">${cap(e.category)} &bull; ${e.date}</div></div>
        <div class="exp-amt">${fmt(e.amount)}</div>
      </div>`).join('')}
  `;
};
window.showAddExpense = function() {
  openModal('Add Expense', `
    <label>Description</label><input id="ne-name" placeholder="e.g. Electricity Bill" />
    <label>Category</label>
    <select id="ne-cat"><option value="utility">Utility</option><option value="repair">Repair</option><option value="supplies">Supplies</option><option value="salary">Salary</option><option value="other">Other</option></select>
    <label>Amount (₹)</label><input id="ne-amount" type="number" placeholder="1000" />
    <label>Date</label><input id="ne-date" type="date" value="${new Date().toISOString().slice(0,10)}" />
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveExpense()">Save</button>
    </div>
  `);
};
window.saveExpense = function() {
  const name   = document.getElementById('ne-name').value.trim();
  const cat    = document.getElementById('ne-cat').value;
  const amount = parseInt(document.getElementById('ne-amount').value) || 0;
  const date   = document.getElementById('ne-date').value;
  if (!name || !amount) { alert('Fill required fields'); return; }
  const icons = { utility:'fa-bolt', repair:'fa-wrench', supplies:'fa-broom', salary:'fa-user-tie', other:'fa-receipt' };
  DB.expenses.unshift({ id:Date.now(), name, category:cat, amount, date, icon:icons[cat] });
  closeModal(); navigate('expenses');
};

/* --- STAFF --- */
pages.staff = function(el) {
  const payroll = DB.staff.reduce((s,x) => s+x.salary, 0);
  el.innerHTML = `
    <div class="stat-card" style="margin-bottom:14px;flex-direction:row;align-items:center;gap:14px">
      <div class="stat-icon blue"><i class="fa-solid fa-user-tie"></i></div>
      <div><div class="stat-value">${DB.staff.length} Staff</div><div class="stat-label">Monthly Payroll: ${fmt(payroll)}</div></div>
    </div>
    <div class="section-header">
      <div class="section-title">Staff Members</div>
      <button class="btn-sm" onclick="showAddStaff()"><i class="fa-solid fa-plus"></i> Add</button>
    </div>
    ${DB.staff.map(s => `
      <div class="list-item">
        <div class="li-avatar staff">${s.avatar}</div>
        <div class="li-body"><div class="li-name">${s.name}</div><div class="li-sub">${s.role} &bull; ${s.phone}</div></div>
        <div style="font-weight:800;color:var(--blue);font-size:13px">${fmt(s.salary)}/mo</div>
      </div>`).join('')}
  `;
};
window.showAddStaff = function() {
  openModal('Add Staff', `
    <label>Full Name</label><input id="ns-name" placeholder="Staff name" />
    <label>Role</label><input id="ns-role" placeholder="e.g. Caretaker" />
    <label>Phone</label><input id="ns-phone" type="tel" placeholder="10-digit number" />
    <label>Monthly Salary (₹)</label><input id="ns-salary" type="number" placeholder="10000" />
    <div class="modal-actions">
      <button class="btn-sm outline" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="saveStaff()">Add</button>
    </div>
  `);
};
window.saveStaff = function() {
  const name   = document.getElementById('ns-name').value.trim();
  const role   = document.getElementById('ns-role').value.trim();
  const phone  = document.getElementById('ns-phone').value.trim();
  const salary = parseInt(document.getElementById('ns-salary').value) || 0;
  if (!name || !role) { alert('Fill required fields'); return; }
  DB.staff.push({ id:Date.now(), name, role, phone, salary, avatar:ini(name) });
  closeModal(); navigate('staff');
};

/* --- REPORTS --- */
pages.reports = function(el) {
  const totalIn  = DB.payments.filter(p=>p.type==='in').reduce((s,p)=>s+p.amount,0);
  const totalOut = DB.expenses.reduce((s,e)=>s+e.amount,0);
  const net      = totalIn - totalOut;
  const occRate  = Math.round((DB.rooms.filter(r=>r.status==='occupied').length/DB.rooms.length)*100);
  const paidRate = Math.round((DB.tenants.filter(t=>t.payStatus==='paid').length/DB.tenants.length)*100);
  const maxAmt   = Math.max(totalIn, totalOut) || 1;

  const catAmts = ['utility','repair','supplies','salary','other'].map(cat => ({
    cat, amt: DB.expenses.filter(e=>e.category===cat).reduce((s,e)=>s+e.amount,0)
  })).filter(x=>x.amt>0);

  el.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon green"><i class="fa-solid fa-arrow-trend-up"></i></div>
        <div class="stat-value" style="font-size:17px">${fmt(totalIn)}</div>
        <div class="stat-label">Total Income</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red"><i class="fa-solid fa-arrow-trend-down"></i></div>
        <div class="stat-value" style="font-size:17px">${fmt(totalOut)}</div>
        <div class="stat-label">Total Expense</div>
      </div>
    </div>
    <div class="card" style="border-left:3px solid ${net>=0?'var(--green)':'var(--red)'}">
      <div class="card-title">Net Profit</div>
      <div style="font-size:26px;font-weight:800;color:${net>=0?'var(--green)':'var(--red)'}">${fmt(Math.abs(net))} ${net>=0?'▲':'▼'}</div>
    </div>
    <div class="card">
      <div class="card-title">Income vs Expense</div>
      <div class="bar-row">
        <div class="bar-label"><span>Income</span><span>${fmt(totalIn)}</span></div>
        <div class="bar-track"><div class="bar-fill green" style="width:${Math.round((totalIn/maxAmt)*100)}%"></div></div>
      </div>
      <div class="bar-row" style="margin-bottom:0">
        <div class="bar-label"><span>Expense</span><span>${fmt(totalOut)}</span></div>
        <div class="bar-track"><div class="bar-fill red" style="width:${Math.round((totalOut/maxAmt)*100)}%"></div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Hostel Health</div>
      <div class="bar-row">
        <div class="bar-label"><span>Occupancy Rate</span><span>${occRate}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${occRate}%"></div></div>
      </div>
      <div class="bar-row" style="margin-bottom:0">
        <div class="bar-label"><span>Rent Collection Rate</span><span>${paidRate}%</span></div>
        <div class="bar-track"><div class="bar-fill amber" style="width:${paidRate}%"></div></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Expense Breakdown</div>
      ${catAmts.map(x => `
        <div class="bar-row">
          <div class="bar-label"><span>${cap(x.cat)}</span><span>${fmt(x.amt)}</span></div>
          <div class="bar-track"><div class="bar-fill" style="width:${Math.round((x.amt/totalOut)*100)}%"></div></div>
        </div>`).join('')}
    </div>
  `;
};

/* --- SETTINGS --- */
pages.settings = function(el) {
  const s = DB.settings;
  el.innerHTML = `
    <div class="card">
      <div class="card-title">Hostel Info</div>
      <label style="font-size:11px;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Hostel Name</label>
      <div class="field-wrap" style="margin-bottom:12px"><i class="fa-solid fa-building"></i><input value="${s.hostelName}" onchange="DB.settings.hostelName=this.value" /></div>
      <label style="font-size:11px;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Owner Name</label>
      <div class="field-wrap" style="margin-bottom:12px"><i class="fa-solid fa-user"></i><input value="${s.ownerName}" onchange="DB.settings.ownerName=this.value" /></div>
      <label style="font-size:11px;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;display:block;margin-bottom:5px">Address</label>
      <div class="field-wrap"><i class="fa-solid fa-location-dot"></i><input value="${s.address}" onchange="DB.settings.address=this.value" /></div>
    </div>
    <div class="setting-row">
      <div><div class="sr-label">Rent Reminders</div><div class="sr-sub">Auto-remind tenants on due date</div></div>
      <div class="toggle ${s.rentReminder?'on':''}" onclick="toggleSetting('rentReminder',this)"></div>
    </div>
    <div class="setting-row">
      <div><div class="sr-label">SMS Alerts</div><div class="sr-sub">Send SMS for payments &amp; complaints</div></div>
      <div class="toggle ${s.smsAlerts?'on':''}" onclick="toggleSetting('smsAlerts',this)"></div>
    </div>
    <div class="setting-row" onclick="navigate('profile')">
      <div><div class="sr-label">My Profile</div><div class="sr-sub">View and edit your profile</div></div>
      <i class="fa-solid fa-chevron-right" style="color:var(--text3)"></i>
    </div>
    <div class="setting-row" onclick="doLogout()" style="color:var(--red)">
      <div><div class="sr-label" style="color:var(--red)">Logout</div><div class="sr-sub">Sign out of HostelPro</div></div>
      <i class="fa-solid fa-right-from-bracket" style="color:var(--red)"></i>
    </div>
  `;
};
window.toggleSetting = function(key, el) {
  DB.settings[key] = !DB.settings[key];
  el.classList.toggle('on', DB.settings[key]);
};

/* --- PROFILE --- */
pages.profile = function(el) {
  const s = DB.settings;
  el.innerHTML = `
    <div class="profile-hero">
      <div class="profile-av">${currentUser.initials}</div>
      <div class="profile-name">${s.ownerName || currentUser.name}</div>
      <div class="profile-role">Hostel Owner &bull; ${s.hostelName}</div>
    </div>
    <div class="card">
      <div class="card-title">Contact Info</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="stat-icon blue" style="flex-shrink:0"><i class="fa-solid fa-phone"></i></div>
          <span style="font-size:14px;color:var(--text)">${s.phone}</span>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <div class="stat-icon blue" style="flex-shrink:0"><i class="fa-solid fa-location-dot"></i></div>
          <span style="font-size:14px;color:var(--text)">${s.address}</span>
        </div>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon blue"><i class="fa-solid fa-door-open"></i></div>
        <div class="stat-value">${DB.rooms.length}</div>
        <div class="stat-label">Rooms Managed</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green"><i class="fa-solid fa-users"></i></div>
        <div class="stat-value">${DB.tenants.length}</div>
        <div class="stat-label">Total Tenants</div>
      </div>
    </div>
  `;
};

/* ===== INIT ===== */
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeNotif(); } });
document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') doAdminLogin(); });
