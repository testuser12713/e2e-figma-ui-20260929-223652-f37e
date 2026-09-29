# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Ruhige, helle Fintech-Mobile-Oberfläche aus den Figma-Frames: flieder-grauer Grund #F4F5FA mit weißen Karten und sehr weichen Schatten, grüner Akzent #6CC57C für Header-Flächen, Primär-Buttons und den FAB-Verlauf, Dunkelblau #23233C für Text und Kontrastflächen, Beträge und Überschriften in Aleo, Fließtext in Inter/Ubuntu.

## Colors

- `--color-bg`: **#F4F5FA**
- `--color-bg-alt`: **#F4F4F4**
- `--color-bg-tint`: **#ECF1FA**
- `--color-surface`: **#FFFFFF**
- `--color-fg`: **#23233C**
- `--color-fg-strong`: **#1C1C1C**
- `--color-fg-on-accent`: **#FFFFFF**
- `--color-accent`: **#6CC57C**
- `--color-accent-dark`: **#179F2F**
- `--color-accent-soft`: **#61D27C**
- `--color-accent-translucent-20`: **#61D27C33**
- `--color-accent-translucent-47`: **#6CC57C78**
- `--color-accent-translucent-64`: **#6CC57CA3**
- `--color-accent-translucent-85`: **#6CC57CD9**
- `--color-on-accent`: **#FFFFFF**
- `--color-contrast`: **#23233C**
- `--color-muted`: **#A5A5A5**
- `--color-muted-soft`: **#B4B4B4**
- `--color-border`: **#707070**
- `--color-tab-inactive`: **#BBC7DB**
- `--color-indigo`: **#181461**
- `--color-ink`: **#2B2B2B**
- `--color-divider-hairline`: **#1C1C1C33**
- `--color-divider-soft`: **#7070702E**
- `--color-divider-warm`: **#C48B302E**
- `--color-dot-inactive`: **#E3E3E3**
- `--color-avatar-fallback`: **#DCE5F4**
- `--color-facebook`: **#0F279E**
- `--color-error`: **#C48B30**
- `--color-success`: **#179F2F**

## Typography

- `font_family`: Aleo, Georgia, 'Times New Roman', serif
- `font_family_body`: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- `font_family_alt`: Ubuntu, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `font_family_form`: Actor, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `text-25`: Aleo 700 25px/30px
- `text-24`: Aleo 700 24px/29px
- `text-17`: Ubuntu 700 17px/20px
- `text-16`: Aleo 700 16px/19px
- `text-16-alt`: Inter 400 16px/19px
- `text-15`: Inter 400 15px/19px / Ubuntu 400 15px/20px ls 0.4px
- `text-14`: Aleo 700 14px/17px
- `text-14-alt`: Inter 400 14px/17px
- `text-13`: Inter 400 13px/17px / Ubuntu 400 13px/15px ls 0.3px
- `text-12`: Inter 100 12px/15px ls 2.4px uppercase
- `text-12-alt`: Inter 400 12px/14px
- `text-11`: Aleo 700 11px/12px ls 0.3px / Ubuntu 700 11px/12px
- `text-10`: Inter 400 10px/13px / Ubuntu 400 10px/12px
- `text-9`: Inter 100 9px/11px uppercase
- `text-7`: Aleo 700 7px/5px
- `label-style`: Inter 100 12px/15px, letter-spacing 2.4px, UPPERCASE

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 40px
- `--space-6`: 56px

## Border-Radii

- `--radius-sm`: 3px
- `--radius-md`: 5px
- `--radius-lg`: 8px
- `--radius-xl`: 10px
- `--radius-2xl`: 12px
- `--radius-3xl`: 18px
- `--radius-card`: 20px
- `--radius-pill`: 999px

## Components

### Button / Primary (Filled)

Frames 'Money Management 3', 'Time Management', 'Time Management - 3', 'Login'. Size 334-336×43 (volle Inhaltsbreite) bzw. 333×54 im Login, radius 5 (Login: 18), fill=accent #6CC57C, shadow 0/3 blur 16 #00000014, Label zentriert: 'Inter 400 16px/19px', fill #FFFFFF. Beispiele: 'Add Expense', 'Add a new appointment' (#6CC57C), 'Overview' (#6CC57CD9, 85% Deckkraft), 'Login' ('Aleo 700 20px/25px' auf #23233C, radius 18). Touch-Ziel min-height 44px, horizontaler Innenabstand 24px. States (nicht in den Frames: im Frame-Stil ergänzt): default s.o.; hover = accent um 8% abgedunkelt #5FBA70, Schatten bleibt; active/pressed = #179F2F, Label bleibt #FFFFFF, kein Skalieren, shadow entfernt; disabled = fill #6CC57C mit opacity 0.45, Label #FFFFFF opacity 0.9, kein Schatten, nicht fokussierbar.

