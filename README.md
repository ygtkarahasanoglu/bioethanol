# Bitenol — Tanıtım Sitesi

Bitenol masaüstü biyoetanol şöminesi için tek sayfalık premium tanıtım/marka sitesi. Statik, tek dosyalık HTML (CSS ve JS gömülü) — build adımı yok, herhangi bir statik hosting (GitHub Pages, Vercel, Netlify, cPanel) üzerinde çalışır.

## Yerelde çalıştırma

```bash
python3 -m http.server 8000
```

sonra `http://localhost:8000` adresini açın.

## Yapı

```
index.html                       Tek dosya — head'de <style>, body sonunda <script> gömülü.
                                  TR/EN içerik data-tr / data-en attribute'larıyla (JS ile anlık dil geçişi).
assets/img/                      Ürün fotoğrafları (üretim numunesi, yerini profesyonel çekimler almalı)
assets/video/bitenol-flame.mp4   Hero'daki gerçek ürün videosu — yalnızca renk/ışık düzenlemesi yapılmıştır (bkz. TODO)
```

Harici bağımlılıklar (CDN üzerinden yüklenir): Google Fonts (Fraunces + Manrope), Tailwind CDN script (yalnızca yapısal utility sınıfları için — tüm renk/tema kendi CSS custom property'lerinden gelir).

## Deploy

Herhangi bir statik host'a uygundur. Örnek — GitHub Pages:
Settings → Pages → Branch: `main` / root.

Vercel/Netlify: repoyu bağlayın, build command yok, output directory `/`.

## Yapılacaklar (TODO — canlıya almadan önce)

- [ ] `index.html` içindeki `info@bitenol.com` gerçek iletişim e-postasıyla değiştirilmeli.
- [ ] "Nerede Satın Alınır" bölümündeki Trendyol/Etsy/Amazon kartları, listelemeler canlıya alındıkça gerçek linklere bağlanmalı.
- [ ] `assets/img/` altındaki 4 fotoğraf, üretim atölyesinde çekilmiş ham numune fotoğraflarıdır — pazar araştırması raporunun Fotoğrafçılık Stratejisi bölümündeki 10 görsellik profesyonel çekim seti tamamlandığında değiştirilmelidir.
- [ ] `assets/video/bitenol-flame.mp4`: gerçek ürün videosudur, yalnızca ortam ışığı/rengi düzenlenmiştir (arka plandaki kişiler bilinçli olarak karartılmıştır — sahte/AI üretimi bir sahne değildir). Dış mekan (veranda/bahçe) videosu henüz yok; gerçek dış mekan çekimi geldiğinde eklenmelidir.
- [ ] Güvenlik bölümündeki metin kasıtlı olarak temkinli yazıldı (sertifikasyon/test süreci devam ediyor ifadesi) — bağımsız laboratuvar testi ve ASTM F3363-19 incelemesi tamamlanmadan bu metin genişletilip "güvenlidir" gibi kesin bir iddiaya dönüştürülmemeli.
- [ ] Kişiselleştirme sistemi gerçekten hazır olduğunda "yakında" notu kaldırılıp sipariş akışı eklenmeli.
- [ ] Özel alan adı (domain) bağlanmalı.
- [ ] Google Analytics / basit bir ziyaretçi ölçümü eklenmek istenirse ayrıca konuşulmalı (KVKK/çerez bildirimi gerektirir).
