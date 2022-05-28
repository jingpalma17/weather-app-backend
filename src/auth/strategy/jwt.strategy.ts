import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${configService.get(
          'AUTH0_ISSUER_URL',
        )}.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: `${configService.get('AUTH0_AUDIENCE')}`,
      issuer: configService.get('AUTH0_ISSUER_URL'),
      algorithms: ['RS256'],
    });
  }

  // TODO Fix any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate(payload: JwtPayload): any {
    return payload;
  }
}
