export const Navbar = () => {
  return (
    <nav className="bg-[#1C1C1C] p-4 border-b border-purple-700/50 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-gray-200">MANDLACX</h1>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Dashboard</span>
          <span>Cameras</span>
          <span>Scenes</span>
          <span>Incidents</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img src="https://i.pravatar.cc/40" alt="User Avatar" className="w-8 h-8 rounded-full" />
        <span className="text-sm text-gray-300">Mohammed Aihas</span>
      </div>
    </nav>
  );
};