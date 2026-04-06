import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import productsData from '../data/products.json'

export default function Products() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  const categories = useMemo(
    () => [...new Set(productsData.map((p) => p.category).filter(Boolean))],
    []
  )

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return productsData.filter((product) => {
      const matchCategory = !category || product.category === category
      const matchText = !normalized || [product.name, product.indication, product.category, product.description]
        .some((field) => typeof field === 'string' && field.toLowerCase().includes(normalized))
      return matchCategory && matchText
    })
  }, [category, query])

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="glass p-6 rounded-3xl border border-green-100">
        <h1 className="text-2xl font-bold text-mapple-900">Product Portfolio</h1>
        <p className="text-sm text-gray-600 mt-1">Search by name, disease or category to support clinical decision-making.</p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product or clinical indication (e.g., Fatty Liver)"
            className="rounded-xl border border-green-200 px-4 py-3 shadow-sm focus:border-mapple-400 focus:ring focus:ring-mapple-200 outline-none"
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl border border-green-200 px-4 py-3 shadow-sm outline-none focus:border-mapple-400 focus:ring focus:ring-mapple-200">
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="glass col-span-full rounded-2xl border border-green-100 p-8 text-center text-gray-600">No products match your search. Please adjust filters or keywords.</div>
        )}
      </section>
    </main>
  )
}
