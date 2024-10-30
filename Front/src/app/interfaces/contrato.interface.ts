export interface Contrato {
    id:            number;
    identificador: string;
    descripcion:   string;
    vigencia:      number;
    idCliente:     number;
    cliente:       string;
    verificado:    boolean;
    activo:        boolean;
}