### Button / Secondary (Ghost / Link)

Aus 'Login': 'sign up' = 'Aleo 700 13px/17px' #898888; 'Skip step' = 'Inter 400 15px/19px' #B4B4B4; 'Modify' in 'Time Management' = 'Aleo 700 14px/17px' #23233C mit 12×12 Pencil-Icon (noun-pencil-2174975), Trefferfläche 44px hoch. States (ergänzt): hover = Text #23233C; active = #1C1C1C + opacity 0.7; disabled = #BBC7DB, keine Unterstreichung.

### Button / Icon (Back, Menu, Kebab)

Back-Chevron 'noun-back-1227057' 11×18 bei [22,25] bzw. [40,29], Farbe #181461; Menü 'noun_menu_933312' 18×15 #181461 bei [20,33]; Header-Icon 'icon-32x32' 32×32 auf 43×43 dunkler Fläche (#23233C, radius 12) bei [40,55]; Kebab 'noun_dots_1215210' 3×14 aus drei Ellipsen 3×3 #23233C. Trefferfläche immer 44×44 (unsichtbar gepolstert), Icon zentriert. States (ergänzt): default wie oben; hover = opacity 0.7; active = opacity 0.5; disabled = #BBC7DB.

### Floating Add Button (FAB)

Aus 'Money Management' und 'Money Management 2': Ellipse 64×63, zentriert bei x=179 über der Bottom Tab Bar (y=778), fill linear-gradient(180deg, #6CC57C 0%, #179F2F 100%), stroke 4px #FFFFFF innen (Weißring trennt ihn von der Tab-Bar), shadow 0/3 blur 40 #00000029. Plus-Zeichen als zwei weiße Linien: 1×20 (3px stroke #FFFFFF) und 20×1 (3px stroke #FFFFFF), gekreuzt bei [212,799] bzw. [203,808]. States (ergänzt): hover = Gradient +8% Helligkeit; active = Gradient #5FBA70→#0F8A26, kein Schatten; disabled = opacity 0.5.

### Bottom Tab Bar

Höhe 77px, volle Breite 413-414, y=819 (bzw. 778 mit hochgezogenem FAB-Ausschnitt), fill #FFFFFF, shadow 0/3 blur 20 #60719329, oben gerundeter Ausschnitt für den FAB. 5 Slots: 'Home' (noun_Home_1191731, 22×21), 'Products' (shop, 19×19), FAB-Slot (Mitte), 'Liked' (noun_Favorite_1481179, 20×18), 'Today' (Icon feather-user-check, 15×18); Icons und Labels in #BBC7DB, Labels 'Aleo 700 7px/5px'. Aktiver Tab = #6CC57C für Icon und Label, Trefferfläche je Slot ≥ 44px hoch, Safe-Area unten bleibt weiß.

### Screen Header

Variante A ('Time Management', 'Money Management'): transparent auf bg, Höhe 27px bei y=25, links Back-Chevron 11×18 #181461, rechts 'noun_User_1335326' 27×27 #23233C, Seite 40px. Variante B (Formularscreens 'Money Management 3', 'Time Management - 3'): weiße Fläche 414×126-138, shadow 0/3 blur 16 #0000001A, links Menü-Icon 18×15 #181461, rechts User-Icon 27×27 #181461, Titel darunter bei x=18: 'Aleo 700 24px/29px' #23233C ('Add an appointment'). Variante C (Money Management 2, Money Management 3): zentrierter Screentitel 'Inter 100 14px/18px, letter-spacing 2.8px, UPPERCASE' #000000, links das 32×32-Icon auf dunkler Fläche.

### Screen Title / Section Heading

'My Appointments' [39,80] = 'Aleo 700 16px/19px' #1C1C1C; 'Add an appointment' = 'Aleo 700 24px/29px' #23233C; große Zahlen: '1,345.00€' [49,298] = 'Inter 500 45px/57px' #000000; 'Welcome' = 'Aleo 700 40px/51px' #23233C zentriert; Slide-Titel 'Aleo 700 25px/30px' #23233C links bzw. #6CC57C zentriert. Abstand Titel → Inhalt 24-36px gemäß Frames (39,80 → Suche 116).

### Section Label / Eyebrow

'MONTHLY EXPENSES' [49,282] = 'Inter 100 12px/15px', letter-spacing 2.4px, UPPERCASE, #000000; 'Quick Categories' [137,487] und 'Weekly report' [129,61] als 'Inter 100 12px/15px' bzw. 'Inter 100 14px/18px' mit letter-spacing 2.8px, UPPERCASE, zentriert. Nie fett, nie in Akzentfarbe; immer direkt über dem zugehörigen Wert/Titel.

### Card / Panel (Quick Categories, Dashboard-Übersicht)

'Quick Categories' [45,453 330×276] fill #FFFFFF, radius 20, kein/kaum Schatten auf #F4F4F4-Bg, Innenabstand 24px: Eyebrow zentriert bei y+34, darunter 2 Reihen à 3 Slots 55×55, Abstand horizontal 50px, vertikal 37px. Kategorien-Slots: fill #FFFFFF, stroke 1px #000000 dashed innen, radius 12 (Reihe 1 links) bzw. 0 (Reihe 1 mittig/rechts, wie im Frame), Icon 36-42px #000000 zentriert (home-icon, dish-spoon-knife, briefcase, friends, shopping-bag, gas-station).

### Stat Card / Dashboard-Kennzahl

Aus 'Dashboard Stats' und 'Money Management': Kennzahl-Karte mit großem Wert 'Inter 500 45px/57px' #000000 (bzw. 'Aleo 700 25px/30px' für Sekundärwerte), Eyebrow-Label darüber ('Inter 100 12px/15px' ls 2.4px), optional Trend-Badge (radius pill, #6CC57C auf #FFFFFF60 bzw. #23233C auf #FFFFFF). Platzierung im 336px-Raster, Kartenabstand 16px, Innenabstand 24px, radius 20, fill #FFFFFF auf bg #F4F5FA.

### List Row / Transaction (Money Management 2)

Zeile 326×83: links runde Icon-Kachel 53×53 (fill #FFFFFF, radius 8, Illustration zentriert), Mitte bei x=103 Eyebrow 'Inter 100 9px/11px' ls 1.8px UPPERCASE #000000 (z.B. 'MOVIE'), Titel 'Inter 100 12px/15px' #000000, darunter 'Inter 100 9px/11px' UPPERCASE #000000 ('02- MONDAY'); rechts bündig Betrag 'Inter 100 14px/18px' #000000 ('23.00€'). Keine Trennlinien; Zeilenabstand 30px; Trefferfläche volle Zeilenbreite, min-height 44px. States (ergänzt): hover = Zeile #F4F5FA; active = #ECF1FA; disabled = opacity 0.5.

### List Row / Appointment (Time Management)

Zeile 337×57: oben links Datum 'Inter 400 12px/22px' #1C1C1C mit opacity 0.4 ('09/04/2020'); darunter Titel 'Aleo 700 14px/17px' #1C1C1C ('Dentist - Clara Odding') mit 12×12 Info-Icon #23233C (noun-info-1174604) direkt dahinter; rechts 'Modify' 'Aleo 700 14px/17px' #23233C mit Pencil-Icon 12×12; unter jeder Zeile Hairline 336×1, stroke 0.5px #1C1C1C opacity 0.2. Zeilenabstand 72px (y 244/316/388). States (ergänzt): pressed = Grund #F4F5FA; disabled = opacity 0.5.

### List Row / Quick Add (Time Management - 3)

Zeile 336×90: links Bild-Avatar 69×69 (radius 8, asset 'image-69x69.png'), Text bei x=121: Titel 'Aleo 700 14px/17px' #1C1C1C ('Gym'), darunter 'Inter 400 12px/14px' #1C1C1C opacity 0.4 ('Customize Plan'); rechts Kebab-Menü (3 Punkte 3×3 #23233C, Abstand 5px) bei x=372; Hairline 336×1, stroke 0.5px #1C1C1C opacity 0.2 unter jeder Zeile. Zeilenraster 109px.

### Timeline Event Card (Time Management - 2)

Terminkarte 286×118 bei x=94, fill #6CC57CA3 (Akzent 64%), radius 0 (Frames zeigen eckige Kanten), Innenabstand 20px: Titel 'Ubuntu 700 11px/12px' #23233C ('Work'), Beschreibung 'Ubuntu 400 10px/12px' #000000 opacity 0.42 ('Besprechung'), Zeit-Chip mit Clock-Icon 11×11 #23233C und 'Ubuntu 700 7px/10px' #23233C ('10AM - 11AM'); rechts Teilnehmerbild rund, 56×56, weißer Ring. Links davon Zeitspalte: 'Aleo 700 11px/12px' ls 0.3px #000000 ('10 AM'), darunter Hairline 22×1 stroke 1px #707070 opacity 0.18. Unterkante der Karte: Hairline stroke 1px #C48B30 opacity 0.18. Vertikaler Abstand zwischen Karten 17px.

### Calendar Strip (Time Management - 2)

Obere weiße Fläche 414×268 (stroke 1px #707070 innen), darunter Fläche #F4F5FA ab y=268. Titel 'My Appointments' 'Ubuntu 700 17px/20px' #000000 zentriert bei y=52. Monatsnavigation [98,121 209×19]: Pfeile 8×14 #000000 (icon-8x14 / icon-8x14-2) außen, dazwischen '15-21 April 2019' 'Ubuntu 400 13px/15px' #000000, zentriert. Wochentagszeile y=175: 'S M T W T F S' 'Ubuntu 400 13-15px' #000000, gleichmäßig verteilt (x 36/86/140/192/250/302/354). Zahlenzeile y=223 mit gewähltem Tag: Ellipse 42×42 fill #6CC57C bei [181,213], Zahl darin 'Ubuntu 400 15px/20px' #000000, nicht gewählte Tage ohne Hintergrund. Darunter ein Chevron 10×6 #000000 in weißem Feld 164×34 [120,266] als Griff zur Liste.

### Tabs (Upcoming / Past)

'Time Management' [39,194 336×38]: links 'Upcoming' 'Aleo 700 16px/19px' #23233C aktiv, rechts 'Past' 'Inter 400 16px/19px' #1C1C1C rechtsbündig; darunter Baseline 336×1, stroke 0.5px #1C1C1C opacity 0.2; die aktive Unterstreichung ist eine Linie 51×2 fill #23233C auf der Baseline. States (ergänzt): inaktiv = #1C1C1C mit opacity 0.55 und ohne Unterstreichung; hover = #23233C; Trefferfläche je Tab ≥ 44px hoch.

### Input / Search Field

'Search' 334×43, fill #FFFFFF, radius 5-8 (Frames: eckige Rahmen mit sehr leichtem Radius), shadow 0/3 blur 16 #00000014, Innenabstand links 16px; Placeholder-Text bei x+38 ('Name', 'Beschreibung', 'Amount', 'Select Date', 'Search') in 'Inter 400 16px/19px' #1C1C1C bzw. #1C1C1C opacity 0.2 im Suchfeld, Links-Icon 14-16px #23233C bei x+16 (noun_Search_860389, noun_Map_2404959, icon-15x16). Feldabstand vertikal 21-63px gemäß Frame (Formularfelder 63px, kompakt 21px). States (nicht in den Frames, ergänzt): default fill #FFFFFF; hover fill #FFFFFF + shadow 0/3 blur 20 #0000001F; focus fill #FFFFFF, Border 1px #6CC57C, Text #1C1C1C; disabled fill #F4F4F4, Text #A5A5A5; error Border 1px #C48B30.

### Avatar / Badge

Profil-Avatar 51×51 rund, fill #6CC57C, Buchstabe 'R' 'Aleo 700 32px/41px' #FFFFFF zentriert, shadow 0/3 blur 6 #00000029 (Header 'Money Management'). Kategorien-Avatar 56×56 rund mit weißem Ring über der Timeline-Karte. Fallback ohne Bild: fill #DCE5F4 mit Initiale in 'Aleo 700 14px/17px' #23233C. Trend-Badge: radius pill, Innenabstand 4/8px, 'Inter 400 10px/13px'.

### Bar Chart (Weekly Report)

'Money Management 2': 7 Säulen 12-14px breit, x bei 74/122/170/.., y=110, Höhe 218-238px, zweigeteilt: unterer Teil fill #6CC57C (expenses), oberer Teil fill #2B2B2B (deposit), dazwischen ein Abschnitt #E3E3E3 als Restwert; Hintergrund der Säule #F4F4F4. Legende bei [74,358]: Kästchen 13×13 (fill #6CC57C, radius 3) + 'expenses' und Kästchen 13×13 (fill #2B2B2B, radius 3) + 'deposit', Labels 'Inter 100 9px/11px' UPPERCASE #000000. Keine Achsen, keine Gitterlinien.

### Illustration / Empty Slot Area

Die Frames nutzen exportierte Assets statt gezeichneter Formen: 'illustration-525x387.png' (Money Management Header, 525×387, oben beschnitten), 'illustration-256x218.png' (Weekly Report), 'illustration-53x53.png' bis '-4' (Transaktions-Kacheln), 'gruppe-maskieren-2.png' (Login-Kopf), 'jo-sonn-...unsplash.png' und 'undraw-workout-gcgu.png' (Onboarding). Diese Dateien aus 'design/figma/assets/' einbinden, nicht nachbauen. Icons, die Figma leer rendert (home-icon, dish-spoon-knife, briefcase, friends, shopping-bag, gas-station, shop, noun_Favorite_1481179, noun_Search_860389, noun_Map_2404959, noun_menu_933312, noun_filters_1245150, check, view, clock) als schlichte 1.5px-Linienicons in #23233C bzw. #000000 nachziehen — passend zur Icon-Sprache der übrigen Frames, keine Illustration.

## Layout Principles

- Ein Viewport, nicht responsive: 414×896 px, Porträt, Phone — exakt die Figma-Frame-Größe; keine Desktop-Breakpoints, kein max-width-Container, keine Top-Navigation.
- Horizontaler Grundrand 39-41px, Inhaltsbreite 334-336px; alles (Karten, Buttons, Suchfelder, Listen) richtet sich auf dieses Raster aus.
- Vertikaler Rhythmus aus den Frames: Screen-Titel bei y=80/126, Suchfeld bei y=116/149, Tabs bei 194, erste Listenzeile bei 244, damit 16-24px zwischen Blöcken und 12-16px zwischen Card- und Textblöcken.
- Feste Bottom Tab Bar 77px hoch am unteren Rand (y=819), weiß mit shadow 0/3 blur 20 #60719329; der FAB 64px sitzt zentriert darüber, überlappt die Bar mit einem weißen 4px-Ring und bleibt auf allen drei Screens an derselben Position.
- Screens stapeln sich; Unterscreens (Add Expense, Add Appointment) öffnen über das dunkle 32×32-Icon im Header und werden mit dem Back-Chevron geschlossen — kein Modal-Look, eigenständige Screens.
- Karten: fill #FFFFFF auf bg #F4F5FA, radius 20 (große Panels) bzw. 5-12 (Felder, Slots, Buttons); Schatten sehr zurückhaltend (0/3 blur 16 #00000014, 0/3 blur 20 #60719329, 0/10 blur 10 #0D4E810D).
- Viel Weißraum: unter der letzten Listenzeile bleiben 60-100px leer, Buttons stehen allein in ihrem Block; keine verdichteten Layouts.
- Safe Areas: oben 25-33px Rand (Statusbar-Freiraum laut Frames), unten wird die Tab Bar nicht von Systemgesten überdeckt; Bildschirminhalt scrollt unter der Tab Bar durch.
- Schrift-Hierarchie strikt nach Frame-Styles: Aleo 700 nur für Überschriften, Beträge und aktive Labels; Inter 100/400 für Eyebrows, Fließtext und Beschreibungen; Ubuntu nur in den Kalender-/Timeline-Screens — nicht mischen.
- Akzentregel: #6CC57C ist die einzige Aktionsfarbe (Primär-Button, aktiver Tag, Timeline-Karte, FAB, aktiver Tab); sie markiert nie Dekoration. Kontrastflächen und Kopf-Icons nutzen #23233C, inaktive Tabs und Legenden/Disabled #BBC7DB.

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them. Each frame's spec carries its exact positions, sizes, colours, fonts and texts; `design/figma/README.md` is the index.

Platform: mobile app (`mobile-app`) — design viewport 414×896 (phone, portrait) — one viewport, the design is not responsive.

- **Money Management** · businesshandler — spec `design/figma/money-management.md` — `design/figma/money-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2446
- **Money Management 2** · businesshandler — spec `design/figma/money-management-2.md` — `design/figma/money-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2573
- **Money Management 3** · businesshandler — spec `design/figma/money-management-3.md` — `design/figma/money-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2673
- **Time Management** · businesshandler — spec `design/figma/time-management.md` — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Time Management - 2** · businesshandler — spec `design/figma/time-management-2.md` — `design/figma/time-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-3047
- **Time Management - 3** · businesshandler — spec `design/figma/time-management-3.md` — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **Login** · businesshandler — spec `design/figma/login.md` — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide** · businesshandler — spec `design/figma/login-slide.md` — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login Slide 2** · businesshandler — spec `design/figma/login-slide-2.md` — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Dashboard** · businesshandler — spec `design/figma/dashboard.md` — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Dashboard Menu** · businesshandler — spec `design/figma/dashboard-menu.md` — `design/figma/dashboard-menu.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2973
- **Dashboard Stats** · businesshandler — spec `design/figma/dashboard-stats.md` — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
