# BusinessHandler

BusinessHandler ist ein klickbarer Mobile-Prototyp einer ruhigen, hellen
Fintech-Oberfläche mit den drei zentralen Screens **Dashboard**,
**Money Management** und **Time Management**. Alle Werte stammen aus statischen
Beispieldaten im Code — die App läuft vollständig ohne Backend und ohne
Netzwerkzugriff. Das Erscheinungsbild folgt den Figma-Frames (414×896, Phone,
Porträt): flieder-grauer Grund `#F4F5FA`, weiße Karten, grüner Akzent
`#6CC57C` und dunkelblauer Text `#23233C`.

## Tech Stack

- **Language**: TypeScript
- **Framework**: React Native
- **Runtime**: Expo (SDK 57)
- **Navigation**: React Navigation (Bottom Tabs)
- **Icons**: `@expo/vector-icons`
- **Tests**: Jest mit `jest-expo` und `@testing-library/react-native`

## Installation

```bash
npm install
```

## Entwicklung / Start

Auf Gerät oder Simulator (Expo Go oder Native Build):

```bash
npm start          # Expo Dev Server, dann a/i/w für Android/iOS/Web
npm run android    # Android-Simulator
npm run ios        # iOS-Simulator (macOS)
npm run web        # Web
```

## Web-Build (Produktion)

```bash
npm run build      # expo export --platform web → Ausgabe in dist/
```

Das statische Ergebnis liegt danach in `dist/` und kann mit einem beliebigen
Static-Server ausgeliefert werden, z. B.:

```bash
npx serve dist
```

## Tests

```bash
npm test
```

## Features

- **Dashboard** (Initial-Tab): Demo-Button, der beim Tippen den sichtbaren
  Text umschaltet (Ziel des App-Skeletts).
- **Money Management**: Stub-Screen für die Transaktionsliste.
- **Time Management**: Stub-Screen für die Zeiterfassungsliste.
- **Bottom-Tab-Navigation** zwischen den drei Screens.
- Einheitliches Design über zentral definierte Tokens (`src/theme.ts`).
