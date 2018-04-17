import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'
import {StoriesService} from './stories.service'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {Story} from './Story'

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { StoryFormComponent } from './story-form/story-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    StoryFormComponent,
    
    
    
    
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
