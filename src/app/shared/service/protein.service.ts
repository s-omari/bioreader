import { Injectable } from '@angular/core';

import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Protein} from '../model/protein.model'
@Injectable()
export class ProteinService {
  constructor(private http : Http)   { }

getProteins(): Observable<Array<Protein>> {
    const headers = new Headers();
    headers.append('Content-type' , 'application/json');
  return  this.http.get("http://127.0.0.1:8000/api/v1/protein/10/0/en" , {headers : headers}).map(res => res.json());
  
}


}