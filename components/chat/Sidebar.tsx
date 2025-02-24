"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus } from "lucide-react"
import { ConversationData } from "@/lib/chat/domain/entities/chat"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { User } from "@/lib/user/domain/entities/user"

interface SidebarProps {
    data: ConversationData[];
}

export default function Sidebar({ data }: SidebarProps) {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const { user: currentUser } = useUser();

    if (!currentUser) return null;

    console.log(currentUser.id)

    return (
        <aside className="w-15 md:w-64 bg-gray-100 border-r border-gray-200 flex flex-col md:justify-center">
            <div className="p-4 hidden md:block">
                <div className="flex items-center mb-4">
                    <Input
                        type="text"
                        placeholder="Search conversations"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 mr-2"
                    />
                    <Button size="icon" variant="ghost">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>
                <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> New Chat
                </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
                {data.map((conversation) => {
                    if (conversation.users.length === 1) return null;

                    const sender = conversation.users.filter((user: User) => user.userId !== currentUser.id)[0];

                    return (
                        <div
                            key={conversation.id}
                            onClick={() => router.push(`/chat/${conversation.id}`)}
                            className="flex items-center p-4 hover:bg-gray-200 cursor-pointer"
                        >
                            <Avatar className="h-10 w-10 mr-3">
                                <AvatarImage src={sender.avatar} alt={sender.username} />
                                <AvatarFallback>{sender.username}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0 hidden md:block">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-sm font-medium text-gray-900 truncate">{sender.username}</h3>
                                    <span className="text-xs text-gray-500">
                                        {new Date(conversation.timestamp).toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </aside>
    )
}