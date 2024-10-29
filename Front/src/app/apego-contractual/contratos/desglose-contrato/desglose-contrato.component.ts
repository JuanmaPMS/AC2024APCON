import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-desglose-contrato',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './desglose-contrato.component.html',
  styleUrl: './desglose-contrato.component.scss'
})


export default class DesgloseContratoComponent {
 nomcontrato:string ='PME-SEGOB-2020-01';
cliente:string ='Secretaría de Gobernación'

}
