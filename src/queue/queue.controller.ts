import { Body, Controller, Get, Put } from '@nestjs/common';
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {

  constructor(
    private readonly queueService: QueueService,
  ) { }

  @Put()
  putInQueue(@Body() data: any): void {
    this.queueService.putInQueue(data);
  }

  @Get()
  getNext(): any {
    return this.queueService.getNext();
  }

}
