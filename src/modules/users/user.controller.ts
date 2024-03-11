/* eslint-disable prettier/prettier */
import { Body, Controller, Get, UsePipes, Post, ValidationPipe  } from "@nestjs/common";
import { ModuleRef } from "@nestjs/core";
import { UserDto } from "src/modules/users/dto/user.dto";

@Controller("users")

export class UserController{

    constructor(private readonly moduleRef : ModuleRef){}

    @UsePipes(new ValidationPipe)
    @Get()
    getAllUsers():string{
        return "all users"
    }
    
    @Post()
    createUser(@Body(new ValidationPipe) userdto : UserDto):UserDto {
        // instead of writing like return this.userservice.createUser(userdto) you can write like below
        // const us = new UserService()
        // return us.createUser(userdto, new UserRepository)
        const userservice = this.moduleRef.get('USER_SERVICE_HUY')
        return userservice.createUser(userdto)
    }

    @Get(":id")
    getUser(){
        return 'get user'
    }

}