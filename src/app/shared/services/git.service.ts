import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepository } from '../interfaces/git-interface';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  private baseURL = 'https://api.github.com/users/LFerreira0/repos'
  constructor(    private http: HttpClient
    ) { }

  public getAllProjects(): Observable<IRepository[]>{
    return this.http.get<IRepository[]>(this.baseURL);
  }
}
