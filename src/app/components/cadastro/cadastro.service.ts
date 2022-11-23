import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  baseUrl = 'http://localhost:3001/usuarios';

  constructor(private http: HttpClient) {}

  

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }

  read(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.baseUrl);
  }

  readById(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url);
  }

  update(id: number, cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Cadastro>(url, cadastro);

  }

  delete(id: number): Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Cadastro>(url);

  }
}
