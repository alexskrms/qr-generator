import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeElementType } from 'angularx-qrcode'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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