import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job, Queue } from 'bullmq';

@Injectable()
export class QueueService {

  private logger = new Logger(QueueService.name);

  constructor(
    @InjectQueue('test-queue') private queue: Queue,
  ) { }

  async putInQueue(data: any): Promise<Job> {
    const job = await this.queue.add('test-job', data, { delay: data?.delay || 0 });
    this.logger.log(`Added job ${job.id} to queue: ${JSON.stringify(data)}`);
    return job;
  }

  async getJob(jobId: string): Promise<Job> {
    return this.queue.getJob(jobId);
  }

}
