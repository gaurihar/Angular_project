import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-mapping-dialer',
  templateUrl: './mapping-dialer.component.html',
  styleUrls: ['./mapping-dialer.component.css']
})
export class MappingDialerComponent {
  local_data:any;
  
  public mapping: any[] = [{
    id: 1,
    name: '',
    type: '',
    format: ''
  }];

  constructor(
    public dialogRef: MatDialogRef<MappingDialerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  doAction(){
    this.dialogRef.close({data:this.mapping});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }


  addMapping() {
    this.mapping.push({
      id: this.mapping.length + 1,
      name: '',
      type: '',
      format: ''
    });
  }

  removeMapping(i: number) {
    this.mapping.splice(i, 1);
  }

  logMap() {
    console.log(this.mapping);
  }
}