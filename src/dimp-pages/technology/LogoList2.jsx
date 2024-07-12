import { v4 as uuid } from 'uuid';

// import media files
import USCouncil from './images/us-council.png';
import LagosState from './images/lagos.png'
import DCDT from './images/dcdt.png';
import Ogun from './images/ogun.png';
import CIPME from './images/cipme.png';
import Kaduna from './images/kaduna.png';

const LogoList2 = [
	{
		id: uuid(),
		logoimage: USCouncil,
	},
	{
		id: uuid(),
		logoimage: LagosState,
	},
	{
		id: uuid(),
		logoimage: DCDT,
	},
	{
		id: uuid(),
		logoimage: Ogun,
	},
	{
		id: uuid(),
		logoimage: CIPME,
	},
	{
		id: uuid(),
		logoimage: Kaduna,
	},
];

export default LogoList2;
