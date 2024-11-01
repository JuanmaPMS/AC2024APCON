import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { HeaderTitleComponent } from '../../components/header-title/header-title.component';

@Component({
  selector: 'app-desglose-contrato',
  standalone: true,
  imports: [SharedModule, HeaderTitleComponent],
  templateUrl: './desglose-contrato.component.html',
  styleUrl: './desglose-contrato.component.scss'
})


export default class DesgloseContratoComponent {
 nomcontrato:string ='PME-SEGOB-2020-01';
 cliente:string ='Secretaría de Gobernación'

}
