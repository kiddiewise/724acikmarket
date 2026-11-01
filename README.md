# 724 Açık Market — İzmir

Mobil öncelikli statik HTML, CSS ve JavaScript sitesi. Yayın adresi: https://724acikmarket.com/.

## Amaç

Günlük market ihtiyaçları için telefon ve WhatsApp ile sipariş iletişimi. Sitede sepet, hesap veya kredi kartı ödeme formu bulunmaz.

- Telefon: +90 532 364 95 23 (`tel:+905323649523`)
- WhatsApp: `https://wa.me/905323649523`
- Yerel aramalar: İzmir açık market, Buca açık market, Gaziemir açık market, gece açık market.
- Her ilçenin ayrı açıklaması, canonical URL'si, meta description alanı ve JSON-LD WebPage/BreadcrumbList verisi vardır.
- `gece-acik-market/`: gece market aramaları için özgün içerik.
- `robots.txt`, `sitemap.xml` ve Apache yönlendirmeleri korunur.

## Yayınlama

1. Değişiklikleri canlıya almadan önce mobil ve masaüstünde önizleyin.
2. Hostinger üzerinde statik dosyaları yayın dizinine aktarın veya var olan dağıtım sürecinizi kullanın.
3. WhatsApp ve telefon bağlantılarını gerçek cihazda doğrulayın.
4. Google Search Console'da `https://724acikmarket.com/sitemap.xml` adresini yeniden gönderin.
5. Yayına almadan önce hizmet bölgeleri, 7/24 iletişim ve teslimat açıklamalarının işletmenin gerçek koşullarıyla uyumlu olduğunu onaylayın.

## Google Ads

Eski Google Ads etiketi ve dönüşüm onclick işleyicileri tüm HTML sayfalarından kaldırılmıştır. Yeni reklam hesabı etkinleştirilene kadar siteye herhangi bir Ads etiketi eklenmemiştir. Yeni dönüşüm izleme, kullanıcı rızası ve reklam politikaları değerlendirilerek ayrıca entegre edilmelidir. Alkol ve tütün ürünlerinin uzaktan satışı veya reklam politikalarını aşmaya yönelik hedefleme bu projenin kapsamında değildir.

## Dosyalar

- `index.html`: ana sayfa.
- `*-acik-market/index.html`: ilçe sayfaları.
- `gece-acik-market/index.html`: gece market sayfası.
- `hizmet-bolgelerimiz/index.html`: bölge listesi.
- `hakkimizda/`, `sss/`, `iletisim/`: bilgi sayfaları.
- `style.css`: mobil öncelikli tema; `app.js`: erişilebilir mobil menü.
