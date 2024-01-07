import { HttpClient, HttpEventType, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { Base, SpinnerType } from 'src/app/common/base';
import { DeleteFileService } from 'src/app/services/delete-file.service';
import { GetAnalyseService } from 'src/app/services/get-analyse.service';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-get-analysis',
  templateUrl: './get-analysis.component.html',
  styleUrls: ['./get-analysis.component.css']
})
export class GetAnalysisComponent extends Base implements OnInit{
  constructor(private uploadImageService:UploadImageService,private analyseService:GetAnalyseService,spinner:NgxSpinnerService,
    private deleteFileService:DeleteFileService) {
    super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallScaleMultiple);
    this.hideSpinner(SpinnerType.BallScaleMultiple);
  }
  public files: NgxFileDropEntry[];
  sonuc:string;
  requestState:boolean=false;
  responseState:boolean=false;
  imageUrls:string[]=[]

  fileData:FormData=new FormData();
  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((f:File)=>{

      const reader: FileReader = new FileReader();
      reader.readAsDataURL(f);
      reader.onload = () => {
        this.imageUrls.push(reader.result as string);
      };
      //resimleri ekranda onizliyoruz.

        this.fileData.append(f.name,f,file.relativePath)//fileData ya ilgili resimleri ekliyoruz.
      })
    }
    
  }


  fileUpload(){
    this.requestState=true;
    this.showSpinner(SpinnerType.LineSpinFade)
    setTimeout(() => {
      this.uploadImageService.uploadFiles(this.fileData).subscribe({
        next:(data)=>{
          this.hideSpinner(SpinnerType.LineSpinFade)
          alert("Dosyalar Basarıyla Yuklenmistir.Analiz Baslatılıyor.")
          this.startAnalyse();
        },
        error:(errorResponse:HttpErrorResponse)=>{
          this.hideSpinner(SpinnerType.LineSpinFade)
          alert("Dosyalar Yuklenemedi.")
          this.requestState=false;
        }
      });
    }, 1000);


  }

  startAnalyse(){
    this.requestState=true;
    this.showSpinner(SpinnerType.BallScaleMultiple)
    this.analyseService.getAnalyze().subscribe({
      next:(data)=>{
    this.hideSpinner(SpinnerType.BallScaleMultiple)
        this.sonuc=data;
        this.responseState=true;
      },
      error:()=>{
      this.hideSpinner(SpinnerType.BallScaleMultiple)
    this.requestState=false;
    this.responseState=false;
        alert("Analiz Yapılamadı.")
      }
    });
  }
  newAnalyse(){
    this.showSpinner(SpinnerType.LineSpinFade)
    this.requestState=false;
    this.responseState=false;
    this.imageUrls=[];
    this.sonuc=null;
    this.files=[];
    this.deleteFileService.fileCleat()
      .subscribe({
        next:()=>{
          //state ler ve degerler guncellenecek.
          alert("Yeni Analiz Baslatılıyor.")
    this.hideSpinner(SpinnerType.LineSpinFade)

        },
        error:()=>{
          alert("Yeni Analiz Başlatılamadı.")
    this.hideSpinner(SpinnerType.LineSpinFade)
        }
      })
  }
}
