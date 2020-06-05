import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ConvertPipePipe } from './main-page/pipes/convert-pipe.pipe';
import { EditTaskComponent } from './main-page/edit-task/edit-task.component';
import { MainService } from './main-page/services/main.service';
import { AppRouterModule } from './app.router.module';
import { AddTaskComponent } from './main-page/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ConvertPipePipe,
    EditTaskComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    MaterialModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})

export class AppModule { }
