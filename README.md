# Bitenol — Tanıtım Sitesi

Bitenol masaüstü biyoetanol şöminesi için tek sayfalık tanıtım/marka sitesi. Statik HTML/CSS/JS — build adımı yok, herhangi bir statik hosting (GitHub Pages, Vercel, Netlify, cPanel) üzerinde çalışır.

## Yerelde çalıştırma

```bash
python3 -m http.server 8000
```

sonra `http://localhost:8000` adresini açın.

## Yapı

```
index.html          Tek sayfa, TR/EN içerik data-tr / data-en attribute'larıyla
assets/css/style.css
assets/js/main.js    Dil geçişi (localStorage'da hatırlanır) + mobil menü
assets/img/          Ürün fotoğrafları (üretim numunesi, yerini profesyonel çekimler almalı)
```

## Deploy

Herhangi bir statik host'a uygundur. Örnek — GitHub Pages:
Settings → Pages → Branch: `main` / root.

Vercel/Netlify: repoyu bağlayın, build command yok, output directory `/`.

## Yapılacaklar (TODO — canlıya almadan önce)

- [ ] `index.html` içindeki `info@bitenol.com` gerçek iletişim e-postasıyla değiştirilmeli.
- [ ] "Nerede Satın Alınır" bölümündeki Trendyol/Etsy/Amazon kartları, listelemeler canlıya alındıkça gerçek linklere bağlanmalı.
- [ ] `assets/img/` altındaki 4 fotoğraf, üretim atölyesinde çekilmiş ham numune fotoğraflarıdır — pazar araştırması raporunun Fotoğrafçılık Stratejisi bölümündeki 10 görsellik profesyonel çekim seti tamamlandığında değiştirilmelidir.
- [ ] Güvenlik bölümündeki metin kasıtlı olarak temkinli yazıldı (sertifikasyon/test süreci devam ediyor ifadesi) — bağımsız laboratuvar testi ve ASTM F3363-19 incelemesi tamamlanmadan bu metin genişletilip "güvenlidir" gibi kesin bir iddiaya dönüştürülmemeli.
- [ ] Kişiselleştirme sistemi gerçekten hazır olduğunda "yakında" notu kaldırılıp sipariş akışı eklenmeli.
- [ ] Özel alan adı (domain) bağlanmalı.
- [ ] Google Analytics / basit bir ziyaretçi ölçümü eklenmek istenirse ayrıca konuşulmalı (KVKK/çerez bildirimi gerektirir).
