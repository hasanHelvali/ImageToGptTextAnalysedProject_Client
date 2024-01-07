import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAnalyseService {

  constructor(@Inject("baseUrl") private baseUrl,private httpClient:HttpClient) { }


  getAnalyze():Observable<any>{
    return this.httpClient.get(this.baseUrl+"/imageAnalysis");
  }
}
