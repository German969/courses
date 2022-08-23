import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get()
  getRootRoute() {
    return 'hi ther';
  }

  @Get('/bye')
  getByThere() {
    return 'bye there';
  }
}