import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { Apartment } from './entities/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {}
  async create(createApartmentDto: CreateApartmentDto) {
    const apartment = this.apartmentRepository.create(createApartmentDto);
    try {
      return this.apartmentRepository.save(apartment);
    } catch (error) {
      throw new HttpException(
        'Failed to add apartment. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    try {
      return await this.apartmentRepository.find();
    } catch (error) {
      throw new HttpException(
        'Failed to fetch apartments. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number) {
    try {
      return await this.apartmentRepository.findOneOrFail({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        'Failed to fetch apartment. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: number, updateApartmentDto: Partial<UpdateApartmentDto>) {
    try {
      return await this.apartmentRepository.update(id, updateApartmentDto);
    } catch (error) {
      throw new HttpException(
        'Failed to update apartment. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.apartmentRepository.delete({
        id,
      });
    } catch (error) {
      throw new HttpException(
        'Failed to delete apartment. Please try again later.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
