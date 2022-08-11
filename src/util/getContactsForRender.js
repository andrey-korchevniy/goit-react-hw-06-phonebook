// makes contacts list from state for 'contacts' or 'trash'

export const getContactsForRender = (contacts, filter, trash = false) => {
    let contactsForRender = [];

    if (contacts.length) {
        contactsForRender = contacts.filter(({ name, number, isDeleted }) =>
        (name.includes(filter) || number.includes(filter)) && isDeleted === trash)
    } 

    return contactsForRender;
}