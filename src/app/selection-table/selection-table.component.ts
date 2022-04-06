import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-selection-table",
  templateUrl: "./selection-table.component.html",
  styleUrls: ["./selection-table.component.scss"],
})
export class SelectionTableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

  ngOnInit(): void {}
}
@Component({
  selector: "dialog-selection-table.component",
  templateUrl: "dialog-selection-table.component.html",
  styleUrls: ["./selection-table.component.scss"],
})
export class DialogElementsExampleDialog {}
