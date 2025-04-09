import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bullmq';
import { QueueConsumer } from './queue.consumer';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test-queue',
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, QueueConsumer],
})
export class QueueModule {}
