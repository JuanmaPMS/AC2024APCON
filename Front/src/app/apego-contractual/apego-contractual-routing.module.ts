import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'contrato-alta',
        loadComponent: () => import('./contratos/alta-contrato/alta-contrato.component')
      },
      {
        path: 'contrato-modificacion',
        loadComponent: () => import('./contratos/modificacion-contrato/modificacion-contrato.component')
      },
      {
        path: 'contrato-lista',
        loadComponent: () => import('./contratos/lista-contrato/lista-contrato.component')
      },
      {
        path: 'contrato-carga',
        loadComponent: () => import('./contratos/carga-contrato/carga-contrato.component')
      },
      {
        path: 'contrato-modal-carga',
        loadComponent: () => import('./contratos/modal-contrato/modal-contrato.component')
      },
      {
        path: 'anexo-alta',
        loadComponent: () => import('./anexo-tecnico/alta-anexo/alta-anexo.component')
      },
      {
        path: 'contrato-desglose',
        loadComponent: () => import('./contratos/desglose-contrato/desglose-contrato.component')
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApegoContractualRoutingModule {}
