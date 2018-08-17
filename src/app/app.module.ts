import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AllUsersPage } from '../pages/AllUsers/AllUsers';
import { UsersByDriverStatusPage } from '../pages/UsersByDriverStatus/UsersByDriverStatus';
import { UsersByAgePage } from '../pages/UsersByAge/UsersByAge';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { UsersByEducationPage } from '../pages/users-by-education/users-by-education';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { SplitFullnamePipe } from '../pipes/split-fullname/split-fullname';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { AgeProvider } from '../providers/age/age';


@NgModule({
  declarations: [
    MyApp,
    AllUsersPage,
    UsersByDriverStatusPage,
    UsersByAgePage,
    UserDetailPage,
    TabsPage,
    SplitFullnamePipe,
    UsersByEducationPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AllUsersPage,
    UsersByDriverStatusPage,
    UsersByAgePage,
    UsersByEducationPage,
    UserDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    UserProvider,
    AgeProvider
  ]
})
export class AppModule {}
