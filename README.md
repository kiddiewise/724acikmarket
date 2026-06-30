# 724 Açık Market Static Site

Statik HTML/CSS/JS site. Yayın hedefi `https://724acikmarket.com/`; mevcut WordPress sitenin yerine Hostinger/Apache ortamında yayınlanacak.

## Yapı

- `index.html`: İzmir geneli ana landing page.
- `*-acik-market/index.html`: Google Ads ve organik SEO için ilçe landing page'leri.
- `hizmet-bolgelerimiz/`: tüm ilçe sayfalarına bağlantı veren hub.
- `sss/`, `hakkimizda/`, `iletisim/`: destek sayfaları.
- `.htaccess`: HTTPS/canonical host, eski WordPress URL 301 yönlendirmeleri ve 404 tanımı.
- `sitemap.xml` ve `robots.txt`: arama motoru keşfi.

## SEO ve Ads Notları

- Google Ads Excel planındaki final URL'ler sitedeki canonical biçimle slash'lı kullanılmalı: örnek `https://724acikmarket.com/buca-acik-market/`.
- Google Ads tarafında `tekel`, alkol ve tütün çağrışımlı kelimelere teklif verilmez; negatif anahtar kelime listesinde tutulur.
- Organik SEO tarafında `tekel` kelimesi yalnızca yerel kullanım anlamıyla, "gece açık market" bağlamında kullanılır.
- Sayfalarda alkol veya tütün satışı vurgulanmaz.

## Yayına Alma

1. Tüm dosyaları hosting public root dizinine yükle.
2. Apache'de `.htaccess` kullanımının açık olduğundan emin ol.
3. Eski WordPress URL'lerini kontrol et:
   - `/buca-market-siparis-acik-tekel/` → `/buca-acik-market/`
   - `/bornova-7-24-acik-market/` → `/bornova-acik-market/`
   - `/izmir-tekel-market/` → `/`
4. Google Search Console'da `https://724acikmarket.com/sitemap.xml` gönder.
5. Google Ads final URL'lerini slash'lı canonical URL'lerle güncelle.

## Kontrol

- `sitemap.xml` tüm canlı sayfaları içermeli.
- `404.html` bilinmeyen URL'lerde görünmeli.
- Telefon ve WhatsApp CTA'ları çalışmalı.
- Mobil menü ve sticky alt bar görünür olmalı.
