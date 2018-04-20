import { Component, OnInit } from '@angular/core';
import {StoriesService} from '../stories.service'
import {Story} from '../Story'
import { Observable } from 'rxjs/Observable';
import {STORIES} from '../mock-stories'
import {StoryFormComponent} from '../story-form/story-form.component'
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  private loading: boolean = false;
  stories: Observable<Story[]>;
  private updatedStory: Story;
  username: Story[] = [];
  myFinalValue: string;
  constructor(private storiesService:StoriesService) { }

  ngOnInit() {
    //this.stories=STORIES;
    //this.putStory();
    this.getStories()
    //this.putStory()
    //console.log(this.stories[0])
  }
  // getStories(){
  //   this.loading = true
  //   //this.stories = this.storiesService.getStories()
  //   this.storiesService.getStories().subscribe(res=>console.log(res))
  //   this.loading = false;
//}
  
  getStories(){
    this.loading = true
    this.stories = this.storiesService.getStories()
    this.loading = false;
}
  postStory(){
    this.storiesService.postStory().subscribe(res =>
       {var st = res as Story;
        console.log(res)
        this.stories.subscribe(st=>st)

      }
    
    )
  }
  getLocalStory(): any {
    this.stories.subscribe(sts => {
      return this.myFinalValue = sts[0].Id;
    })
    
  }
  putStory(name:String){
    
    var st: Story[] = [];
    var jsStory: Story;
    var txt: String;
    this.stories.observeOn
    //var st=this.stories.take
    var val:  string;
    
    var lst=this.getLocalStory();
    //jsStory.Name="PølseMand"
      
    
    
    // var st = this.getLocalStory() 
    var nStory= new Story("98649e6b-f8c7-4f3b-a157-9caa4fc8abd2");
    nStory.Name="pølse"
     //nStory.Id=val;
    this.storiesService.putStory(nStory).subscribe(res=>console.log(res));
      // let story: Story;
      // let stId: string;
      // this.stories.map((sts: Story[])=>{
      //   story=sts[0]

      // })
      // this.stories.subscribe((sts: Story[])=>{
      //   story=sts[0] as Story;
      //   this.updatedStory=story;
      //   
      //   stId=story.Id;
      //   console.log("StoryId " + stId)
        
      // }
      
      
      
    //)
    
    
    
    

  }
}    
