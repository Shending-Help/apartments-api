import { Module } from '@nestjs/common';
import { AppService } from './app.service';
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
  providers: [AppService],
})
export class AppModule { }
