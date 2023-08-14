import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  constructor(private http: HttpClient) {}

  public GetProdutos() {
    return this.http.get('http://localhost:8080/produtos');
  }

  public GetProdutosById(id:number) {
    return this.http.get(`http://localhost:8080/produtos/${id}`);
  }

  public removeProduto(id: number) {
    const url = `http://localhost:8080/produtos/${id}`;
    return this.http.delete(url);
  }
}
