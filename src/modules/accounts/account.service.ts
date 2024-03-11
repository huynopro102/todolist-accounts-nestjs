import { Injectable,} from "@nestjs/common";
import { AccountDto } from "./dto/account.dto";

@Injectable()
export class AccountService{
  

    private list_accounts : AccountDto[] = [
        {id : 1 , username : 'huy1' , password : '123' , email : "huy@gmail.com" , avatar : "ko", fullname : "nguyen tuan huy"},
        {id : 2 , username : 'huy2' , password : '123' , email : "huy@gmail.com" , avatar : "ko", fullname : "nguyen tuan huy"},
        {id : 3 , username : 'huy3' , password : '123' , email : "huy@gmail.com" , avatar : "ko", fullname : "nguyen tuan huy"},
    ]


    getAllAccounts(){
        return this.list_accounts
    }

  
    createAccount( account : AccountDto):any{
        const duplicateId = this.list_accounts.some(item => item.id === account.id)
        if(duplicateId) {
            console.log(`Account with id ${account.id} already exists.`)
            return `Account with id ${account.id} already exists.`
        }
        this.list_accounts.push(account)
        return account
    }

  
    getAccount( id : number):any{
        const account = this.list_accounts.find(item => item.id === id);
        if(account){
            return account
        }
        return `Account with id ${id} successed.`;
    }


    
    updateAccount(account : AccountDto):any{
        const accountIndex = this.list_accounts.findIndex(item => item.id === account.id);
        if(accountIndex !== -1){
            this.list_accounts[accountIndex] = account
            return `update account ${account.id} successd.`;
        }
        return `not find account ${account.id} `;
    }

    
    deteleAccount(id : number):any{
        const accountIndex = this.list_accounts.findIndex(item => item.id === id);
        if(accountIndex !== -1){
            const deletedAccount = this.list_accounts.splice(accountIndex, 1)[0];
            return `update account ${deletedAccount.id} successd.`;
        }
        return `not find account ${id} `;
    }

    
}