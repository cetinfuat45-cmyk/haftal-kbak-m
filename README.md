# Haftalık Bakım CMMS V5.4.14

## Bu sürümdeki değişiklik: Operatör makine ekranı

- Makine kartında **yalnızca makine adı** görünür. Makine ID artık gösterilmez.
- Her makinenin altında bakımlar **1, 2, 3 ...** şeklinde numaralı renkli bar olarak listelenir.
- Renk kuralı:
  - Bekleyen bakım: **#FFB733** (turuncu)
  - Tamamlanan bakım: **#99FF99** (yeşil)
  - Red verilen bakım: **#FF9999** (kırmızı)
- Kartın altında "3 / 7 bakım tamamlandı" biçiminde ilerleme yazısı vardır.
- Listenin üstünde renk açıklaması (Bekleyen / Tamamlanan / Red) bulunur.
- Numaranın üzerine gelindiğinde bakım adı ipucu olarak görünür.
- Bakım listesi ekranında da numaralar aynı renk kuralıyla gösterilir.
- Kontrol kaydedildiğinde ilgili numara anında renk değiştirir.
- Durum bilgisi haftalık olarak saklanır; yeni hafta başladığında sıfırlanır.

## Önceki sürümden korunan hız düzeltmeleri (V5.4.13)

- net.js ortak bağlantı katmanı, zaman aşımı 12 sn + otomatik tekrar
- Paralel istek, localStorage önbelleği, preconnect, bağlantı ısıtma
- Logo 193 KB yerine 12 KB
- QR kütüphanesi gecikmeli yükleme
- Operatör fotoğrafı gönderim öncesi küçültme
- Kayıt yanıtı gelmezse 25 sn sonra kilit açılır

## Dosyalar

- index.html
- app.js
- net.js
- weekly-maintenance.html  (bu sürümde değişti)
- admin-maintenance.html
- style.css
- AKGLOG.png
- APPS_SCRIPT_HIZ.md
- KONTROL_LISTESI.md
- SURUM_GECMISI.md

## Apps Script notu

Durum renklerinin **sunucudan** doğru gelmesi için `getWeeklyBootstrap`
yanıtına o haftanın sonuç kayıtları eklenmelidir. Ayrıntı: APPS_SCRIPT_HIZ.md
