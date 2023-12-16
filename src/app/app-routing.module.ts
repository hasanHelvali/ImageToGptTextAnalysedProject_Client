import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule),pathMatch:"full"},
  {path:"home",loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:"startanalyse",loadChildren:()=>import("./upload/upload.module").then(m=>m.UploadModule)},
  {path:"**",redirectTo:"home",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
