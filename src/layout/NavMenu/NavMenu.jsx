import { MenuItems, Menu, P, StyledLink, Item } from "./NavMenu.styled";
import { Logo } from "components/Logo/Logo";
import { AddNewContactButton } from "components/AddNewContactButton/AddNewContactButton";
import { SvgContact, SvgTrash } from "images/Svg";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts";

export const NavMenu = () => {

    const contactsAmount = useSelector(getContacts);                  // get contacts list from state
    const noDeleted = contactsAmount.filter(item => item.isDeleted === false).length;   // calculate contacts
    const isDeleted = contactsAmount.length - noDeleted;                                // calculate deleted contacts

    return (
        <Menu>
            <Logo />
            <MenuItems>   
                <AddNewContactButton />
                <li>    
                    <StyledLink to='/'>
                        <SvgContact />
                        <Item><P>Contacts </P><span>{noDeleted}</span></Item>
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/trash'>
                        <SvgTrash />
                        <Item><P>Trash</P><span>{isDeleted}</span></Item>
                    </StyledLink>
                </li>
            </MenuItems>
        </Menu>
    )
}