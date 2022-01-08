import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Challenge1Component } from "./features/challenge_1/challenge1.component";
import { Challenge2Component } from "./features/challenge_2/challenge2.component";
import { DashboardComponent } from "./features/dashborad/dashborad.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "bca-css", component: Challenge1Component },
  { path: "bca-tailwind", component: Challenge2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
