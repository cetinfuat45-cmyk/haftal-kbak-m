# QR Kamera Açılmıyor - Çözüm Rehberi (V5.4.15)

## En sık neden: Sayfa HTTPS değil

Tarayıcılar kamerayı **yalnızca güvenli adreslerde** açar. Aşağıdaki
durumlarda kamera hiçbir tarayıcıda çalışmaz:

- Dosyayı bilgisayardan çift tıklayarak açtıysanız (`file:///C:/...`)
- Sayfa `http://` ile açılıyorsa (`https://` değil)

### Nasıl anlarsınız
Yeni sürümde QR ekranında şu uyarı çıkar:
**"Kamera açılamıyor: sayfa güvenli değil."**
Altında o anki adres de yazar.

### Çözüm
Projeyi HTTPS bir adreste yayınlayın:

| Yöntem | Adres biçimi | Ücret |
|---|---|---|
| GitHub Pages | `https://kullanici.github.io/proje/` | Ücretsiz |
| Google Sites | `https://sites.google.com/...` | Ücretsiz |
| Netlify (klasörü sürükle-bırak) | `https://ad.netlify.app` | Ücretsiz |
| Şirket SharePoint / IIS | `https://...` | Mevcut altyapı |

Yerel test için `localhost` da kabul edilir:

```
cd proje_klasoru
python -m http.server 8000
```
Sonra `http://localhost:8000` adresini açın. (localhost güvenli sayılır.)

---

## İkinci neden: Kamera izni reddedilmiş

Bir kez "Engelle" denmişse tarayıcı bir daha sormaz.

**Android Chrome:** Adres çubuğundaki kilit simgesi > İzinler > Kamera > İzin ver
**iPhone Safari:** Ayarlar > Safari > Kamera > Sor
**Masaüstü Chrome/Edge:** Adres çubuğundaki kamera simgesi > İzin ver > Sayfayı yenile

Yeni sürüm bu durumda **"Kamera izni reddedildi."** yazar ve adımları gösterir.

---

## Üçüncü neden: Uygulama içi tarayıcı

Bağlantıyı WhatsApp, Teams veya Instagram içinden açtıysanız kamera engellenir.

**Çözüm:** Bağlantıyı kopyalayıp Chrome veya Safari'de açın.

---

## Dördüncü neden: Kamera başka uygulamada açık

Teams, Zoom veya kamera uygulaması kamerayı kilitlemiş olabilir.
Yeni sürüm bu durumda **"Kamera başka bir uygulama tarafından kullanılıyor."** yazar.

---

## Beşinci neden: QR kütüphanesi indirilemiyor

Şirket ağı `unpkg.com` adresini engelliyorsa kütüphane yüklenmez.
Yeni sürüm otomatik olarak yedek adresi (`cdn.jsdelivr.net`) dener.

İkisi de engelliyse kalıcı çözüm dosyayı yerelleştirmektir:

1. `https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js` dosyasını indirin.
2. Proje klasörüne `html5-qrcode.min.js` adıyla koyun.
3. `weekly-maintenance.html` içindeki `loadQrLib` fonksiyonunda ilk satırı
   `loadScript('html5-qrcode.min.js')` olarak değiştirin.

---

## Kamera açık ama QR okumuyor

- QR etiketini çerçevenin içine, ekranı kaplayacak şekilde yaklaştırın.
- Etiket kirli, buruşuk veya yansıma yapıyorsa okunmaz.
- Ortam çok karanlıksa okuma başarısız olur.
- **Kamerayı Değiştir** düğmesiyle arka kameraya geçin (ön kamera düşük çözünürlüklüdür).
- Etiketteki metin makine ID ile birebir aynı olmalıdır.

---

## Her durumda çalışan yedek yöntem

QR ekranının altındaki **Manuel Makine ID** kutusuna makine ID'sini yazıp
**Doğrula** düğmesine basın. Bu yöntem kamera olmadan da çalışır.
