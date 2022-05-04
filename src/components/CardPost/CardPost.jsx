import React from 'react'

const CardPost = () => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 " style = {{height:'370px'}}>
    <div className="flex justify-center md:justify-end -mt-16">
      <img className="w-20 h-20 object-cover rounded-full border-2 border-blue-400" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
    </div>
    <div>
      <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
      <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
    </div>
    <div className="flex justify-end mt-4">
      <a href="#" className="text-xl font-medium text-blue-400">John Doe</a>
    </div>
  </div>
  )
}

export default CardPost