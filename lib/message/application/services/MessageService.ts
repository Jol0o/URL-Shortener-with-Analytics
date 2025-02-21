import { MessageRepository } from "../repositories/MessageRepository";

export class MessageService {
    constructor(private messageRepository: MessageRepository) { }

    async createMessage(content: string, senderId: string, conversationId: string) {
        console.log("Creating message with content:", content, "senderId:", senderId, "conversationId:", conversationId);
        const message = await this.messageRepository.create({ content, senderId, conversationId });

        if (!message) {
            throw new Error("Repository returned null. Failed to create message.");
        }

        return message;
    }

    async getMessageById(id: string) {
        return await this.messageRepository.findById(id);
    }

    async getMessages() {
        return await this.messageRepository.find();
    }

    async updateMessage(id: string, content: string) {
        return await this.messageRepository.update(id, { content });
    }

    async deleteMessage(id: string) {
        return await this.messageRepository.delete(id);
    }
}