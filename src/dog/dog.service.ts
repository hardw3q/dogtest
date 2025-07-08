import {Injectable, NotFoundException, OnModuleInit} from '@nestjs/common';
import { RandomdogService } from '../randomdog/randomdog.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DogService {
  constructor(
    private randomdogService: RandomdogService,
    private prisma: PrismaService,
  ) {}

  async reloadDogs() {
    const dogs: string[] = await this.randomdogService.getAllDogs();
    await this.prisma.dog.deleteMany();
    return this.prisma.dog.createMany({
      data: dogs.map((file) => ({ file })),
    });
  }
  async findAll() {
    return this.prisma.dog.findMany();
  }
  async findOne(id: number) {
    return this.prisma.dog.findUnique({where: {id}});
  }
  async likeDog(id: number){
    const dog = await this.findOne(id)
    if(!dog) throw new NotFoundException('Not Found');
    return this.prisma.dog.update({
      where: {id},
      data: {likes: (dog.likes + 1)},
    })
  }
}
