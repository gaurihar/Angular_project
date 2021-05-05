import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {TemplateModel} from '../model/template-model'

@Injectable({
  providedIn: 'root'
})
export class ElkService {
  private baseUrl: string = 'http://localhost:9200/';
  constructor(private http:HttpClient) { }
  
  getDataElk():Observable<any>
  {
   let url1="http://jsonplaceholder.typicode.com/todos";
   let url="http://localhost:9200/"
   return this.http.get<any>(`${this.baseUrl}_template`);

  }

  createTemplate(templatemodel:TemplateModel):Observable<any>
  {
    return this.http.post(`${this.baseUrl}_template`, templatemodel);

  }

}
