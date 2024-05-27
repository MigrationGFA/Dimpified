// import node module libraries
import React, { useState } from 'react';
import { useOutlet } from 'react-router-dom';

// import sub components
import NavbarVertical from "../../Layout/navbars/NavbarVertical";
import HeaderDefault from "../../Layout/navbars/HeaderDefault";

// import context provider
import ChatProvider from '../../context/providers/ChatProvider';

const ChatLayout = (props) => {
	const outlet = useOutlet();
	const { children, className, overflowHidden } = props;
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	return (
		<div
			id="db-wrapper"
			className={`${overflowHidden ? 'chat-layout' : ''} ${
				showMenu ? '' : 'toggled'
			}`}
		>
			<div className="navbar-vertical navbar">
				<NavbarVertical
					showMenu={showMenu}
					onClick={(value) => setShowMenu(value)}
				/>
			</div>
			<section id="page-content">
				<div className="header">
					<HeaderDefault
						data={{
							showMenu: showMenu,
							SidebarToggleMenu: ToggleMenu
						}}
					/>
				</div>
				<div className={`container-fluid ${className ? className : 'p-4'}`}>
					{children}
					<ChatProvider>{outlet}</ChatProvider>
				</div>
			</section>
		</div>
	);
};
export default ChatLayout;
