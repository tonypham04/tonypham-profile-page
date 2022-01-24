import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ProfileIntroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
