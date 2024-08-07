import { v4 as uuid } from 'uuid';

// import media files
import Wema from './images/wema.png';
import Microsoft from './images/microsoft.png'
import Providus from './images/providus.png';
import Mtn from './images/mtn.png';
import Google from './images/google.png';
import Sterling from './images/sterling.png';

const LogoList2 = [
	{
		id: uuid(),
		logoimage: Wema,
	},
	{
		id: uuid(),
		logoimage: Microsoft,
	},
	{
		id: uuid(),
		logoimage: Providus,
	},
	{
		id: uuid(),
		logoimage: Mtn,
	},
	{
		id: uuid(),
		logoimage: Google,
	},
	{
		id: uuid(),
		logoimage: Sterling,
	},
];

export default LogoList2;
