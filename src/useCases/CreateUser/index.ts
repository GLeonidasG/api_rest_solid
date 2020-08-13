import { MailtrapNodemailer } from "../../providers/implementations/MailtrapNodemailer";
import { FakeUserRepository } from "../../repositories/implementations/FakeUsersRepository";
import { SqliteUserRepository } from "../../repositories/implementations/SqliteUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

// const fakeUsersRepository = new FakeUserRepository();
const sqliteUsersRepository = new SqliteUserRepository();
const mailtrapNodemailer = new MailtrapNodemailer();

const createUserUseCase = new CreateUserUseCase(sqliteUsersRepository, mailtrapNodemailer);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }