import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Add To Reminder?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          
        },
        {
          text: 'Add',
          role: 'confirm',
          
        },
      ],
    });

    await alert.present();
  }

}
