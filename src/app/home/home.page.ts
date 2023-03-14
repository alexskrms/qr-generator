import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  qrData: string = "";
  size: number = 256;
  url: SafeUrl = '';

  constructor() {}


  onQrDataChange(url: SafeUrl){
    this.url = url;
  }

  downloadQR(){
  }
}
