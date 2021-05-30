import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TName} from '../model/template-model'

@Injectable({
  providedIn: 'root'
})
export class ElkService {
  
  constructor(private http:HttpClient) { }
  
 public  getDataElk():Observable<any>
  {
   
   return this.http.get<any>('/_index_template');

  }

  public createTemplate(templatemodel:TName,name:string):Observable<any>
  {
    return this.http.post(`_index_template/${name}`, templatemodel);

  }

   deleteTemplate(template_name: any) {
     
    return this.http.delete(`/_index_template/${template_name}`);
  }

  public getTemplateData(name:string):Observable<any>
  {
    return this.http.get(`_index_template/${name}`);

  }
}
