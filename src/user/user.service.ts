import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) { }
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = await this.userModel.create(createUserDto)
    return createUser
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(username: string): Promise<User | undefined> {
    const findUser = await this.userModel.findOne({ username })
    return findUser || undefined
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
