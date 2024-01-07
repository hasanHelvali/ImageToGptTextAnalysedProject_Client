import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, booleanAttribute } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  constructor(private httpClient:HttpClient,@Inject("baseUrl")private baseUrl:string) { }

  uploadFiles(fileData:FormData):Observable<any>{
    let state:boolean=false;
    return this.httpClient.post(this.baseUrl+"/imageanalysis",fileData,{headers:new HttpHeaders(), responseType:"blob"});
  }
}
