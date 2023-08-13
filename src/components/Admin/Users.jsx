import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAdminUsers } from '../../redux/actions/admin';
import Loader from '../Layout/Loader';
const Users = () => {
    
    const dispatch=useDispatch();
    const {loading,users}=useSelector(state=>state.admin);
    useEffect(() => {
      dispatch(getAdminUsers());
    }, [dispatch])
    
  return (
    <section className='tableClass'>
     {
      loading===false ? <main>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Google ID</th>
              <th>Photo</th>
              <th>Role</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
          {users&&users.map((i)=>(
            
            <tr key={i._id}>
              <td>#{i._id}</td>
              <td>{i.googleId}</td>
              <td>
                <img src={i.photo} alt='User'/>
              </td>
              <td>{i.role}</td>
              <td>{i.createdAt.split("T")[0]}</td>
              
            </tr>
          ))}
          
          </tbody>
        </table>
      </main>:<Loader/>
     }
    </section>
  )
}

export default Users

