import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsPositive, IsString } from 'class-validator';

export class UpdateApartmentDto {
  @ApiProperty({
    description: 'The title of the apartment',
    required: false,
  })
  @IsString()
  title?: string;

  @ApiProperty({
    description: 'The description of the apartment',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'The price of the apartment',
    type: Number,
    required: false,
  })
  @IsPositive()
  price?: number;

  @ApiProperty({
    description: 'The location of the apartment',
    required: false,
  })
  @IsString()
  location?: string;

  @ApiProperty({
    description: 'The number of bedrooms in the apartment',
    type: Number,
    required: false,
  })
  @IsNumber()
  bedrooms?: number;

  @ApiProperty({
    description: 'The number of bathrooms in the apartment',
    type: Number,
    required: false,
  })
  @IsNumber()
  bathrooms?: number;

  @ApiProperty({
    description: 'The size of the apartment in square meters',
    type: Number,
    required: false,
  })
  @IsNumber()
  size?: number;

  @ApiProperty({
    description: 'Indicates whether the apartment is available',
    type: Boolean,
    required: false,
  })
  @IsBoolean()
  available?: boolean;
}
