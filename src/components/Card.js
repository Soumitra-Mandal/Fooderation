import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
const Card = (props)=>{
    return (
        <div className = "Card" id = {props.id} style={style}>
            <h4 style={{color:'rgb(61,72,73)', fontSize:"20px"}}>{props.price}/month</h4>
            <ul style={{
                position:'relative',
                left:-40,
                listStyle:'none',
                display:'flex,',
            }}>
                <li style={{ padding:5, fontSize:14}}>{props.icons[0]?<CheckIcon color = 'primary' fontSize='small' style={{verticalAlign:'-4px'}}/>:<ClearIcon color="secondary" fontSize='small' style={{verticalAlign:'-4px'}}/>}One </li>
                <li style={{ padding:5, fontSize:14}}>{props.icons[1]?<CheckIcon color = 'primary' fontSize='small' style={{verticalAlign:'-4px'}}/>:<ClearIcon color="secondary" fontSize='small' style={{verticalAlign:'-4px'}}/>}Two</li>
                <li style={{ padding:5, fontSize:14}}>{props.icons[2]?<CheckIcon color = 'primary' fontSize='small' style={{verticalAlign:'-4px'}}/>:<ClearIcon color="secondary" fontSize='small' style={{verticalAlign:'-4px'}}/>}Three</li>
                <li style={{ padding:5, fontSize:14}}>{props.icons[3]?<CheckIcon color = 'primary' fontSize='small' style={{verticalAlign:'-4px'}}/>:<ClearIcon color="secondary" fontSize='small' style={{verticalAlign:'-4px'}}/>}Four</li>
            </ul>
            <div id="premiumButton" style = {{
                backgroundColor:'#ff4f00',
                textAlign:'center',
                wordWrap:'normal',
                display:'inline-block',
                color:'white',
                padding:'5px 14px 5px 14px',
                margin:'0px 0px 15px 36px',
                borderRadius:'4px',
            }}><span>Buy</span></div>
        </div>
    );
}

const style = {
padding:"10px 20px 10px 30px",
fontFamily:"Open Sans",
borderRadius:5,
boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
width:140,
};

export default Card;