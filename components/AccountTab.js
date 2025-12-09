// Account Tab Content
const AccountContent = () => (
  <div className="relative z-10 px-5 pt-1 flex-1 overflow-y-auto" style={{ paddingBottom: '120px' }}>
    <div className="flex flex-col items-center mb-6">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-3 ring-4 ring-white/50" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
        <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-[20px] font-bold text-gray-900">SpongeBob Roundpants</h2>
    </div>

    <div className="rounded-[20px] p-4 mb-6 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
    }}>
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full opacity-30" style={{ background: 'linear-gradient(135deg, #D6006E, #FF4081)' }} />
      <div className="relative z-10">
        <span className="text-[22px] font-black text-white italic lastminute-sans">PRO</span>
        <p className="text-[14px] text-gray-300 mt-1">
          Join our loyalty program <span className="font-bold text-white">for free</span> to enjoy exclusive travel perks.
        </p>
        <button className="mt-3 px-6 py-2 rounded-xl text-[14px] font-semibold text-white" style={{ background: '#D6006E' }}>
          Sign up
        </button>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-[18px] font-bold text-gray-900 mb-3">Preferences</h3>
      <div className="rounded-[20px] overflow-hidden" style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.06)'
      }}>
        {[
          { icon: 'email', label: 'Email & password' },
          { icon: 'person', label: 'Personal details' },
          { icon: 'people', label: 'Travel buddies' },
          { icon: 'globe', label: 'Language & country' }
        ].map((item, idx, arr) => (
          <button key={idx} className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors" style={{
            borderBottom: idx < arr.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}>
            <div className="flex items-center gap-3">
              <SFIcon type={item.icon} className="w-5 h-5" color="#4b5563" />
              <span className="text-[15px] text-gray-900">{item.label}</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-[18px] font-bold text-gray-900 mb-3">Support</h3>
      <div className="rounded-[20px] overflow-hidden" style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.06)'
      }}>
        <button className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <SFIcon type="help" className="w-5 h-5" color="#4b5563" />
            <span className="text-[15px] text-gray-900">Need help?</span>
          </div>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-[18px] font-bold text-gray-900 mb-3">Privacy & data</h3>
      <div className="rounded-[20px] overflow-hidden" style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.06)'
      }}>
        {[
          { icon: 'doc', label: 'General conditions' },
          { icon: 'bell', label: 'Notifications' },
          { icon: 'gear', label: 'Cookie settings' },
          { icon: 'lock', label: 'Privacy policy' }
        ].map((item, idx, arr) => (
          <button key={idx} className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors" style={{
            borderBottom: idx < arr.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}>
            <div className="flex items-center gap-3">
              <SFIcon type={item.icon} className="w-5 h-5" color="#4b5563" />
              <span className="text-[15px] text-gray-900">{item.label}</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <h3 className="text-[18px] font-bold text-gray-900 mb-3">Your app</h3>
      <div className="rounded-[20px] overflow-hidden" style={{
        background: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.9), 0 4px 16px rgba(0,0,0,0.06)'
      }}>
        {[
          { icon: 'widgets', label: 'Travel widgets' },
          { icon: 'chat', label: 'Give us feedback' },
          { icon: 'accessibility', label: 'Accessibility statement' }
        ].map((item, idx, arr) => (
          <button key={idx} className="w-full flex items-center justify-between p-4 active:bg-gray-50 transition-colors" style={{
            borderBottom: idx < arr.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}>
            <div className="flex items-center gap-3">
              <SFIcon type={item.icon} className="w-5 h-5" color="#4b5563" />
              <span className="text-[15px] text-gray-900">{item.label}</span>
            </div>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  </div>
);
