import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartment } from 'src/apartments/entities/apartment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedsService {
  constructor(
    @InjectRepository(Apartment)
    private readonly apartmentRepository: Repository<Apartment>,
  ) {
    this.seedApartments();
  }

  async seedApartments() {
    const apartments: Apartment[] = [];
    const propertyData: Partial<Apartment[]> = [
      {
        image: 'https://source.unsplash.com/900x900/?house',
        price: 250000,
        location: '123 Main St',
        size: 150,
        bedrooms: 3,
        bathrooms: 2,
        title: 'Villa 1',
        description:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        image: 'https://source.unsplash.com/900x900/?apartment',
        price: 400000,
        location: '456 Oak Ave',
        size: 200,
        bedrooms: 4,
        bathrooms: 3,
        title: 'Apartment 2',
        description:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        image: 'https://source.unsplash.com/900x900/?house+front',
        price: 150000,
        location: '789 Maple Rd',
        size: 100,
        bedrooms: 2,
        bathrooms: 1,
        title: 'Villa 3',
        description:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        image: 'https://source.unsplash.com/900x900/?small+house',
        price: 150000,
        location: '789 Maple Rd',
        size: 100,
        bedrooms: 2,
        bathrooms: 1,
        title: 'Villa 4',
        description:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];
    for (const data of propertyData) {
      const apartment = this.apartmentRepository.create(data);
      apartments.push(apartment);
    }
    await this.apartmentRepository.save(apartments);
  }
}
