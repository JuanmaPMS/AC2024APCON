export interface Contrato {
    id:            number;
    identificador: string;
    descripcion:   string;
    inicioVigencia:Date;
    finVigencia:   Date;
    idCliente:     number;
    cliente:       string;
    verificado:    boolean;
    activo:        boolean;
}