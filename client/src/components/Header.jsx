import React, { useState } from 'react';
import logo from '../assets/logo.png';
import beachImg from '../assets/images/beaches.jpg';
import hillImg from '../assets/images/hill-stations.jpg'; 
import pilgrimImg from '../assets/images/historical-sites.jpg';
import { 
  Globe, 
  Mountain, 
  Waves,
  MapPin, 
  Plane, 
  Landmark, 
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router';

function Header() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [tripPlannerOpen, setTripPlannerOpen] = useState(false);
  const [placesOpen, setPlacesOpen] = useState(false);

  const placesData = {
    Beaches: [
      { name: 'Rishikonda Beach', location: 'Visakhapatnam' },
      { name: 'Rushikonda Beach', location: 'Visakhapatnam' },
      { name: 'Ramakrishna Beach', location: 'Visakhapatnam' },
      { name: 'Yarada Beach', location: 'Visakhapatnam' }
    ],
    Hills: [
      { name: 'Araku Valley', location: 'Visakhapatnam District' },
      { name: 'Horsley Hills', location: 'Chittoor District' },
      { name: 'Ananthagiri Hills', location: 'Visakhapatnam' },
      { name: 'Lambasingi', location: 'Visakhapatnam District' }
    ],
    Pilgrimage: [
      { name: 'Tirumala Venkateswara Temple', location: 'Tirupati' },
      { name: 'Ahobilam Temple', location: 'Kurnool District' },
      { name: 'Srisailam Temple', location: 'Kurnool District' },
      { name: 'Kanaka Durga Temple', location: 'Vijayawada' }
    ]
  };

  const placeCategories = [
    { 
      name: 'Beaches', 
      icon: <Waves className="w-8 h-8 text-blue-500" />,
      image: beachImg,
      description: 'Coastal wonders of Andhra Pradesh',
      items: placesData.Beaches
    },
    { 
      name: 'Hills', 
      icon: <Mountain className="w-8 h-8 text-green-500" />,
      image: hillImg,
      description: 'Scenic mountain landscapes',
      items: placesData.Hills
    },
    { 
      name: 'Pilgrimage Sites', 
      icon: <Landmark className="w-8 h-8 text-yellow-500" />,
      image: pilgrimImg,
      description: 'Spiritual destinations',
      items: placesData.Pilgrimage
    }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'te', name: 'Telugu' },
    { code: 'hi', name: 'Hindi' }
  ];

  return (
    <header className="absolute top-0 w-full flex justify-between items-center p-6 text-black bg-white bg-opacity-70 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4">
        <img src={logo} alt="AP Tourism Logo" className="h-12" />
        <h1 className="text-3xl font-bold">AP Tourism</h1>
      </div>
      <nav>
        <ul className="flex gap-6 relative items-center">
          {/* AI Trip Planner Dropdown */}
          <li 
            className="relative group" 
            onMouseEnter={() => setTripPlannerOpen(true)} 
            onMouseLeave={() => {
              // Add a small delay before closing
              setTimeout(() => {
                setTripPlannerOpen(false);
              }, 200);
            }}
          >
            <a href="#" className="flex items-center hover:text-yellow-600 transition">
              AI Trip Planner <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            {tripPlannerOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-xl overflow-hidden"
                onMouseEnter={() => setTripPlannerOpen(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setTripPlannerOpen(false);
                  }, 200);
                }}
              >
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Plane className="mr-2 text-blue-500" />
                    <h3 className="font-bold">Smart Travel Solutions</h3>
                  </div>
                  <ul>
                  <li className="py-2 hover:bg-gray-100 rounded">
                    <Link to="/ai-trip-planner" className="block">Itinerary Planner</Link>
                  </li>
                    <li className="py-2 hover:bg-gray-100 rounded">
                      <a href="#" className="block">Destination Guides</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Places to Visit Dropdown */}
          <li 
            className="relative group" 
            onMouseEnter={() => setPlacesOpen(true)} 
            onMouseLeave={() => setPlacesOpen(false)}
          >
            <a href="#" className="flex items-center hover:text-yellow-600 transition">
              Places to Visit <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            {placesOpen && (
              <div className="absolute left-0 mt-2 w-[800px] -translate-x-80 bg-white border rounded-lg shadow-xl overflow-hidden">
                <div className="flex">
                  {placeCategories.map((category) => (
                    <div 
                      key={category.name} 
                      className="w-1/3 border-r last:border-r-0"
                    >
                      {/* Category Header */}
                      <div className="p-4 border-b flex items-center">
                        {category.icon}
                        <div className="ml-2">
                          <h3 className="font-bold">{category.name}</h3>
                          <p className="text-sm text-gray-500">{category.description}</p>
                        </div>
                      </div>
                      
                      {/* Category Image */}
                      <div className="p-4 border-b">
                        <img 
                          src={category.image} 
                          alt={category.name} 
                          className="w-full h-40 object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Places List */}
                      <div className="p-4">
                        <ul>
                          {category.items.map((item) => (
                            <li 
                              key={item.name} 
                              className="py-2 hover:bg-gray-100 rounded cursor-pointer"
                            >
                              <a href="#" className="block">
                                <span className="font-semibold">{item.name}</span>
                                <span className="text-sm text-gray-500 block">{item.location}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Other Menu Items */}
          <li><a href="#" className="hover:text-yellow-600 transition">Partners</a></li>
          <li><a href="#" className="hover:text-yellow-600 transition">Getting To Andhra</a></li>
          <li><a href="#" className="hover:text-yellow-600 transition">Offers</a></li>

          {/* Language Dropdown */}
          <li 
            className="relative group" 
            onMouseEnter={() => setLanguageOpen(true)} 
            onMouseLeave={() => setLanguageOpen(false)}
          >
            <a href="#" className="flex items-center hover:text-yellow-600 transition">
              <Globe className="mr-1" /> Language <ChevronDown className="ml-1 w-4 h-4" />
            </a>
            {languageOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-xl">
                {languages.map((lang) => (
                  <li 
                    key={lang.code} 
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;