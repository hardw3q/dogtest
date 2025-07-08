import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import axios, {AxiosInstance} from "axios";

@Injectable()
export class RandomdogService {
    private randomInstance: AxiosInstance;

    constructor(private readonly configService: ConfigService) {
        const baseURL = this.configService.get<string>('DOGTEST_URL');
        const defaultConfig = {
            baseURL,
        };
        this.randomInstance = axios.create(defaultConfig);
    }
    async getAllDogs() {
        const dogs = await this.randomInstance.get('/doggos');
        return dogs.data
    }
}
