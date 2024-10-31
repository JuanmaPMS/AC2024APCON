import { Component, Input, OnInit } from '@angular/core';
import { Contrato } from 'src/app/interfaces/contrato.interface';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-contrato-card',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input()
  public contrato!: Contrato;


  ngOnInit(): void {
    if(!this.contrato) throw new Error('Contrato is required.');
  }

}
