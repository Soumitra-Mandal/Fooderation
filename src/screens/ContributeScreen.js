import '../screenstyles/ContributeStyle.css';
import image from '../images/food.jpg';
import f1 from '../images/f1.jpg';
import f2 from '../images/f2.jpg';
import f3 from '../images/f3.jpg';
import f4 from '../images/f4.jpg';
import f5 from '../images/f5.jpg';
import f6 from '../images/f6.jpg';
import f7 from '../images/f7.jpg';
import f8 from '../images/f8.jpg';
import f9 from '../images/f9.jpg';
import f10 from '../images/f10.jpg';
import f11 from '../images/f11.jpg';


function Contribute() {
    return (
    <div id = 'Contri'>
 <h2 id='contribute'>Contribute to our recipe database</h2>
    <form id='form'>
<input type='text' id='name' name='name' placeholder='Name' autoComplete='off'/>
<input type='email' id='email' name='email' placeholder='Email' autoComplete='off'/>
<input type = 'text' id = 'dish' name = 'dish' placeholder = "Name of Dish" autoComplete='off'/>
<label htmlFor = 'file'> Upload Recipe PDF</label>
<input type = 'file' id = 'file' name='file'/>
<input type = 'submit' id = 'submit' name = 'submit'/>
  </form>
  <img id='food1' src={image} alt="Icon"/>

<div className='imgrow'>
  <div className = 'imgcol'>
  <img id='f1' src={f1} alt="f1"/>
  <img id='f2' src={f2} alt="f2"/> 
  <img id='f3' src={f3} alt="f3"/>
  </div>
  <div className = 'imgcol'>
  <img id='f4' src={f4} alt="f4"/>
  <img id='f5' src={f5} alt="f5"/>
  <img id='f6' src={f6} alt="f6"/>
  <img id='f11' src={f11} alt="f11"/>

  </div>
  <div className = 'imgcol'>
  <img id='f7' src={f7} alt="f7"/>
  <img id='f8' src={f8} alt="f8"/>
  <img id='f9' src={f9} alt="f9"/>
  <img id='f10' src={f10} alt="f10"/>
</div>
  </div>
</div>
  
      );
  }

export default Contribute;