import { Injectable } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { Apartment } from './entities/apartment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ApartmentsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly userRepository: Repository<Apartment>,
  ) {}
  create(createApartmentDto: CreateApartmentDto) {
    return 'This action adds a new apartment';
  }

  findAll() {
    return `This action returns all apartments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
