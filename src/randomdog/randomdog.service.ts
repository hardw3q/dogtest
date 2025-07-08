import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class RandomdogService {
  private randomInstance: AxiosInstance;

  constructor() {
    const baseURL = 'https://random.dog/';
    const defaultConfig = {
      baseURL,
    };
    this.randomInstance = axios.create(defaultConfig);
  }
  async getAllDogs() {
    const dogs = await this.randomInstance.get('/doggos');
    return dogs.data;
  }
}
