/*
  Warnings:

  - You are about to drop the column `userId` on the `Conversation` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Conversation_userId_key";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "userId";
