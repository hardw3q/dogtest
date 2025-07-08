import {Injectable, OnModuleInit} from '@nestjs/common';
import {RandomdogService} from "../randomdog/randomdog.service";
import {PrismaService} from "../prisma/prisma.service";


@Injectable()
export class DogService implements OnModuleInit{
  constructor(private randomdogService: RandomdogService, private prisma: PrismaService) {
  }

  async onModuleInit() {
        await this.reloadDogs()
    }
  async reloadDogs() {
    const dogs: string[] = await this.randomdogService.getAllDogs()
    await this.prisma.dog.deleteMany();
    return this.prisma.dog.createMany({
      data: dogs.map((file) => ({file})),
    });
  }
  async findAll(){
    return this.prisma.dog.findMany();
  }
}
