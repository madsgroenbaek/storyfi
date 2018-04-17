import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import {Story} from './Story'
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class StoriesService {

  constructor(private http:HttpClient) {
    
   }

   getStories(): Observable<Story[]>{
    //let heads = new Headers(); 
    //heads.append('Content-Type','application/json');
    var url ='https://5vhqqlfyrk.execute-api.us-east-2.amazonaws.com/dev' 
    //var ret: Story[];
    return this.http.get<Story[]>(url).map(res => JSON.parse( res['body']) as Story[]
      //catchError(this.handleError('getHerroes',[]))
   );}

   putStory(){
    let heads = new HttpHeaders(); 
    heads.append('Content-Type','application/json')
    // heads.append('Access-Control-Allow-Origin','*')
    // heads.append('Acces-Control-Allow-Credentials','true')
    // heads.append('Access-Control-Allow-Headers','Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token')
    // heads.append('Access-Control-Allow-Methods','GET,OPTIONS,PUT')
    var url ='https://5vhqqlfyrk.execute-api.us-east-2.amazonaws.com/dev' 
    // var body = new Stor
    // body.Name="asd"
    // var js = JSON.stringify({body})
    // console.log(js)
    return this.http.put(url,{"body":"{'Name':'Sorted out of '}"},{headers:heads})
   }  
   
   private log(message: string) {
    console.log("message")
     console.log(message)
    //this.messageService.add('HeroService: ' + message);
  }
   /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
