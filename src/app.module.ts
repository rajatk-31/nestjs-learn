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
import { CustomerModule } from './customer/customer.module';
import { DatabaseModule } from './database/database.module';
import { TaskModule } from './task-module/task.module';
// import { DatabaseModule } from './database/database.module';
// import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [TaskModule, CustomerModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }