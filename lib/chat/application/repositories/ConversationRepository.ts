import { prismaClient } from '../../../prisma/prisma.client';

export class ConversationRepository {
    async create(data: { name: string; avatar: string; userIds: string[] }) {

        try {
            const conversation = await prismaClient.conversation.create({
                data: {
                    name: data.name,
                    avatar: data.avatar,
                    lastMessage: "",
                    users: {
                        connect: data.userIds.map(userId => ({ userId: userId })),
                    },
                },
                include: { users: true },
            });

            return conversation;
        } catch (error) {
            console.error("Error in ConversationRepository.create:", error);
            throw new Error("Failed to create conversation in database.");
        }
    }


    async findById(id: string) {
        return await prismaClient.conversation.findUnique({
            where: { id },
            include: { users: true, messages: true },
        });
    }

    async findLatest(id : string) {
        return await prismaClient.conversation.findMany({
            where: {
                users: {
                    some: {
                        userId: id,
                    },
                },
            },
            orderBy: { updated_at: "desc" },
            include: { users: true, messages: true },
        });
    }

    async find(userId :string) {
        return await prismaClient.conversation.findMany({
            where: {
                users: {
                    some: {
                        userId: userId,
                    },
                },
            },
            include: { users: true, messages: true },
        });
    }

    async findByUserIds(userIds: string[]) {
        return await prismaClient.conversation.findFirst({
            where: {
                AND: userIds.map(userId => ({
                    users: {
                        some: {
                            userId: userId,
                        },
                    },
                })),
            },
            include: { users: true },
        });
    }


    async update(id: string, data: { name?: string; avatar?: string; lastMessage?: string }) {
        return await prismaClient.conversation.update({
            where: { id },
            data,
        });
    }

    async delete(id: string) {
        return await prismaClient.conversation.delete({ where: { id } });
    }
}