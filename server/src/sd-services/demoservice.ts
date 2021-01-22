let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as httpStatusCodes from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as safeStringify from 'fast-safe-stringify'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end

export class demoservice {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'demoservice';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new demoservice(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_demoservice_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: demoservice');

    //appendnew_flow_demoservice_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: demoservice');

    if (!this.swaggerDocument['paths']['/get-countries']) {
      this.swaggerDocument['paths']['/get-countries'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/get-countries']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/get-countries`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.getCountryApi(bh);
          //appendnew_next_sd_LZWy1LSYyGZYoKwl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LZWy1LSYyGZYoKwl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/mongodata']) {
      this.swaggerDocument['paths']['/mongodata'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/mongodata']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/mongodata`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.mongodb(bh);
          //appendnew_next_sd_F4nfUD2sxZ8dnozh
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_F4nfUD2sxZ8dnozh');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_demoservice_HttpIn
  }
  //   service flows_demoservice

  //appendnew_flow_demoservice_listen

  async mystartnode(bh) {
    try {
      bh = await this.sd_UOMCxEKEU3sYy1z7(bh);
      //appendnew_next_mystartnode
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zSBBrq552Fcv0YMy');
    }
  }

  async yourstartnode(bh) {
    try {
      bh = await this.sd_pFDTS5nBCpZtWnAg(bh);
      //appendnew_next_yourstartnode
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4Fww62BPrt9AiHpE');
    }
  }

  //appendnew_flow_demoservice_Start

  async getCountryApi(bh) {
    try {
      let requestOptions = {
        url: 'https://restcountries.eu/rest/v2/all',
        timeout: 30000,
        method: 'get',
        headers: {},
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: undefined,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        rejectUnauthorized: false
      };
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.result = responseMsg;
      bh = await this.sd_7gTPXjVHXVmEcjaB(bh);
      //appendnew_next_getCountryApi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_znptN6to8ndoabd0');
    }
  }

  async sd_7gTPXjVHXVmEcjaB(bh) {
    try {
      bh = await this.yourstartnode(bh);
      bh = await this.sd_zNtbsgOi4ClIBov3(bh);
      //appendnew_next_sd_7gTPXjVHXVmEcjaB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7gTPXjVHXVmEcjaB');
    }
  }

  async sd_zNtbsgOi4ClIBov3(bh) {
    try {
      //throw new Error('Error Thrown for testing');
      await this.sd_0EJMMWNkbeNEU2gm(bh);
      //appendnew_next_sd_zNtbsgOi4ClIBov3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zNtbsgOi4ClIBov3');
    }
  }

  async sd_0EJMMWNkbeNEU2gm(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result.payload);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0EJMMWNkbeNEU2gm');
    }
  }

  async sd_gv50ymCPYIxzyv3G(bh) {
    try {
      bh.web.res.status(200).send('Error Occured');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gv50ymCPYIxzyv3G');
    }
  }

  async sd_UOMCxEKEU3sYy1z7(bh) {
    try {
      this.sd_vQO3Mxr8zveNoxB9(bh);
      //appendnew_next_sd_UOMCxEKEU3sYy1z7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UOMCxEKEU3sYy1z7');
    }
  }

  async sd_vQO3Mxr8zveNoxB9(bh) {
    try {
      let logobj: any = bh.local.result;
      if (logobj instanceof Error) {
        log.info(logobj);
      } else {
        log.info(safeStringify.default(logobj));
      }
      //appendnew_next_sd_vQO3Mxr8zveNoxB9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vQO3Mxr8zveNoxB9');
    }
  }

  async sd_pFDTS5nBCpZtWnAg(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.input.body.number1,
          10,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_QD6jU5OknyHDQuMi(bh);
      } else if (
        this.sdService.operators['gt'](
          bh.input.body.number1,
          20,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yOMezxJU9cugAmZ2(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pFDTS5nBCpZtWnAg');
    }
  }

  async sd_QD6jU5OknyHDQuMi(bh) {
    try {
      console.log('this', bh.input.body.number1);
      //appendnew_next_sd_QD6jU5OknyHDQuMi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QD6jU5OknyHDQuMi');
    }
  }

  async sd_yOMezxJU9cugAmZ2(bh) {
    try {
      console.log('this2', bh.input.body.number1);
      //appendnew_next_sd_yOMezxJU9cugAmZ2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yOMezxJU9cugAmZ2');
    }
  }

  async mongodb(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_4BvzTNUDH2ODSgbc',
        'country',
        bh.input.body,
        {}
      );
      await this.sd_pq40deTvQl2zyd4P(bh);
      //appendnew_next_mongodb
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pAS4l4MP2nXVezJ8');
    }
  }

  async sd_pq40deTvQl2zyd4P(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pq40deTvQl2zyd4P');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_7gJYbp7ifvqfJB2v(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_7gJYbp7ifvqfJB2v(bh) {
    const catchConnectedNodes = ['sd_gv50ymCPYIxzyv3G'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sd_gv50ymCPYIxzyv3G(bh);
    //appendnew_next_sd_7gJYbp7ifvqfJB2v
    return true;
  }
  //appendnew_flow_demoservice_Catch
}
