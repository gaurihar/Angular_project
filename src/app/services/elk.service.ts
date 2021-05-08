import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {TemplateModel} from '../model/template-model'

@Injectable({
  providedIn: 'root'
})
export class ElkService {
  constructor(private http:HttpClient){}
  
  getDataElk():Observable<any>
  {
   return this.http.get<any>('_index_template/');
  }

  createTemplate(templatemodel:TemplateModel):Observable<any>
  {
    return this.http.post('_index_template/', templatemodel);
  }

}
