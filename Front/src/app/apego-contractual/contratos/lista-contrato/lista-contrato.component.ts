import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ClienteService } from 'src/app/services/cliente.service';
import { Catalogo } from 'src/app/interfaces/catalogo.interface';
import { ContratoService } from 'src/app/services/contrato.service';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { CardListComponent } from "../../components/card-list/card-list.component";

@Component({
  selector: 'app-lista-contrato',
  standalone: true,
  imports: [SharedModule, MaterialModule, CardListComponent],
  templateUrl: './lista-contrato.component.html',
  styleUrl: './lista-contrato.component.scss'
})
export default class ListaContratoComponent implements OnInit {
  
  public clientes: Catalogo[] = [];
  public contratos: Contrato[] = [];
  public idSelected: number = 0;
  

  constructor(private clientesService: ClienteService,
              private contratosService: ContratoService
  ) {}
  
  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      (data) => {
        if(data){
          this.clientes = data;
          this.getContratos(this.clientes[0].id);
        }  
      }
    );
     
  }

  getContratos(idCliente: number){
    this.idSelected = idCliente;
    this.contratosService.getContratosByCliente(idCliente).subscribe(data => this.contratos = data);
  }

}
