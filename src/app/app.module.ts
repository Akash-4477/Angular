import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { LoginResturantComponent } from './login-resturant/login-resturant.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddResturantComponent,
    UpdateResturantComponent,
    ListResturantComponent,
    LoginResturantComponent,
    RegisterResturantComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
