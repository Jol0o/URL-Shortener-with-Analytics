"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "@/lib/error/common";
import { ConversationRepository } from "../repositories/ConversationRepository";
import { ConversationService } from "../services/ConversationService";
import { supabase } from "@/lib/supabase/supabase.client";

const conversationRepository = new ConversationRepository();
const conversationService = new ConversationService(conversationRepository);

export const conversationfetchConversationByIdAction = async (id: string) => {
    try {
        if (!id) {
            throw new Error("userIds must be a non-empty string");
        }

        const data = await conversationService.getConversationById(id);

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