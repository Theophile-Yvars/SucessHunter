// ===== I18N =====
const I18N = {
  en: { tagline:"— turn your day into levels, XP, and rewards", level:"Level", nextLevel:"Next level in", totalXP:"Total XP", today:"Today", streak:"Streak", thisWeek:"This Week", monSun:"Mon–Sun total", thisMonth:"This Month", calendarMonth:"Calendar month total", quickSettings:"Quick Settings", playerName:"Player name", language:"Language", dailyTarget:"Daily XP Target", coinRate:"Coins per XP (reward economy)", resetToday:"Reset Today", newDay:"⏭ New Day", hardReset:"Hard Reset", export:"Export", import:"Import", quests:"Quests", quest:"Quest", category:"Category", addEditQuest:"Add / Edit Quest", title:"Title", xpReward:"XP Reward", saveQuest:"Save Quest", clear:"Clear", rewardShop:"Reward Shop", shopHelp:"Spend coins you’ve earned to unlock treats.", addReward:"Add Reward", reward:"Reward", cost:"Cost (coins)", add:"Add", categories:"Categories", catHelp:"Create your own categories. The first is the default.", addCategory:"Add Category", historyCalendar:"History & Calendar", prev:"Prev", next:"Next", mon:"Mon", tue:"Tue", wed:"Wed", thu:"Thu", fri:"Fri", sat:"Sat", sun:"Sun", activityLog:"Activity Log", close:"Close", time:"Time", tip:"Tip: Start with a “boss fight” — finish the hardest quest first for momentum.", questHelp:"Add/edit/remove quests. Categories are customizable below.", greatJob:(n)=>`Great job ${n}! Enjoy! 🎉`, dailyGoalMsg:(n)=>`Fantastic job ${n}! You can do anything! ✨` },
  fr: { tagline:"— transformez votre journée en niveaux, XP et récompenses", level:"Niveau", nextLevel:"Prochain niveau dans", totalXP:"XP total", today:"Aujourd'hui", streak:"Série", thisWeek:"Cette semaine", monSun:"Total lun–dim", thisMonth:"Ce mois-ci", calendarMonth:"Total du mois", quickSettings:"Réglages rapides", playerName:"Nom du joueur", language:"Langue", dailyTarget:"Objectif XP quotidien", coinRate:"Pièces par XP (économie des récompenses)", resetToday:"Réinitialiser aujourd'hui", newDay:"⏭ Nouveau jour", hardReset:"Réinitialisation totale", export:"Exporter", import:"Importer", quests:"Quêtes", quest:"Quête", category:"Catégorie", addEditQuest:"Ajouter / Modifier une quête", title:"Titre", xpReward:"Récompense XP", saveQuest:"Enregistrer la quête", clear:"Effacer", rewardShop:"Boutique de récompenses", shopHelp:"Dépensez des pièces gagnées pour débloquer des récompenses.", addReward:"Ajouter une récompense", reward:"Récompense", cost:"Coût (pièces)", add:"Ajouter", categories:"Catégories", catHelp:"Créez vos catégories. La première est par défaut.", addCategory:"Ajouter une catégorie", historyCalendar:"Historique & Calendrier", prev:"Préc.", next:"Suiv.", mon:"Lun", tue:"Mar", wed:"Mer", thu:"Jeu", fri:"Ven", sat:"Sam", sun:"Dim", activityLog:"Journal d'activité", close:"Fermer", time:"Heure", tip:"Astuce : commencez par un « boss » — terminez la tâche la plus difficile pour lancer l'élan.", questHelp:"Ajoutez/modifiez/supprimez des quêtes. Catégories personnalisables ci-dessous.", greatJob:(n)=>`Bravo ${n} ! Profite ! 🎉`, dailyGoalMsg:(n)=>`Fantastique ${n} ! Tu peux tout faire ! ✨` },
  ru: { tagline:"— преврати свой день в уровни, XP и награды", level:"Уровень", nextLevel:"Следующий уровень через", totalXP:"Всего XP", today:"Сегодня", streak:"Серия", thisWeek:"Эта неделя", monSun:"Итого пн–вс", thisMonth:"Этот месяц", calendarMonth:"Итого за месяц", quickSettings:"Быстрые настройки", playerName:"Имя игрока", language:"Язык", dailyTarget:"Дневная цель XP", coinRate:"Монет за XP (экономика наград)", resetToday:"Сбросить сегодня", newDay:"⏭ Новый день", hardReset:"Полный сброс", export:"Экспорт", import:"Импорт", quests:"Задания", quest:"Задание", category:"Категория", addEditQuest:"Добавить / Изменить задание", title:"Название", xpReward:"Награда XP", saveQuest:"Сохранить задание", clear:"Очистить", rewardShop:"Магазин наград", shopHelp:"Тратьте монеты, чтобы получать награды.", addReward:"Добавить награду", reward:"Награда", cost:"Стоимость (монет)", add:"Добавить", categories:"Категории", catHelp:"Создавайте свои категории. Первая — по умолчанию.", addCategory:"Добавить категорию", historyCalendar:"История и календарь", prev:"Назад", next:"Вперёд", mon:"Пн", tue:"Вт", wed:"Ср", thu:"Чт", fri:"Пт", sat:"Сб", sun:"Вс", activityLog:"Журнал активности", close:"Закрыть", time:"Время", tip:"Совет: начни с «босса» — сделай самое сложное задание, чтобы разогнаться.", questHelp:"Добавляй/редактируй/удаляй задания. Категории настраиваются ниже.", greatJob:(n)=>`Отличная работа, ${n}! Наслаждайся! 🎉`, dailyGoalMsg:(n)=>`Фантастика, ${n}! Тебе всё по силам! ✨` },
  az: { tagline:"— gününü səviyyələrə, XP-yə və mükafatlara çevir", level:"Səviyyə", nextLevel:"Növbəti səviyyəyə", totalXP:"Cəmi XP", today:"Bu gün", streak:"Ardıcıl gün", thisWeek:"Bu həftə", monSun:"B.e–B total", thisMonth:"Bu ay", calendarMonth:"Ay üzrə cəm", quickSettings:"Sürətli tənzimləmələr", playerName:"Oyunçunun adı", language:"Dil", dailyTarget:"Gündəlik XP hədəfi", coinRate:"XP üçün sikkə (mükafat iqtisadiyyatı)", resetToday:"Bu günü sıfırla", newDay:"⏭ Yeni gün", hardReset:"Tam sıfırlama", export:"Eksport", import:"Import", quests:"Tapşırıqlar", quest:"Tapşırıq", category:"Kateqoriya", addEditQuest:"Tapşırıq əlavə/rediaktə et", title:"Başlıq", xpReward:"XP mükafatı", saveQuest:"Tapşırığı saxla", clear:"Təmizlə", rewardShop:"Mükafat mağazası", shopHelp:"Qazandığın sikkələri mükafata xərclə.", addReward:"Mükafat əlavə et", reward:"Mükafat", cost:"Dəyər (sikkə)", add:"Əlavə et", categories:"Kateqoriyalar", catHelp:"Öz kateqoriyalarını yarat. Birincisi standartdır.", addCategory:"Kateqoriya əlavə et", historyCalendar:"Tarixçə və Təqvim", prev:"Əvvəlki", next:"Növbəti", mon:"B.e", tue:"Ç.a", wed:"Ç", thu:"C.a", fri:"C", sat:"Ş", sun:"B", activityLog:"Fəaliyyət jurnalı", close:"Bağla", time:"Saat", tip:"Məsləhət: “bosstan” başla — ən çətin tapşırığı əvvəl et ki, güc yığasan.", questHelp:"Tapşırıqları əlavə et/dəyiş/sil. Kateqoriyalar aşağıda.", greatJob:(n)=>`Əla iş, ${n}! Zövq al! 🎉`, dailyGoalMsg:(n)=>`Möhtəşəmsən, ${n}! Hər şeyi bacararsan! ✨` }
};

