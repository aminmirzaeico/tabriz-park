export const Skeleton = () => {
    return (
        <div className="flex w-full flex-col gap-4 text-center align-center items-center justify-center mt-6 h-96 p-12">
            <div className="skeleton h-20 w-52 shrink-0 rounded-md"></div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-4">
                    <div className="skeleton h-3 w-1/2 rounded-md"></div>
                    <div className="skeleton h-3 w-52 rounded-md"></div>
                </div>
            </div>
            <div className="skeleton h-8 w-52 rounded-md"></div>
        </div>
    );
}