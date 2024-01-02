import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private baseURL = 'https://api.github.com/users/LFerreira0/repos'
  constructor(    private http: HttpClient
    ) { }

  public getAllProjects(): Observable<[]>{
    return this.http.get<[]>(this.baseURL);
  }
}
