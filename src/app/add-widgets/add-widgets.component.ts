import { Component, Output } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';


export interface DialogData {
  process_S: string;
  Chart_type: string;
}


@Component({
  selector: 'app-add-widgets',
  templateUrl: './add-widgets.component.html',
  styleUrls: ['./add-widgets.component.scss']
})
export class AddWidgetsComponent {

  process_S: string | undefined;
  Chart_type: string | undefined;

  constructor(public dialog: Dialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open<string>(PopupComponent, {
      width: '300px',
      data: {Chart_type: this.Chart_type, process_S: this.process_S},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}






