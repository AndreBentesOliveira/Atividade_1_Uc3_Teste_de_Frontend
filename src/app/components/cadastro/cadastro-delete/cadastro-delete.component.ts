import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css'],
})
export class CadastroDeleteComponent implements OnInit {
  cadastro!: Cadastro;
  constructor(
    private cadastroService: CadastroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.cadastroService.readById(+id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    });
  }

  deleteCadastro(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.cadastroService.delete(+id).subscribe(() => {
      this.router.navigate(['cadastro/tabela']);
    });
  }

  cancelCadastro(): void {
    this.router.navigate(['']);
  }

  tabelaCadastro(): void {
    this.router.navigate(['cadastro/tabela']);
  }
}
