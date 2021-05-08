import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service'
import {TName} from '../../model/template-model'
@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  objTemplate:any={}
  name:string=""

  constructor(private elk:ElkService) { }

  ngOnInit(): void {
  }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "";

 
index_patterns:string=""
createTemplate()
{
  this.objTemplate.index_patterns=this.index_patterns.split(',')
  this.elk.createTemplate(this.objTemplate, this.name).subscribe(res => {
    console.log(res);  
    this.isAdded=true;   
    
})
  
   
 }

}
