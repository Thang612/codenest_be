import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, RolesModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
