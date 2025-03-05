import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://www.example.com/sample-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-40">
        <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Explore the Beauty of Andhra Pradesh
        </h2>
        <p className="text-lg max-w-2xl mb-6 drop-shadow-md">
          Discover breathtaking landscapes, rich heritage, and vibrant culture.
        </p>
        <div className="flex space-x-4">
          <a
            href="#explore"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold 
            hover:bg-yellow-600 transition transform hover:scale-105"
          >
            Explore Now
          </a>
          <a
            href="#plan-trip"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold 
            hover:bg-white hover:text-black transition transform hover:scale-105"
          >
            Plan My Trip
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App
