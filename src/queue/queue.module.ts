import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bullmq';
import { QueueConsumer } from './queue.consumer';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'test-queue',
    }),
    BullBoardModule.forFeature({
      name: 'test-queue',
      adapter: BullMQAdapter,
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService, QueueConsumer],
})
export class QueueModule {}
