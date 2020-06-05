import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(
    private http: HttpClient
  ) { }
  
  backendUrl = "http://localhost:8081/v1/process";

  getTarefasSolicitacao() {
    return this.http.get(`${this.backendUrl}/tarefas/solicitacao`)
  }

  getTarefasCotacao() {
    return this.http.get(`${this.backendUrl}/tarefas/cotacao`)
  }

  getTarefa(id) {
    return this.http.get(`${this.backendUrl}/tarefa/${id}`)
  }

  postTarefaCotacao(tarefa, decisao) {
    return this.http.post(`${this.backendUrl}/tarefa/cotacao/${decisao}`, tarefa)
  }

  postTarefaSolicitacao(tarefa)  {
    return this.http.post(`${this.backendUrl}/tarefa/solicitacao`, tarefa)
  }

  postProcess(tarefa: any)  {
    return this.http.post(`${this.backendUrl}`, tarefa)
  }
}
