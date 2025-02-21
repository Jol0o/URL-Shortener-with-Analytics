
import { prismaClient } from '../../../prisma/prisma.client';
export class UserRepository {
    async create(data: { username: string; email: string; avatar: string, userId: string }) {
        return await prismaClient.user.create({ data });
    }

    async findById(id: string) {
        return await prismaClient.user.findUnique({ where: { id } });
    }

    async find() {
        return await prismaClient.user.findMany();
    }

    async update(id: string, data: { username: string; email: string; avatar: string }) {
        return await prismaClient.user.update({ where: { id }, data: data });
    }


    async delete(id: string) {
        return await prismaClient.user.delete({ where: { id } });
    }
}
