import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseServiceService } from './course-service.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CourseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
