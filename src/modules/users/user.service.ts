import { Injectable } from "@nestjs/common"
import { UserDto } from "src/modules/users/dto/user.dto"

@Injectable()
export class UserService{

    createUser(userdto:any):any{
        userdto.id = 1
        userdto.createAt = new Date
        userdto.updateAt = new Date
        console.log(userdto)
        // const userReal = plainToClass(UserDto,userdto,{excludeExtraneousValues:true})
        return UserDto.plainToClass(userdto)
    }

}