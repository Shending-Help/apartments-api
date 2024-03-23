// src/apartment/dto/create-apartment.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateApartmentDto {
  @ApiProperty({
    description: 'The title of the apartment',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'The description of the apartment',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The price of the apartment',
    type: Number,
    required: true,
  })
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({ description: 'The location of the apartment' })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'The number of bedrooms in the apartment',
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  bedrooms: number;

  @ApiProperty({
    description: 'The number of bathrooms in the apartment',
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  bathrooms: number;

  @ApiProperty({
    description: 'The size of the apartment in square meters',
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  size: number;
}
