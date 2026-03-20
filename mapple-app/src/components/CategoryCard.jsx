export default function CategoryCard({ category, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="glass flex items-center gap-3 border border-green-100 px-4 py-3 rounded-xl text-left shadow-sm"
    >
      <span className="h-9 w-9 rounded-lg bg-mapple-50 text-mapple-800 grid place-items-center text-sm font-semibold">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-mapple-800">{category}</p>
        <p className="text-xs text-gray-500">View related formulas</p>
      </div>
    </button>
  )
}
