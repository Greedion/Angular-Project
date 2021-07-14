import { ServersService } from './../servers.service';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private ServersService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
     Observable<Server> | Promise<Server> | Server {
        return this.ServersService.getServer(+route.params['id']);
    }
}