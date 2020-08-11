import { User } from "../../entities/User";
import { IMailtrapProvider } from "../../providers/IMailtrapProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTORequest } from "./CreateUserDTO";

export class CreateUserUseCase{
    constructor(
        private userRepository: IUserRepository,
        private mailtrapProvider: IMailtrapProvider
    ){}
    async execute(data: ICreateUserDTORequest){
        const isAlreadyCreated = await this.userRepository.findByEmail(data.email);
        if (isAlreadyCreated) throw new Error("User already exist!");
        const user = new User(data);
        await this.userRepository.save(user);

        await this.mailtrapProvider.sendEmail({
            to:{
                name: "dummy",
                address: "dummy@fake.com"
            },
            from:{
                name: "dummy",
                address: "dummy@fake.com"
            },
            subject:"Cadastro realizado!",
            body:"Você já pode se cadastrar na nossa plataforma!"
        })
    }
}