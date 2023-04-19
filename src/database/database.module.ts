// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
//     imports: [
//         MongooseModule.forRoot('mongodb://localhost:27017/task', { useNewUrlParser: true })
//     ],
//     controllers: [],
//     providers: [],
// })
// export class DatabaseModule { }


// For SQL

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { User } from './entity/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'mysql',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [User, Customer],
            synchronize: true,
        }),
    ],
})
export class DatabaseModule { }