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
  /**
   * @description - Create a new apartment
   * @param createApartmentDto  - The data to create a new apartment
   * @returns - The newly created apartment
   */
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

  /**
   * @description - Fetch all apartments
   * @returns {Apartment[]} - All apartments
   */
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

  /**
   * @description - Fetch a single apartment
   * @param id - The id of the apartment to fetch
   * @returns {Apartment} - The apartment
   */
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

  /**
   * @description - Update an apartment
   * @param id  - The id of the apartment to update
   * @param updateApartmentDto - The data to update the apartment
   * @returns - The updated apartment
   */
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

  /**
   * @description - Delete an apartment
   * @param id - The id of the apartment to delete
   * @returns number of rows affected
   */
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
