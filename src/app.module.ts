/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserModule } from './modules/users/user.module';
import { AccountModule } from './modules/accounts/account.module';


@Module({
  imports: [UserModule,AccountModule],

})

export class AppModule {}
