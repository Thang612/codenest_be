import { Inject, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @Inject('LESSON_MODEL')
    private lessonModel: any
  ) { }

  async create(createLessonDto: CreateLessonDto) {
    return await this.lessonModel.create(createLessonDto);
  }

  // find lessons for a course
  async findLessonsByCourseId(courseId: string) {
    console.log(courseId);
    return await this.lessonModel.find({ courseId, isDeleted: false });
  }

  findOne(id: number) {
    return `This action returns a #${id} lesson`;
  }

  async update(id: string, updateLessonDto: UpdateLessonDto) {
    return await this.lessonModel.findOneAndUpdate({ _id: id }, updateLessonDto, { new: true });
  }

  remove(id: string) {
    return `This action removes a #${id} lesson`;
  }
}
