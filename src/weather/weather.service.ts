import { HttpStatus } from '@nestjs/common';
import { Injectable, HttpException, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';

@Injectable()
export class WeatherService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getWeather(): Promise<any> {
    const weatherData = await new Promise(async (resolve, reject) => {
      this.httpService
        .get(
          `${this.configService.get(
            'WEATHER_API_BASE_URL',
          )}weather?q=${'Manila'},philippines&appid=${this.configService.get(
            'WEATHER_API_KEY',
          )}&units=imperial`,
        )
        .subscribe(
          async (response) => {
            resolve(response.data);
          },
          async (error) => {
            const newError = this.getHttpError(error, 'GET /weather');

            reject(newError);
          },
        );
    });
    return weatherData;
  }

  // TODO Moved to the utils herper folder for axios error
  getHttpError(error: AxiosError, message: string): HttpException {
    if (error.response) {
      return new HttpException(
        {
          statusCode: error.response.status,
          message: `${message} ${error.response.statusText}`,
        },
        error.response.status,
      );
    }
    if (error.request) {
      return new HttpException(
        {
          statusCode: HttpStatus.REQUEST_TIMEOUT,
          message: `${message} No Response`,
        },
        HttpStatus.REQUEST_TIMEOUT,
      );
    }

    return new HttpException(
      {
        statusCode: HttpStatus.AMBIGUOUS,
        message: `${message} ${error.message}`,
      },
      HttpStatus.AMBIGUOUS,
    );
  }
}
