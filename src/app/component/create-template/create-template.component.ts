import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service';
import { MatDialog } from '@angular/material/dialog';
import {TName} from '../../model/template-model';
import { MappingDialerComponent } from '../mapping-dialer/mapping-dialer.component'

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  objTemplate:any={}
  name:string=""
  mapping=[];
  Confirmation: String = "";
  index_patterns:string="";
  basic_type:string[]=["integer","date"];
  mapper:any;

  constructor(private dialog:MatDialog, private elk:ElkService) {}
  
  ngOnInit(): void {
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(MappingDialerComponent, {
      width: '750px',
      height:'1000px',
      data:this.mapping
    });
    dialogRef.afterClosed().subscribe(result=> {
      this.mapping=result.data
      console.log(this.mapping)
      console.log(this.mapping.length)
      this.getMap()
    });
  }
  
  createTemplate(){
    this.objTemplate.index_patterns=this.index_patterns.split(',')
    this.elk.createTemplate(this.objTemplate, this.name).subscribe(res => {})
    this.index_patterns="";
    this.name="";
  }

  cancel(){
    this.index_patterns="";
    this.name="";
  }

  getMap(){
    let jsonObject = {};
    for (let i = 0; i < this.mapping.length; i++) {
      js=JSON.stringify(this.mapping)
      if (this.mapping[i].format==""){
        let key = this.mapping[i].name+''

        jsonObject[key]={"type": this.mapping[i].type };
      }
      else{
        jsonObject[this.mapping[i].name:strin)]={
          "type":this.mapping[i].type,
          "format":this.mapping[i].format
        };
      }
      
    }
  }

}
