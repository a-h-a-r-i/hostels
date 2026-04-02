/* USER PORTAL JS */

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

const ME = {
  name:"Rahul Sharma", room:"R101", phone:"9876543210",
  joinDate:"2025-01-10", rent:5000, payStatus:"due",
  avatar:"RS", roomType:"Single", beds:1, floor:"1st Floor"
};
const MY_PAYMENTS = [
  {id:1,amount:5000,date:"2026-02-01",method:"UPI"},
  {id:2,amount:5000,date:"2026-01-01",method:"Cash"},
  {id:3,amount:5000,date:"2025-12-01",method:"UPI"}
];
const MY_COMPLAINTS = [
  {id:1,title:"AC Not Cooling",desc:"AC not cooling properly since last week.",date:"2026-03-20",status:"resolved"},
  {id:2,title:"WiFi Slow",desc:"Internet speed is very slow in my room.",date:"2026-03-28",status:"open"}
];
const NOTICES = [
  {id:1,title:"Water Supply Shutdown",body:"Water supply will be off on 2nd April from 10am-2pm for maintenance.",date:"2026-03-30",type:"warn"},
  {id:2,title:"Rent Due Reminder",body:"Please pay your April rent by 5th April to avoid late fees.",date:"2026-03-29",type:"pay"},
  {id:3,title:"New WiFi Password",body:"WiFi password has been updated. Contact reception for the new password.",date:"2026-03-25",type:"ok"}
];

const fmt = n => "Rs." + Number(n).toLocaleString("en-IN");
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

function doUserLogin() {
  var u = document.getElementById("loginUser").value.trim();
  var p = document.getElementById("loginPass").value.trim();
  if (!u || !p) { alert("Enter your name/phone and password."); return; }
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("appShell").style.display = "block";
  var av = document.getElementById("userAvatar");
  if (av) av.textContent = u.slice(0,2).toUpperCase();
  navigate("home");
}

function doLogout() {
  document.getElementById("appShell").style.display = "none";
  document.getElementById("loginScreen").style.display = "block";
  document.getElementById("loginUser").value = "";
  document.getElementById("loginPass").value = "";
  toggleSidebar(false);
}

var pageTitles = {
  home:"My Home", myroom:"My Room", myrent:"Rent & Payments",
  mycomplaints:"My Complaints", notices:"Notices", myprofile:"My Profile"
};

function navigate(page) {
  document.getElementById("pageTitle").textContent = pageTitles[page] || page;
  document.querySelectorAll(".nav-item").forEach(function(el){ el.classList.remove("active"); });
  var nav = document.querySelector(".nav-item[onclick=\"navigate('" + page + "')\"]");
  if (nav) nav.classList.add("active");
  document.querySelectorAll(".bnav-item").forEach(function(el){ el.classList.remove("active"); });
  var bn = document.getElementById("bn-" + page);
  if (bn) bn.classList.add("active");
  toggleSidebar(false);
  var main = document.getElementById("mainContent");
  main.innerHTML = "";
  if (pages[page]) pages[page](main);
  else main.innerHTML = "<div class='empty-state'><i class='fa-solid fa-hammer'></i><p>Coming soon</p></div>";
}

function toggleSidebar(force) {
  var sb = document.getElementById("sidebar");
  var ov = document.getElementById("sidebarOverlay");
  var open = force !== undefined ? force : !sb.classList.contains("open");
  sb.classList.toggle("open", open);
  ov.classList.toggle("open", open);
}

function showNotifications() {
  document.getElementById("notifOverlay").classList.add("open");
  document.getElementById("notifPanel").classList.add("open");
}
function closeNotif() {
  document.getElementById("notifOverlay").classList.remove("open");
  document.getElementById("notifPanel").classList.remove("open");
}
function openModal(title, html) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalBody").innerHTML = html;
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("modal").classList.add("open");
}
function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.getElementById("modal").classList.remove("open");
}

var pages = {};

