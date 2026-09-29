# Haftalık Bakım CMMS V5.4.18 - Tam Paket

## Bu pakette ne var

Ön yüzün tamamı. Şimdiye kadar yapılan bütün düzeltmeler birleştirildi.

| Dosya | Açıklama |
|---|---|
| index.html | Giriş ve panel seçimi |
| weekly-maintenance.html | Operatör bakım paneli |
| admin-maintenance.html | Admin bakım tanımlama paneli |
| net.js | Ortak bağlantı katmanı |
| app.js | Giriş ekranı mantığı |
| style.css | Ana stil dosyası |
| mobil-tasma-duzeltme.css | Android ekran taşma düzeltmesi |
| AKGLOG.png | Logo (sıkıştırılmış) |

## Code.gs hakkında

Sunucu tarafı (Code.gs V5.4.17) zaten Apps Script'e yüklendi ve dağıtıldı.
Bu pakette yer almıyor çünkü değiştirilmedi. Mevcut dağıtımınız geçerlidir.

---

# V5.4.18 - Android ekran taşma düzeltmesi

## Sorun

Bakım adı boşluksuz ve uzun olduğunda (örneğin 3333333333...) tarayıcı
metni satır sonunda bölemiyor, kutuyu metin kadar genişletiyor ve sayfa
yatayda kayıyor. Bu yüzden sol taraftaki numaralar ve başlık ekran
dışında kalıyordu.

## Çözüm

- Uzun metinler `overflow-wrap: anywhere` ile zorla bölünüyor.
- Esnek kutulardaki metin alanlarına `min-width: 0` eklendi.
  Bu satır olmadan diğer kurallar tek başına yeterli olmaz.
- Sayfanın yatayda kayması `overflow-x: hidden` ile engellendi.
- Numara kutuları `flex: 0 0 auto` ile ezilmeye karşı korundu.
- Uzun metinlerde numara üstte hizalı kalıyor.
- Form alanları 16 piksel yazı boyutunda.
  iOS Safari'de küçük alanlar otomatik yakınlaştırma yapıp sayfayı kaydırır.
- 600 ve 380 piksel için ayrı ölçüler eklendi.
- Modal pencereler `calc(100vw - 28px)` ile ekrana sığdırıldı.

---

# Önceki sürümlerden gelen özellikler

## V5.4.16 - QR eşleştirme ve modal uyarılar
- QR etiketindeki TOPLAM MAKİNE KODU tanınıyor.
- Çoklu kimlik eşleştirme: iç ID, makine adı, maliyet merkezi, toplam kod.
- URL ve JSON biçimli etiket desteği.
- Manuel Makine ID girişi kaldırıldı; operatör makine başına gitmek zorunda.
- QR hataları tam ekran modalda gösteriliyor.
- Yanlış etiket okunduğunda ait olduğu makine bildiriliyor.

## V5.4.15 - Kamera yönetimi
- HTTPS denetimi ve açık uyarı.
- Kamerayı Başlat / Değiştir / Durdur düğmeleri.
- Arka kamera otomatik seçimi, deviceId yedek yöntemi.
- Hata türüne göre ayrı çözüm metinleri.
- Yedek CDN.

## V5.4.14 - Operatör makine ekranı
- Makine kartında yalnızca makine adı, ID gösterilmiyor.
- Bakımlar 1, 2, 3 ... numaralı renkli bar.
- Bekleyen #FFB733, Tamamlanan #99FF99, Red #FF9999.
- "x / y bakım tamamlandı" sayacı ve renk açıklaması.

## V5.4.13 - Bağlantı hızı
- Ortak bağlantı katmanı, zaman aşımı 12 sn + otomatik tekrar.
- Paralel istek, localStorage önbelleği, preconnect, bağlantı ısıtma.
- Logo 193 KB yerine 12 KB.
- Fotoğraf gönderim öncesi küçültülüyor.

## Bu pakette ayrıca
- Admin paneline yetki kontrolü eklendi.
  Yönetici olmayan kullanıcı bu sayfayı açamaz.
- Hafta anahtarı ön yüzde de ISO biçiminde üretiliyor (2026-W40).
- Kayıt cevabındaki machineId ve templateId kullanılarak renk güncelleniyor.

---

# Kurulum

1. Bütün dosyaları aynı klasöre koyun.
2. Klasörü HTTPS bir adreste yayınlayın.
   Kamera yalnızca https:// adreslerde çalışır.
3. index.html adresini açın.

Yerel test için:

```
cd proje_klasoru
python -m http.server 8000
```

Sonra http://localhost:8000 açın. (localhost güvenli sayılır.)

## Önemli

Güncelleme sonrası tarayıcı önbelleğini temizleyin.
Masaüstünde Ctrl+Shift+R, telefonda site verilerini temizleyin.
Aksi halde eski CSS ve JS dosyaları yüklü kalır.
