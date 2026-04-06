import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const _motion = motion
  return (
    <motion.article
      whileHover={{ y: -4, rotateX: 1.5  }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="glass border border-green-100 p-4 shadow glass rounded-2xl"
    >
      <img src={product.image} alt={product.name} className="h-[300px] w-full object-cover rounded-xl" />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-mapple-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.indication}</p>
        <p className="mt-2 text-xs text-gray-500">Category: {product.category}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.ingredients.slice(0, 3).map((ingredient) => (
            <span key={ingredient} className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-700">
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      <Link
        to={`/products/${product.id}`}
        className="mt-4 inline-flex items-center justify-center rounded-lg bg-mapple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-mapple-600"
      >
        View Details
      </Link>
    </motion.article>
  )
}
