export const IncidentPlayer = () => {
  return (
    <div className="bg-black rounded-lg overflow-hidden h-full flex flex-col border border-orange-500/50">
      <div className="relative aspect-video">
        <img src="/thumbnails/player-main.jpg" alt="Main camera feed" className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 text-sm text-gray-300">
          <span>11/7/2025 - 03:12:37</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded text-sm font-semibold">
          Camera - 01
        </div>
      </div>
      <div className="flex p-2 gap-2 bg-[#1C1C1C]">
        <img src="/thumbnails/unauthorised-2.jpg" alt="Camera 2 thumbnail" className="w-40 aspect-video object-cover rounded border-2 border-transparent hover:border-orange-500 transition" />
        <img src="/thumbnails/gun-threat-2.jpg" alt="Camera 3 thumbnail" className="w-40 aspect-video object-cover rounded border-2 border-transparent hover:border-orange-500 transition" />
      </div>
    </div>
  )
}