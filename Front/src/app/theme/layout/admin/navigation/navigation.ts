import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  {
    id: 'contratos',
    title: 'Contratos',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Contratos',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
          {
            id: 'alta-contrato',
            title: 'Alta de contratos',
            type: 'item',
            url: '/apego/contrato-modal-carga'
          },
          {
            id: 'modificacion-contrato',
            title: 'Modificación de contratos',
            type: 'item',
            url: '/apego/contrato-modificacion'
          },
          {
            id: 'consulta-contrato',
            title: 'Consulta de contratos',
            type: 'item',
            url: '/apego/contrato-lista'
          },
          {
            id: 'reportes-contrato',
            title: 'Reportes',
            type: 'item',
            url: ''
          },
          {
            id: 'desglose-detalle',
            title: 'Desglose detalle',
            type: 'item',
            url: '/apego/desglose-detalle'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
