import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UploadModule } from '../upload/upload.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:HomeComponent}
    ])
  ],
  exports:[HomeComponent]

})
export class HomeModule { }
