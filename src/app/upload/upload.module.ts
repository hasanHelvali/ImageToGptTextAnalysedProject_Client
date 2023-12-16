import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAnalysisComponent } from './get-analysis/get-analysis.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GetAnalysisComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component:GetAnalysisComponent,pathMatch:"full"}]),
  ],
  exports: [GetAnalysisComponent],
})
export class UploadModule {}
