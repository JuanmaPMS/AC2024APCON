import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Contrato } from "../interfaces/contrato.interface";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class ContratoService{
    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getContratos():Observable<Contrato[]>{
        return this.http.get<Contrato[]>(`${this.baseUrl}/contratos`);
    }
    getContratosByCliente(id: number):Observable<Contrato[]>{
        return this.http.get<Contrato[]>(`${this.baseUrl}/contratos?idCliente=${id}`);
    }

}