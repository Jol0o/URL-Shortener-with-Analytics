import { ConversationRepository } from "../repositories/ConversationRepository";

export class ConversationService {
    constructor(private conversationRepository: ConversationRepository) {}

    async createConversation(name: string, avatar: string, userIds: string[]) {
        const conversation = await this.conversationRepository.create({ name, avatar, userIds });

        if (!conversation) {
            throw new Error("Repository returned null. Failed to create conversation.");
        }

        return conversation;
    }


    async getConversationById(id: string) {
        return await this.conversationRepository.findById(id);
    }

    async findConversationByUserIds(userIds: string[]) {
        return await this.conversationRepository.findByUserIds(userIds);
    }

    async getConversationsByUserId(userId: string) {
        return await this.conversationRepository.find(userId);
    }

    async updateConversation(id: string, data: { name?: string; avatar?: string; lastMessage?: string }) {
        return await this.conversationRepository.update(id, data);
    }

    async deleteConversation(id: string) {
        return await this.conversationRepository.delete(id);
    }
}
