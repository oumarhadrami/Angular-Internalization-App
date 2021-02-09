import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public translate: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {
    translate.addLangs(['en', 'nl', 'ar']);
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    if (lang == 'ar') {
      document.getElementsByTagName('html').item(0)?.setAttribute('lang','ar');
      document.getElementsByTagName('html').item(0)?.setAttribute('dir','rtl');
      document.getElementById('stylesheet')?.setAttribute('href', 'assets/rtl-bootstrap/bootstrap.rtl.min.css');
    } else {
      document.getElementsByTagName('html').item(0)?.setAttribute('lang','en');
      document.getElementsByTagName('html').item(0)?.setAttribute('dir','ltr');
      document.getElementById('stylesheet')?.setAttribute('href', 'assets/bootstrap/bootstrap.min.css');
    }
  }
}
