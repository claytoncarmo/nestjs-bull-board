import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
// import { BullModule } from '@nestjs/bull';

@Module({
  // imports: [
  //   BullModule.forRoot({
  //     redis: {
  //       host: 'localhost',
  //       port: 6379,
  //     },
  //   }),
  // ],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule {}
