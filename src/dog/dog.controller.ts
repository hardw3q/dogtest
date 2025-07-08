import { Controller, Get, Post } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  reloadDogs() {
    return this.dogService.reloadDogs();
  }

  @Get()
  findAll() {
    return this.dogService.findAll();
  }
}
