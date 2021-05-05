import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service'
import {TemplateModel} from '../../model/template-model'
@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  objTemplate:any

  constructor(private elk:ElkService) { }

  ngOnInit(): void {
  }

  newuser: Object  = {} ;
  isAdded: Boolean = false;
  Confirmation: String = "New User has been Registered.";

 


 createTemplate()
 {  
   var  new_temp=new TemplateModel()
   new_temp.index_patterns = ["*"]
  this.elk.createTemplate(new_temp).subscribe(data=>
    {
      console.warn(data)
      this.objTemplate=data
           
       
    })
   
 }

}
