"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "../../../error/common";
import { MessageRepository } from "../repositories/MessageRepository";
import { MessageService } from "../services/MessageService";

const messageRepository = new MessageRepository();
const messageService = new MessageService(messageRepository);


export const messageRemoveMessageAction = async (id : string) => {
    try {
        
        const message = await messageService.deleteMessage(id);

        return {
            data: message,
        };
    } catch (error) {
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