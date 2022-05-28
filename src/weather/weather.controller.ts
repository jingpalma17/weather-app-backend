import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  @Get('')
  @ApiOperation({ summary: 'Get weather' })
  async getWeather(): Promise<any> {
    return {
      data: 1,
    };
  }
}
