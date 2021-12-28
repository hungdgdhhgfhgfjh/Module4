import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameNumberComponent } from './game-number/game-number.component';

const routes: Routes = [
  { path: '', component: GameNumberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}
