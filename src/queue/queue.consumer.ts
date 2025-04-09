import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { promisify } from 'util';

const sleep = promisify(setTimeout);

@Processor('test-queue')
export class QueueConsumer extends WorkerHost {
  private logger = new Logger(QueueConsumer.name);

  async process(job: Job): Promise<any> {
    this.logger.log(`Processing job ${job.id}: ${JSON.stringify(job.data)}`);
    const start = Date.now();

    const steps = job.data.runTime / 1000;

    for (let i = 0; i < steps; i++) {
      await sleep(1000);
      job.updateProgress(Math.round(100 / steps * (i + 1)));
      job.data.runTime = job.data.runTime - 1000;
      this.logger.log(`Job ${job.id} running (${job.progress}%)...`);
    }

    this.logger.log(`Processed job ${job.id} in ${Date.now() - start}ms`);
  }
}
