//  import { DescriptionComponent } from './../description/description.component';
import { Component, OnInit } from '@angular/core';
 import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-floatbtn',
  templateUrl: './floatbtn.component.html',
  styleUrls: ['./floatbtn.component.css']
})
export class FloatbtnComponent implements OnInit {

  constructor(private dialog : MatDialog) { 

    
  }

  ngOnInit(): void {
  }

// desc(){
// this.dialog.open(DescriptionComponent);
// }

}


