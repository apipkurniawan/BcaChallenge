import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Challenge1Component } from "./features/challenge_1/challenge1.component";
import { DashboardComponent } from "./features/dashborad/dashborad.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "bca", component: Challenge1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
