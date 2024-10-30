// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { CardComponent } from './components/card/card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// bootstrap import
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ModalCargaContratoComponent } from './components/modal-carga-contrato/modal-carga-contrato.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgxSpinnerModule } from "ngx-spinner";
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [SpinnerComponent, AlertComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent,
    ModalCargaContratoComponent,
    NgbDatepicker,
    NgxFileDropModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-fade' }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    SpinnerComponent,
    NgbModule,
    NgScrollbarModule,
    NgbCollapseModule,
    BreadcrumbsComponent,
    ModalCargaContratoComponent,
  ]
})
export class SharedModule {}
