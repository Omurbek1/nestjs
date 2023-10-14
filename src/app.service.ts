import { Injectable } from '@nestjs/common';
// for all logic
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
