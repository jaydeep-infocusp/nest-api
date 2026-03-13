import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }

    async signup(dto: CreateUserDto) {
        const { email, password } = dto;
        return { message: 'User signed up' };
    }

    async signin(dto: CreateUserDto) {
        return { message: 'User signed in' };
    }

    async signout() {
        return { message: 'User signed out' };
    }
}
