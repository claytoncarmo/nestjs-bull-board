import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { QueueService } from './queue.service';
import { Job } from 'bullmq';

@Controller('queue')
export class QueueController {

  constructor(
    private readonly queueService: QueueService,
  ) { }

  @Put()
  putInQueue(@Body() data: any): Promise<Job> {
    return this.queueService.putInQueue(data);
  }

  @Get()
  getJob(@Query('id') jobId: string): Promise<Job> {
    return this.queueService.getJob(jobId);
  }

}
