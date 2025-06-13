export default function TooltipButton() {
  return (
    <div className="relative group inline-block">
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Hover me
      </button>
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-sm px-3 py-1 rounded shadow-md pointer-events-none z-10">
        This is a tooltip!
      </div>
    </div>
  );
}
