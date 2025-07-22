export const IncidentPlayer = () => {
    return (
        <div className="bg-black rounded-lg overflow-hidden h-full flex flex-col border border-orange-500">
            <div className="relative aspect-video">
                <img src="/thumbnails/player-main.jpg" alt="Main camera feed" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    Camera - 01
                </div>
            </div>
            <div className="flex p-2 gap-2 bg-gray-900">
                <img src="/thumbnails/unauthorised-2.jpg" alt="Camera 2 thumbnail" className="w-32 aspect-video object-cover rounded" />
                <img src="/thumbnails/gun-threat-2.jpg" alt="Camera 3 thumbnail" className="w-32 aspect-video object-cover rounded" />
            </div>
        </div>
    )
}