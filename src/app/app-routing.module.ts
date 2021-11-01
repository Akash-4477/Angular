import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { LoginResturantComponent } from './login-resturant/login-resturant.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';

const routes: Routes = [
  {component:AddResturantComponent, path:'add'},
  {component:UpdateResturantComponent, path:'update'},
  {component:ListResturantComponent, path:'list'},
  {component:LoginResturantComponent, path:'login'},
  {component:RegisterResturantComponent,path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