// ===== Utilities =====
const $ = sel => document.querySelector(sel);
const el = (tag, cls) => { const e=document.createElement(tag); if(cls) e.className=cls; return e; };
const todayStr = () => new Date().toISOString().slice(0,10);
const parseDate = s => new Date(s+"T00:00:00");
const formatDate = d => d.toISOString().slice(0,10);
const pad = n => (n<10? "0"+n : ""+n);
function escapeHtml(str){ return (str+"").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

// ===== State =====
const DEFAULT_STATE = {
  playerName: "Elshad",
  lang: "en",
  totalXP: 0,
  coins: 0,
  dailyGoal: 75,
  coinRate: 0.2,
  today: { date: todayStr(), xp: 0 },
  streak: 0,
  dailyHistory: [],
  dayLog: {},
  categories: ["Business","Health","French","Investing","Other"],
  tasks: [
    {id: crypto.randomUUID(), title:"Business: Client outreach (10 contacts)", cat:"Business", xp:15},
    {id: crypto.randomUUID(), title:"Business: Deep Work 60m (no phone)", cat:"Business", xp:20},
    {id: crypto.randomUUID(), title:"French: 20-minute practice", cat:"French", xp:12},
    {id: crypto.randomUUID(), title:"Health: 30-minute workout", cat:"Health", xp:15},
    {id: crypto.randomUUID(), title:"Investing: 15-minute research & journal", cat:"Investing", xp:10},
    {id: crypto.randomUUID(), title:"Health: Meal prep or healthy dinner", cat:"Health", xp:10},
  ],
  rewards: [
    {id: crypto.randomUUID(), title:"Fancy coffee / dessert", cost:30},
    {id: crypto.randomUUID(), title:"1 hour CS2", cost:60},
    {id: crypto.randomUUID(), title:"Movie night or new book", cost:120},
    {id: crypto.randomUUID(), title:"Treat yourself: small gadget", cost:240}
  ],
  log: [],
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth()
};

let state = load();
function load(){
  const raw = localStorage.getItem("success_hunter_v2");
  if (raw){
    const s = JSON.parse(raw);
    s.playerName = s.playerName || "Elshad";
    s.lang = s.lang || "en";
    s.dayLog = s.dayLog || {};
    s.categories = s.categories || ["Business","Health","French","Investing","Other"];
    s.calYear = s.calYear ?? new Date().getFullYear();
    s.calMonth = s.calMonth ?? new Date().getMonth();
    applyDayRollover(s);
    save(s);
    return s;
  } else {
    save(DEFAULT_STATE);
    return JSON.parse(localStorage.getItem("success_hunter_v2"));
  }
}
function save(s=state){ localStorage.setItem("success_hunter_v2", JSON.stringify(s)); }

// ===== Leveling =====
function xpToLevel(total){
  let lvl = 1, need = 100, rem = total;
  while(rem >= need){ rem -= need; lvl += 1; need += 50; }
  return { level: lvl, intoLevel: rem, toNext: need - rem };
}

// ===== Day/Streak/History =====
function pushHistory(s, date, xp){
  if (!date) return;
  const idx = s.dailyHistory.findIndex(r => r.date === date);
  if (idx>=0) s.dailyHistory[idx].xp = xp;
  else s.dailyHistory.push({date, xp});
  s.dailyHistory = s.dailyHistory.sort((a,b)=> a.date.localeCompare(b.date)).slice(-365);
}
function applyDayRollover(s){
  const last = s.today?.date || todayStr();
  const today = todayStr();
  if (last === today) return;
  pushHistory(s, last, s.today.xp);
  const lastDate = new Date(last);
  const prev = new Date(today); prev.setDate(prev.getDate()-1);
  const wasYesterday = lastDate.toISOString().slice(0,10) === prev.toISOString().slice(0,10);
  if (wasYesterday){
    s.streak = (s.today.xp >= s.dailyGoal) ? (s.streak||0)+1 : 0;
  } else {
    s.streak = (s.today.xp >= s.dailyGoal) ? 1 : 0;
  }
  s.today = { date: today, xp: 0 };
}
function logMsg(s, msg){ const stamp = new Date().toLocaleString(); s.log.push(`[${stamp}] ${msg}`); if (s.log.length>400) s.log.shift(); }

// ===== Stats =====
function sumWeek(){
  const d = new Date();
  const day = (d.getDay()+6)%7;
  const monday = new Date(d); monday.setDate(d.getDate()-day);
  const sunday = new Date(monday); sunday.setDate(monday.getDate()+6);
  const inRange = r => {
    const rd = new Date(r.date+"T00:00:00");
    return rd >= new Date(monday.toISOString().slice(0,10)+"T00:00:00") && rd <= new Date(sunday.toISOString().slice(0,10)+"T00:00:00");
  };
  const histSum = state.dailyHistory.filter(inRange).reduce((a,b)=>a+b.xp,0);
  return histSum + state.today.xp;
}
function sumMonth(){
  const d = new Date();
  const start = new Date(d.getFullYear(), d.getMonth(), 1);
  const end = new Date(d.getFullYear(), d.getMonth()+1, 0);
  const inRange = r => {
    const rd = new Date(r.date+"T00:00:00");
    return rd >= start && rd <= end;
  };
  const histSum = state.dailyHistory.filter(inRange).reduce((a,b)=>a+b.xp,0);
  return histSum + state.today.xp;
}

// ===== UI =====
function applyI18N(){
  const L = I18N[state.lang];
  $("#tagline").textContent = L.tagline;
  document.querySelectorAll("[data-i18n]").forEach(n=>{
    const key = n.getAttribute("data-i18n");
    if (L[key]) n.textContent = L[key];
  });
  $("#saveNote").firstChild && ($("#saveNote").firstChild.textContent = (state.lang==='en'?'Saves locally. ': state.lang==='fr'?'Enregistré localement. ': state.lang==='ru'?'Сохраняется локально. ': 'Yerli yadda saxlanılır. '));
  $("#questHelp").textContent = L.questHelp;
  $("#shopHelp").textContent = L.shopHelp;
  $("#catHelp").textContent = L.catHelp;
  $("#tipText").textContent = L.tip;
  const days = ["mon","tue","wed","thu","fri","sat","sun"];
  document.querySelectorAll(".day-name").forEach((n,i)=> n.textContent = L[days[i]]);
}
function renderAll(){
  applyI18N();
  $("#playerName").value = state.playerName;
  $("#langSelect").value = state.lang;

  const lvl = xpToLevel(state.totalXP);
  $("#level").textContent = lvl.level;
  $("#toNext").textContent = lvl.toNext;
  $("#totalXP").textContent = state.totalXP;
  $("#coins").textContent = Math.round(state.coins);
  $("#todayXP").textContent = state.today.xp;
  $("#dailyGoal").textContent = state.dailyGoal;
  $("#streak").textContent = state.streak;
  $("#progressBar").style.width = Math.min(100, (state.today.xp/state.dailyGoal)*100) + "%";

  $("#weekXP").textContent = sumWeek();
  $("#monthXP").textContent = sumMonth();

  $("#goalInput").value = state.dailyGoal;
  $("#coinRate").value = state.coinRate;

  renderCategories();
  renderTasks();
  renderRewards();
  renderCalendar();

  const logDiv = $("#log");
  logDiv.innerHTML = state.log.slice().reverse().map(x => `<div>${escapeHtml(x)}</div>`).join("");
}
function renderCategories(){
  const sel = $("#tCat");
  sel.innerHTML = "";
  state.categories.forEach((c)=>{
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
  const chips = $("#catChips");
  chips.innerHTML = "";
  state.categories.forEach((c,i)=>{
    const chip = el("span","chip");
    chip.innerHTML = `<span>${escapeHtml(c)}</span>`;
    const del = document.createElement("button");
    del.textContent = "×";
    del.title = "Remove category";
    del.onclick = ()=>{
      if (!confirm(`Delete category "${c}"?`)) return;
      if (state.tasks.some(t=>t.cat===c)){ alert("This category is used by tasks. Change or delete those tasks first."); return; }
      state.categories.splice(i,1);
      if (!state.categories.length) state.categories.push("General");
      save(); renderAll();
    };
    if (state.categories.length>1) chip.appendChild(del);
    chips.appendChild(chip);
  });
  if (state.categories.length && sel && !$("#addTask").dataset.editing) sel.value = state.categories[0];
}
function renderTasks(){
  const body = $("#taskBody");
  body.innerHTML = "";
  state.tasks.forEach(t => {
    const tr = el("tr");
    tr.appendChild(td(t.title));
    tr.appendChild(td(t.cat));
    tr.appendChild(td(t.xp+" XP"));
    const action = el("td");
    const b1 = button((state.lang==="fr"?"Terminer +":"Complete +")+t.xp+" XP", "btn good", () => completeTask(t));
    const b2 = button(getText("edit","Edit"), "btn secondary", () => loadTaskToForm(t));
    const b3 = button("✕", "btn danger", () => deleteTask(t.id));
    action.append(b1, spacer(), b2, spacer(), b3);
    tr.appendChild(action);
    body.appendChild(tr);
  });
}
function renderRewards(){
  const shop = $("#shopList");
  shop.innerHTML = "";
  state.rewards.forEach(r => {
    const row = el("div","row");
    const left = el("div");
    left.className="row";
    const title = el("div"); title.innerHTML = `<strong>${escapeHtml(r.title)}</strong> <span class="muted">— ${r.cost} 🪙</span>`;
    left.appendChild(title);
    const buy = button(getText("redeem","Redeem"), "btn", () => redeem(r));
    const del = button("✕", "btn danger", () => deleteReward(r.id));
    del.title = getText("remove","Remove");
    row.append(left, buy, del);
    shop.appendChild(row);
  });
}
function renderCalendar(){
  const label = $("#calLabel");
  label.textContent = `${state.calYear}-${pad(state.calMonth+1)}`;
  const cal = $("#calendar");
  cal.innerHTML = "";
  const first = new Date(state.calYear, state.calMonth, 1);
  const startDay = (first.getDay()+6)%7;
  const daysInMonth = new Date(state.calYear, state.calMonth+1, 0).getDate();
  for(let i=0;i<startDay;i++){ cal.appendChild(el("div","cell other")); }
  for(let d=1; d<=daysInMonth; d++){
    const c = el("div","cell");
    const thisDate = `${state.calYear}-${pad(state.calMonth+1)}-${pad(d)}`;
    if (thisDate === state.today.date) c.classList.add("today");
    const xp = (thisDate===state.today.date ? state.today.xp : (state.dailyHistory.find(r=>r.date===thisDate)?.xp || 0));
    const dn = el("div","d"); dn.textContent = d; c.appendChild(dn);
    const xv = el("div","xp"); xv.textContent = xp ? (xp+" XP") : ""; c.appendChild(xv);
    c.onclick = () => openDayDetails(thisDate, xp);
    cal.appendChild(c);
  }
  $("#prevMonth").onclick = ()=>{ let m = state.calMonth - 1, y = state.calYear; if (m<0){ m=11; y--; } state.calMonth = m; state.calYear = y; save(); renderCalendar(); };
  $("#nextMonth").onclick = ()=>{ let m = state.calMonth + 1, y = state.calYear; if (m>11){ m=0; y++; } state.calMonth = m; state.calYear = y; save(); renderCalendar(); };
}
function td(txt){ const d=el("td"); d.textContent=txt; return d;}
function spacer(){ const s=el("span"); s.style.width="6px"; return s; }
function button(label, cls, onClick){ const b=el("button", cls+" btn"); b.textContent=label; b.onclick=onClick; return b; }
function getText(key, fallback){
  const map = { edit:{en:"Edit",fr:"Modifier",ru:"Изменить",az:"Dəyiş"}, redeem:{en:"Redeem",fr:"Utiliser",ru:"Использовать",az:"İstifadə et"}, remove:{en:"Remove",fr:"Supprimer",ru:"Удалить",az:"Sil"} };
  return (map[key] && map[key][state.lang]) || fallback;
}

// ===== Actions =====
function completeTask(t){
  const pre = state.today.xp;
  const xp = Number(t.xp)||0;
  const coinsEarned = xp * (Number(state.coinRate)||0);
  state.totalXP += xp;
  state.today.xp += xp;
  state.coins += coinsEarned;
  const now = new Date();
  const time = now.toTimeString().slice(0,5);
  if (!state.dayLog[state.today.date]) state.dayLog[state.today.date] = [];
  state.dayLog[state.today.date].push({time, title:t.title, cat:t.cat, xp});
  logMsg(state, `✅ Quest complete: "${t.title}" (+${xp} XP, +${Math.round(coinsEarned)} 🪙)`);
  save(); renderAll();
  if (pre < state.dailyGoal && state.today.xp >= state.dailyGoal){
    const msg = I18N[state.lang].dailyGoalMsg(state.playerName || "Player");
    celebrate(msg);
  }
}
function loadTaskToForm(t){ $("#tTitle").value = t.title; $("#tCat").value = t.cat; $("#tXP").value = t.xp; $("#addTask").dataset.editing = t.id; }
function deleteTask(id){ state.tasks = state.tasks.filter(x=>x.id!==id); logMsg(state, `🗑 Deleted quest.`); save(); renderAll(); }
function upsertTask(){
  const title = $("#tTitle").value.trim();
  const cat = $("#tCat").value;
  const xp = Math.max(1, Number($("#tXP").value||0));
  if(!title){ alert("Please enter a quest title"); return; }
  const editingId = $("#addTask").dataset.editing;
  if (editingId){
    const i = state.tasks.findIndex(x=>x.id===editingId);
    if (i>=0){ state.tasks[i].title=title; state.tasks[i].cat=cat; state.tasks[i].xp=xp; logMsg(state, "✏️ Updated quest."); }
    $("#addTask").dataset.editing="";
  } else {
    state.tasks.push({id: crypto.randomUUID(), title, cat, xp});
    logMsg(state, `➕ Added quest "${title}" (${xp} XP).`);
  }
  $("#tTitle").value=""; $("#tXP").value=10; $("#tCat").value=state.categories[0];
  save(); renderAll();
}
function clearForm(){ $("#tTitle").value=""; $("#tXP").value=10; $("#tCat").value=state.categories[0]; $("#addTask").dataset.editing=""; }
function addReward(){
  const title = $("#rTitle").value.trim();
  const cost = Math.max(1, Number($("#rCost").value||0));
  if (!title){ alert("Please enter a reward title"); return;}
  state.rewards.push({id: crypto.randomUUID(), title, cost});
  logMsg(state, `🎁 Added reward "${title}" (${cost} 🪙).`);
  $("#rTitle").value=""; $("#rCost").value=50;
  save(); renderAll();
}
function deleteReward(id){ state.rewards = state.rewards.filter(x=>x.id!==id); logMsg(state, "🗑 Removed reward."); save(); renderAll(); }
function redeem(r){
  if (state.coins < r.cost){ alert("Not enough coins yet."); return; }
  if (!confirm(`Redeem "${r.title}" for ${r.cost} coins?`)) return;
  state.coins -= r.cost;
  logMsg(state, `🏅 Redeemed: ${r.title} (−${r.cost} 🪙)`);
  const msg = I18N[state.lang].greatJob(state.playerName || "Player");
  celebrate(msg);
  save(); renderAll();
}

// Name / Lang
$("#playerName").addEventListener("input", e => { state.playerName = e.target.value || "Player"; save(); });
$("#langSelect").addEventListener("change", e => { state.lang = e.target.value || "en"; save(); renderAll(); });

// Settings
$("#goalInput").addEventListener("change", e => { state.dailyGoal = Math.max(10, Number(e.target.value||0)); logMsg(state, `🎯 Daily goal set to ${state.dailyGoal} XP.`); save(); renderAll(); });
$("#coinRate").addEventListener("change", e => { state.coinRate = Math.max(0, Number(e.target.value||0)); logMsg(state, `🪙 Coin rate set to ${state.coinRate} per XP.`); save(); renderAll(); });

// Buttons
$("#resetToday").onclick = () => { if (!confirm("Reset today's XP?")) return; state.today.xp = 0; state.dayLog[state.today.date]=[]; logMsg(state, "♻️ Reset today's XP."); save(); renderAll(); };
$("#newDay").onclick = () => { pushHistory(state, state.today.date, state.today.xp); state.streak = (state.today.xp >= state.dailyGoal) ? state.streak+1 : 0; state.today = { date: todayStr(), xp: 0 }; save(); renderAll(); };
$("#hardReset").onclick = () => { if (!confirm("Hard reset everything? This clears all data.")) return; localStorage.removeItem("success_hunter_v2"); state = JSON.parse(JSON.stringify(DEFAULT_STATE)); save(); renderAll(); };

$("#addTask").onclick = upsertTask;
$("#clearForm").onclick = clearForm;
$("#addRewardBtn").onclick = addReward;

// Day details overlay
$("#closeOverlay").onclick = ()=> $("#dayOverlay").classList.remove("show");
function openDayDetails(date, xp){
  $("#dayTitle").textContent = `${date}`;
  const list = state.dayLog[date] || [];
  $("#daySummary").textContent = `XP: ${xp} • Entries: ${list.length}`;
  const tb = $("#dayBody"); tb.innerHTML="";
  list.slice().sort((a,b)=> a.time.localeCompare(b.time)).forEach(e=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${e.time}</td><td>${escapeHtml(e.title)}</td><td>${escapeHtml(e.cat)}</td><td>${e.xp}</td>`;
    tb.appendChild(tr);
  });
  $("#dayOverlay").classList.add("show");
}

// ===== Fireworks + Applause =====
const fxCanvas = document.getElementById("fxCanvas");
const gg = document.querySelector(".gg");
const ggMsg = document.getElementById("ggMsg");
const ctx = fxCanvas.getContext("2d");
function resizeCanvas(){ fxCanvas.width = window.innerWidth; fxCanvas.height = window.innerHeight; }
window.addEventListener("resize", resizeCanvas); resizeCanvas();
let particles = [];
function celebrate(message){
  ggMsg.textContent = message;
  gg.classList.add("show");
  particles = [];
  for (let i=0;i<300;i++){
    particles.push({ x: fxCanvas.width/2, y: fxCanvas.height*0.6, vx: (Math.random()-0.5)*8, vy: -Math.random()*10 - 2, life: 60 + Math.random()*60, color: `hsl(${Math.floor(Math.random()*360)}, 100%, 60%)` });
  }
  fxCanvas.classList.add("show");
  playCelebration();
  animateFX();
  setTimeout(()=>{ fxCanvas.classList.remove("show"); gg.classList.remove("show"); }, 3000);
}
function animateFX(){
  ctx.clearRect(0,0,fxCanvas.width, fxCanvas.height);
  particles.forEach(p=>{ p.vy += 0.15; p.x += p.vx; p.y += p.vy; p.life -= 1; ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 3, 3); });
  particles = particles.filter(p=>p.life>0 && p.y<fxCanvas.height+10);
  if (particles.length){ requestAnimationFrame(animateFX); }
}
let audioCtx;
function playCelebration(){
  try{
    if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    for (let i=0;i<6;i++){ setTimeout(()=> noiseBurst(0.12 + Math.random()*0.15, 500+Math.random()*800), i*180); }
    const now = audioCtx.currentTime + 0.2;
    for (let i=0;i<8;i++){ clap(now + i*0.18, 0.25); }
  }catch(e){}
}
function noiseBurst(duration, cutoffHz){
  const sr = audioCtx.sampleRate;
  const frameCount = sr * duration;
  const buffer = audioCtx.createBuffer(1, frameCount, sr);
  const data = buffer.getChannelData(0);
  for (let i=0; i<frameCount; i++){ data[i] = (Math.random()*2-1) * Math.pow(1 - i/frameCount, 1.8); }
  const src = audioCtx.createBufferSource(); src.buffer = buffer;
  const filter = audioCtx.createBiquadFilter(); filter.type="highpass"; filter.frequency.value = cutoffHz;
  const gain = audioCtx.createGain(); gain.gain.value = 0.35;
  src.connect(filter).connect(gain).connect(audioCtx.destination);
  src.start();
}
function clap(startTime, gainLevel){
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type="square";
  osc.frequency.setValueAtTime(600, startTime);
  gain.gain.setValueAtTime(gainLevel, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime+0.12);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(startTime);
  osc.stop(startTime+0.15);
}


function addCategory(){
  const input = $("#catInput");
  const newCat = input.value.trim();
  if (!newCat) {
    alert("Please enter a category name");
    return;
  }
  if(state.categories.includes(newCat)){
    alert("Category already exists");
    return;
  }
  state.categories.push(newCat);
  input.value = "";
  save();
  renderAll(); // Important : remet à jour l'affichage pour voir la nouvelle catégorie
}
$("#addCat").onclick = addCategory;



// Init
document.addEventListener("DOMContentLoaded", ()=>{ $("#playerName").value = state.playerName; $("#langSelect").value = state.lang; renderAll(); });
