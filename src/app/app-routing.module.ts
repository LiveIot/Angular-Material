import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
{path:'autocomplete', component: AutocompleteComponent},
{path:'badge', component: BadgeComponent },
{path:'bottom-sheet', component: BottomSheetComponent },
{path:'button', component: ButtonComponent },
{path:'toggle-button', component: ToggleButtonComponent },
{path:'card', component: CardComponent }


];

// const routes: Routes = [
//   { path: 'heroes', component: HeroesComponent }
//   ,{ path: 'dashboard', component: DashboardComponent },
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'detail/:id', component: HeroDetailComponent }
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
