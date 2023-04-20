import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.model';
import { CustomerController } from './controllers/user.controller';
import { CustomerService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/entity/user.entity';
import { Customer } from 'src/database/entity/customer.entity';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Customer])
    ],
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule { }