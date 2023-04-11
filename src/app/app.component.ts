import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    Device.getLanguageCode().then(response => {
      Preferences.set({ key: "deviceLanguage", value: response.value })
      this.translateService.setDefaultLang(response.value.substring(0, 2));
    });
  }
}