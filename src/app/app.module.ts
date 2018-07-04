import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



  
  