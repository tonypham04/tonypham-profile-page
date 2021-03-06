import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProfileFooterComponent } from './profile-footer/profile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileHeaderComponent,
    ProfileIntroComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    ProfileFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
