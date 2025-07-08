import { Module } from '@nestjs/common';
import { RandomdogService } from './randomdog.service';
import {ConfigModule} from "@nestjs/config";

@Module({
  providers: [RandomdogService],
  imports: [ConfigModule],
  exports: [RandomdogService],
})
export class RandomdogModule {}
