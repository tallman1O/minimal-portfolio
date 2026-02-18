import Image from "next/image"

const ProfilePicture = () => {
    return (
        <div className="flex items-baseline">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                    src="/images/mehul.png"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    />
            </div>
            <h1 className="text-2xl font-bold ml-4 font-yatra-one">Mehul Uttam</h1>
        </div>
    )
}

export default ProfilePicture