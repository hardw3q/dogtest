import { Controller, Get, Post, Param, Query } from '@nestjs/common';
import { DogService } from './dog.service';
import { ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';

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
  @ApiQuery({
    name: 'page',
    type: Number,
    description: 'Номер страницы (default: 1)',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    description: 'Количество объектов на странице (default: 10)',
    required: false,
    example: 10,
  })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.dogService.findAll({
      page: Number(page),
      limit: Number(limit),
    });
  }
}
