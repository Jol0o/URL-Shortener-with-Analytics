"use server";

import { CommonInputError } from "@/lib/error/common.error";
import { CommonInputErrorMessage, CommonUnhandleErrorMessage } from "../../../error/common";
import { UserService } from "@/lib/user/application/services/UserService";
import { UserRepository } from "@/lib/user/application/repositories/UserRepository";
import { clerkClient } from "@clerk/nextjs/server";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const client = await clerkClient()


export const userCreateUserAction = async (userId: string) => {
    try {
        const user = await client.users.getUser(userId);

        const { imageUrl, firstName, lastName, emailAddresses } = user;
        const email = emailAddresses[0].emailAddress;
        const avatar = imageUrl;
        const username = `${firstName} ${lastName}`;

        const createdUser = await userService.createUser(username, email, avatar, userId);

        // Transform the createdUser object into a plain object
        const plainUser = {
            id: createdUser.id,
            username: createdUser.username,
            email: createdUser.email,
            avatar: createdUser.avatar,
        };

        return {
            user: plainUser,
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