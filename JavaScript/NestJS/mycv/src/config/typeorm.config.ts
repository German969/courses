import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    let dbOptions: TypeOrmModuleOptions;

    switch (process.env.NODE_ENV) {
      case 'development':
        dbOptions = {
          type: this.configService.get<any>('DB_TYPE'),
          synchronize: false,
          database: this.configService.get<string>('DB_NAME'),
          autoLoadEntities: true
        };
        break;
      case 'test':
        dbOptions = {
          type: this.configService.get<any>('DB_TYPE'),
          synchronize: true,
          database: this.configService.get<string>('DB_NAME'),
          autoLoadEntities: true,
          migrationsRun: true
        };
        break;
      case 'production':
        dbOptions = {
          type: this.configService.get<any>('DB_TYPE'),
          synchronize: false,
          url: process.env.DATABASE_URL,
          autoLoadEntities: true,
          migrationsRun: true,
          ssl: {
            rejectUnauthorize: false
          }
        };
        break;
      default:
        throw new Error('No environment found');
    }

    return dbOptions;
  }
}

// npm run typeorm migration:generate src/migrations/initial-schema
// npm run typeorm migration:run