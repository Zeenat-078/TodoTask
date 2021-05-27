import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import { DescriptionComponent } from './../description/description.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.css']
})
export class TaskviewComponent implements OnInit {

  constructor(private dialog : MatDialog,
    public service: AuthserviceService) { }

  ngOnInit(): void {
  }
  desc(){
    this.dialog.open(DescriptionComponent);
    }
    
}
