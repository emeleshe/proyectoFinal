import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HtmlComponent } from './components/html/html.component';
import { CssComponent } from './components/css/css.component';
import { FrontJuniorComponent } from './components/front-junior/front-junior.component';
import { FullStackComponent } from './components/full-stack/full-stack.component';
import { FullStackVueComponent } from './components/full-stack-vue/full-stack-vue.component';
import { FullStackAngularComponent } from './components/full-stack-angular/full-stack-angular.component';
import { FullStackReactiveComponent } from './components/full-stack-reactive/full-stack-reactive.component';
import { DesarrolloBackEndComponent } from './components/desarrollo-back-end/desarrollo-back-end.component';
import { AppReactnativeComponent } from './components/app-reactnative/app-reactnative.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    ContactoComponent,
    HtmlComponent,
    CssComponent,
    FrontJuniorComponent,
    FullStackComponent,
    FullStackVueComponent,
    FullStackAngularComponent,
    FullStackReactiveComponent,
    DesarrolloBackEndComponent,
    AppReactnativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
