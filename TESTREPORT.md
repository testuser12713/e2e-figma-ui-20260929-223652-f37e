VERDICT: UNVERIFIED

No product step executed in the deterministic run — app origin. Nothing here is evidence about the product; the run could not look.

--- TEST REPORT (deterministic run) ---
## Stack: web-vite @ .
### npm install (reuse deps) (exit 0)
removed 3 packages in 1s

npm warn ERESOLVE overriding peer dependency
npm warn While resolving: react-reconciler@0.34.0
npm warn Found: react@19.2.3
npm warn node_modules/react
npm warn   react@"19.2.3" from the root project
npm warn   31 more (@expo/devtools, @expo/dom-webview, @expo/log-box, ...)
npm warn
npm warn Could not resolve dependency:
npm warn peer react@"^19.3.0" from react-reconciler@0.34.0
npm warn node_modules/test-renderer/node_modules/react-reconciler
npm warn   react-reconciler@"~0.34.0" from test-renderer@1.3.0
npm warn   node_modules/test-renderer
npm warn
npm warn Conflicting peer dependency: react@19.3.0
npm warn node_modules/react
npm warn   peer react@"^19.3.0" from react-reconciler@0.34.0
npm warn   node_modules/test-renderer/node_modules/react-reconciler
npm warn     react-reconciler@"~0.34.0" from test-renderer@1.3.0
npm warn     node_modules/test-renderer

### npm test (exit 0)
> businesshandler@1.0.0 test
> jest --passWithNoTests


PASS src/__tests__/DashboardScreen.test.tsx
PASS src/__tests__/MoneyScreen.test.tsx
PASS src/__tests__/TimeScreen.test.tsx
PASS src/__tests__/App.test.tsx

Test Suites: 4 passed, 4 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        2.472 s
Ran all test suites.

### npm run build (exit 0)
> businesshandler@1.0.0 build
> expo export --platform web

Starting Metro Bundler

Web Bundled 348ms index.ts (608 modules)

