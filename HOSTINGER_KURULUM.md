# Hostinger Temiz Kurulum Kontrol Listesi

## 1 — Doğru siteyi seç
- hPanel > Web Siteleri > **gecemarketservis.com.tr** > Yönet.
- Diğer domain olan **724acikmarket.com** kesinlikle seçilmemeli.
- Hedef dizini kontrol et: genellikle `domains/gecemarketservis.com.tr/public_html`.

## 2 — Eski WordPress yedeği
- Hostinger > Dosyalar > Yedekler: uygun güncel tam yedeği indir.
- `public_html` içeriğini ayrıca arşivle ve indir.
- Mevcut WordPress MySQL veritabanının yedeğini indir.
- Alan adı e-posta hesabı ve DNS kayıtlarını kontrol et.
- Yedek açılabilir ve geri yüklenebilir durumda olmadan silme işlemine geçme.

## 3 — Eski WordPress dosyalarını temizle
- Dosya Yöneticisi'nde `gecemarketservis.com.tr` için `public_html` yolunu aç.
- Yedeklerden sonra o domaine ait WordPress dosyalarını sil: `wp-admin`, `wp-includes`, `wp-content`, `wp-config.php`, `index.php` vb.
- WordPress'e ait eski `.htaccess` dosyası yeni paketteki `.htaccess` ile değiştirilecek.
- Siteyi hPanel'den tamamen **Delete website** ile kaldırmak şart değildir; böylece domain/e-posta ayarlarının yanlışlıkla silinme riski azaltılır.
- Eski MySQL veritabanını tamamen silmek zorunlu değil; yedekten sonra sadece doğru veritabanı olduğundan emin olduğunda kaldır.

## 4 — Yeni statik siteyi yükle
- `gecemarketservis-site.zip` dosyasını `public_html` içine yükle ve **buraya çıkar**.
- Çıkarma sonrasında `public_html/index.html`, `public_html/style.css`, `public_html/app.js`, `public_html/.htaccess`, `public_html/assets/` ve ilçe klasörleri doğrudan mevcut olmalı.
- Dışarıdaki üst `gecemarketservis-site` klasörü içinde kalmamalı.
- Zip'i istersen yükleme sonunda silebilirsin.

## 5 — Test et
- https://gecemarketservis.com.tr/
- https://gecemarketservis.com.tr/buca-acik-market/
- https://gecemarketservis.com.tr/gaziemir-acik-market/
- https://gecemarketservis.com.tr/gece-acik-market/
- https://gecemarketservis.com.tr/sitemap.xml
- Telefon: +90 532 364 95 23
- WhatsApp: wa.me/905323649523
- Eski WP sayfaları yeni ilçe sayfalarına 301 yönlenmeli.
- Telefonda menü, sabit iletişim butonları ve görselleri kontrol et.
- Google Search Console'a sitemap'i gönder.

## 6 — Google Ads
Yeni reklam hesabını oluşturduktan sonra telefon/WhatsApp tıklamaları için yeni ölçüm kodunu ayrıca ekle. Eski Google Ads etiketini kullanma.
