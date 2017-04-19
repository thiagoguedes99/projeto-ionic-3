import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

//import { Inventario } from './../model/inventario';
import { Resposta } from './../model/resposta';
import { Inventario } from './inventario';

@Injectable()
export class InventarioService {

  private header = new Headers({'Content-Type': 'application/json'});
  private url = 'http://localhost:3000/inventario/';

  constructor(private http: Http) { }

  getInventario(): Observable<Inventario[]> {

    return this.http.get(this.url)
                    .map(r => r.json())
                    .catch(this.handleError);
  }

  getPeloID(id: number): Observable<Inventario> {
    return this.http.get(`${this.url}:id`, id)
               .map(r => r.json())
               .catch(this.handleError);
  }

  gravar(inventario: any) { //: Observable<Resposta> {
    return this.http.post(this.url, inventario)
                    .map(r=> r.json())
                    .catch(err=> err);
  }

  atualizar(inventario: Inventario) { //: Observable<Resposta> {
    return this.http.put(this.url, inventario)
                    .map(r => r.json())
                    .catch(this.handleError);
  }

  deletar(id: number) { //: Observable<Resposta> {
    return this.http.delete(`${this.url}:id`,id)
                    .map(r => r.json())
                    .catch(this.handleError);
  }



  private handleError(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} - ${err}`;
    }
    else{
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}