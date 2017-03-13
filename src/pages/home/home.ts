import { Component, Inject } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EnvVariables } from '../../env-vars/vars.token'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    @Inject(EnvVariables) public env
  ) {

  }

}
