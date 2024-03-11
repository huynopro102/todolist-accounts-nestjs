import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from "@nestjs/common";
import { AccountDto } from "./dto/account.dto";
import { AccountService } from "./account.service";
import {  plainToClass } from "class-transformer";

@Controller('api')

export class AccountController{

    constructor(private readonly accountservice : AccountService){}
    

    @Get('accounts')
    getAllAccounts():AccountDto[]{
        return this.accountservice.getAllAccounts()
    }

    @Post('create')
    createUser(@Body(new ValidationPipe) account : AccountDto):any{
        const newAccount : AccountDto ={
            id : Math.floor(Math.random()*10) ,
            ...account
        }
        const accountReal = plainToClass(AccountDto,newAccount,{excludeExtraneousValues:true})
        return this.accountservice.createAccount(accountReal)
    }

    @Get('account/:id')
    getUser(@Param('id' , ParseIntPipe)  idAcount : any):any{
        return this.accountservice.getAccount(Number(idAcount))
    }


    @Put('update')
    updateUser(@Body(new ValidationPipe) account: AccountDto  ):any{
        const accountReal = plainToClass(AccountDto,account,{excludeExtraneousValues:true})
        return this.accountservice.updateAccount(accountReal)
    }

    @Delete("delete/:id")
    deteleUser(@Param("id") id : string):any{
        return this.accountservice.deteleAccount(Number(id))
    }

}