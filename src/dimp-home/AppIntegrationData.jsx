import { v4 as uuid } from 'uuid';



import Google from './images/google.png';
import Cloudinary from './images/cloudinary.png';
import Azure from './images/azure.png';
import Flutterwave from './images/flutterwave.png';
import Zoom from './images/zoom.png';
import Sendpulse from './images/sendpulse.png';

export const AppIntegrationData = [
	{
		id: uuid(),
		applogo: Cloudinary,
		appname: 'Cloudinary',
		content: 'Bring your files and cloud content together.'
	},
	{
		id: uuid(),
		applogo: Google,
		appname: 'Google',
		content: 'Full platform of marketing, sales, other service.'
	},
	{
		id: uuid(),
		applogo: Flutterwave,
		appname: 'Flutterwave',
		content: 'Integrates payments seamlessly...'
	},
	{
		id: uuid(),
		applogo: Azure,
		appname: 'Azure',
		content: 'Cloud storage made easier.'
	},
	{
		id: uuid(),
		applogo: Zoom,
		appname: 'Zoom',
		content: 'Schedule and organize video calls.'
	},
	{
		id: uuid(),
		applogo: Sendpulse,
		appname: 'SendPulse',
		content: 'Full platform of bulk email marketing.'
	}
];

export default AppIntegrationData;
