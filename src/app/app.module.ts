import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LeftdataComponent } from './leftdata/leftdata.component';
import { RightdataComponent } from './rightdata/rightdata.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftdataComponent,
    RightdataComponent,
    SearchComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
