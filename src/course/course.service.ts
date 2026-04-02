import { Inject, Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @Inject('COURSE_MODEL')
    private courseModel: any
  ) { }

  async create(createCourseDto: CreateCourseDto) {
    const createCourse = await this.courseModel.create(createCourseDto)
    return createCourse
  }

  async findAll() {
    const course = await this.courseModel.find({ isDeleted: false })
    return course
  }

  async findOne(id: string) {
    return await this.courseModel.findById(id);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    return await this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true });
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
