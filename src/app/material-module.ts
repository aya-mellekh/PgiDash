import { NgModule } from "@angular/core";
import { MatMenuModule} from "@angular/material/menu";
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";

@NgModule({
  exports:[
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule

  ]
})
export class MaterialModule{}
