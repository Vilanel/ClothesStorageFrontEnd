import React,{useState,useEffect} from 'react';
import Input from '../../Contact/common/Input/Input.js';
import Button from '../../common/Button/Button.js';

const AddCategory = (props) => {
    let [categoryName,setCategoryName] = useState('');
    let [categoryWasAddedBlockShow,setCategoryWasAddedBlockShow] = useState(false);
    let [categoryInfo,setCategoryInfo] = useState(props.categoryInfo);

    useEffect(()=>{
        setCategoryInfo(props.categoryInfo);
    },[props.categoryInfo]);

    const onCategoryNameChange = (e) => {
        setCategoryWasAddedBlockShow(false);
        let text = e.currentTarget.value;
        setCategoryName(text);
    }
    const addCategory = () => {
        props.addCategory(categoryName);
        setCategoryInfo(props.categoryInfo);
        console.log(categoryInfo)
        if(categoryInfo){
            setCategoryWasAddedBlockShow(true);
        }
    }

    return (
        <div className='admin-panel__add-category'>
            <Input labelText='Write category name:'
                   maxlength='40'
                   type='text'
                   name={'add-category'}
                   value={categoryName}
                   borderColor={'black'}
                   onChangeFunction={onCategoryNameChange}
                   onBlurFunction = {()=>{}}/>
            <br/>
            {categoryName.length>1?<Button text='ADD CATEGORY' function={addCategory} disabled={false}/>:<></>}
            <br/>
            {/* {categoryWasAddedBlockShow?<>{categoryInfo}</>:<></>}  */}
        </div>
    );
}

export default AddCategory;