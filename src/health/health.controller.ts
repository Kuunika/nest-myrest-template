import { Controller, Get, UseInterceptors } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
  MongooseHealthIndicator,
} from '@nestjs/terminus';
import { LogInterceptor } from '../log/interceptors/log.interceptor';

@UseInterceptors(LogInterceptor)
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: MongooseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck('nest', 'https://nestjs.com'),
      () => this.db.pingCheck('database'),
    ]);
  }
}
