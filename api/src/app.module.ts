import { Module } from '@nestjs/common';
import { ApartmentsModule } from './apartments/apartments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseOptions } from './config/typeorm.options';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ApartmentsModule,
    TypeOrmModule.forRootAsync(DatabaseOptions),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
