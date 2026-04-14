
// 'use client';
// // app/dashboard/page.js

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { supabase } from '../../lib/supabase';

// const stats = [
//   { label: 'Models', value: '3' },
//   { label: 'Datasets', value: '7' },
//   { label: 'Accuracy', value: '94%' },
//   { label: 'Training', value: '12h' },
// ];

// export default function DashboardPage() {
//   const router = useRouter();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function checkSession() {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (!session) {
//         router.replace('/login');
//       } else {
//         setUser(session.user);
//         setLoading(false);
//       }
//     }
//     checkSession();
//   }, [router]);

//   if (loading) {
//     return (
//       <main className="min-h-screen bg-black flex items-center justify-center font-mono">
//         <div className="text-white text-xs tracking-widest animate-pulse">LOADING...</div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-black text-white font-sans flex flex-col">
      
//       {/* --- TOP NAV: User and Logout side-by-side --- */}
//       <nav className="flex justify-between items-center p-6 border-b border-white/20">
//         <h1 className="font-bold tracking-tighter text-lg uppercase">Hub.v1</h1>
//         <div className="flex items-center gap-6">
//           <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tight">
//             User: {user?.email?.split('@')[0]}
//           </span>
//           <button 
//             onClick={async () => { await supabase.auth.signOut(); router.replace('/'); }}
//             className="text-[10px] font-bold border border-white px-3 py-1 hover:bg-white hover:text-black transition-colors uppercase"
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       <div className="flex-1 flex flex-col items-center justify-center px-6">
        
//         {/* --- CENTERED SENTENCE WITH HOVER --- */}
//         <div className="group cursor-default mb-16">
//           <h2 className="text-5xl md:text-8xl font-black text-center tracking-tighter leading-none transition-all duration-500 group-hover:italic group-hover:tracking-normal group-hover:text-blue-500">
//             HELLO LOVE, <br />
//             GOODBYE!
//           </h2>
//           <p className="text-center mt-4 text-xs font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
//             [ ACTION: INITIALIZING SESSION ]
//           </p>
//         </div>

//         {/* --- PLAIN STATS GRID --- */}
//         <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 border-t border-white/20">
//           {stats.map((s) => (
//             <div key={s.label} className="p-8 border-r border-b border-white/20 last:border-r-0">
//               <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-widest">{s.label}</p>
//               <p className="text-3xl font-light">{s.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* --- MINIMAL FOOTER --- */}
//       <footer className="p-6 text-center border-t border-white/10">
//         <p className="text-[10px] text-gray-700 font-mono tracking-[0.2em]">
//           DATA_ACCESS_GRANTED // SECURE_NODE_{user?.id?.substring(0, 4)}
//         </p>
//       </footer>
//     </main>
//   );
// }
'use client';
// app/dashboard/page.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.replace('/login');
      } else {
        setUser(session.user);
        setLoading(false);
      }
    }
    checkSession();
  }, [router]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center font-mono">
        <div className="text-white text-xs tracking-[0.3em] animate-pulse uppercase">Verifying</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col selection:bg-white selection:text-black">
      
      {/* --- TOP NAV --- */}
      <nav className="flex justify-between items-center p-8">
        <h1 className="font-bold tracking-tighter text-xl uppercase">ML.HUB</h1>
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            {user?.email}
          </span>
          <button 
            onClick={async () => { await supabase.auth.signOut(); router.replace('/'); }}
            className="text-[10px] font-bold border border-white/30 px-4 py-2 hover:border-white hover:bg-white hover:text-black transition-all duration-300 uppercase"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* --- CENTERED HERO --- */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="group cursor-crosshair text-center">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] transition-all duration-700 ease-in-out group-hover:italic group-hover:text-blue-500 group-hover:tracking-widest">
            HELLO LOVE, <br />
            GOODBYE!
          </h2>
          <div className="mt-8 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-700 mx-auto" />
          <p className="mt-4 text-[10px] font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-[0.5em]">
            End of Session
          </p>
        </div>
      </div>

      {/* --- MINIMAL FOOTER --- */}
      <footer className="p-8 flex justify-between items-end border-t border-white/5">
        <div className="text-[9px] font-mono text-gray-800 uppercase tracking-widest">
          © 2026 // ALL_RIGHTS_RESERVED
        </div>
        <div className="text-[9px] font-mono text-gray-800 uppercase tracking-widest">
          STATUS: ENCRYPTED
        </div>
      </footer>
    </main>
  );
}