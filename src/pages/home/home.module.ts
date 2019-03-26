import { HomePage } from './home';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage,
    IonicImageViewerModule,
  ]
})

export class HomePageModule {

}
