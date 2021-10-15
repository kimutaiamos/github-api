import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClient } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { Routes } from '@angular/router';
const routes: Routes = [
  { path:'**', component:NotFoundComponent},
  {path :'' ,redirectTo:"/form", pathMatch:"full"},
]
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
