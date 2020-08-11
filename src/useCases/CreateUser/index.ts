import { FakeUserRepository } from "../../repositories/implementations/FakeUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const fakeUsersRepository = new FakeUserRepository();

const createUserUseCase = new CreateUserUseCase(fakeUsersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }