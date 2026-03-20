import { useMemo, useState } from 'react'
import CategoryCard from '../components/CategoryCard.jsx'
import ProductCard from '../components/ProductCard.jsx'
import productsData from '../data/products.json'
import { motion } from 'framer-motion'

const M = motion

const categories = ['Immunity', 'Liver Care', 'Digestive', 'Stress', 'Respiratory']

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('')

  const featured = useMemo(() => {
    if (!selectedCategory) return productsData.slice(0, 8)
    return productsData.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="glass p-4 rounded-3xl border border-green-100 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <p className="inline-flex items-center rounded-full bg-mapple-100 px-3 py-1 text-xs font-semibold text-mapple-700">Doctor-focused Clinical Suite</p>
            <h1 className="mt-4 text-3xl font-bold text-mapple-900 sm:text-4xl">Evidence-Based Ayurvedic Solutions</h1>
            <p className="mt-4 text-gray-600">Designed for clinical decision support and informed sharing via WhatsApp to doctors and practitioners.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="rounded-lg bg-mapple-500 px-4 py-2 text-white shadow hover:bg-mapple-600">Explore Products</a>
              <a href="#research" className="rounded-lg border border-mapple-300 px-4 py-2 text-mapple-700 hover:bg-mapple-50">Research Highlights</a>
            </div>
          </div>
          {/* <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="h-56 w-full rounded-2xl bg-gradient-to-r from-mapple-100 to-green-100" /> */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM1IQVG8Ifp43BDlUQ1vsQqeKqdIqnWrR3w&s"  className="h-full w-full rounded-2xl bg-gradient-to-r from-mapple-100 to-green-100" alt="" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-mapple-900 mb-4">Clinically Organized Categories</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category}
              category={category}
              icon={category[0]}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </section>

      <section id="products" className="mt-8">
        <h2 className="text-xl font-bold text-mapple-900 mb-4">Featured Products</h2>
        <p className="text-sm text-gray-600 mb-4">{selectedCategory ? `Showing ${selectedCategory} formulas.` : 'Top clinical favorites for physician presentation.'}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="research" className="mt-10 glass p-6 rounded-2xl border border-green-100">
        <h2 className="text-xl font-semibold text-mapple-900">Quick Research Highlights</h2>
        <ul className="mt-3 space-y-2 text-sm text-gray-700">
          <li>• Randomized studies show MAPPL immunity formulas reduce acute infection duration by 40%.</li>
          <li>• Hepatosupport formulations maintain improved AST/ALT ratios over 12 weeks.</li>
          <li>• Digestive tonics restore gut comfort with &gt;70% patient satisfaction in prospective observational data.</li>
        </ul>
      </section>
    </main>
  )
}
