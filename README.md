# Haftalık Bakım CMMS V5.4.20

## Bu sürümdeki değişiklik

**RED Verilen Bakımlar düğmesi üst menüye taşındı.**

Önceki sürümde düğme ana menünün gövdesindeydi ve yalnızca ana menüde
görünüyordu. Artık üst menüde, logonun karşısında kırmızı uyarı üçgeni
ikonu olarak duruyor.

Düğmenin üzerinde **bu haftaki RED sayısı rozet olarak** gösteriliyor.
Sayı önce yerel kayıttan anında görünür, arka planda sunucudan tazelenir.
Böylece sayfa açılışı yavaşlamaz. RED kaydı yoksa rozet hiç görünmez.

Üst menü yalnızca giriş yapıldıktan sonra belirir; şifre ekranında gizlidir.

### Değişen dosya

Yalnızca **index.html** değişti. Diğer tüm dosyalar V5.4.19 master
sürümüyle birebir aynıdır.

### Teknik not

Giriş mantığı index.html içine taşındı ve `app.js` artık çağrılmıyor.
Dosya pakette duruyor ancak kullanılmıyor; silinebilir veya bırakılabilir.

---

## Dosya listesi

| Dosya | Açıklama |
|---|---|
| index.html | Giriş ve ana menü (bu sürümde değişti) |
| weekly-maintenance.html | Operatör bakım paneli |
| red-list.html | RED verilen bakımlar ekranı |
| admin-maintenance.html | Admin bakım tanımlama paneli |
| net.js | Ortak bağlantı katmanı |
| app.js | Eski giriş mantığı (artık kullanılmıyor) |
| style.css | Ana stil dosyası |
| mobil-tasma-duzeltme.css | Android ekran taşma düzeltmesi |
| AKGLOG.png | Logo |

---

## Sistemin yetenekleri

### Giriş ve yetkilendirme
- Google E-Tablo `veri` sayfasından şifre doğrulaması.
- Admin paneli yalnızca yönetici yetkisi olanlara açılır.

### Operatör bakım paneli
- Makine kartında yalnızca makine adı görünür, iç ID gizlidir.
- Bakımlar 1, 2, 3 şeklinde numaralı renkli bar olarak listelenir.
- Bekleyen #FFB733, Tamamlanan #99FF99, Red #FF9999.
- "x / y bakım tamamlandı" ilerleme sayacı.

### QR doğrulama
- Makine önce listeden seçilir, QR yalnızca doğrulama amaçlıdır.
- Çoklu kimlik eşleştirme: iç ID, makine adı, maliyet merkezi,
  toplam makine kodu.
- URL ve JSON biçimli etiketler desteklenir.
- Manuel ID girişi yoktur; operatör makine başına gitmek zorundadır.
- Hatalı etiket okunduğunda etiketin hangi makineye ait olduğu bildirilir.

### Kontrol kaydı
- Sonuç: UYGUN veya RED.
- RED seçilirse açıklama zorunludur (en az 10 karakter).
- Canlı karakter sayacı ve uyarı kutusu.
- Kanıt fotoğrafı gönderilmeden önce küçültülür.

### RED Verilen Bakımlar ekranı
- RED verilen her bakım ayrı kartta.
- Makine adı, operatör, tarih, hafta bilgisi.
- Operatör açıklaması sarı vurgulu kutuda.
- Kanıt fotoğrafı; dokununca tam ekran.
- Filtreler: dönem, makine, serbest arama.

### Admin paneli
- Bakım tanımı oluşturma, düzenleme, silme.
- Referans resim yükleme ve önizleme.
- Makine bazında gruplanmış liste.

---

## Sunucu tarafı

`Code.gs` bu pakette yer almaz. Apps Script üzerinde **V5.4.17**
dağıtılmıştır ve bu ön yüzle uyumludur. Değişiklik gerekmez.

---

## Kurulum

1. Tüm dosyaları aynı klasöre koyun.
2. Klasörü HTTPS bir adreste yayınlayın.
   Kamera yalnızca güvenli adreslerde çalışır.
3. index.html adresini açın.

Yerel test:

```
cd proje_klasoru
python -m http.server 8000
```

Sonra http://localhost:8000 açın.

**Önemli:** Güncelleme sonrası tarayıcı önbelleğini temizleyin.
Masaüstünde Ctrl+Shift+R, telefonda site verilerini temizleyin.

---

## Geri dönüş

Sorun çıkarsa MASTER V5.4.19 paketine dönebilirsiniz.
Bu sürümde yalnızca index.html değiştiği için, master paketteki
index.html dosyasını geri kopyalamak yeterlidir.
