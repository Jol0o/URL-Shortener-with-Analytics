"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, MessageSquare } from "lucide-react"
import { UserButton } from "@clerk/nextjs"

export default function Header() {
    const [search, setSearch] = useState("")

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center flex-1">
                    <h1 className="text-xl font-bold mr-4">ChatApp</h1>
                    <div className="hidden sm:flex items-center max-w-md w-full">
                        <Input
                            type="text"
                            placeholder="Search users..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1"
                        />
                        <Button size="icon" variant="ghost" className="ml-2">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Button size="icon" variant="ghost">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <MessageSquare className="h-5 w-5" />
                    </Button>
                    <UserButton />
                </div>
            </div>
        </header>
    )
}

