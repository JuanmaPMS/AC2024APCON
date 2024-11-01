import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Desglose } from "../interfaces/desglose.interface";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DesgloseService{
    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getDetalle():Observable<Desglose[]>{
        return this.http.get<Desglose[]>(`${this.baseUrl}/desglose`);
    }

}