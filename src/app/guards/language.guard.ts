import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanLoad {
  constructor(private translateService: TranslateService) { }

  async canLoad(): Promise<boolean> {
    await Device.getLanguageCode().then(response => {
      Preferences.set({ key: "deviceLanguage", value: response.value })
      this.translateService.setDefaultLang(response.value.substring(0, 2));
    });
    return true;
  }
}