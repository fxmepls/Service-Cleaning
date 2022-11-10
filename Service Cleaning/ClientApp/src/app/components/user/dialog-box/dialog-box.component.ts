
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if(this.data) this.isNew = false;
  }

  myForm: FormGroup = new FormGroup ({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ''),
    price:  new FormControl(this.data?.price ?? ''),
    type:  new FormControl(this.data?.type ?? ''),
    people:  new FormControl(this.data?.people ?? ''),
    time:  new FormControl(this.data?.time ?? ''),
  });

  isNew: boolean = true;

onSubmit() {

  this.data = {
    id: this.myForm.value.id,
    title: this.myForm.value.title,
    price: this.myForm.value.price,
    image: "assets/images/flowers.jpg",
    configure: {
       type: this.myForm.value.type,
       people: this.myForm.value.people,
       time: this.myForm.value.time,
    }
  };
  
  //console.log(this.data);
  this.dialogRef.close(this.data);

  
}

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
  }

}
