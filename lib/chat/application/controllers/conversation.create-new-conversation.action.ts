"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "@/lib/error/common";
import { ConversationRepository } from "../repositories/ConversationRepository";
import { ConversationService } from "../services/ConversationService";

const conversationRepository = new ConversationRepository();
const conversationService = new ConversationService(conversationRepository);

export const conversationCreateNewConversationAction = async (name: string, avatar: string, userIds: string[]) => {
    try {
        if (!userIds || userIds.length === 0) {
            throw new Error("userIds must be a non-empty array");
        }

        const existingConversation = await conversationService.findConversationByUserIds(userIds);
        if (existingConversation) {
            return { data: existingConversation };
        }

        const data = await conversationService.createConversation(name, avatar, userIds);

        if (!data || typeof data !== "object") {
            throw new Error("Invalid response from createConversation. Expected an object.");
        }

        return { data };
    } catch (error) {
        console.error("Error creating conversation:", error);

        if (error instanceof CommonInputError) {
            return { error: CommonInputErrorMessage };
        }

        return { error: CommonUnhandleErrorMessage };
    }
};
