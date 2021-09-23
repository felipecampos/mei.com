import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContateNosComponent } from './contate-nos/contate-nos.component';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  
  {path: "", component: HomeComponent},
  {path: "sobre-nos", component: SobreNosComponent},
  {path: "contate-nos", component: ContateNosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
