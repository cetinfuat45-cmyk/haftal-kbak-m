# Haftalık Bakım CMMS V5.4.16

## Bu sürümdeki üç değişiklik

### 1. QR doğrulama sorunu çözüldü (ana düzeltme)

Sahadaki etiket **TOPLAM MAKİNE KODU** (makine adı + maliyet merkezi)
taşıyor, sistem ise yalnızca iç ID ile karşılaştırıyordu. Bu yüzden
hiçbir etiket geçmiyordu.

Artık çoklu kimlik eşleştirme yapılıyor: iç ID, makine adı,
maliyet merkezi, toplam makine kodu, machineCode alanı.
URL ve JSON biçimli etiketler de destekleniyor.

Ayrıntı: **QR_ETIKET_KURALI.md**

### 2. Manuel Makine ID girişi kaldırıldı

Operatörün makine başına fiziksel olarak gitmesi zorunlu hale getirildi.
Artık QR okutmadan bakım ekranına geçmenin hiçbir yolu yok.

### 3. QR hataları modal ekranda gösteriliyor

Küçük gri yazı yerine tam ekran uyarı penceresi açılıyor:

- **Hatalı Makine Etiketi**: seçilen makine ile okunan etiket
  yan yana karşılaştırmalı gösteriliyor. Etiket başka bir makineye
  aitse o makinenin adı da yazılıyor.
- **Kamera Açılamıyor**: sayfa HTTPS değilse adres gösteriliyor.
- **Kamera İzni Reddedildi**: izin açma adımları.
- **Kamera Meşgul**: kamerayı kullanan uygulamayı kapatma adımları.
- **Kamera Bulunamadı** ve **QR Kütüphanesi Yüklenemedi**.

Her modalda **Tekrar Okut** ve **Makine Listesine Dön** düğmeleri var.

## Korunan özellikler

### V5.4.14 - Operatör makine ekranı
- Makine kartında yalnızca makine adı, ID gösterilmiyor.
- Bakımlar 1, 2, 3 ... numaralı renkli bar.
- Bekleyen #FFB733, Tamamlanan #99FF99, Red #FF9999.

### V5.4.13 - Bağlantı hızı
- net.js ortak bağlantı katmanı, zaman aşımı + otomatik tekrar.
- Paralel istek, önbellek, preconnect, bağlantı ısıtma.
- Logo sıkıştırma, fotoğraf sıkıştırma.

### V5.4.15 - Kamera yönetimi
- Kamerayı Başlat / Değiştir / Durdur düğmeleri.
- Arka kamera otomatik seçimi, deviceId yedek yöntemi.
- Sekme arka plana alınınca kamera kapanıyor.

## Dosyalar

- index.html
- app.js
- net.js
- weekly-maintenance.html  (bu sürümde değişti)
- admin-maintenance.html
- style.css
- AKGLOG.png
- QR_ETIKET_KURALI.md  (YENİ)
- QR_SORUN_COZUM.md
- APPS_SCRIPT_HIZ.md
- KONTROL_LISTESI.md
- SURUM_GECMISI.md
