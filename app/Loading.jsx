export default function Loading() {
  return (
    <div className="flex items-center justify-center gap-3 min-h-screen bg-[#06065D]">
      <div 
        className="w-6 h-6 sm:w-4 md:w-6 sm:h-4 md:h-6 rounded-full bg-red-500 animate-custom-bounce"
        style={{ animationDelay: '0ms' }}
      />
      <div 
        className="w-6 h-6 sm:w-4 md:w-6 sm:h-4 md:h-6 rounded-full bg-red-500 animate-custom-bounce"
        style={{ animationDelay: '150ms' }}
      />
      <div 
        className="w-6 h-6 sm:w-4 md:w-6 sm:h-4 md:h-6 rounded-full bg-red-500 animate-custom-bounce"
        style={{ animationDelay: '300ms' }}
      />
    </div>
  );
}