import { HttpCode, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReserveSpotDto } from 'src/events/dto/reserve-spot.dto';

@Injectable()
export class EventsService {
  constructor(private prismaService: PrismaService) {}
  
  create(createEventDto: CreateEventDto) {
    return this.prismaService.event.create({
      data: {
        ...createEventDto,
        date: new Date(createEventDto.date)
      }
    })
  }

  findAll() {
    return this.prismaService.event.findMany();
  }

  findOne(id: string) {
    return this.prismaService.event.findUnique({
      where: { id }
    });
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prismaService.event.update({
      data: {
        ...updateEventDto,
        date: new Date(updateEventDto.date)
      },
      where: { id }
    });
  }

  @HttpCode(204)
  remove(id: string) {
    return this.prismaService.event.delete({
      where: { id }
    });
  }
  async reserveSpot(dto: ReserveSpotDto & { eventId: string}) {
    const spots = await this.prismaService.spot.findMany({
      where: {
        eventId: dto.eventId,
        name: {
          in: dto.spots,
        }
      }
    })

    if (spots.length != dto.spots.length) {
      const foundSpotsName = spots.map((spot) => spot.name)
      const notFoundSpotsName = dto.spots.filter((spotName) => !foundSpotsName.includes(spotName))

      throw new Error(`Spots ${notFoundSpotsName.join(', ')} not found`)
    }

  }
}
