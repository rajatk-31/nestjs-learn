// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UserModule } from './user-module/user.module';

// @Module({
//   imports: [UserModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule { }

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task-module/task.module';
// import { DatabaseModule } from './database/database.module';
// import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }