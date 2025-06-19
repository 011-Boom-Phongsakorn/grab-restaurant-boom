import React from 'react'

const Card = ({ title, type, img}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={img}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{type}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Delete</div>
          <div className="badge badge-outline">Edit</div>
        </div>
      </div>
    </div>
  )
}

export default Card