# Haftalık Bakım CMMS V5.4.6

## QR eşleştirme düzeltmesi
- QR metnindeki boşluk, satır sonu ve kontrol karakterleri temizlenir.
- URL-encoded değer iki aşamaya kadar çözülür.
- Düz MachineID, URL parametresi, JSON, `MachineID=...`, `row=...` ve satır ayrılmış QR içerikleri desteklenir.
- Karşılaştırmada büyük/küçük harf, tire, boşluk ve noktalama farkları normalize edilir.
- Hatalı etikette beklenen ve okunan değer kullanıcıya gösterilir.
- Doğru eşleşmede kamera durdurulur ve bakım listesi açılır.
