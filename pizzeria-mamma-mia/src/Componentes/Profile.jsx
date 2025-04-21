import { useSession } from "../context/SessionContext";

export const Profile = () => {
  const { session, logout } = useSession();

  if (!session?.Token) {
    return <p>No hay sesión activa</p>;
  }

  return (
    <div className="container">
      <h2>Perfil de Usuario</h2>
      <p>Usuario: {session.user}</p>
      <p>Contraseña: {session.pass}</p>
      <p>Token activo: {session.Token ? "Sí" : "No"}</p>

      <button className="btn btn-danger" onClick={logout}>
        Cerrar sesión
      </button>
    </div>
  );
};
