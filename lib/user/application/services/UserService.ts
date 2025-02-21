import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async createUser(username: string, email: string, avatar: string, userId : string) {
        return await this.userRepository.create({ username, email, avatar, userId });
    }

    async getUserById(id: string) {
        return await this.userRepository.findById(id);
    }

    async getusers() {
        return await this.userRepository.find();
    }

    async updateUser(id: string, username: string, email: string, avatar: string) {
        return await this.userRepository.update(id, { username, email, avatar });
    }

    async deleteUser(id: string) {
        return await this.userRepository.delete(id);
    }
}
