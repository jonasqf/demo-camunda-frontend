import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(
    private processoService: ProcessService,
    private router: Router
  ) { }

  tarefas = [];

  ngOnInit() {
    this.processoService.getTarefasCotacao().subscribe((res: any) => {
      this.processoService.getTarefasSolicitacao().subscribe((res2: any) => {
        this.tarefas = res2.concat(res);
      })
    })
  }

  goTo($event, id) {
    $event.preventDefault();

    this.router.navigate([id]);
  }

}
