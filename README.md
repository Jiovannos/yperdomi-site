# ΥΠΕΡΔΟΜΗ Ε.Ε. – Static Site (WCAG 2.1 AA)


Απλό static site σε HTML/CSS/JS που στοχεύει συμμόρφωση με WCAG 2.1 AA.


## Περιεχόμενα
- Sticky banner επιδότησης που μένει ορατό στο scroll
- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Skip link, πλοήγηση με πληκτρολόγιο, ορατή εστίαση
- Υψηλό contrast, alt text σε εικόνες, `lang="el"`


## Τοπική προβολή
Χωρίς build: ανοίξτε τα `index.html`, `projects.html`, `contact.html` στον browser ή τρέξτε έναν απλό τοπικό server:


```bash
# Python 3
python -m http.server 8080
# και κατόπιν: http://localhost:8080
```


## (Προαιρετικό) Build/Minify σε φάκελο `dist/`
Αν θέλετε minify για παραγωγή:


```bash
npm init -y
npm i -D html-minifier-terser csso-cli uglify-js cpy-cli


mkdir dist
npx cpy assets css js legal *.html sitemap.xml robots.txt dist/ --parents
npx html-minifier-terser --collapse-whitespace --remove-comments --minify-css true --minify-js true -o dist/index.html index.html
npx html-minifier-terser --collapse-whitespace --remove-comments --minify-css true --minify-js true -o dist/projects.html projects.html
npx html-minifier-terser --collapse-whitespace --remove-comments --minify-css true --minify-js true -o dist/contact.html contact.html
npx html-minifier-terser --collapse-whitespace --remove-comments --minify-css true --minify-js true -o dist/legal/accessibility-statement.html legal/accessibility-statement.html
npx csso css/styles.css -o dist/css/styles.css
npx uglifyjs js/main.js -o dist/js/main.js -c -m
```


Μετά το build, ανεβάζετε τον φάκελο `dist/`.


## Ανέβασμα με χαμηλό κόστος


### Επιλογή 1: GitHub Pages (δωρεάν)
1. Δημιουργήστε repo στο GitHub και ανεβάστε τα αρχεία.
2. Settings → Pages → Branch: `main`, Folder: `/root` (ή `/docs`).
3. Περιμένετε να δημοσιευτεί το site στο `https://<username>.github.io/<repo>/`.


### Επιλογή 2: Cloudflare Pages (δωρεάν)
1. Συνδέστε το repo στο Cloudflare Pages.
2. Framework: None. Build command: *κανένα* (ή τα παραπάνω αν κάνετε build). Output: `/` ή `dist/`.
3. Παίρνετε δωρεάν CDN και SSL.


### Επιλογή 3: Netlify (δωρεάν plan)
- Drag & Drop τον φάκελο του site στη σελίδα του Netlify ή συνδέστε repo. Output dir: `/` ή `dist/`.


### Custom domain
- Αγορά domain (π.χ. Namecheap/Cloudflare) και το συνδέετε στο Pages/Netlify. Κόστος συνήθως ~10–15€/έτος.


## Έλεγχος προσβασιμότητας
- Περάστε κάθε σελίδα από validator (π.χ. όπως ζητήθηκε) επιλέγοντας WCAG 2.1 AA.
- Κάντε χειροκίνητους ελέγχους: TAB-only πλοήγηση, ανάγνωση με screen reader, έλεγχος contrast.


## Αντικατάσταση banner
- Αντικαταστήστε το `assets/banner-program.svg` με το επίσημο banner που θα σας δοθεί, κρατώντας κατάλληλο `alt`.


## Περιεχόμενο
- Επεξεργαστείτε τα κείμενα στις σελίδες για τα πραγματικά στοιχεία της εταιρείας (διεύθυνση/τηλέφωνο/email).