import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteFileService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl")private baseUrl) { }

  fileCleat():Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/imageAnalysis");
  }
}
