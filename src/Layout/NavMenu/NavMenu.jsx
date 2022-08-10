import { MenuItems, Menu, P, StyledLink, Item } from "./NavMenu.styled";
import { Logo } from "components/Logo/Logo";
import { AddNewContactButton } from "components/AddNewContactButton/AddNewContactButton";
import { SvgContact, SvgTrash } from "images/Svg";
import { useSelector } from "react-redux";

export const NavMenu = () => {

    const contactsAmount = useSelector(state => state.contacts);
    const noDeleted = contactsAmount.filter(item => item.isDeleted === false).length
    const isDeleted = contactsAmount.length - noDeleted;

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