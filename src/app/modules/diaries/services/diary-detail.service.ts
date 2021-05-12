import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DiaryDetailService {

  constructor(private http: HttpClient) {}

  getById(id: any):Observable <any> {
    const url = `${baseUrl}diaries/${id}`
    return this.http.get(url)
  }

}

