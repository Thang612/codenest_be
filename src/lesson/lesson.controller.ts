import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { ERole } from '../types/role.enum';
@Controller('lesson')
@UseGuards(RolesGuard)
export class LessonController {
  constructor(private readonly lessonService: LessonService) { }

  @Post()
  @Roles(ERole.ADMIN)
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonService.create(createLessonDto);
  }

  // find lessons for a course
  @Get('course/:courseId')
  findLessonsByCourseId(@Param('courseId') courseId: string) {
    return this.lessonService.findLessonsByCourseId(courseId);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(+id);
  }

  @Patch(':id')
  @Roles(ERole.ADMIN)
  update(@Param('id') _id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonService.update(_id, updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.lessonService.remove(_id);
  }
}
