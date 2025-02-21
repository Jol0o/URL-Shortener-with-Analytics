import ChatArea from "@/components/chat/ChatArea";
import { conversationfetchConversationByIdAction } from "@/lib/chat/application/controllers/conversation.fetch-conversation-by-id.action";
import { Message } from "@/lib/message/domain/entities/message";
import { currentUser } from "@clerk/nextjs/server";

interface ChatPageProps {
    params: Promise<{
        conversationId: string;
    }>;
}

export default async function ChatPage({ params }: ChatPageProps) {
    const { conversationId } = await params;
    const user = await currentUser();
    let conversationData = { messages: [] as Message[], userId: "" };

    if (!user) return
    try {

        if (conversationId) {
            const { data } = await conversationfetchConversationByIdAction(conversationId);
            if (data) {
                conversationData = { messages: data.messages, userId: user.id };
            }
        }
    } catch (err) {
        console.error("Error fetching conversation:", err);
    }

    return (
        <div className="flex flex-col h-full">
            <ChatArea data={conversationData} conversationId={conversationId} />
        </div>
    );
}