import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOAuth2,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiOAuth2([])
@ApiBearerAuth('access-token')
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
