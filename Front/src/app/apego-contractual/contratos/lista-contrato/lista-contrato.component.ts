import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-lista-contrato',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './lista-contrato.component.html',
  styleUrl: './lista-contrato.component.scss'
})
export default class ListaContratoComponent {

}
