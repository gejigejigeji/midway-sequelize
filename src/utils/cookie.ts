import {provide,controller} from 'midway';

export interface IUserCookie{
    name:string,
    token?: string,
    maxAge?: number,
}

@provide()
export class handleCookie {

    async setCookie(config:IUserCookie) {
        console.log('=========================================================')
    }
}