pages.home = function(el) {
  var dueAmt = ME.payStatus === "due" ? ME.rent : 0;
  var html = "";
  html += "<div class='user-welcome-card'>";
  html += "<div class='uwc-left'><div class='uwc-avatar'>" + ME.avatar + "</div>";
  html += "<div><div class='uwc-name'>Hi, " + ME.name.split(" ")[0] + " &#128075;</div>";
  html += "<div class='uwc-room'>Room " + ME.room + " &bull; " + ME.roomType + " &bull; " + ME.floor + "</div></div></div>";
  html += "<span class='badge-pill " + ME.payStatus + "'>" + ME.payStatus + "</span></div>";

  if (dueAmt > 0) {
    html += "<div class='due-alert'><div class='due-alert-left'><i class='fa-solid fa-circle-exclamation'></i>";
    html += "<div><div style='font-weight:700'>Rent Due</div><div style='font-size:12px;opacity:.85;margin-top:2px'>" + fmt(dueAmt) + " for April 2026</div></div></div>";
    html += "<button class='btn-pay-now' onclick='navigate(\"myrent\")'>Pay Now</button></div>";
  } else {
    html += "<div class='paid-alert'><i class='fa-solid fa-circle-check'></i><span>Rent paid for this month</span></div>";
  }

  html += "<div class='stats-grid'>";
  html += "<div class='stat-card' onclick='navigate(\"myrent\")' style='cursor:pointer'><div class='stat-icon amber'><i class='fa-solid fa-indian-rupee-sign'></i></div><div class='stat-value' style='font-size:18px'>" + fmt(ME.rent) + "</div><div class='stat-label'>Monthly Rent</div></div>";
  var openCount = MY_COMPLAINTS.filter(function(c){ return c.status==="open"; }).length;
  html += "<div class='stat-card' onclick='navigate(\"mycomplaints\")' style='cursor:pointer'><div class='stat-icon red'><i class='fa-solid fa-triangle-exclamation'></i></div><div class='stat-value'>" + openCount + "</div><div class='stat-label'>Open Issues</div></div>";
  html += "</div>";

  html += "<div class='section-header'><div class='section-title'>Recent Notices</div><button class='btn-sm' onclick='navigate(\"notices\")'>View All</button></div>";
  NOTICES.slice(0,2).forEach(function(n) {
    var icon = n.type==="warn"?"triangle-exclamation":n.type==="pay"?"indian-rupee-sign":"circle-check";
    html += "<div class='notice-card " + n.type + "'><div class='notice-icon " + n.type + "'><i class='fa-solid fa-" + icon + "'></i></div><div class='notice-body'><div class='notice-title'>" + n.title + "</div><div class='notice-date'>" + n.date + "</div></div></div>";
  });

  html += "<div class='section-header' style='margin-top:8px'><div class='section-title'>My Complaints</div><button class='btn-sm' onclick='navigate(\"mycomplaints\")'>View All</button></div>";
  MY_COMPLAINTS.slice(0,2).forEach(function(c) {
    html += "<div class='complaint-card " + c.status + "'><div class='cc-top'><div><div class='cc-title'>" + c.title + "</div><div class='cc-room'>" + c.date + "</div></div><span class='badge-pill " + c.status + "'>" + cap(c.status) + "</span></div><div class='cc-desc'>" + c.desc + "</div></div>";
  });

  el.innerHTML = html;
};

pages.myroom = function(el) {
  el.innerHTML = "<div class='room-detail-hero'><div class='rdh-num'>Room " + ME.room + "</div><div class='rdh-type'>" + ME.roomType + " Room &bull; " + ME.floor + "</div></div>" +
  "<div class='stats-grid'><div class='stat-card'><div class='stat-icon blue'><i class='fa-solid fa-bed'></i></div><div class='stat-value'>" + ME.beds + "</div><div class='stat-label'>Beds</div></div>" +
  "<div class='stat-card'><div class='stat-icon green'><i class='fa-solid fa-indian-rupee-sign'></i></div><div class='stat-value' style='font-size:18px'>" + fmt(ME.rent) + "</div><div class='stat-label'>Rent/Month</div></div></div>" +
  "<div class='card'><div class='card-title'>Stay Details</div><div style='display:flex;flex-direction:column;gap:12px'>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Phone</span><span style='font-weight:700'>" + ME.phone + "</span></div>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Check-in</span><span style='font-weight:700'>" + ME.joinDate + "</span></div>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Status</span><span class='badge-pill " + ME.payStatus + "'>" + ME.payStatus + "</span></div>" +
  "</div></div>";
};

pages.myrent = function(el) {
  var color = ME.payStatus==="due" ? "var(--red)" : "var(--green)";
  var iconClass = ME.payStatus==="due" ? "red" : "green";
  var label = ME.payStatus==="due" ? "Due for April 2026" : "Paid for April 2026";
  var html = "<div class='stat-card' style='margin-bottom:14px;flex-direction:row;align-items:center;gap:14px;border-left:3px solid " + color + "'>";
  html += "<div class='stat-icon " + iconClass + "'><i class='fa-solid fa-indian-rupee-sign'></i></div>";
  html += "<div style='flex:1'><div class='stat-value' style='font-size:20px'>" + fmt(ME.rent) + "</div><div class='stat-label'>" + label + "</div></div>";
  if (ME.payStatus==="due") html += "<button class='btn-pay-now' onclick='showPayModal()'>Pay Now</button>";
  html += "</div><div class='section-header'><div class='section-title'>Payment History</div></div>";
  MY_PAYMENTS.forEach(function(p) {
    html += "<div class='pay-item'><div class='pay-dot in'><i class='fa-solid fa-check'></i></div><div class='pay-body'><div class='pay-name'>Rent Paid - " + p.method + "</div><div class='pay-meta'>" + p.date + "</div></div><div class='pay-amt in'>" + fmt(p.amount) + "</div></div>";
  });
  el.innerHTML = html;
};

