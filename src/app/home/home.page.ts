import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeElementType, QRCodeModule } from 'angularx-qrcode'
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, TranslateModule, QRCodeModule, CommonModule, FormsModule],
})
export class HomePage {

  qrData: string = "";
  size: number = 256;
  url: SafeUrl = '';
  format: QRCodeElementType = 'img';

  constructor() { }

  onQrDataChange(url: SafeUrl) {
    this.url = url;
  }

  formatChanged(event: any) {
    this.format = event.detail.value;
  }
}