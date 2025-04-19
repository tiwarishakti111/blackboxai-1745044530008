import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Full Stack Java Microservices Project</h1>
      <p className="text-lg text-gray-700 mb-4">Welcome to the frontend of the microservices project.</p>
      <div className="space-x-4">
        <a href="http://localhost:8081/users/hello" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">User Service</a>
        <a href="http://localhost:8082/products/hello" target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">Product Service</a>
        <a href="http://localhost:8083/orders/hello" target="_blank" rel="noopener noreferrer" className="text-white bg-purple-500 px-4 py-2 rounded hover:bg-purple-600 transition">Order Service</a>
      </div>
    </div>
  );
}

export default App;
