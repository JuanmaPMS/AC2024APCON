import { Component, OnInit } from '@angular/core';
import { Desglose } from 'src/app/interfaces/desglose.interface';
import { DesgloseService } from 'src/app/services/desglose.service';
import { SelectListComponent } from "../../components/select-list/select-list.component";

@Component({
  selector: 'app-desglose-detalle-contrato',
  standalone: true,
  imports: [SelectListComponent],
  templateUrl: './desglose-detalle-contrato.component.html',
  styleUrl: './desglose-detalle-contrato.component.scss'
})
export default class DesgloseDetalleContratoComponent implements OnInit {
  public desglose: Desglose[] = [];
  public tipo: string = 'Obligaciones';
  public contrato: string = 'PME-SEGOB-2023-01';
  public cliente: string = 'Secretaría de Gobernación';
  public documento: string = 'Anexo';

  constructor(private desgloseService: DesgloseService) {}

  ngOnInit(): void {
    this.desgloseService.getDetalle().subscribe(data => this.desglose = data);
  }
  
}
