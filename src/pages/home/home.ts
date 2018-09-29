import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AddUserPage} from "../add-user/add-user";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private navCtrl: NavController;

  constructor(navCtrl: NavController) {
    this.navCtrl = navCtrl
  }

  openAddUserHandler() {
    this.navCtrl.push(AddUserPage);
  }

  showDetailHandler(id: number) {
    this.navCtrl.push(DetailPage);
  }
}
