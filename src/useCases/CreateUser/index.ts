import { MailtrapNodemailer } from "../../providers/implementations/MailtrapNodemailer";
import { FakeUserRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const fakeUsersRepository = new FakeUserRepository();
const mailtrapNodemailer = new MailtrapNodemailer();

const createUserUseCase = new CreateUserUseCase(fakeUsersRepository, mailtrapNodemailer);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }