import { Usuario } from './usuario';

export class Usuarios {

    private _usuarios: string[] = [];

    adiciona(usuario: string): void {
        this._usuarios.push(usuario);
    }

    paraArray(): string[] {
        return [].concat(this._usuarios);
    }
}
