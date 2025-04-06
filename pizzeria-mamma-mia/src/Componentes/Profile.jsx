import React from 'react'

export const Profile = () => {
    return (
        <>
            <div className='container'>
                <div>Profile</div>
                <input type="text" disabled value="correo@gmail.com" />
                <button type="button">Cerrar session</button>
            </div>
        </>
    )
}
