function SpinnerMini() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-transparent text-blue-400 text-xl animate-spin flex items-center justify-center border-t-accent-400 rounded-full">
        <div className="w-8 h-8 border-4 border-transparent text-red-400 text-lg animate-spin flex items-center justify-center border-t-slate-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default SpinnerMini;
