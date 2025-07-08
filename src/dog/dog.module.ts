import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RandomdogModule } from '../randomdog/randomdog.module';

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [PrismaModule, RandomdogModule],
})
export class DogModule {}
