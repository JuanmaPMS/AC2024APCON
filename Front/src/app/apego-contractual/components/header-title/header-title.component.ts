import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title',
  standalone: true,
  imports: [],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.scss'
})
export class HeaderTitleComponent implements OnInit {
  @Input()
  public contrato: string;
  @Input()
  public cliente: string;
  
  ngOnInit(): void {
    if(!this.contrato) throw new Error('Contrato is required.');
    if(!this.cliente) throw new Error('Cliente is required.');
  }

}
