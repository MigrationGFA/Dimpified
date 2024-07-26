// import node module libraries
import React from 'react';
import { useOutlet } from 'react-router-dom';

// import context provider
import ChatProvider from '../../context/providers/ChatProvider';
import StudentProfileLayout from '../../UserDashboard/student/StudentProfileLayout';

const ChatLayout = (props) => {
	const outlet = useOutlet();
	const { children, className } = props;

	
	return (
		<StudentProfileLayout>
		
			<section>
				
				<div>
					{children}
					<ChatProvider>{outlet}</ChatProvider>
				</div>
			</section>
		
		</StudentProfileLayout>
	);
};
export default ChatLayout;
