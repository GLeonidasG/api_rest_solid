import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTORequest } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private userRepository: IUserRepository
    ){}
    async execute(data: ICreateUserDTORequest){
        const isAlreadyCreated = await this.userRepository.findByEmail(data.email);
        if (isAlreadyCreated) throw new Error("User already exist!");
        const user = new User(data);
        await this.userRepository.save(user);
    }
}