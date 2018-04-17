import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../stories.service'
import {Story} from '../Story'
import { Observable } from 'rxjs/Observable';
import {STORIES} from '../mock-stories'
import {StoryFormComponent} from '../story-form/story-form.component'

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  private loading: boolean = false;
  stories: Observable<Story[]>;
  constructor(private storiesService:StoriesService) { }

  ngOnInit() {
    //this.stories=STORIES;
    this.getStories()
    //this.putStory()
    //console.log(this.stories[0])
  }

  
  getStories(){
    this.loading = true
    this.stories = this.storiesService.getStories()
    this.loading = false;
}
  putStory(){
    this.storiesService.putStory().subscribe(res =>console.log(res))
  }
}    
