# Sürüm Geçmişi

## V5.4.20 - RED düğmesi üst menüye taşındı  (GÜNCEL)
- RED Verilen Bakımlar düğmesi ana menü gövdesinden alınıp üst menüye taşındı.
- Düğme kırmızı uyarı üçgeni ikonu olarak gösteriliyor.
- Düğme üzerinde bu haftaki RED sayısı rozet olarak görünüyor.
- Rozet önce yerel kayıttan anında gösteriliyor, arkada tazeleniyor.
- RED kaydı yoksa rozet görünmüyor.
- Üst menü yalnızca giriş yapıldıktan sonra beliriyor.
- Giriş mantığı index.html içine taşındı; app.js artık çağrılmıyor.
- Yalnızca index.html değişti, diğer dosyalar V5.4.19 ile aynı.

## V5.4.19 - RED açıklama zorunluluğu ve RED listesi  (MASTER)
- RED seçildiğinde açıklama zorunlu (en az 10 karakter).
- Canlı karakter sayacı ve görsel uyarılar eklendi.
- Ana menüye RED Verilen Bakımlar düğmesi eklendi.
- red-list.html ekranı oluşturuldu.
- Açıklama ve kanıt fotoğrafı birlikte görüntüleniyor.
- Fotoğraf tam ekran büyütme eklendi.
- Dönem, makine ve metin filtreleri eklendi.
- Özet sayaçlar eklendi.
- Ana menü artık operatörlere de gösteriliyor.
- Hafta anahtarı net.js içinde ortaklaştırıldı.

## V5.4.18 - Android ekran taşma düzeltmesi
- Uzun boşluksuz metinler zorla bölünüyor.
- Sayfa yatay kayması engellendi.
- Numara kutuları ezilmeye karşı korundu.
- Form alanları 16 piksel (iOS yakınlaştırma düzeltmesi).

## V5.4.17 - Sunucu tarafı (Code.gs)
- getWeeklyBootstrap sonuç kayıtlarını döndürüyor.
- WeekKey ISO hafta biçiminde yazılıyor.
- Kayıt sonrası önbellek temizleniyor.
- thumbnailUrl düzeltildi.
- iframe cevabına X-Frame ayarı eklendi.

## V5.4.16 - QR eşleştirme ve modal uyarılar
- Çoklu kimlik eşleştirme (ID, makine adı, maliyet merkezi, toplam kod).
- Manuel Makine ID girişi kaldırıldı.
- QR hataları modal ekranda gösteriliyor.

## V5.4.15 - QR kamera düzeltmesi
- HTTPS denetimi, kamera düğmeleri, yedek CDN.
- Arka kamera otomatik seçimi.

## V5.4.14 - Operatör durum barı
- Bakımlar numaralı renkli bar olarak gösteriliyor.
- Bekleyen #FFB733, Tamamlanan #99FF99, Red #FF9999.

## V5.4.13 - Bağlantı hızı
- Ortak bağlantı katmanı, paralel istek, önbellek.
- preconnect, logo sıkıştırma, fotoğraf sıkıştırma.
