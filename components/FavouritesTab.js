function FavouritesTab() {
  const favouriteDestinations = [
    {
      id: 1,
      name: 'Barcelona',
      hotels: 3,
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Madrid',
      hotels: 2,
      image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'Mallorca',
      hotels: 2,
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'Lisbon',
      hotels: 1,
      image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'Santiago de Compostela',
      hotels: 1,
      image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800&auto=format&fit=crop'
    }
  ];

  const handleDestinationClick = (destination) => {
    console.log('Clicked destination:', destination.name);
    // Navigate to destination details or hotel listings
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-[32px] font-bold" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
          Favourites
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-24" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {/* Grid of Destination Cards */}
        <div className="grid grid-cols-2 gap-4">
          {favouriteDestinations.map((destination) => (
            <button
              key={destination.id}
              onClick={() => handleDestinationClick(destination)}
              className="flex flex-col text-left transition-transform duration-200 active:scale-95"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {/* Card Image */}
              <div
                className="w-full aspect-[1.4/1] rounded-[24px] overflow-hidden mb-3 transition-shadow duration-200"
                style={{
                  background: `url(${destination.image}) center/cover no-repeat`,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
              />

              {/* Card Info */}
              <div className="px-1">
                <h3
                  className="text-[17px] font-bold mb-1"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#000'
                  }}
                >
                  {destination.name}
                </h3>
                <p
                  className="text-[15px]"
                  style={{
                    fontFamily: 'Ubuntu, sans-serif',
                    color: '#666'
                  }}
                >
                  {destination.hotels} {destination.hotels === 1 ? 'hotel' : 'hotels'}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
