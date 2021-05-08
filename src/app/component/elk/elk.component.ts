import { KeyValuePipe } from '@angular/common';
import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { ElkService} from '../../services/elk.service'



@Component({
  selector: 'app-elk',
  templateUrl: './elk.component.html',
  styleUrls: ['./elk.component.css']
})
export class ElkComponent implements OnInit {
  templates: any=[]
 
  page: number=1
  totalRecords: any
  ovalue : any=[]
  Object = Object;
  ojson=Object
  
  default_template=[".monitoring-es",
      ".ml-state",
  ".ml-notifications-000001",
  ".kibana_task_manager",
    ".kibana",
    ".management-beats",
    ".ml-anomalies",
    ".monitoring-kibana",
    ".monitoring-alerts-7",".monitoring-beats",
    ".monitoring-logstash",
    ".ml-stats",
   "monitoring-beats",
    ".monitoring-logstash*",".transform-notifications-000002","kibana_index_template:.kibana",".ml-anomalies-"]
  

 constructor(private elk:ElkService){}
 

 ngOnInit(): void {
   this.getDataElk()
 }
  
 getDataElk():any
 {
  this.elk.getDataElk().subscribe(data=>
      {
        console.warn(data)
        this.templates=data
        this.totalRecords=this.templates.length
      
        
      })
    
 }

 isSet(p:any):any
 {
   if(p)
    return true
  return false
 }

 templateName:any
 Confirmation: String = "User Deleted Successfully.";
 isDel: Boolean = false;

 deteleTemplate(p:any)
 {
   if(confirm("Are you want to delete template :"+p))
   {
   this.elk.deleteTemplate(p).subscribe(res => {
    console.log(res);  
    this.isDel=true;   
    
})
 }}

 closeAlert()
 {
  this.isDel=false
 }
  
}
