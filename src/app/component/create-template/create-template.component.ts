import { Component, OnInit } from '@angular/core';
import { ElkService } from '../../services/elk.service';
import { MatDialog } from '@angular/material/dialog';
import {TName, Attributes, Mapper, Property, Template, Mappings} from '../../model/template-model';
import { MappingDialerComponent } from '../mapping-dialer/mapping-dialer.component'


@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
  
  //Without template
  objTemplate: TName={"index_patterns":[]}
  
  //With template
  t_property: Property={};
  t_mappings: Mappings={"dynamic":true, "properties":this.t_property}
  template: Template={"mappings":this.t_mappings}
  objWithTemplate: TName={"index_patterns":[],"template":this.template}
  
  name:string=""
  mapping:Array<Attributes>=[];
  Confirmation: String = "";
  index_patterns:string="";
  basic_type:string[]=["integer","date"];
  mapper:any;
  js:any

  constructor(private dialog:MatDialog, private elk:ElkService) {}
  
  ngOnInit(): void {
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(MappingDialerComponent, {
      width: '1298px',
      height:'981px',
      data:this.mapping
    });
    dialogRef.afterClosed().subscribe(result=> {
      //error can be handled here
      this.mapping=result.data
      console.log(this.mapping)
      console.log(this.mapping.length)
      //this.getMap()
    });
  }
  
  createTemplate(){
    let patterns=this.index_patterns.split(',')
    if (patterns.length>0 && this.index>0){

      this.objWithTemplate.index_patterns = patterns
      this.t_property = this.property
      this.t_mappings.properties = this.t_property
      
      this.elk.createTemplate(this.objWithTemplate, this.name).subscribe(res => {})
    }
    else if(patterns.length>0){
      this.objTemplate.index_patterns = patterns
      this.elk.createTemplate(this.objTemplate, this.name).subscribe(res => {})
    }
    this.index_patterns="";
    this.name="";
  }


  cancel(){
    this.index_patterns="";
    this.name="";
  }

<<<<<<< HEAD
  /*getMap(){
    let jsonObject = {};
    for (let i = 0; i < this.mapping.length; i++) {
      this.js=JSON.stringify(this.mapping)
      if (this.mapping[i].format==""){
        let key = this.mapping[i].name+''
=======
>>>>>>> a282b9ad5f9569025b8da7f678c94e52e5c3373d

  getIndexTemplateObject(index_patterns:string[], mapping_count:number){
    
  }
  
  getMap(){
    let PropertyObj: Property={};
    this.index=0
    for(let i=0;i<this.mapping.length;i++){
      var key = this.mapping[i].name
      
      if (this.mapping[i].format == "" && key!= ""){  
        let item: Mapper={"type":""};
        item["type"] = this.mapping[i].type
        PropertyObj[key] = item
        this.index+=1
      }
      
      else if (key!= ""){
        let item:Mapper = {"type":"", "format":""}
        item["type"] = this.mapping[i].type
        item["format"] = this.mapping[i].format+""
        PropertyObj[key] = item
        this.index+=1
      }
    }
<<<<<<< HEAD
  }*/
=======
    return PropertyObj
  }
>>>>>>> a282b9ad5f9569025b8da7f678c94e52e5c3373d

}
