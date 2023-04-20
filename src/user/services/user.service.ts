import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
// import { v4 as uuidv4 } from 'uuid';
// import { InjectModel } from "@nestjs/mongoose";
// import { Model } from 'mongoose';
import { UserI } from "../interface/user.interface";
import { UserDto } from "../dto/user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/database/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomerService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    public async listCustomer(): Promise<User[]> {
        return await this.userRepo.find({});
    }

    public async createCustomer(user: any): Promise<User> {
        try {
            // const { email } = user
            const newuser = new User();
            newuser.email = "test@gmail.com"
            return await this.userRepo.save(newuser)
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

    // public async updateCustomer(id, customerDto: Partial<UserDto>): Promise<Customer> {
    //     const updatedCustomer = await this.userRepo
    //         .findByIdAndUpdate(id, customerDto, { new: true });
    //     return updatedCustomer;

    // }

    public async getCustomer(id: string): Promise<User> {
        const customer = await this.userRepo.findOneBy({ id: parseInt(id) });
        if (!customer) {
            throw new NotFoundException('user not found');
        }
        return customer;
    }

    public async removeCustomer(id: string): Promise<User> {
        try {
            const user = await this.userRepo.findOneBy({ id: parseInt(id) });
            if (!user) {
                throw new NotFoundException("User not found")
            }

            await this.userRepo.remove(user);
            return user
        } catch (err) {
            throw new InternalServerErrorException(err);
        }
    }
}