import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class FakeUserRepository implements IUserRepository{
    private users:User[] = [];
    
    async findByEmail(email: string){
        const user = this.users.find(user => {return user.email === email})
        return user;
    }
    async save(user:User){
        this.users.push(user);
    }

}