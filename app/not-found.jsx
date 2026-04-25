export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center px-6">
      
      <h1 className="text-5xl font-bold text-red-700 mb-4">
        404
      </h1>

      <p className="text-2xl text-[#6d3742] mb-6">
        No project yet!
      </p>

      <a
        href="/projects"
        className="px-6 py-2 border border-red-700 rounded-full text-red-700 hover:bg-red-700 hover:text-white transition"
      >
        Back to Projects
      </a>

    </div>
  );
}