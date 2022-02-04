import React,{useState,useEffect} from 'react';
import Button2 from '../../common/Button2/Button2.js';

const DeleteCategory = (props) => {
    let tds = props.categories.map((el,i)=>{
        return (
            <tr>
                <td>{i+1}</td>
                <td>{el.name}</td>
                <td className="admin-panel__flex-box">
                    <Button2 text='DELETE' 
                             function={()=>{
                                    props.deleteCategory(el.name);
                             }} 
                             disabled={false}/>
                </td>
            </tr>
        )
    });
    return (
        <div className='admin-panel__delete-category'>
            <table>
                <tr>
                    <th>№</th>
                    <th>Category</th>
                    <th>Delete</th>
                </tr>
                {tds}
            </table>
        </div>
    );
}

export default DeleteCategory;