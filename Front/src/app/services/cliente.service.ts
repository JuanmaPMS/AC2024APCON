import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Catalogo } from "../interfaces/catalogo.interface";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class ClienteService{
    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getClientes():Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>(`${this.baseUrl}/clientes`);
    }

}