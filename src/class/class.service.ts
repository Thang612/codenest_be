import { Inject, Injectable } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassService {
  constructor(
    @Inject('CLASS_MODEL')
    private classModel: any
  ) { }
  async create(createClassDto: CreateClassDto) {
    return await this.classModel.create(createClassDto)
  }

  async findAll() {
    return await this.classModel
      .find({ isDeleted: false })
      .populate('courseId', 'title slug')
      .populate('homeroomTeacher', 'name email');
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
