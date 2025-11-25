import  Link  from 'next/link'
import React from 'react'

export default function ProductCard({img, title,price,id,}) {
    
    
  return (
     <Link
      href={`/products/${id}`}
      className="group block border border-yellow-950/30 hover:border-neutral-300 transition-colors duration-200"
    >
      {/* Image */}
      <div className="aspect-3/4 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
        />
      </div>

      {/* Info */}
      <div className="f px-4 py-4">
        <h3 className="text-lg tracking-tight text-yellow-950/80">
          {title}
        </h3>

        <p className="text-[14px] font- text-yellow-900/80 mb-6">
          {price.toLocaleString()} $
        </p>
        <button className='bg-yellow-800/70 text-white hover:bg-yellow-900 px-4 py-2 w-full'>Add to cart</button>
      </div>
    </Link>
  )
}
