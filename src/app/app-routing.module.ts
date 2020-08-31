import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { ButtonComponent } from './button/button.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';

import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { FormfiledComponent } from './formfiled/formfiled.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { IconComponent } from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
{path:'autocomplete', component: AutocompleteComponent},
{path:'badge', component: BadgeComponent },
{path:'bottom-sheet', component: BottomSheetComponent },
{path:'button', component: ButtonComponent },
{path:'toggle-button', component: ToggleButtonComponent },
{path:'card', component: CardComponent },
{path:'checkbox',component: CheckboxComponent},
{path:'chips',component: ChipsComponent},
{path:'datepicker',component: DatepickerComponent},
{path:'dialog',component: DialogComponent},
{path:'divider',component: DividerComponent},
{path:'expansionpanel',component: ExpansionpanelComponent},
{path:'formfiled',component: FormfiledComponent},
{path:'input',component: InputComponent},
{path:'gridlist',component: GridlistComponent},
{path:'icon',component: IconComponent},
{path:'list',component: ListComponent},
{path:'menu',component: MenuComponent},
{path:'pagination',component: PaginationComponent},

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
