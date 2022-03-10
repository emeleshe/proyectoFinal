import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'html', component: HtmlComponent},
  { path: 'css', component: CssComponent},
  { path: 'front-junior', component: FrontJuniorComponent},
  { path: 'full-stack' , component: FullStackComponent},
  { path: 'full-stack-vue', component: FullStackVueComponent},
  {path: 'full-stack-angular', component: FullStackAngularComponent},
  {path: 'full-stack-reactive', component: FullStackReactiveComponent},
  {path: 'Desarrollo-BackEnd', component: DesarrolloBackEndComponent},
  {path: 'app-reackNative' , component: AppReactnativeComponent}

  //{ path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
