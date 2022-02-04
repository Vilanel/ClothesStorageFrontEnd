const Input = (props) => {
    let inputStyle = {
        border:'1px solid',
        borderColor:props.borderColor,
        borderRadius:'3px',
    }
    return (
        <div>
          <label for='userName'>{props.labelText}</label><br/>
          <input  style={inputStyle}
                  autocomplete='off'
                  maxlength={props.maxlength}
                  type={props.type} 
                  id={props.name}
                  name={props.name}
                  value={props.value}
                  onChange={props.onChangeFunction}
                  onBlur={props.onBlurFunction}
                  /><br/>
        </div> 
    );
}

export default Input;
