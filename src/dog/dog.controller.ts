import { Controller, Get, Post, Param } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Post('/:id/like')
  likeDog(@Param('id') id: number) {
    return this.dogService.likeDog(Number(id));
  }
  @Post()
  reloadDogs() {
    return this.dogService.reloadDogs();
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }
}
