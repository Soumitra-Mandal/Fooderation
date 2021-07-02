import '../screenstyles/ContributeStyle.css';
import image from './food.jpg';

function Contribute() {
    return (
    <div id = 'Contri'>
 <h2 id='contribute'>Contribute to our recipe database!</h2>
    <form id='form'>
<input type='text' id='name' name='name' placeholder='Name' autoComplete='false'/>
<input type='email' id='email' name='email' placeholder='Email' autoComplete='false'/>
<input type = 'text' id = 'dish' name = 'dish' placeholder = "Name of Dish" autoComplete='false'/>
<label htmlFor = 'file'> Upload Recipe PDF</label>
<input type = 'file' id = 'file' name='file'/>
<input type = 'submit' id = 'submit' name = 'submit'/>
  </form>
  <img id='food1' src={image} alt="Icon"/>
    </div>
      );
  }

export default Contribute;