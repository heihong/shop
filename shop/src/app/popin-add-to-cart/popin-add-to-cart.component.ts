import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popin-add-to-cart',
  templateUrl: './popin-add-to-cart.component.html',
  styleUrls: ['./popin-add-to-cart.component.css']
})
export class PopinAddToCartComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopinAddToCartComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
