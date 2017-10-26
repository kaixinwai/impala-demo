import { Component } from '@angular/core';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { MdDialog } from "impala/src/dialog/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private dialog: MdDialog) {
  }

  openDialog() {
    this.dialog.open(HelloWorldComponent);
  }
}
