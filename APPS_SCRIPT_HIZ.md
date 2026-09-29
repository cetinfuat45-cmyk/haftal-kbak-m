# Apps Script Notları (V5.4.14)

## 1. Durum renkleri için gerekli alan

Operatör ekranındaki renkli numara barının sunucu verisiyle çalışması için
`getWeeklyBootstrap` yanıtına bu haftanın sonuç kayıtları eklenmelidir:

```javascript
function getWeeklyBootstrap() {
  return {
    success: true,
    machines: ...,
    templatesByMachine: ...,
    results: getWeekResults()   // YENİ
  };
}

function getWeekResults() {
  const sheet = ss().getSheetByName('sonuclar');
  const values = sheet.getDataRange().getValues();
  const head = values[0];
  const iMachine = head.indexOf('machineId');
  const iTemplate = head.indexOf('templateId');
  const iResult = head.indexOf('result');
  const iWeek = head.indexOf('weekKey');

  return values.slice(1)
    .filter(r => r[iTemplate])
    .map(r => ({
      machineId: String(r[iMachine]),
      templateId: String(r[iTemplate]),
      result: String(r[iResult]),
      weekKey: String(r[iWeek])
    }));
}
```

Ön yüz şu alan adlarını otomatik tanır:
`results`, `records`, `maintenanceResults`, `weeklyResults`, `sonuclar`.

Sonuç değerinde **RED** geçiyorsa numara kırmızı (#FF9999), aksi halde
yeşil (#99FF99) olur. Kayıt yoksa turuncu (#FFB733) kalır.

Bu alan eklenmezse sistem yine çalışır; renkler operatörün kendi cihazındaki
haftalık yerel kayıttan üretilir.

---

## 2. Hücre hücre okuma yapmayın

Yavaş:

```javascript
for (var i = 2; i <= sheet.getLastRow(); i++) {
  var id = sheet.getRange(i, 1).getValue();
}
```

Hızlı:

```javascript
const values = sheet.getDataRange().getValues();
```

Bu tek değişiklik süreyi çoğu durumda 10 kat düşürür.

---

## 3. CacheService kullanın

```javascript
function listMachinesCached() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('machines_v1');
  if (hit) return JSON.parse(hit);
  const values = ss().getSheetByName('makineler').getDataRange().getValues();
  const machines = values.slice(1).filter(r => r[0]).map(r => ({
    id: String(r[0]), machineName: String(r[1]), costCenter: String(r[2] || '')
  }));
  const out = { success: true, machines: machines, count: machines.length };
  cache.put('machines_v1', JSON.stringify(out), 900);
  return out;
}
```

Kayıt sonrası temizleyin:

```javascript
CacheService.getScriptCache().removeAll(['machines_v1', 'templates_v1']);
```

---

## 4. openById çağrısını tekrarlamayın

```javascript
let _ss = null;
function ss() { if (!_ss) _ss = SpreadsheetApp.openById(SHEET_ID); return _ss; }
```

---

## 5. Ağır E-Tablo formüllerini kaldırın

`IMPORTRANGE`, tüm sütunu tarayan `ARRAYFORMULA`, `NOW()`, `TODAY()` her
okumada yeniden hesaplanır ve bağlantıyı yavaşlatır.

---

## 6. Ölçüm

Giriş ekranındaki **Bağlantıyı Test Et** düğmesi yanıt süresini gösterir.

| Süre | Değerlendirme |
|---|---|
| 300 - 800 ms | Normal |
| 1 - 3 sn | Kabul edilebilir |
| 3 - 8 sn | Code.gs optimizasyonu gerekli |
| 8 sn üzeri | Hücre hücre okuma veya ağır formül var |
