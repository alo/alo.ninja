import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { AppRoutingModule } from './app-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

// const cookieConfig: NgcCookieConsentConfig = {
//   cookie: {
//     domain: 'alo.dev'
//   },
//   palette: {
//     popup: {
//       background: '#000'
//     },
//     button: {
//       background: '#f1d600'
//     }
//   },
//   theme: 'edgeless',
//   type: 'info',
//   content: {
//     message: 'Este sitio web usa cookies, pero solo de las buenas.',
//     dismiss: 'OK!',
//     deny: 'Refuse cookies',
//     link: 'Ver más',
//     href: 'https://cookiesandyou.com'
//   }
// };

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: environment.production,
    }),
    // NgcCookieConsentModule.forRoot(cookieConfig),
    ScullyLibModule,
  ],
  providers: [AppService, { provide: 'googleTagManagerId', useValue: environment.GTM }],
  bootstrap: [AppComponent],
})
export class AppModule {}
