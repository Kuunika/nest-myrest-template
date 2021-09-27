import { Injectable } from '@nestjs/common';
import winston, { Logger, createLogger } from 'winston';
import ecsFormat from '@elastic/ecs-winston-format';
import { APP_NAME } from '../common/constants';
import { HTTPMetadata } from '../common/types';

@Injectable()
export class LogService {
  private _logger: Logger;

  constructor() {
    this._logger = createLogger({
      level: 'info',
      format: ecsFormat({ convertReqRes: true }),
      defaultMeta: { service: APP_NAME },
      transports: [new winston.transports.Console()],
    });
  }

  info(message: string, meta: HTTPMetadata) {
    this._logger.info(message, meta);
  }
}
