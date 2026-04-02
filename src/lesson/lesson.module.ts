import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { lessonProviders } from './lesson.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LessonController],
  providers: [...lessonProviders, LessonService],
  exports: [LessonService],
})
export class LessonModule {}
