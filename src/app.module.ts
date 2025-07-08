import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { PrismaModule } from './prisma/prisma.module';
import { RandomdogModule } from './randomdog/randomdog.module';

@Module({
  imports: [DogModule, PrismaModule, RandomdogModule],
})
export class AppModule {}
