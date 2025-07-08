import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import {PrismaModule} from "../prisma/prisma.module";
import {RandomdogService} from "../randomdog/randomdog.service";

@Module({
  controllers: [DogController],
  providers: [DogService],
  imports: [PrismaModule, RandomdogService]
})
export class DogModule {}
