import { Component } from '@angular/core';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ModalController } from '@ionic/angular/standalone';
import { DateDialogComponent } from '../date-dialog/date-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const m = await this.modalController.create({ component: DateDialogComponent });
    m.present();
  }
}
