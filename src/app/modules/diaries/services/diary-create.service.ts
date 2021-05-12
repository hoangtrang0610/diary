import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITopic } from '../models/ITopic';

@Injectable({
  providedIn: 'root'
})
export class DiaryCreateService {

  constructor(
    private http:HttpClient
  ) { }
  getTopices(): Observable<ITopic[]> {
    const url = `http://192.168.30.26:9090/api/v1/topics`;
    return this.http.get<ITopic[]>(url)
  }
}
