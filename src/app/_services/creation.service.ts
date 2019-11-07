import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../_models/Collection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreationService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {
  }

  public getCollectionArray(): Observable<Collection[]> {
      return this.http.get<Collection[]>(this.dataUrl);
  }

}
