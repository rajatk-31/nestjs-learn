import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
    public users: User[];
    getUsers(): User[] {
        return this.users
    }

    async getUser(email: string): Promise<User> {
        let userData = this.users.filter(j => j.email == email)
        if (userData && userData.length > 0) {
            return Promise.resolve(userData[0])
        }
        throw new NotFoundException('User not found')
    }

    addUser(u: User): Promise<User> {
        this.users.push(u)
        return Promise.resolve(u)
    }

    deleteUser(e: string): User[] {
        let remainingUsers = this.users.filter(j => j.email !== e)
        this.users = remainingUsers
        return this.users
    }
}
