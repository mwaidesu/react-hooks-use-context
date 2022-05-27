import react from "react";
import { useState } from "react";

const UserContext = react.createContext();

// create a provider component

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  // const currentUser = {
  //   name : "Duane",
  //   interests : ["Coding","Biking", "Words ending in 'ing'"]
  // }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
