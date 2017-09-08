import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage} from "../pages/home/home";
import { ReservationPage } from "../pages/reservation/reservation";
import { KaraokePage } from "../pages/karaoke/karaoke";
import { FoodPage } from "../pages/food/food";
import { UserPage } from "../pages/user/user";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ReservationPage,
    KaraokePage,
    FoodPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ReservationPage,
    KaraokePage,
    FoodPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
