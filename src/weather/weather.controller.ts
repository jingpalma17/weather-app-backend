import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOAuth2,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WeatherService } from './weather.service';

@ApiOAuth2([])
@ApiBearerAuth('access-token')
@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('')
  @ApiOperation({ summary: 'Get weather' })
  async getWeather(): Promise<any> {
    return this.weatherService.getWeather();
  }
}
