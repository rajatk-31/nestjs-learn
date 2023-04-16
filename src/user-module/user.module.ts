import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from '../core/middleware';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware)
            // .exclude()   //To exclude paths
            .forRoutes('users');
        // .forRoutes(UserController);
        // .forRoutes({path: "users", method: RequestMethod.POST});
    }
}
