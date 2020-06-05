import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-form-start',
  templateUrl: './form-start.component.html',
  styleUrls: ['./form-start.component.scss']
})
export class FormStartComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private processoService: ProcessService
  ) { }
  
  nomeCliente;
  nomeSolicitante;
  quantidadeMercadoria;
  tipoMercadoria;

  ngOnInit() {
  }
  
  save() {
    var tarefa = { 
      nomeCliente: this.nomeCliente,
      nomeSolicitante: this.nomeSolicitante,
      quantidadeMercadoria: this.quantidadeMercadoria,
      tipoMercadoria: this.tipoMercadoria 
    }
    
    this.processoService.postProcess(tarefa).subscribe(res => {
      this.router.navigate([''])
    })
  }

}
