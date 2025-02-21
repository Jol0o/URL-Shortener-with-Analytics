"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { UserService } from "@/lib/user/application/services/UserService";
import { UserRepository } from "@/lib/user/application/repositories/UserRepository";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "@/lib/error/common";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export const userFetchAllUserAction = async () => {
    try {
        const data = await userService.getusers();

        return {
            data
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