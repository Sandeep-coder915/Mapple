export default function PDFViewer({ pdf }) {
  if (!pdf) {
    return <p className="text-sm text-gray-600">No reference PDF available.</p>
  }

  return (
    <div className="glass border border-green-100 p-4 rounded-xl">
      <h4 className="text-md font-semibold text-mapple-800 mb-2">{pdf.label}</h4>
      <div className="aspect-[16/9] border border-gray-200 overflow-hidden rounded-lg">
        <iframe src={pdf.path} title={pdf.label} className="h-full w-full" />
      </div>
      <div className="mt-3 space-y-2">
        <h5 className="text-sm font-semibold text-mapple-700">Key highlights</h5>
        <ul className="list-inside list-disc text-sm text-gray-600">
          {pdf.highlights?.map((highlight, idx) => (
            <li key={`${pdf.id}-${idx}`}>{highlight}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
