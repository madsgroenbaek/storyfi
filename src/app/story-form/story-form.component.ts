import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Story} from '../Story'
import {Form} from '@angular/forms'

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
  
})
export class StoryFormComponent implements OnInit {
  
  @Input() story: Story;
  //@Output() valueChange:EventEmitter<Story> = new EventEmitter<Story>()

  //story: Story;
  
  constructor() {
    
   }

  ngOnInit() {
    //this.story=new Story("ssss","sss","sss","sss")
  }

}
