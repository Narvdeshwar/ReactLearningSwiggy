function Shimmer() {
    return (
        <div className="animate-pulse space-y-4 w-full">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="p-4 bg-slate-800 rounded-lg shadow-md border">
                    <div className="h-6 bg-slate-700 rounded w-1/3 mb-2"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/2 mb-1"></div>
                    <div className="h-4 bg-slate-700 rounded w-1/4"></div>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;
