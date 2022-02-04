import React,{useState,useEffect} from 'react';
import './AdminColor.scss';
import Button from '../../../../../common/Button/Button.js';

const AdminColor = (props) => {
    let [colors,setColors] = useState(props.colors);
    let [colorHexField,setColorHexField] = useState('#');
    let [colorNameField,setColorNameField] = useState('');

    let deleteColor = (el) => {
        let newColorsArr = [...colors];
        let deletedIndex;
        for(let elI in newColorsArr){
            if(newColorsArr[elI][1]===el){
                deletedIndex = elI;
            }
        }
        newColorsArr.splice(deletedIndex, 1);
        setColors(newColorsArr);
        props.updateProduct(props.id,{colors:newColorsArr});
    }
    let addColor = () => {
        let newColorsArr = [...colors];
        newColorsArr.push([colorHexField,colorNameField]);
        setColors(newColorsArr);
        props.updateProduct(props.id,{colors:newColorsArr});
    }

    let onColorHexFieldChange=(e)=>{
        let text = e.currentTarget.value;
        setColorHexField(text);
    }
    let onColorNameFieldChange=(e)=>{
        let text = e.currentTarget.value;
        setColorNameField(text);
    }
    
    useEffect(()=>{
        setColors(props.colors);
    },[props.colors]);

    let colorButtons = colors.map((el)=>{
        let buttonColor = {backgroundColor:el[0]};
        return (<span>
            <button className='admin-color-button'
                    style={buttonColor}
                    onClick={()=>{}}>
            </button>
            {el[1]}
            <button className='admin-color-button-delete'
                    onClick={()=>{deleteColor(el[1])}}>
                    DELETE
            </button>
            <br/>
        </span>);
    })
    return (
        <div>
            COLORS:<br/>
            {colorButtons}<br/>
            COLOR HEX:<br/>
            <input value={colorHexField} onChange={onColorHexFieldChange}/><br/><br/>
            COLOR NAME:<br/>
            <input value={colorNameField} onChange={onColorNameFieldChange}/><br/><br/>
            <Button text='ADD COLOR' function={addColor} disabled={false}/>
        </div>
    );
}

export default AdminColor;