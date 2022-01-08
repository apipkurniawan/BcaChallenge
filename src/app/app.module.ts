import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { Challenge1Component } from "./features/challenge_1/challenge1.component";
import { Challenge2Component } from "./features/challenge_2/challenge2.component";
import { DashboardComponent } from "./features/dashborad/dashborad.component";

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    DashboardComponent,
    Challenge2Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
