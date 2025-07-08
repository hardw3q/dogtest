import { Module } from '@nestjs/common';
import { DogModule } from './dog/dog.module';
import { PrismaModule } from './prisma/prisma.module';
import { RandomdogModule } from './randomdog/randomdog.module';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [DogModule,
    PrismaModule,
    RandomdogModule,
    ConfigModule.forRoot()],
})
export class AppModule {}
