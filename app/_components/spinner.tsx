function Spinner() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-transparent text-blue-400 text-3xl animate-spin flex items-center justify-center border-t-accent-400 rounded-full">
        <div className="w-12 h-12 border-4 border-transparent text-red-400 text-xl animate-spin flex items-center justify-center border-t-slate-400 rounded-full"></div>
      </div>
    </div>
  );
}

export default Spinner;
