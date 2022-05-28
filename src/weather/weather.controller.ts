import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOAuth2,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { ConfigService } from '@nestjs/config';

// @ApiOAuth2([])
// @ApiBearerAuth('access-token')
@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService,
    private configService: ConfigService,) {}

  @Get('')
  @ApiOperation({ summary: 'Get weather' })
  async getWeather(): Promise<any> {
    return this.weatherService.getWeather();
  }

  @Get('test')
  getTest(): string {
    console.log(this.configService.get('WEATHER_API_BASE_URL'));
    return '';
  }
}
