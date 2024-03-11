import { IsNotEmpty , Length, Matches } from "class-validator"
import { Expose, Transform } from "class-transformer"

export class AccountDto {

    // constructor({id,username,password,email,fullname,avatar}){
    //     this.id = id
    //     this.username = username
    //     this.password = password
    //     this.email = email
    //     this.fullname = fullname
    //     this.avatar = avatar
    // }

    @Expose()
    id? : number
    
    @IsNotEmpty()
    @Expose()
    username : string
    
    @Expose()
    @IsNotEmpty()
    @Length(10,20)
    password : string


    @Expose()
    @IsNotEmpty()
    // @Matches("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    email : string


    @Expose()
    @IsNotEmpty()
    // @Transform(({obj})=> obj.firstName + " " + obj.lastName)
    fullname : string 

    
    avatar : string 
    
}