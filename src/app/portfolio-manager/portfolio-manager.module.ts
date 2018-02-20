import { HttpClientModule } from '@angular/common/http';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { CommonModule } from '@angular/common';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { NgModule } from '@angular/core';
import { PortfolioManagerAppComponent } from './portfolio-manager-app.component';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WeatherService } from '../service/weather.service';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: '', component: PortfolioManagerAppComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardContentComponent},
      { path: 'about', component: AboutContentComponent},
      { path: 'weather', component: WeatherComponent}
    ]},
  { path: '**', redirectTo: ''}

  // { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // { path: 'heroes', component: HeroComponent,
  //   children: [
  //     { path: '', redirectTo: '/detail', pathMatch: 'full' },
  //     { path: 'detail', component: HeroDetailComponent }
  //   ]
  // }
  // { path: '**', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [ WeatherService ],
  declarations: [
    PortfolioManagerAppComponent,
    ToolbarComponent,
    DashboardContentComponent,
    SidenavComponent,
    AboutContentComponent,
    WeatherComponent]
})
export class PortfolioManagerModule { }
