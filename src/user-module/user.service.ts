import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
    public users: User[];
    getUsers(): User[] {
        return this.users
    }

    getUser(email: string): User {
        let userData = this.users.filter(j => j.email == email)
        if (userData && userData.length > 0) {
            return userData[0]
        }
        throw new NotFoundException('User not found')
    }

    addUser(u: User): User {
        this.users.push(u)
        return u
    }

    deleteUser(e: string): User[] {
        let remainingUsers = this.users.filter(j => j.email !== e)
        this.users = remainingUsers
        return this.users
    }
}
