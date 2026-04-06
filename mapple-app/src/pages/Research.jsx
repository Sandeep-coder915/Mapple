import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'

export default function Research() {
  const navigate = useNavigate()

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="glass p-6 rounded-3xl border border-green-100">
        <h1 className="text-2xl font-bold text-mapple-900">Research Home</h1>
        <p className="mt-2 text-gray-600">Click on any product to view detailed clinical research and information.</p>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {productsData.map((product) => (
            <article
              key={product.id}
              onClick={() => navigate(`/products/${product.id}`)}
              className="glass rounded-xl border border-green-100 p-4 cursor-pointer transition hover:border-mapple-400 hover:shadow-md"
            >
              <h2 className="font-semibold text-mapple-800">{product.name}</h2>
              <p className="text-sm text-gray-600">Category: {product.category}</p>
              <p className="mt-1 text-sm text-gray-700">
                {product.pdfLinks && product.pdfLinks.length > 0
                  ? product.pdfLinks.map((pdf) => pdf.label).join(', ')
                  : 'No research documents available'}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
