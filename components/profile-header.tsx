import Image from "next/image"
import { MorphingText } from "./ui/morphing-text"
import { USER } from "@/data/user"

export function ProfileHeader() {
    return (
        <div className="flex screen-line-after border-x border-edge items-end">
            {/* Left column — avatar */}
            <div className="border-r border-edge shrink-0 flex items-end p-1">
                <div className="relative size-30 sm:size-36 p-2">
                    <Image
                        src={USER.avatar}
                        alt="Profile Picture"
                        fill
                        fetchPriority="high"
                        className="rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none object-cover"
                    />
                </div>
            </div>

            {/* Right column — name + role (flex-1 so border-t spans full width) */}
            <div className="flex flex-1 min-w-0 flex-col mb-6 justify-start border-t border-edge">
                <h1 className="text-3xl ml-4 font-medium font-yatra-one text-zinc-950 dark:text-zinc-50">
                    {USER.displayName}
                </h1>
                <div className="flex-1 border-t border-edge">
                    <MorphingText texts={USER.morphingText} className="text-sm ml-4" />
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader