'use strict';
/* Haftalık Bakım CMMS - Giriş Ekranı - V5.4.19 */
const SESSION = CMMS.SESSION, $ = id => document.getElementById(id);

function loading(p, t, n = '') {
  $('loader').classList.remove('hide');
  $('bar').style.width = p + '%';
  $('percent').textContent = p + '%';
  $('loadText').textContent = t;
  $('loadTitle').textContent = (n ? n + ' için ' : '') + 'sistem yükleniyor';
}
CMMS.warmUp();

function showHome(user) {
  const userName = user.operator || user.name || user.fullName || 'Kullanıcı';
  const admin = String(user.role || '').toLocaleLowerCase('tr').includes('admin');
  $('loader').classList.add('hide');
  $('login').classList.add('hide');
  $('home').classList.remove('hide');
  $('welcome').textContent = 'Hoş geldiniz, ' + userName;
  $('logout').classList.remove('hide');
  $('adminBtn').classList.toggle('hide', !admin);
}

async function login() {
  const password = $('password').value.trim();
  if (!password) return $('msg').textContent = 'Şifre girin.';
  $('loginBtn').disabled = true; $('msg').textContent = '';
  loading(10, 'Google Apps Script bağlantısı kuruluyor...');
  const bootstrapPromise = CMMS.call('getWeeklyBootstrap', {}, { retries: 0 })
    .then(r => { if (r && r.success) CMMS.cacheWrite('getWeeklyBootstrap', r); return r; })
    .catch(() => null);
  try {
    const r = await CMMS.call('login', { password });
    $('debug').textContent = JSON.stringify(r, null, 2);
    if (!r.success) throw Error(r.message);
    const userName = r.user.operator || r.user.name || r.user.fullName || 'Kullanıcı';
    loading(55, 'Kullanıcı doğrulandı.', userName);
    sessionStorage.setItem(SESSION, JSON.stringify(r.user));
    loading(85, 'Bakım listesi hazırlanıyor...', userName);
    await bootstrapPromise;
    loading(100, 'Sistem hazır.', userName);
    showHome(r.user);
  } catch (e) {
    $('loader').classList.add('hide'); $('msg').textContent = e.message;
  } finally { $('loginBtn').disabled = false; }
}

$('loginBtn').onclick = login;
$('password').onkeydown = e => { if (e.key === 'Enter') login(); };
$('testBtn').onclick = async () => {
  const t0 = performance.now();
  try {
    const r = await CMMS.call('health', {}, { retries: 0 });
    $('debug').textContent = JSON.stringify(r, null, 2);
    $('msg').textContent = 'Bağlantı başarılı: ' + r.version + ' (' + Math.round(performance.now() - t0) + ' ms)';
  } catch (e) { $('msg').textContent = e.message; }
};
$('opBtn').onclick = () => location.href = 'weekly-maintenance.html';
$('redBtn').onclick = () => location.href = 'red-list.html';
$('adminBtn').onclick = () => location.href = 'admin-maintenance.html';
$('logout').onclick = () => { sessionStorage.removeItem(SESSION); CMMS.cacheClear(); location.href = 'index.html'; };

function showHomeFromSession() {
  const raw = sessionStorage.getItem(SESSION);
  if (!raw) return;
  const params = new URLSearchParams(location.search);
  if (params.get('screen') !== 'home') return;
  try { showHome(JSON.parse(raw)); }
  catch (error) { sessionStorage.removeItem(SESSION); }
}
showHomeFromSession();
