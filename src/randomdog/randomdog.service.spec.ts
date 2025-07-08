import { Test, TestingModule } from '@nestjs/testing';
import { RandomdogService } from './randomdog.service';

describe('RandomdogService', () => {
  let service: RandomdogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomdogService],
    }).compile();

    service = module.get<RandomdogService>(RandomdogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
