import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDiary } from '../models/IDiary';
import { ITopic } from '../models/ITopic';

const BASE_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class DiaryService {

  constructor(private httpClient: HttpClient) { }

  getListTopics(): Observable<ITopic[]> {
    return this.httpClient.get<ITopic[]>(`${BASE_URL}/api/v1/topics`);
  }

  createDiary(diary: IDiary): Observable<IDiary> {
    return this.httpClient.post<IDiary>(`${BASE_URL}/api/v1/diaries`, diary);
  }
}
