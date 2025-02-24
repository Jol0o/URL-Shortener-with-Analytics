"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "@/lib/error/common";
import { ConversationRepository } from "../repositories/ConversationRepository";
import { ConversationService } from "../services/ConversationService";
import { currentUser } from "@clerk/nextjs/server";
const conversationRepository = new ConversationRepository();
const conversationService = new ConversationService(conversationRepository);

export const conversationFetchLatestConversationAction = async () => {
    try {
        const user = await currentUser()

        if (!user) {
            throw new Error("userIds must be a non-empty string");
        }

        const data = await conversationService.getLatestConversations(user.id);

        if (!data || typeof data !== "object") {
            throw new Error("Invalid response from createConversation. Expected an object.");
        }
        
        const latestData = data[0]


        return { data: latestData };
    } catch (error) {
        console.error("Error creating conversation:", error);

        if (error instanceof CommonInputError) {
            return { error: CommonInputErrorMessage };
        }

        return { error: CommonUnhandleErrorMessage };
    }
};