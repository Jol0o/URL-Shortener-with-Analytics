import { prismaClient } from '../../../prisma/prisma.client';
import { MessageData } from '../../domain/entities/message';

export class MessageRepository {
    async create(data: MessageData) {

        if (!data.content || !data.senderId || !data.conversationId) {
            throw new Error("Missing required fields for creating a message.");
        }

        try {
            const message = await prismaClient.message.create({
                data: {
                    content: data.content,
                    senderId: data.senderId,
                    conversationId: data.conversationId,
                },
            });
            return message;
        } catch (error) {
            console.error("Error inserting message into database:", error);
            throw error;
        }
    }

    async findById(id: string) {
        return await prismaClient.message.findUnique({ where: { id } });
    }

    async find() {
        return await prismaClient.message.findMany();
    }

    async update(id: string, data: { content: string }) {
        return await prismaClient.message.update({ where: { id }, data });
    }

    async delete(id: string) {
        return await prismaClient.message.delete({ where: { id } });
    }
}