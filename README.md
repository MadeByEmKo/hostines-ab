# Hostinec AB – Webová prezentace

Moderní web pro **Hostinec Antonín Barták** v Městečku u Nespek.
Postaven na **Astro** frameworku, obsah spravovatelný přes **Decap CMS**.

🌐 **Live**: https://hostinecab.cz  
📦 **Repozitář**: https://github.com/MadeByEmKo/hostines-ab

---

## 🚀 Rychlý start (lokální vývoj)

**Požadavky**: Node.js 18+ a npm

```bash
# Klonovat repozitář
git clone https://github.com/MadeByEmKo/hostines-ab.git
cd hostines-ab

# Instalovat závislosti
npm install

# Spustit vývojový server
npm run dev
# → http://localhost:4321/

# Sestavit produkční verzi
npm run build
```

---

## 📅 Aktualizace denního menu

**Možnost A – přes Decap CMS (doporučeno, bez kódování):**
1. Přejít na `https://vas-web.netlify.app/admin/`
2. Přihlásit se přes GitHub
3. Otevřít „📅 Denní menu" → „Dnešní menu"
4. Upravit datum a položky → **Uložit**
5. Web se automaticky aktualizuje do ~2 minut

**Možnost B – přímou úpravou souboru:**
1. Otevřít `content/daily-menu.md`
2. Upravit sekci mezi `---` (datum, polévky, hlavní jídla)
3. Commitovat a pushnout na `main`

```markdown
---
date: "24. května 2026"
soups:
  - Hovězí vývar | 45 Kč
  - Rajská polévka | 48 Kč
mains:
  - Svíčková na smetaně | 99 Kč
  - Smažený řízek | 99 Kč
---
```

---

## 📷 Přidání fotografií

1. Fotografie uložit do složky `public/images/`
2. Podporované formáty: `.jpg`, `.png`, `.webp`
3. Commitovat a pushnout → automatický deploy

**Nebo přes Decap CMS** → „📷 Fotogalerie" → upload

---

## 🏗️ Struktura projektu

```
hostines-ab/
├── .github/workflows/deploy.yml   # CI/CD – automatický deploy
├── content/
│   └── daily-menu.md              # ← Denní menu (editovat zde)
├── public/
│   ├── images/                    # Fotografie
│   ├── admin/                     # Decap CMS admin panel
│   │   ├── index.html
│   │   └── config.yml             # ← Konfigurace CMS
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro            # Úvod
│   │   ├── menu.astro             # Jídelní & nápojový lístek
│   │   ├── rezervace.astro        # Rezervace
│   │   ├── skupiny.astro          # Skupinové akce
│   │   ├── galerie.astro          # Fotogalerie
│   │   ├── o-nas.astro            # O nás
│   │   └── kontakt.astro          # Kontakt
│   └── styles/
│       └── global.css             # Design systém
├── astro.config.mjs
└── package.json
```

---

## ⚙️ Nastavení deploymentu (Netlify)

1. **Propojit Netlify s GitHub repozitářem**
2. Nastavit build příkaz: `npm run build`
3. Publish directory: `dist`
4. Přidat GitHub Secrets v repozitáři:
   - `NETLIFY_AUTH_TOKEN` – token z Netlify
   - `NETLIFY_SITE_ID` – ID webu z Netlify

**Výsledek**: každý push do `main` → automatický deploy na live web ✅

---

## ✏️ Nastavení Decap CMS

Po nasazení na Netlify:
1. Zapnout **Netlify Identity** v nastavení webu
2. Přejít na `https://vas-web.netlify.app/admin/`
3. Zaregistrovat se s GitHub účtem
4. Nyní máte přístup k admin panelu

---

## 📬 Rezervace – Formspree

Formuláře odesílají přes [Formspree](https://formspree.io):
1. Zaregistrovat se na formspree.io
2. Vytvořit nový formulář → zkopírovat ID (`XXXXXXXX`)
3. V souborech `src/pages/rezervace.astro` nahradit `XXXXXXXX` vlastním ID

---

## 🌿 Git workflow

```bash
# Hlavní větev (produkce = live web)
git checkout main

# Vývojová větev (testování)
git checkout -b develop

# Po otestování mergovat do main
git checkout main
git merge develop
git push origin main   # → automatický deploy
```

---

## 📞 Kontakt & podpora

**Hostinec Antonín Barták**  
Městečko, 257 22 Nespeky  
📞 +420 737 484 116  
✉️ info@hostinecab.cz
