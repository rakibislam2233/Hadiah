import Link from "next/link";

const SectionTitle = ({ title, path }: { title: string; path?: string }) => {
  return (
    <div className="flex justify-between items-center mt-4 py-3">
      <h1 className="text-3xl font-semibold">{title}</h1>
      {path && (
        <Link href={path as string}>
          <button
            className="px-6 py-1.5 border border-rose-500 bg-rose-500 hover:border hover:border-rose-500 hover:bg-transparent hover:text-gray-800 transition-all duration-300 text-white font-semibold rounded-full"
          >
           View All
          </button>
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
