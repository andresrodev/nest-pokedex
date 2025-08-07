import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { PokemonService } from 'src/pokemon/pokemon.service';

@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService,
  ) {}

  @Get()
  executeSeed() {
    return this.seedService.executeSeed();
  }
}
