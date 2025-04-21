import { createContext, useState, useContext } from "react";

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null); 

  const login = ({ user, pass }) => {
    setSession({ user, pass, Token: true });
  };

  const logout = () => {
    // setSession(null);
    setSession({ user:'', pass:'', Token: false });
  };

  return (
    <SessionContext.Provider value={{ session, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};
