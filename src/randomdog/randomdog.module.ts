import { Module } from '@nestjs/common';
import { RandomdogService } from './randomdog.service';

@Module({
  providers: [RandomdogService],
  exports: [RandomdogService],
})
export class RandomdogModule {}
