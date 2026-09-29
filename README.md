# Haftalık Bakım CMMS V5.4.15

## Bu sürümdeki değişiklik: QR kamera açılmama sorunu

- Sayfa HTTPS değilse artık açık uyarı veriliyor ve o anki adres gösteriliyor.
  (Kameranın açılmamasının en sık nedeni budur.)
- Kamera izni için ayrı **Kamerayı Başlat** düğmesi eklendi.
  iOS Safari ve bazı Android tarayıcılar kamerayı yalnızca doğrudan
  düğmeye basıldığında açar.
- **Kamerayı Değiştir** ve **Kamerayı Durdur** düğmeleri eklendi.
- Cihazdaki kameralar taranıyor, arka kamera adından otomatik seçiliyor.
- facingMode başarısız olursa deviceId ile yeniden deneniyor.
- Kamera çerçevesi (qrbox) ekran genişliğine göre hesaplanıyor.
  Sabit 230 piksel küçük ekranlarda kameranın açılmasını engelliyordu.
- Önceki kamera örneği tam temizleniyor; ikinci kez QR ekranına girince
  oluşan donma giderildi.
- Hata türüne göre ayrı çözüm metni gösteriliyor:
  izin reddi, kamera bulunamadı, kamera başka uygulamada, tarayıcı desteklemiyor.
- QR kütüphanesi için yedek CDN eklendi (unpkg engellenirse jsdelivr denenir).
- Sekme arka plana alınınca kamera otomatik kapanıyor.
- Manuel Makine ID kutusu görünür hale getirildi ve Enter tuşu eklendi.

Ayrıntılı çözüm rehberi: **QR_SORUN_COZUM.md**

## Korunan özellikler

### V5.4.14 - Operatör makine ekranı
- Makine kartında yalnızca makine adı görünür, ID gösterilmez.
- Bakımlar 1, 2, 3 ... numaralı renkli bar olarak listelenir.
- Bekleyen #FFB733, Tamamlanan #99FF99, Red #FF9999.
- "x / y bakım tamamlandı" sayacı ve renk açıklaması.

### V5.4.13 - Bağlantı hızı
- net.js ortak bağlantı katmanı, zaman aşımı 12 sn + otomatik tekrar.
- Paralel istek, localStorage önbelleği, preconnect, bağlantı ısıtma.
- Logo 193 KB yerine 12 KB.
- Operatör fotoğrafı gönderim öncesi küçültme.

## Dosyalar

- index.html
- app.js
- net.js
- weekly-maintenance.html  (bu sürümde değişti)
- admin-maintenance.html
- style.css
- AKGLOG.png
- QR_SORUN_COZUM.md  (YENİ)
- APPS_SCRIPT_HIZ.md
- KONTROL_LISTESI.md
- SURUM_GECMISI.md
