
/* create a new Controller
- nest generate controller event
- this will create a new folder with the name and the controller of it. 
*/

/* Create a new resource
- nest g resource events
*/

create a new file docker-compose on the root

new command
```
docker-compose up
```

bash SQL
`docker-compose exec db bash`
`mysql -u root -p root`

show databases;

Starting Prima
`npx prisma init`

go to file .env and change the base url:
` DATABASE_URL="mysql://root:root@localhost:3306/nest" `

on the file schema.prisma starting create tables
- config the provider to `mysql`

### on 'c oman d' bash now can see the table created
`docker-compose exec db bash`
`mysql -u root -p root`

`use nest;`
`show tables`

## integrate prisma with nest
generate a new module
`nest g module prisma`

create a service
`nest g service prisma`

go to fold src/prisma/prisma.service.ts:
extent to PrismaClient
```
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect()
    }
}
```

fold events file events.service.ts:
- create a new constructor
`constructor(private prismaService: PrismaService) {}`

file prisma.module.ts
import `@Global()`

then in @modules add exports
`[PrismaService]` 

file events/dto/create-events.dto.ts
```
export class CreateEventDto {
    name: string
    description: string
    date: string
    price: number
}
```

go to file `events.service.ts`
- inject tables, verbs are there. you can get, put, delete...
test o the file `api.http`

create a new resouce to spots
```
nest g resource
```
define a name `spots`,  `rest api` and generate the the entry points. 

go to folder prisma on the root, open file shema.prima to define the spot table.

now with te new table created, press the command to migrate it.
`npx prisma migrate dev`

ok, now go to folder src/spots/spots.service.ts and use the new table with constructor.


### comands
`docker-compose exec app bash` // acess to bash
