import React,{useState,useEffect} from 'react';
import Button2 from '../../common/Button2/Button2.js';

const UsersTable = (props) => {
    let tds = props.users.map((el,i)=>{
        return (
            <tr>
                <td>{i+1}</td>
                <td>{el.userName}</td>
                <td>{el.email}</td>
                <td>{el.mobileNumber}</td>
                <td>{el.roles.join(' ')}</td>
                <td className="admin-panel__flex-box">
                    <Button2 text='DELETE' 
                             function={()=>{
                                 props.deleteUser(props.token,el.email)
                                }} 
                             disabled={false}/>
                </td>
            </tr>
        )
    });
    return (
        <div className="admin-panel__get-users">
            <table>
                <tr>
                    <th>№</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Roles</th>
                    <th>Delete</th>
                </tr>
                {tds}
            </table>
        </div>
    );
}

export default UsersTable;