import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';
import 'firebase/firestore' ;

@Component({
  selector: 'app-signpage',
  templateUrl: './signpage.component.html',
  styleUrls: ['./signpage.component.css']
})
export class SignpageComponent implements OnInit {

  constructor(public service : AuthserviceService) { }

  ngOnInit(): void {
  }

 }
// public auth: AngularFireAuth,
//     public firestore: AngularFirestore