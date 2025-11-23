"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";  


export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Login error:", error);
        }
};


    const handleLogout = async () => {
        try{
            await firebaseSignOut();
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
       <main >
    
      <h1>Assignment 9 - Welcome to the Shopping List App</h1>
    

       { /* Display login/logout based on user state */}
      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : ( 
        <div>
          <p>Welcome, {user.displayName} and here is your image!</p>
          {user && user.photoURL && (
            <img src={user.photoURL} alt="User Avatar" width={100} height={100} />  
          )}

          
          <Link href="/week-9/shopping-list">Go to Shopping List</Link>
          
          <div>
            <button className=" "onClick={handleLogout}>Logout</button>
         </div>      
        </div>
      )}

      


      
     
    </main>
    )
            




















}