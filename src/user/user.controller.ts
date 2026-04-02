import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ERole } from '../types';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { Public } from 'src/auth/constants';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Controller('user')
@UseGuards(RolesGuard) // 👈 THÊM DÒNG NÀY
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @Roles(ERole.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // GetAllTeachers
  @Get('teacher')
  @Roles(ERole.ADMIN)
  getAllTeacher() {
    return this.userService.getAllTeachers()
  }

  // CreateTeachers
  @Public()
  @Post('teacher')
  createTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.userService.createTeacher(createTeacherDto)
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
