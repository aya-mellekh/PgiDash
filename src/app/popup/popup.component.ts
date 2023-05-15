import { Component, Inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { DialogData } from '../add-widgets/add-widgets.component';
import {FormControl, FormGroup} from '@angular/forms';




@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  constructor(public dialogRef: DialogRef<string>,
 @Inject(DIALOG_DATA) public data: DialogData) {}

 myForm=new FormGroup({
  process_S:new FormControl,
  chart_type:new FormControl
 })
 print(){
  console.log(this.myForm)
 }
}
