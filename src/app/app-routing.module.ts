import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
 // {path: 'repositories', component: RepositoriesComponent},
  {path: '**', component: NotFoundComponent},
  {path: '',  pathMatch:'prefix', redirectTo:'/profiles'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
