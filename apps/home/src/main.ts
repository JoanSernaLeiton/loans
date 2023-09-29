import { setRemoteDefinitions } from "@nx/angular/mf";

// import('./bootstrap').catch((err) => console.error(err));

fetch('/assets/module-federation.manifest.local.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
