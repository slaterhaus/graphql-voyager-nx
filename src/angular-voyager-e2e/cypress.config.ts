import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run angular-voyager:serve:development',
        production: 'nx run angular-voyager:serve:production',
      },
      ciWebServerCommand: 'nx run angular-voyager:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
