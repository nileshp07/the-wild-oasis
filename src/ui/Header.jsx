import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
	background-color: var(--color-grey-0);
	padding: 1rem 4.8rem;
	border: 1px solid var(--color-grey-100);

	display: flex;
	align-items: center;
	gap: 2.4rem;
	justify-content: flex-end;
`;

function Header() {
	return (
		<StyledHeader>
			<UserAvatar />
			<HeaderMenu />
		</StyledHeader>
	);
}

export default Header;
