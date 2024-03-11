/* eslint-disable prettier/prettier */
import { Expose, Transform, plainToClass } from "class-transformer";

export abstract class BaseDto{

    @Expose()
    id : number ;

    firstName : string ;

    lastName : string ;

    @Expose()
    @Transform(({obj})=> obj.firstName + " " + obj.lastName)
    fullName : string ;

    @Expose()
    createAt : Date ;
    
    @Expose()
    updateAt : Date ;


    static plainToClass <T> (this : new (a:any)=> T , obj : T): T{
        return plainToClass(this , obj , {excludeExtraneousValues:true})
    }

    
}