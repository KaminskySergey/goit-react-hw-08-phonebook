
import {ContactItem, ContactText, ContactButton} from './ContactList.styled'
import Box from 'components/Box/Box'
import { useDispatch, useSelector } from 'react-redux';
import { deleteConactsThunk } from 'redux/Contacts/contacts.thunk';
import { selectedSearchInput } from 'redux/Contacts/contacts.selectors';


export const ContactList = ({itemName}) => {
    const dispatch = useDispatch()
    const handleSearchInput = useSelector(selectedSearchInput)
    
    const handleDeleteContact = (contactId) => {
        dispatch(deleteConactsThunk(contactId))
        
      }
    // console.log(itemName)
    return (
        <>
        <Box as="ul" p={0} m={0}>
        {handleSearchInput.map(el => (
            <ContactItem key={el.id}>
                <ContactText>{el.name}: {el.number}</ContactText>
                <ContactButton type="button" onClick={() => handleDeleteContact(el.id)}>Delete</ContactButton>
            </ContactItem>
            
        ))}
        </Box>
        
        </>
    )
}

