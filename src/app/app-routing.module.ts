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

import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { RipplesComponent } from './ripples/ripples.component';
import { SelectComponent } from './select/select.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SliderComponent } from './slider/slider.component';
import { SnakebarComponent } from './snakebar/snakebar.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { StepperComponent } from './stepper/stepper.component';

import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TooltipComponent } from './tooltip/tooltip.component';

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
{path:'progressbar',component: ProgressbarComponent},
{path:'progress-spinner',component: ProgressSpinnerComponent},
{path:'radiobutton',component: RadioButtonComponent},
{path:'ripples',component: RipplesComponent},
{path:'select',component: SelectComponent},
{path:'sidenav',component: SidenavComponent},
{path:'slide-toggle',component: SlideToggleComponent},
{path:'slider',component: SliderComponent},
{path:'snakebar',component: SnakebarComponent},
{path:'sort-header',component: SortHeaderComponent},
{path:'stepper',component: StepperComponent},
{path:'table',component: TableComponent},
{path:'tabs',component: TabsComponent},
{path:'toobar',component: ToolbarComponent},
{path:'tooltip',component: TooltipComponent}];

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
