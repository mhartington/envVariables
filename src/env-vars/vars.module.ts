import { NgModule } from '@angular/core';
import { EnvVariables } from './vars.token';
import { devVariables } from './dev';
import { prodVariables } from './prod';

declare const process: any; // Typescript compiler will complain without this

// useFactory instead of useValue so we can easily add more logic here.
// In a real app it's better to use only NODE_ENV or only IONI_ENV, as using both is confusing, but for
// demonstration purposes I use both here. If NODE_ENV is set to qa, those variables are used, otherwise it
// checks IONIC_ENV. There's a helper script in package.json called ionic:serve:qa that will set your NODE_ENV
// and start the app in one command.
@NgModule({
  providers: [
    {
      provide: EnvVariables,
      useFactory: () => {
        return process.env.IONIC_ENV === 'prod' ? prodVariables : devVariables;
      }
    }
  ]
})
export class EnvironmentsModule { }