› Assets (43):
design\figma\assets\icon-13x13.166bdfe6087ef94b4600097c8a1d4194.png (491B)
design\figma\assets\illustration-525x387.697c4ad023aa5b7c35020ed5678f2480.png (53KB)
design\figma\assets\illustration-53x53-2.1fa2e2b351f8c61817e288b77cc847e9.png (1KB)
design\figma\assets\illustration-53x53-3.1fa2e2b351f8c61817e288b77cc847e9.png (1KB)
design\figma\assets\illustration-53x53-4.54fcdf552445c7a29a6ab403cd3152e5.png (1.4KB)
design\figma\assets\illustration-53x53.26a817ce7578670e4a73512281b02a8e.png (1.7KB)
design\figma\assets\noun-back-1227057.bdac6d134da22df664bf791d4ea0545f.png (636B)
design\figma\assets\noun-info-1174604-17x17.b4486fc5bf72197e7d01b7451a3ac31f.png (1.1KB)
design\figma\assets\noun-info-1174604.88a9497dad15b53e3df7257e1eeb70cb.png (863B)
design\figma\assets\noun-pencil-2174975.bc916d62d89cffa1bc85c560a4aac190.png (228B)
design\figma\assets\noun-user-1335326-19x19.28caa444799c05244b9c9a98a6d846c4.png (404B)
design\figma\assets\noun-user-1335326.5ea6c64b10adb5307dd58f7791a769e4.png (517B)
design\figma\assets\profile-image.fed40218240026ddfad8da8e72ce4913.png (44KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\AntDesign.3f78af31cca60105799838a1a7a59fbd.ttf (130KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Entypo.31b5ffea3daddc69dd01a1f3d6cf63c5.ttf (66KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\EvilIcons.140c53a7643ea949007aa9a282153849.ttf (13KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Feather.ca4b48e04dc1ce10bfbddb262c8b835f.ttf (56KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome.b06871f281fee6b241d60582ae9369b9.ttf (166KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome5_Brands.3b89dd103490708d19a95adcae52210e.ttf (134KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome5_Regular.1f77739ca9ff2188b539c36f30ffa2be.ttf (34KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome5_Solid.605ed7926cf39a2ad5ec2d1f9d391d3d.ttf (203KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome6_Brands.56c8d80832e37783f12c05db7c8849e2.ttf (209KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome6_Regular.370dd5af19f8364907b6e2c41f45dbbf.ttf (68KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\FontAwesome6_Solid.adec7d6f310bc577f05e8fe06a5daccf.ttf (424KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Fontisto.b49ae8ab2dbccb02c4d11caaacf09eab.ttf (314KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Foundation.e20945d7c929279ef7a6f1db184a4470.ttf (57KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Ionicons.b4eb097d35f44ed943676fd56f6bdc51.ttf (390KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\MaterialCommunityIcons.6e435534bd35da5fef04168860a9b8fa.ttf (1.3MB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\MaterialIcons.4e85bc9ebe07e0340c9c4fc2f6c38908.ttf (357KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Octicons.871378c6eab492a3e689a9385dc45a12.ttf (69KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\SimpleLineIcons.d2285965fe34b05465047401b8595dd0.ttf (54KB)
node_modules\@expo\vector-icons\build\vendor\react-native-vector-icons\Fonts\Zocial.1681f34aaca71b8dfb70756bca331eb2.ttf (26KB)
node_modules\@react-navigation\elements\lib\module\assets\back-icon-mask.0a328cd9c1afd0afe8e3b1ec5165b1b4.png (653B)
node_modules\@react-navigation\elements\lib\module\assets\back-icon.35ba0eaec5a4f5ed12ca16fabeae451d.png (207B)
node_modules\@react-navigation\elements\lib\module\assets\clear-icon.c94f6478e7ae0cdd9f15de1fcb9e5e55.png (4 variations | 425B)
node_modules\@react-navigation\elements\lib\module\assets\close-icon.808e1b1b9b53114ec2838071a7e6daa7.png (4 variations | 235B)
node_modules\@react-navigation\elements\lib\module\assets\search-icon.286d67d3f74808a60a78d3ebf1a5fb57.png (928B)

› web bundles (1):
_expo/static/js/web/index-838818356842930e4e7edb905c5f9195.js (1.3MB)

› Files (3):
favicon.ico (15KB)
index.html (1.2KB)
metadata.json (49B)

Exported: dist

### install @playwright/test (exit 0)
added 3 packages in 2s

npm warn ERESOLVE overriding peer dependency
npm warn While resolving: react-reconciler@0.34.0
npm warn Found: react@19.2.3
npm warn node_modules/react
npm warn   peerOptional react@"*" from @expo/devtools@57.0.1
npm warn   node_modules/@expo/devtools
npm warn     @expo/devtools@"~57.0.1" from expo@57.0.26
npm warn     node_modules/expo
npm warn   31 more (@expo/dom-webview, @expo/log-box, @expo/metro-runtime, ...)
npm warn
npm warn Could not resolve dependency:
npm warn peer react@"^19.3.0" from react-reconciler@0.34.0
npm warn node_modules/test-renderer/node_modules/react-reconciler
npm warn   react-reconciler@"~0.34.0" from test-renderer@1.3.0
npm warn   node_modules/test-renderer
npm warn
npm warn Conflicting peer dependency: react@19.3.0
npm warn node_modules/react
npm warn   peer react@"^19.3.0" from react-reconciler@0.34.0
npm warn   node_modules/test-renderer/node_modules/react-reconciler
npm warn     react-reconciler@"~0.34.0" from test-renderer@1.3.0
npm warn     node_modules/test-renderer

### app origin
[env] the built app was served on http://localhost:55231 — an origin the product never declared (RUN.json declares no frontend service). Anything that REJECTS this origin (a CORS allow-list, an OAuth redirect URI, a cookie domain) is rejecting the runner, not failing the user: it is not a defect. Judge the app on its routes and behaviour instead.

### playwright smoke (exit 0)
[WebServer] tester serving C:\Users\Patrick\.cache\office-crew\worktrees\tester-gate\dist on 55231

Running 1 test using 1 worker

[route-probe] / -> / dom=57b4d996/8932 heading="" text="Dashboard Welcome SINCE 21. DEC 20 Days TOP RUN 20 Days RESTARTS 4 Total Top Run 20 Days Restarts 4   Dashboard   Mo"
[account-probe] no password field on / — this product exposes no sign-up/sign-in the harness can drive; nothing asserted
[account-probe] summary: credential form absent, session not established
  ok 1 e2e\_smoke.spec.cjs:11:1 › app loads and survives an interaction crawl without runtime errors (9.3s)

  1 passed (10.1s)

### playwright test (exit 0)
[WebServer] tester serving C:\Users\Patrick\.cache\office-crew\worktrees\tester-gate\dist on 55231

Running 7 tests using 1 worker

  ok 1 e2e\businesshandler.spec.cjs:42:1 › AC-01: app starts and shows the dashboard screen (232ms)
  ok 2 e2e\businesshandler.spec.cjs:52:1 › AC-02: bottom tab navigation reaches Dashboard, Money and Time (327ms)
  ok 3 e2e\businesshandler.spec.cjs:69:1 › dashboard menu opens and closes from the header button (258ms)
  ok 4 e2e\businesshandler.spec.cjs:85:1 › AC-03: money screen shows at least three sample transactions (244ms)
  ok 5 e2e\businesshandler.spec.cjs:99:1 › AC-04: time screen shows at least three sample time entries (238ms)
  ok 6 e2e\businesshandler.spec.cjs:113:1 › AC-05: design tokens are applied (accent + background) (259ms)
  ok 7 e2e\businesshandler.spec.cjs:132:1 › AC-06: app runs without backend or external network access (341ms)

  7 passed (2.6s)
