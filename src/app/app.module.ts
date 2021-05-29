import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ListComponent } from './list/list.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { DesignUtilityService } from './service/design-utility.service';
import {HttpClientModule} from '@angular/common/http';
import { MaskComponent } from './mask/mask.component';
import { WashComponent } from './wash/wash.component';
import { SocdistComponent } from './socdist/socdist.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { CustomStyleDirective } from './custom-style.directive';

import { FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HelpComponent } from './help/help.component';
import { FilterPipe } from './app_pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ListComponent,
    MaskComponent,
    WashComponent,
    SocdistComponent,
    VaccineComponent,
    CustomStyleDirective,
    HelpComponent,
    FilterPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
    
  ],
  providers: [DesignUtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
