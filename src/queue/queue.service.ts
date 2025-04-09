import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class QueueService {

  private logger = new Logger(QueueService.name);
  private queue: any[] = [];

  putInQueue(data: any): void {
    this.queue.push(data);
    this.logger.log(`Added ${data} to queue`);
  }

  getNext(): any {
    return this.queue.shift();
  }

}
