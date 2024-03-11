/* eslint-disable prettier/prettier */
import { Expose } from "class-transformer";
import { Length } from "class-validator";
import { BaseDto } from "../../../common/base.dto";

export class UserDto extends BaseDto{

    @Length(1,10)
    @Expose()
    username : string ;
  
    @Length(1,10)
    @Expose()
    password : number ;
}