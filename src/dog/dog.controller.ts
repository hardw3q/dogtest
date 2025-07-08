import { Controller, Get, Post, Param } from '@nestjs/common';
import { DogService } from './dog.service';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post('/:id/like')
  @ApiOperation({
    summary: 'Поставить лайк собаке',
    description: 'Инкрементирует счетчик лайков у собаки.',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Идентификатор собаки',
  })
  likeDog(@Param('id') id: number) {
    return this.dogService.likeDog(Number(id));
  }
  @Post()
  @ApiOperation({
    summary: 'Обновить данные собак',
    description: 'Перезагрузить массив собак из API Randomdog',
  })
  reloadDogs() {
    return this.dogService.reloadDogs();
  }

  @Get()
  @ApiOperation({
    summary: 'Получить всех собак',
    description: 'Получить список собак с названиями файлов.',
  })
  findAll() {
    return this.dogService.findAll();
  }
}
