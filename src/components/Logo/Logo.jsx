import contactLogo from 'images/contacts_48dp.png';
import { Wrapper, H1 } from './Logo.styled';

export const Logo = () => {
    return (
        <Wrapper to='/'>
            <img src={contactLogo} alt='contact logo' width='40px' height='40px'/>
            <H1>Contacts</H1>
        </Wrapper>
    )
}