import { useEffect, useState } from 'react';
import { useSession } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const { logout } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await fetch('http://localhost:5000/api/auth/me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (!res.ok) throw new Error('No autorizado');
          const data = await res.json();
          console.log(data);
          setUser(data);
        } catch (error) {
          console.log('Error al obtener el perfil:', error);
        }
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className='container mt-5'>
      {user ? (
        <div className='card shadow-lg'>
          <div className='card-header bg-primary text-white text-center'>
            <h3>Perfil de Usuario</h3>
          </div>
          <div className='card-body'>
            <div className='d-flex flex-column align-items-center'>
              <img
                src='https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg'
                alt='User Avatar'
                className='rounded-circle border border-primary shadow mb-3'
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <h5 className='text-center'><strong>Email:</strong></h5>
              <p className='text-center'>{user.email}</p>
              <button onClick={handleLogout} className='btn btn-danger mt-3'>
                Cerrar sesión
              </button>
            </div>
            <hr />
          </div>
        </div>
      ) : (
        <div className='alert alert-info text-center'>
          <p><strong>Por favor, inicia sesión para ver tu perfil.</strong></p>
        </div>
      )}
    </div>
  );
};

export default Profile;
