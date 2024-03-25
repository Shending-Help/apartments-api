import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Apartments')
@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @ApiOperation({ summary: 'Create a new apartment' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    schema: {
      example: {
        title: 'New Cairo Villa',
        description: 'villa for sale in new cairo',
        price: 10000000,
        location: 'New Cairo',
        bedrooms: 10,
        image: 'https://example.com/image.jpg',
        bathrooms: 10,
        size: 10,
        id: 2,
        available: true,
        isDeleted: false,
        createdAt: '2024-03-23T13:53:30.356Z',
        updatedAt: '2024-03-23T13:53:30.356Z',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Failed to add apartment. Data is invalid or missing.',
    schema: {
      example: {
        message: ['title must be a string', 'price must be a positive number'],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Failed to retrieve apartments. System failure.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Failed to add apartment. Please try again later.',
      },
    },
  })
  @Post()
  async create(@Body() createApartmentDto: CreateApartmentDto) {
    return await this.apartmentsService.create(createApartmentDto);
  }

  @ApiOperation({ summary: 'Retrieve all apartments' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      example: [
        {
          title: 'New Cairo Villa',
          description: 'villa for sale in new cairo',
          price: 10000000,
          location: 'New Cairo',
          bedrooms: 10,
          bathrooms: 10,
          size: 10,
          id: 2,
          available: true,
          image: 'https://example.com/image.jpg',
          isDeleted: false,
          createdAt: '2024-03-23T13:53:30.356Z',
          updatedAt: '2024-03-23T13:53:30.356Z',
        },
        {
          title: 'New Cairo Villa 2',
          description: 'villa for sale in new cairo',
          price: 10000000,
          location: 'New Cairo',
          bedrooms: 10,
          bathrooms: 10,
          image: 'https://example.com/image.jpg',
          size: 10,
          id: 3,
          available: true,
          isDeleted: false,
          createdAt: '2024-03-23T13:53:30.356Z',
          updatedAt: '2024-03-23T13:53:30.356Z',
        },
      ],
    },
  })
  @ApiBadRequestResponse({
    description: 'Failed to add apartment. Data is invalid or missing.',
    schema: {
      example: {
        message: ['title must be a string', 'price must be a positive number'],
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Failed to retrieve apartments. System failure.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Failed to fetch apartments. Please try again later.',
      },
    },
  })
  @Get()
  async findAll() {
    return await this.apartmentsService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve a single apartment' })
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    schema: {
      example: {
        title: 'New Cairo Villa',
        description: 'villa for sale in new cairo',
        price: 10000000,
        location: 'New Cairo',
        image: 'https://example.com/image.jpg',
        bedrooms: 10,
        bathrooms: 10,
        size: 10,
        id: 2,
        available: true,
        isDeleted: false,
        createdAt: '2024-03-23T13:53:30.356Z',
        updatedAt: '2024-03-23T13:53:30.356Z',
      },
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Failed to retrieve apartments. System failure.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Failed to fetch apartments. Please try again later.',
      },
    },
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.apartmentsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a single apartment' })
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    schema: {
      example: {
        title: 'New Cairo Villa',
        description: 'villa for sale in new cairo',
        price: 10000000,
        location: 'New Cairo',
        bedrooms: 10,
        image: 'https://example.com/image.jpg',
        bathrooms: 10,
        size: 10,
        id: 2,
        available: true,
        isDeleted: false,
        createdAt: '2024-03-23T13:53:30.356Z',
        updatedAt: '2024-03-23T13:53:30.356Z',
      },
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Failed to update apartment. System failure.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Failed to update apartment. Please try again later.',
      },
    },
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ) {
    return await this.apartmentsService.update(+id, updateApartmentDto);
  }

  @ApiOperation({ summary: 'Delete a single apartment' })
  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    schema: {
      example: {
        raw: [],
        affected: 1,
      },
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Failed to retrieve apartments. System failure.',
    schema: {
      example: {
        statusCode: 500,
        message: 'Failed to fetch apartments. Please try again later.',
      },
    },
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.apartmentsService.remove(+id);
  }
}
