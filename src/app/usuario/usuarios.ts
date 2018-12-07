import { Usuario } from './usuario';

export class Usuarios {

    private _usuarios: Usuario[] = [];

    adiciona(usuario: Usuario): void {
        this._usuarios.push(usuario);
    }

    paraArray(): Usuario[] {
        return [].concat(this._usuarios);
    }
}
