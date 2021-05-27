import { User } from './../User';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user: User | any;
  constructor(public service: AuthserviceService) {
  
   }

  ngOnInit(): void {
  }

}
