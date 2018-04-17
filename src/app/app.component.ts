import { Component,OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Http} from '@angular/http'
import {Story} from './Story'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private http:HttpClient,private http2:Http){}
  


  ngOnInit(): void{
    const _heads = new HttpHeaders;
    const heads = _heads
    //.append('Access-Control-Allow-Origin','*')
    .append('Access-Control-Request-Method','POST, GET, PUT, DELETE, OPTIONS')
    .append('Content-Type','application/json')
    //.append('Access-Control-Allow-Origin','http://localhost:4200');

    var url='https://jsonplaceholder.typicode.com/posts/1'
    var url2 ='https://66zd79wbr4.execute-api.us-east-2.amazonaws.com/dev'
    //heads.set('Access-Control-Allow-Origin','*')
    // heads.append('Access-Control-Allow-Origin','*');
    // heads.append('Access-Control-Request-Method','POST, GET, PUT, DELETE, OPTIONS')
    //  heads.append('Access-Control-Allow-Origin','http://localhost:4200');
    //  heads.append('Content-Type','application/json');
    //  heads.append('Content-Type','text/plain');
    // var st = new Story()
    // st.Name="Igor"
    // var js = JSON.stringify(js)
    //this.http.put(url2,{'body':"{'Name':'Jørgensen'}"})
    // .subscribe(
    //   res =>console.log(res),
    //   msg => console.error(msg)
  
    //heads.append('Access-Control-Allow-Methods', 'GET, OPTIONS');
    //heads.append('Access-Control-Allow-Headers', 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token')
    //heads.append('Access-Control-Allow-Credentials','false')
    
    // this.http.get(url2,{headers:heads}).subscribe(data=>{
    //   console.log(data) }
    //)
  }
  
}




