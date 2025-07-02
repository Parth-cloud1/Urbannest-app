import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [user, setUser] = useState<any>(null)

  const sendOtp = async () => {
    const { error } = await supabase.auth.signInWithOtp({ phone })
    if (error) alert(error.message)
    else setStep('otp')
  }

  const verifyOtp = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: 'sms'
    })
    if (error) alert(error.message)
    else setUser(data.user)
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Phone OTP Login</h2>
      {user ? (
        <p>✅ Logged in as: {user.phone}</p>
      ) : step === 'phone' ? (
        <>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91..." />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input value={otp} onChange={e => setOtp(e.target.value)} placeholder="Enter OTP" />
          <button onClick={verifyOtp}>Verify</button>
        </>
      )}
    </div>
  )
}

export default App
