import '../screenstyles/PremiumStyle.css';
import Card from  '../components/Card.js';

function Premium() {
    return (
    <div id='pre'>
    <h2 id="Premium">Buy Premium</h2>
    <p id='offer'>Do you want to get access to more of our recipes and want your own delicious recipes 
    to feature in the top food magazines in the world? Hurry up and sign up for premium membership!</p>
<Card id='c1' price='$2.99' icons = {[false, false, false, false]}/>
<Card id='c2' price='$5.99' icons = {[true, false, false, false]}/>
<Card id='c3' price='$10.99' icons = {[true, true, false, false]}/>
<Card id='c4' price='$20.99' icons = {[true, true, true, true]}/>
    </div>
    );
  }

export default Premium;