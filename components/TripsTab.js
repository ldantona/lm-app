// Trips Tab Content
const TripsContent = ({ trips, activeFilter, setActiveFilter }) => {
  const mainTrip = trips[0];
  const otherTrips = trips.slice(1);

  return (
    <div className="relative z-10 px-5 pt-1 flex-1 overflow-y-auto" style={{ paddingBottom: '120px' }}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[34px] font-bold tracking-tight text-gray-900">My trips</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full" style={{
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 8px rgba(0,0,0,0.08)'
        }}>
          <span className="text-[18px] font-semibold text-gray-600">?</span>
        </button>
      </div>

      <div className="flex gap-2 mb-6 p-1.5 rounded-2xl" style={{
        background: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 2px 12px rgba(0,0,0,0.06)'
      }}>
        {['upcoming', 'past'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="flex-1 py-3 px-6 rounded-xl text-[15px] font-semibold transition-all duration-300"
            style={{
              background: activeFilter === filter ? 'rgba(255,255,255,0.9)' : 'transparent',
              color: activeFilter === filter ? '#D6006E' : '#666',
              boxShadow: activeFilter === filter ? '0 4px 16px rgba(214,0,110,0.15), inset 0 1px 1px rgba(255,255,255,1)' : 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="rounded-[28px] overflow-hidden mb-6" style={{
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)'
      }}>
        <div className="relative h-44 overflow-hidden">
          <img src={mainTrip.image} alt={mainTrip.destination} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%)' }} />
          <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{
            background: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[13px] font-semibold text-emerald-600">Confirmed</span>
          </div>
        </div>

        <div className="p-5">
          <h2 className="text-[24px] font-bold text-gray-900 mb-1">{mainTrip.destination}</h2>
          <div className="flex items-center gap-4 text-gray-500 mb-4">
            <div className="flex items-center gap-1.5">
              <SFIcon type="calendar" className="w-4 h-4" color="#6b7280" />
              <span className="text-[14px]">{mainTrip.dates}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <SFIcon type="person" className="w-4 h-4" color="#6b7280" />
              <span className="text-[14px]">{mainTrip.travelers}</span>
            </div>
          </div>

          <div className="flex gap-3 mb-5">
            {[
              { icon: 'list', label: 'Trip details' },
              { icon: 'plus', label: 'Extras' },
              { icon: 'check', label: 'Check-in' }
            ].map((action, idx) => (
              <button key={idx} className="flex-1 flex flex-col items-center gap-2 py-3 rounded-2xl transition-all duration-200 active:scale-95" style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.05)'
              }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  {action.icon === 'list' && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>}
                  {action.icon === 'plus' && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>}
                  {action.icon === 'check' && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>}
                </div>
                <span className="text-[12px] font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[18px] font-bold text-gray-900">Your trip is in {mainTrip.daysUntil} days</span>
              <SFIcon type="airplane" className="w-4 h-4" color="#374151" />
            </div>
            <p className="text-[13px] text-gray-500 mb-2">Get ready with our travel checklist</p>

            <div className="h-2.5 rounded-full overflow-hidden mb-2" style={{ background: 'rgba(0,0,0,0.06)' }}>
              <div className="h-full rounded-full transition-all duration-500" style={{
                width: `${mainTrip.checklist.completed}%`,
                background: 'linear-gradient(90deg, #D6006E 0%, #FF4081 100%)',
                boxShadow: '0 0 12px rgba(214,0,110,0.4)'
              }} />
            </div>
            <p className="text-[12px] text-gray-500">
              <span className="text-emerald-600 font-semibold">{mainTrip.checklist.completed}% completed</span> – You're on track!
            </p>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 p-3 rounded-2xl" style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)' }}>
                  <SFIcon type="doc" className="w-4 h-4" color="white" />
                </div>
                <span className="text-[14px] font-bold text-gray-400">{mainTrip.documents.completed}/{mainTrip.documents.total}</span>
              </div>
              <h4 className="text-[14px] font-semibold text-gray-900 mb-0.5">Travel documents</h4>
              <p className="text-[11px] text-gray-500">Passport, visa, vaccination</p>
            </div>

            <div className="flex-1 p-3 rounded-2xl" style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 2px 8px rgba(0,0,0,0.04)'
            }}>
              <div className="flex items-center justify-between mb-2">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-[14px] font-semibold text-gray-900 mb-0.5">Before you fly</h4>
              <p className="text-[11px] text-gray-500">Luggage, seats, insurance</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-[20px] font-bold text-gray-900 mb-4">Other upcoming trips</h3>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {otherTrips.map((trip) => (
          <div key={trip.id} className="flex-shrink-0 w-52 rounded-[24px] overflow-hidden" style={{
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 8px 24px rgba(0,0,0,0.08)'
          }}>
            <div className="relative h-28 overflow-hidden">
              <img src={trip.image} alt={trip.destination} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full" style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)'
              }}>
                <div className="w-3 h-3 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[10px] font-semibold text-emerald-600">Confirmed</span>
              </div>
            </div>
            <div className="p-3">
              <h4 className="text-[16px] font-bold text-gray-900 mb-1">{trip.destination}</h4>
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <SFIcon type="calendar" className="w-3 h-3" color="#6b7280" />
                  <span className="text-[11px]">{trip.dates}</span>
                </div>
                <div className="flex items-center gap-1">
                  <SFIcon type="person" className="w-3 h-3" color="#6b7280" />
                  <span className="text-[11px]">{trip.travelers}</span>
                </div>
              </div>
              <button className="w-full py-2 rounded-xl text-[13px] font-semibold transition-all duration-200 active:scale-95" style={{
                background: 'rgba(255,255,255,0.8)',
                color: '#333',
                boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.9), 0 2px 6px rgba(0,0,0,0.06)'
              }}>
                View trip
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
