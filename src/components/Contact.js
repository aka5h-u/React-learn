const Contact = () =>{
    return (
    //     <div className="contact-container">
    //     <h1>Contact us @:</h1>
    //     <h2>xyz@xyz.com</h2>
    //     <h3>9xxxxxxx8</h3>
    // </div>

 
        <div className="container mx-auto p-4 flex flex-wrap gap-4">
          <div className=" border rounded-lg shadow-md p-4 w-64">
            <img
              src="https://picsum.photos/256/192"
              alt="Task Card"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">Task Title</h2>
            <h3 className="text-lg text-gray-600">Priority: High</h3>
            <p className="text-gray-700 mt-2 line-clamp-3">
              This is a sample task description that might be a bit long but will be truncated to fit nicely within the card boundaries.
            </p>
            </div>


          <div className="card border rounded-lg shadow-md p-4 w-64 hover:shadow-2xl cursor-pointer ">
            <img
              src="https://picsum.photos/256/192"
              alt="Task Card"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2">Task Title</h2>
            <h3 className="text-lg text-gray-600">Priority: High</h3>
            <p className="text-gray-700 mt-2 line-clamp-3">
              This is a sample task description that might be a bit long but will be truncated to fit nicely within the card boundaries.
            </p>
          </div>
        </div>
      
    );
}

export default Contact;