import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,  } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Github } from './github-class/github';
//import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { GithubRequestService } from './github-http/github-request.service';
import { Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
     HttpClient,
    GithubRequestService,
    //HttpClientModule


  ],
  providers: [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
