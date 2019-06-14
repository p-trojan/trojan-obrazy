import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/index';
import { Creation } from '../_models/Creation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreationService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {
    console.log('from service getCreations: ', this.getCreations());

  }

  public getCreations(): Observable<Creation[]> {
    return this.http.get<Creation[]>(this.dataUrl);
  }

}
