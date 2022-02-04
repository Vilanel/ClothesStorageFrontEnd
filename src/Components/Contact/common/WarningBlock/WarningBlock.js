import './WarningBlock.scss';

const WarningBlock = (props) => {
  return (
      <div className='warningBlock'>
        {props.text}
      </div> 
  );
}

export default WarningBlock;