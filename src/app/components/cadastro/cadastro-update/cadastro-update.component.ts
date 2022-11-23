import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cadastro } from '../cadastro.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-cadastro-update',
  templateUrl: './cadastro-update.component.html',
  styleUrls: ['./cadastro-update.component.css'],
})
export class CadastroUpdateComponent implements OnInit {
  cadastro!: Cadastro;
  constructor(
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.cadastroService.readById(+id).subscribe((cadastro) => {
      this.cadastro = cadastro;
    });
  }
  updateCadastro(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.cadastroService.update(+id, this.cadastro).subscribe(() => {
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
