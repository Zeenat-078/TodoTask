import { AuthserviceService } from './authservice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FloatbtnComponent } from './floatbtn/floatbtn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DescriptionComponent } from './description/description.component';
import { SignpageComponent } from './signpage/signpage.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { TaskviewComponent } from './taskview/taskview.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
 import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    AppComponent,
    FloatbtnComponent,
    DescriptionComponent,
    SignpageComponent,
    TaskviewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    MatToolbarModule,
    MatExpansionModule,
     MatListModule,
     MatSidenavModule
  ],
  entryComponents: [DescriptionComponent],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
