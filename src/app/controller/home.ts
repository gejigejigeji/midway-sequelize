import { Context, inject, controller, get, provide ,post} from 'midway';


/**
 * @Description:
 * @param:
 * @return:
*/
@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @inject()
  handleCookie;

  @get('/')
  async index() {
    this.handleCookie.setCookie();
    this.ctx.body = `Welcome to midwayjs!`;
  }
}
