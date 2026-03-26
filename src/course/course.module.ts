import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { DatabaseModule } from 'src/database.module';
import { courseProviders } from './course.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CourseController],
  providers: [...courseProviders, CourseService],
  exports: [CourseService],
})
export class CourseModule { }
