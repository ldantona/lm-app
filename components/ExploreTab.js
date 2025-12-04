// Explore Tab Content
const ExploreContent = ({ searchType, setSearchType, holidayVibe, setHolidayVibe }) => (
  <div className="relative z-10 px-5 pt-1 flex-1 overflow-y-auto" style={{ paddingBottom: '120px' }}>
    <div className="flex items-center justify-center mb-4">
      <span className="text-[26px] font-bold text-white" style={{  }}>lastminute.com</span>
    </div>

    <div className="rounded-2xl p-1 mb-4" style={{
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 12px rgba(0,0,0,0.06)'
    }}>
      <div className="flex">
        {[
          { id: 'flights', label: 'Flights', icon: 'airplane.fill' },
          { id: 'flight-hotel', label: 'Flight + Hotel', icon: 'airplane.fill', icon2: 'building.2' },
          { id: 'hotels', label: 'Hotels', icon: 'building.2' }
        ].map((type) => (
          <button
            key={type.id}
            onClick={() => setSearchType(type.id)}
            className="flex-1 py-2.5 px-2 rounded-xl text-[12px] font-semibold transition-all duration-300 flex flex-col items-center gap-1"
            style={{
              background: searchType === type.id ? 'white' : 'transparent',
              color: searchType === type.id ? '#D6006E' : '#666',
              boxShadow: searchType === type.id ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            {type.icon2 ? (
              <div className="flex items-center gap-1">
                <SFIcon type={type.icon} className="w-5 h-5" color={searchType === type.id ? '#D6006E' : '#666'} />
                <span className="text-[10px] font-bold">+</span>
                <SFIcon type={type.icon2} className="w-5 h-5" color={searchType === type.id ? '#D6006E' : '#666'} />
              </div>
            ) : (
              <SFIcon type={type.icon} className="w-5 h-5" color={searchType === type.id ? '#D6006E' : '#666'} />
            )}
            <span>{type.label}</span>
          </button>
        ))}
      </div>
    </div>

    <div className="flex items-center gap-3 p-4 rounded-2xl mb-6" style={{
      background: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 12px rgba(0,0,0,0.06)'
    }}>
      <div className="flex-1">
        <p className="text-[15px] font-semibold text-gray-900">London – Barcelona</p>
        <p className="text-[13px] text-gray-500">13–18 Feb · 2 travellers · 1 room</p>
      </div>
      <button className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: '#f2007d' }}>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </button>
    </div>

    <div className="mb-6">
      <h2 className="text-[22px] font-bold text-gray-900 mb-1">Last Minute <span className="lastminute-sans">DEALS</span></h2>
      <p className="text-[14px] text-gray-500 mb-4">Only here, only for a short time</p>

      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[
          { city: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80', price: '£402', nights: '6 nights in Nov\'25', timer: '6d:23h:17m' },
          { city: 'Paris, France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', price: '£385', nights: '5 nights in Dec\'25', timer: '4d:12h:33m' },
          { city: 'Barcelona, Spain', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', price: '£295', nights: '4 nights in Nov\'25', timer: '2d:08h:45m' }
        ].map((deal, idx) => (
          <div key={idx} className="flex-shrink-0 rounded-[24px] overflow-hidden" style={{
            width: '85%',
            scrollSnapAlign: 'start',
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 8px 32px rgba(0,0,0,0.08)'
          }}>
            <div className="relative h-40">
              <img src={deal.image} alt={deal.city} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}>
                <SFIcon type="timer" className="w-4 h-4" color="#374151" />
                <span className="text-[12px] font-semibold text-gray-700">Ends in {deal.timer}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                <h3 className="text-[18px] font-bold text-white mb-1">{deal.city}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <SFIcon type="airplane" className="w-3.5 h-3.5" color="rgba(255,255,255,0.8)" />
                      <span className="text-[12px] text-white/80">Flight + Hotel</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <SFIcon type="calendar" className="w-3.5 h-3.5" color="rgba(255,255,255,0.8)" />
                      <span className="text-[12px] text-white/80">{deal.nights}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-white/70">from </span>
                    <span className="text-[18px] font-bold text-white">{deal.price}</span>
                    <span className="text-[11px] text-white/70"> pp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h2 className="text-[20px] font-bold text-gray-900 mb-1">Recommended for you</h2>
      <p className="text-[13px] text-gray-500 mb-4">Because you searched for Barcelona</p>

      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[
          { name: 'Hotel Catalunya', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80', rating: '8.9', reviews: 536, location: 'Barcelona · 400 m from city centre', price: '€443' },
          { name: 'Grand Hotel Central', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80', rating: '9.2', reviews: 892, location: 'Barcelona · 200 m from city centre', price: '€520' },
          { name: 'Hotel Arts Barcelona', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80', rating: '9.5', reviews: 1240, location: 'Barcelona · Beachfront', price: '€680' }
        ].map((hotel, idx) => (
          <div key={idx} className="flex-shrink-0 rounded-[24px] overflow-hidden" style={{
            width: '85%',
            scrollSnapAlign: 'start',
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 8px 24px rgba(0,0,0,0.08)'
          }}>
            <div className="relative h-36">
              <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-[17px] font-bold text-gray-900 mb-1">{hotel.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  <SFIcon type="star.fill" className="w-3.5 h-3.5" />
                  <SFIcon type="star.fill" className="w-3.5 h-3.5" />
                  <SFIcon type="star.fill" className="w-3.5 h-3.5" />
                  <SFIcon type="star.fill" className="w-3.5 h-3.5" />
                </div>
                <span className="px-1.5 py-0.5 bg-green-600 text-white text-[11px] font-bold rounded">{hotel.rating}</span>
                <span className="text-[12px] text-gray-500">Very Good ({hotel.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-[13px] text-gray-500 mb-2">
                <SFIcon type="mappin" className="w-4 h-4" color="#6b7280" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center gap-3 text-[12px] text-gray-600">
                  <div className="flex items-center gap-1">
                    <SFIcon type="arrow.left.arrow.right" className="w-4 h-4" color="#6b7280" />
                    <span>Return flights</span>
                  </div>
                  <SFIcon type="lock.fill" className="w-3.5 h-3.5" color="#6b7280" />
                  <SFIcon type="person.fill" className="w-3.5 h-3.5" color="#6b7280" />
                </div>
              </div>
              <div className="mt-3 text-right">
                <span className="text-[24px] font-bold text-[#D6006E]">{hotel.price}</span>
                <span className="text-[13px] text-gray-500">/person</span>
                <p className="text-[11px] text-gray-400">+€10 pp taxes/fees due later</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h2 className="text-[20px] font-bold text-gray-900 mb-1">Need some inspiration?</h2>
      <p className="text-[13px] text-gray-500 mb-4">Choose your holiday vibe</p>

      <div className="flex gap-2 mb-4 overflow-x-auto">
        {[
          { id: 'anywhere', label: 'Anywhere', icon: 'globe' },
          { id: 'beach', label: 'Beach', icon: 'beach.umbrella' },
          { id: 'exotic', label: 'Exotic', icon: 'palm.tree' },
          { id: 'ski', label: 'Ski', icon: 'snowflake' }
        ].map((vibe) => (
          <button
            key={vibe.id}
            onClick={() => setHolidayVibe(vibe.id)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all"
            style={{
              background: holidayVibe === vibe.id ? '#D6006E' : 'rgba(255,255,255,0.7)',
              color: holidayVibe === vibe.id ? 'white' : '#666',
              backdropFilter: 'blur(10px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 6px rgba(0,0,0,0.05)'
            }}
          >
            <SFIcon type={vibe.icon} className="w-4 h-4" color={holidayVibe === vibe.id ? 'white' : '#666'} />
            {vibe.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[
          { destination: 'Marrakech, Morocco', image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80', nights: '7 nights in Feb', stars: '4-star hotel', price: '£300' },
          { destination: 'Santorini, Greece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&q=80', nights: '5 nights in Mar', stars: '5-star hotel', price: '£450' },
          { destination: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', nights: '6 nights in Apr', stars: '5-star hotel', price: '£580' }
        ].map((trip, idx) => (
          <div key={idx} className="flex-shrink-0 flex gap-4 rounded-[20px] p-3" style={{
            width: '85%',
            scrollSnapAlign: 'start',
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.06)'
          }}>
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-[16px] font-bold text-gray-900 mb-1">{trip.destination}</h3>
              <div className="flex items-center gap-1 text-[12px] text-gray-500 mb-0.5">
                <SFIcon type="calendar" className="w-3.5 h-3.5" color="#6b7280" />
                <span>{trip.nights}</span>
              </div>
              <div className="flex items-center gap-1 text-[12px] text-gray-500 mb-0.5">
                <SFIcon type="bed.double" className="w-3.5 h-3.5" color="#6b7280" />
                <span>{trip.stars}</span>
              </div>
              <div className="flex items-center gap-1 text-[12px] text-gray-500 mb-2">
                <SFIcon type="airplane" className="w-3.5 h-3.5" color="#6b7280" />
                <span>Flights included</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-gray-400">from </span>
                <span className="text-[18px] font-bold text-[#D6006E]">{trip.price}</span>
                <span className="text-[11px] text-gray-500">pp</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h2 className="text-[20px] font-bold text-gray-900 mb-1">Bigger level, bigger rewards</h2>
      <p className="text-[13px] text-gray-500 mb-4">Sign up for free to our loyalty program</p>

      <div className="rounded-[24px] overflow-hidden" style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 8px 24px rgba(0,0,0,0.08)'
      }}>
        <div className="p-4" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
          <div className="flex items-center gap-2">
            <span className="text-[20px] font-black text-white italic lastminute-sans">PRO</span>
            <span className="text-[12px] text-gray-300">PERKS + REWARDS + OFFERS</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <SFIcon type="percent" className="w-5 h-5 mt-0.5" color="#D6006E" />
            <div>
              <p className="text-[14px] font-semibold text-gray-900">Up to 15% off</p>
              <p className="text-[12px] text-gray-500">On holidays and experiences</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <SFIcon type="gift" className="w-5 h-5 mt-0.5" color="#D6006E" />
            <div>
              <p className="text-[14px] font-semibold text-gray-900">Extra perks & benefits</p>
              <p className="text-[12px] text-gray-500">Flight assistance and more</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <SFIcon type="chart.line.uptrend" className="w-5 h-5 mt-0.5" color="#D6006E" />
            <div>
              <p className="text-[14px] font-semibold text-gray-900">Grow in the program</p>
              <p className="text-[12px] text-gray-500">Complete trips to level up</p>
            </div>
          </div>

          <button className="text-[14px] font-semibold text-[#D6006E] mt-2">Learn more about PRO</button>

          <button className="w-full py-3 rounded-xl text-[15px] font-semibold text-white mt-2" style={{ background: '#D6006E' }}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  </div>
);
