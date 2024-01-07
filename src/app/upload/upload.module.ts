import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAnalysisComponent } from './get-analysis/get-analysis.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [GetAnalysisComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component:GetAnalysisComponent}]),
    HttpClientModule,
    NgxFileDropModule,
    NgxSpinnerModule


  ],
  exports: [GetAnalysisComponent],
})
export class UploadModule {}
