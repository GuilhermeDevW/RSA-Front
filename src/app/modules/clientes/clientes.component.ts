import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.cookieService.delete('isLoggedIn');
    this.router.navigate(['/login']);
  }

  home() {
    this.router.navigate(['/home']);
  }
  clientes() {
    this.router.navigate(['/clientes']);
  }

  data = [
    {
      data: '2023-08-09',
      nome: 'Guilherme',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Guilherme@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-01-10',
      nome: 'Pedro',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Pedro@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-02-01',
      nome: 'João',
      cidade: 'Fortaleza',
      contrato: 'Contrato 123',
      email: 'João@email.com',
      telefone: '92993181305',
    },
    {
      data: '2022-08-10',
      nome: 'Maria',
      cidade: 'João Pessoa',
      contrato: 'Contrato 456',
      email: 'Maria@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2021-08-09',
      nome: 'Gustavo',
      cidade: 'Rio de Janeiro',
      contrato: 'Contrato 123',
      email: 'Gustavo@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-04-15',
      nome: 'Gabriel',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Gabriel@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-19',
      nome: 'Victoria',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Victoria@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-08-16',
      nome: 'Carlos',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Carlos@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-01-09',
      nome: 'Andreia',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Andreia@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-02-10',
      nome: 'Maria',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Maria@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-29',
      nome: 'Ana',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Ana@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-06-01',
      nome: 'Samra',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Samra@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-09',
      nome: 'Carlaa',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Carlaa@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-08-10',
      nome: 'Carlos',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Carlos@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-09',
      nome: 'Pedro João',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'pedro@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-08-10',
      nome: 'Pedro Guilherme',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Guilherme2@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-09',
      nome: 'Ana Victoria',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Victoria2@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-08-10',
      nome: 'Marilda',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Pedro@email.com',
      telefone: '987-654-3210',
    },
    {
      data: '2023-08-09',
      nome: 'Luzia',
      cidade: 'Manaus',
      contrato: 'Contrato 123',
      email: 'Guilherme@email.com',
      telefone: '92993181305',
    },
    {
      data: '2023-08-10',
      nome: 'Lais',
      cidade: 'São Paulo',
      contrato: 'Contrato 456',
      email: 'Pedro@email.com',
      telefone: '987-654-3210',
    },

    // Pode adicionar mais objetos de dados aqui
  ];

  // data = [
  //   { id: 1, nome: 'João', email: 'joao@example.com' },
  //   { id: 2, nome: 'Maria', email: 'maria@example.com' },
  //   { id: 3, nome: 'José', email: 'jose@example.com' },
  // ];

  filteredData = this.data;

  filterTable(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.nome.toLowerCase().includes(filterValue) ||
        item.email.toLowerCase().includes(filterValue) ||
        item.cidade.toLowerCase().includes(filterValue) ||
        item.contrato.toLowerCase().includes(filterValue) ||
        item.data.toLowerCase().includes(filterValue) ||
        item.telefone.toLowerCase().includes(filterValue)
    );
  }
}
