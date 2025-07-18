import React, { useState } from 'react';
import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from 'firebase/auth';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [backendData, setBackendData] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth,googleProvider);
      const token = await result.user.getIdToken();
      console.log("Firebase ID Token:", token);

    const res = await fetch("https://backend-fb-wk52.onrender.com/api/protected", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: token,
  },
});


      if (!res.ok) throw new Error("Backend error: " + res.statusText);

      const data = await res.json();
      setBackendData(data);
      setUser(result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: 20,justifyContent:'center',display:'flex',flexDirection:'column',alignItems:'center', }}>
      <h1>Firebase + Render Backend Login</h1>
      {!user ? (
        <button onClick={handleLogin}
        style={{padding:10}}>Sign in with Google</button>
      ) : (
        <div>
          <h2>Welcome, {user.displayName}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="user" width="100" />
          {/* <h3>Backend Response:</h3> */}
          {/* <pre>{JSON.stringify(backendData, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
}

export default App;
