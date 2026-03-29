import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const AuthProvider = (
  // // destructure the store needed to render less code
  // { stores: { utilityStore } }:
  // { stores?: any }
  { children, extra }
) => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) return (
    <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", marginTop: "10%" }}>
      <div style={{ height: 600, width: 400, border: "1px solid rgba(33,33,33,0.4)", padding: "32px", borderRadius: "16px" }}>
        <div style={{ textAlign: "center" }}>
          <h2>Cherrytopframework Authentication 🍒🔒👨🏻‍💻</h2>
          <p style={{ color: "darkred" }}>⛔️ You must be logged in to view this resource.</p>
        </div>
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
        />
      </div>
    </div>
  )
  else return children || (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  )
}

export default AuthProvider;
