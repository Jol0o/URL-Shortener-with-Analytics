"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "../../../error/common";
import { MessageRepository } from "../repositories/MessageRepository";
import { MessageService } from "../services/MessageService";
import { MessageData } from "../../domain/entities/message";
import { prismaClient } from "@/lib/prisma/prisma.client";
import { ConversationRepository } from "@/lib/chat/application/repositories/ConversationRepository";
import { ConversationService } from "@/lib/chat/application/services/ConversationService";

const messageRepository = new MessageRepository();
const messageService = new MessageService(messageRepository);
const conversationRepository = new ConversationRepository();
const conversationService = new ConversationService(conversationRepository);

export const messageCreateMessageAction = async ( data: MessageData) => {
    try {

        // Ensure fields are not null or undefined
        if (!data.content || !data.senderId || !data.conversationId) {
            throw new Error(`❌ Invalid message data: ${JSON.stringify(data)}`);
        }

        // Ensure senderId and conversationId are valid
        const senderExists = await prismaClient.user.findUnique({
            where: { userId: data.senderId }
        });

        const conversationExists = await prismaClient.conversation.findUnique({
            where: { id: data.conversationId }
        });

        if (!senderExists || !conversationExists) {
            throw new Error("❌ senderId or conversationId does not exist in the database.");
        }

        // Insert message into database
        const message = await messageService.createMessage(data.content, data.senderId, data.conversationId);

        if (!message) {
            throw new Error("❌ Failed to create message in database.");
        }

        await prismaClient.conversation.update({
            where: { id: data.conversationId },
            data: {
                lastMessage: data.content,
            }
        })

        const conversation = await conversationService.getConversationById(data.conversationId);

        if (!conversation) {
            throw new Error("❌ Failed to fetch conversation after creating message.");
        }

        return { data: conversation.messages };
    } catch (error) {
        console.error("Error in messageCreateMessageAction:", error);

        if (error instanceof CommonInputError) {
            return {
                error: CommonInputErrorMessage,
            };
        }

        return {
            error: CommonUnhandleErrorMessage,
        };
    }
};
