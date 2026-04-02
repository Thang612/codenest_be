import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { ERole } from 'src/types';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User | string> {
    try {
      const createUser = await this.userModel.create(createUserDto)
      return createUser
    } catch (err) {
      return err
    }
  }

  // Lấy tất cả giáo viên 
  async getAllTeachers(): Promise<User[]> {
    const teachers = await this.userModel.find({ roles: ERole.TEACHER, isDeleted: false }).select('-password')
    return teachers
  }

  // Tạo giáo viên 
  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<User> {
    try {
      const createTeacher = await this.userModel.create({
        ...createTeacherDto,
        roles: ERole.TEACHER, password: "442422i23523op"
      });

      return createTeacher;
    } catch (err) {
      throw err;
    }
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
