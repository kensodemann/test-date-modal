import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonDatetime,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  ModalController,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-date-dialog',
  templateUrl: './date-dialog.component.html',
  styleUrls: ['./date-dialog.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonButton, IonButtons, IonDatetime, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class DateDialogComponent implements OnInit {
  data: string = '2024-04-22T06:00';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    null;
  }

  close() {
    this.modalController.dismiss();
  }
}
