import { Component, OnInit } from '@angular/core';
import { ElkService} from '../../services/elk.service'



@Component({
  selector: 'app-elk',
  templateUrl: './elk.component.html',
  styleUrls: ['./elk.component.css']
})
export class ElkComponent implements OnInit {
  template1: any=[]
 
  page: number=1
  totalRecords: any
  ovalue : any=[]
  Object = Object;
  ojson=Object
  

 constructor(private elk:ElkService){}
 

 ngOnInit(): void {
   this.getDataElk()
 }
  
 getDataElk():any
 {
  this.elk.getDataElk().subscribe(data=>
      {
        console.warn(data)
        this.template1 = data
        for(let i=0;i<this.template1.length;i++)
        {

        }
        this.ovalue
        this.totalRecords=this.template1.length
        
      })
    
 }
  
}
