import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private processoService: ProcessService
  ) { }

  tarefa;
  valorMercadoria;

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.processoService.getTarefa(params.id).subscribe(res => {
          this.tarefa = res;
        })
      }
    });
  }

  salvar(decisao) {
    var tarefa = Object.assign({}, this.tarefa);

    tarefa.valorMercadoria = this.valorMercadoria;

    this.processoService.postTarefaCotacao(tarefa, decisao).subscribe(res => {
      this.router.navigate([''])
    })
  }

  save() {
    this.processoService.postTarefaSolicitacao(this.tarefa).subscribe(res => {
      this.router.navigate([''])
    })
  }
}
