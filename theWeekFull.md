
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