window.showPayModal = function() {
  openModal("Pay Rent", "<div style='text-align:center;padding:10px 0 20px'><div style='font-size:32px;font-weight:800;color:var(--blue)'>" + fmt(ME.rent) + "</div><div style='color:var(--text3);margin-top:4px'>April 2026 Rent</div></div><label>Payment Method</label><select id='pay-method'><option>UPI</option><option>Cash</option><option>Bank Transfer</option></select><label>Reference</label><input id='pay-ref' placeholder='UPI ID or reference' /><div class='modal-actions'><button class='btn-sm outline' onclick='closeModal()'>Cancel</button><button class='btn-primary' onclick='confirmPay()'>Confirm</button></div>");
};
window.confirmPay = function() {
  ME.payStatus = "paid";
  MY_PAYMENTS.unshift({id:Date.now(),amount:ME.rent,date:new Date().toISOString().slice(0,10),method:document.getElementById("pay-method").value});
  closeModal(); navigate("myrent");
};

pages.mycomplaints = function(el) {
  var html = "<div class='section-header'><div class='section-title'>My Complaints</div><button class='btn-sm' onclick='showAddComplaint()'><i class='fa-solid fa-plus'></i> Raise</button></div>";
  if (MY_COMPLAINTS.length === 0) { html += "<div class='empty-state'><i class='fa-solid fa-circle-check'></i><p>No complaints raised</p></div>"; }
  else { MY_COMPLAINTS.forEach(function(c){ html += "<div class='complaint-card " + c.status + "'><div class='cc-top'><div><div class='cc-title'>" + c.title + "</div><div class='cc-room'>" + c.date + "</div></div><span class='badge-pill " + c.status + "'>" + cap(c.status) + "</span></div><div class='cc-desc'>" + c.desc + "</div></div>"; }); }
  el.innerHTML = html;
};
window.showAddComplaint = function() {
  openModal("Raise Complaint", "<label>Issue Title</label><input id='nc-title' placeholder='Brief title' /><label>Description</label><textarea id='nc-desc' placeholder='Describe the issue...'></textarea><div class='modal-actions'><button class='btn-sm outline' onclick='closeModal()'>Cancel</button><button class='btn-primary' onclick='saveComplaint()'>Submit</button></div>");
};
window.saveComplaint = function() {
  var title = document.getElementById("nc-title").value.trim();
  var desc = document.getElementById("nc-desc").value.trim();
  if (!title) { alert("Enter a title"); return; }
  MY_COMPLAINTS.unshift({id:Date.now(),title:title,desc:desc,date:new Date().toISOString().slice(0,10),status:"open"});
  closeModal(); navigate("mycomplaints");
};

pages.notices = function(el) {
  var html = "<div class='section-title' style='margin-bottom:12px'>All Notices</div>";
  NOTICES.forEach(function(n) {
    var icon = n.type==="warn"?"triangle-exclamation":n.type==="pay"?"indian-rupee-sign":"circle-check";
    html += "<div class='notice-card-full " + n.type + "'><div style='display:flex;align-items:center;gap:10px;margin-bottom:8px'><div class='notice-icon " + n.type + "'><i class='fa-solid fa-" + icon + "'></i></div><div><div class='notice-title'>" + n.title + "</div><div class='notice-date'>" + n.date + "</div></div></div><div style='font-size:13px;color:var(--text2);line-height:1.6'>" + n.body + "</div></div>";
  });
  el.innerHTML = html;
};

pages.myprofile = function(el) {
  el.innerHTML = "<div class='profile-hero'><div class='profile-av'>" + ME.avatar + "</div><div class='profile-name'>" + ME.name + "</div><div class='profile-role'>Tenant &bull; Room " + ME.room + "</div></div>" +
  "<div class='card'><div class='card-title'>My Details</div><div style='display:flex;flex-direction:column;gap:12px'>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Phone</span><span style='font-weight:700'>" + ME.phone + "</span></div>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Room</span><span style='font-weight:700'>" + ME.room + " (" + ME.roomType + ")</span></div>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Check-in</span><span style='font-weight:700'>" + ME.joinDate + "</span></div>" +
  "<div style='display:flex;justify-content:space-between;font-size:14px'><span style='color:var(--text3)'>Monthly Rent</span><span style='font-weight:700'>" + fmt(ME.rent) + "</span></div>" +
  "</div></div>" +
  "<button onclick='doLogout()' style='width:100%;padding:12px;border-radius:6px;border:1.5px solid #e0e0e0;color:#c0392b;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px;cursor:pointer;background:#fff'><i class='fa-solid fa-right-from-bracket'></i> Logout</button>";
};

document.addEventListener("keydown", function(e) { if (e.key === "Escape") { closeModal(); closeNotif(); } });
document.getElementById("loginPass").addEventListener("keydown", function(e) { if (e.key === "Enter") doUserLogin(); });