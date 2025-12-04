function DealsTab() {
  const deals = [
    {
      id: 1,
      hotelName: 'Hotel Gaudi',
      location: 'Barcelona',
      distance: '400 m from city centre',
      rating: 8.9,
      reviews: 536,
      checkIn: 'Mon 13 Feb',
      checkOut: 'Sat 18 Feb',
      nights: 5,
      breakfast: true,
      travelExtraPack: true,
      savings: 118,
      depositFrom: 110,
      price: 443,
      returnFlights: true,
      taxes: 10,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      timer: '6d:23h:17m'
    },
    {
      id: 2,
      hotelName: 'Catalonia Ramblas',
      location: 'Barcelona',
      distance: '300 m from city centre',
      rating: 8.7,
      reviews: 428,
      checkIn: 'Mon 13 Feb',
      checkOut: 'Sat 18 Feb',
      nights: 5,
      breakfast: true,
      travelExtraPack: false,
      savings: 95,
      depositFrom: 100,
      price: 389,
      returnFlights: true,
      taxes: 10,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
      timer: '6d:23h:17m'
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header with gradient background and logo */}
      <div className="relative px-6 pt-6 pb-6" style={{
        background: 'linear-gradient(135deg, #E91E63 0%, #FF6B35 100%)',
        overflow: 'hidden'
      }}>
        {/* Logo covering entire banner */}
        <div className="absolute inset-0">
          <img
            src="images/lastMinuteDealsLogo.png"
            alt="Last Minute Deals"
            className="w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Search Filters - positioned above logo */}
        <div className="relative z-10 flex gap-2" style={{ marginTop: '40px' }}>
          {/* From Location */}
          <button className="flex-1 flex items-center gap-2 px-4 py-3 rounded-2xl" style={{
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <SFIcon type="airplane.departure" className="w-4 h-4" color="#666" />
            <div className="flex-1 text-left">
              <span className="text-[14px] font-semibold text-gray-900">From: London (LHR)</span>
            </div>
          </button>

          {/* Dates */}
          <button className="flex items-center gap-2 px-4 py-3 rounded-2xl" style={{
            background: 'rgba(255,255,255,0.95)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <SFIcon type="calendar" className="w-4 h-4" color="#666" />
            <span className="text-[14px] font-semibold text-gray-900 whitespace-nowrap">4-6 nights, Any...</span>
          </button>
        </div>
      </div>

      {/* Results Counter */}
      <div className="px-6 py-3" style={{ background: '#F5F5F5' }}>
        <p className="text-[13px] text-gray-500">+200 results found for Last minute deals</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-32" style={{
        background: '#F5F5F5',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="mb-4 rounded-[24px] overflow-hidden"
            style={{
              background: 'white',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            {/* Hotel Image with Timer Badge */}
            <div className="relative h-48">
              <img src={deal.image} alt={deal.hotelName} className="w-full h-full object-cover" />

              {/* Image Carousel Dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {[0, 1, 2, 3, 4].map((dot, idx) => (
                  <div
                    key={idx}
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: idx === 0 ? 'white' : 'rgba(255,255,255,0.5)'
                    }}
                  />
                ))}
              </div>

              {/* Timer Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                background: 'rgba(255,45,85,0.95)',
                backdropFilter: 'blur(10px)'
              }}>
                <SFIcon type="timer" className="w-4 h-4" color="white" />
                <span className="text-[12px] font-semibold text-white">Ends in</span>
              </div>
              <div className="absolute top-12 left-3 px-3 py-1 rounded-lg" style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)'
              }}>
                <span className="text-[13px] font-bold text-gray-900">{deal.timer}</span>
              </div>
            </div>

            {/* Hotel Details */}
            <div className="p-4">
              {/* Hotel Name */}
              <h2 className="text-[22px] font-bold text-gray-900 mb-2">{deal.hotelName}</h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-4 h-4 text-[#FDB022]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded text-white text-[12px] font-bold" style={{ background: '#7CB342' }}>
                  {deal.rating}
                </span>
                <span className="text-[13px] text-gray-500">Very Good ({deal.reviews} reviews)</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 text-[14px] text-gray-600 mb-3">
                <SFIcon type="mappin.circle.fill" className="w-4 h-4" color="#666" />
                <span>{deal.location} · {deal.distance}</span>
              </div>

              {/* Dates */}
              <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-xl" style={{ background: '#F5F5F5' }}>
                <SFIcon type="calendar" className="w-4 h-4" color="#374151" />
                <span className="text-[14px] font-semibold text-gray-900">
                  {deal.checkIn} – {deal.checkOut}
                </span>
              </div>

              {/* Amenities */}
              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-gray-700">
                    {deal.nights}-night stay with <span className="font-semibold">Breakfast</span>
                  </span>
                </div>
                {deal.travelExtraPack && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[14px] text-gray-700 flex items-center gap-1">
                      Travel Extra Pack included
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-gray-700 flex items-center gap-1">
                    <span className="font-semibold">Save £{deal.savings} pp</span> by booking a package
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4M12 8h.01" />
                    </svg>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[14px] text-gray-700">
                    Deposit from £{deal.depositFrom} pp available
                  </span>
                </div>
              </div>

              {/* Return Flights and Icons */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <SFIcon type="airplane" className="w-4 h-4" color="#374151" />
                  <span className="text-[14px] font-medium text-gray-700">Return flights included</span>
                </div>
                <div className="flex items-center gap-2">
                  <SFIcon type="lock.fill" className="w-4 h-4" color="#666" />
                  <SFIcon type="person.fill" className="w-4 h-4" color="#666" />
                  <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-end justify-end">
                <div className="text-right">
                  <div className="text-[32px] font-bold text-[#E91E63] leading-none">
                    £{deal.price}
                  </div>
                  <div className="text-[13px] text-gray-500">/person</div>
                  <div className="text-[12px] text-gray-400">+£{deal.taxes} pp taxes/fees due later</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sort and Filters Button */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none">
        <button className="flex items-center gap-3 px-6 py-3 rounded-full pointer-events-auto" style={{
          background: '#1a1a1a',
          boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
        }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <line x1="4" y1="6" x2="16" y2="6" />
              <line x1="4" y1="12" x2="12" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <span className="text-[15px] font-semibold text-white">Sort</span>
          </div>
          <div className="w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="6" r="3" />
              <circle cx="11" cy="18" r="3" />
              <line x1="14" y1="6" x2="20" y2="6" />
              <line x1="14" y1="18" x2="20" y2="18" />
            </svg>
            <span className="text-[15px] font-semibold text-white">Filters</span>
          </div>
        </button>
      </div>
    </div>
  );
}
