import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import{ Estoque } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private apiUrl = 'http://localhost:3000/estoque/';

  constructor(private http: HttpClient) { }

  getEstoque(): Observable<Estoque[]> {
    return this.http.get<Estoque[]>(this.apiUrl);
  }

}
