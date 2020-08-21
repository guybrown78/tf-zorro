import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_GB } from 'ng-zorro-antd';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { TfNgCoreModule } from 'tf-ng-core'

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { TfLayoutComponent } from './tf-layout/tf-layout.component';
import { TfHeaderComponent } from './tf-header/tf-header.component';
// import { OtherSliderComponent } from './other-slider/other-slider.component';
import { TfSliderComponent } from './tf-slider/tf-slider.component';
import { TfSliderMenuComponent } from './tf-slider-menu/tf-slider-menu.component';
import { OneComponent } from './example/one/one.component';
import { TwoComponent } from './example/two/two.component';
import { ThreeComponent } from './example/three/three.component';
import { TfStatsCardComponent } from './tf-stats-card/tf-stats-card.component';
import { TfTabsComponent } from './tf-tabs/tf-tabs.component';
import { TfTableComponent } from './tf-table/tf-table.component';
import { TfCourseActionComponent } from './tf-course-action/tf-course-action.component';
import { TfFormComponent } from './tf-form/tf-form.component';
import { TfListComponent } from './tf-list/tf-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';

// import { TestSliderComponent } from './test-slider/test-slider.component';
// import { DisapearsSliderComponent } from './disapears-slider/disapears-slider.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TfLayoutComponent,
    TfHeaderComponent,
    // OtherSliderComponent,
    TfSliderComponent,
    TfSliderMenuComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    TfStatsCardComponent,
    TfTabsComponent,
    TfTableComponent,
    TfCourseActionComponent,
    TfFormComponent,
    TfListComponent,
    NavigationComponent,
    HeaderComponent,

    // TestSliderComponent,
    // DisapearsSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
		FormsModule,
		ReactiveFormsModule,
    HttpClientModule,
		BrowserAnimationsModule,
		TfNgCoreModule,
		NzButtonModule,
		NzLayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_GB }],
  bootstrap: [AppComponent]
})
export class AppModule { }
