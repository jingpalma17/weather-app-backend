import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOAuth2,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { ConfigService } from '@nestjs/config';

@ApiOAuth2([])
@ApiBearerAuth('access-token')
@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService,
    private configService: ConfigService,) {}

  @Get('/:city')
  @ApiOperation({ summary: 'Get weather' })
  async getWeather(
    @Param('city') city: string,): Promise<any> {
    return this.weatherService.getWeather(city);
  }
}
