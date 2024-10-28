import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-alta-contrato',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './alta-contrato.component.html',
  styleUrl: './alta-contrato.component.scss'
})
export default class AltaContratoComponent {

  constructor(){

  }
}
