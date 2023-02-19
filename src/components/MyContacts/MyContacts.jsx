import  Box  from "components/Box/Box"
import  ContactForm  from "components/ContactForm/ContactForm"
import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react"
import { ColorRing } from "react-loader-spinner"
import { useDispatch, useSelector } from "react-redux"
import { selectedIsLoading, selectedError } from "redux/Contacts/contacts.selectors"
import { getContactsThunk } from "redux/Contacts/contacts.thunk"

const MyContacts = () => {
    const isLoading = useSelector(selectedIsLoading)
    const error = useSelector(selectedError)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getContactsThunk())
    }, [dispatch])
    return (
        <>
        <Box display="flex" justifyContent="center" width="650px" flexDirection="column" alignItems="center" border='2px solid black'  borderRadius="10px" p={16} backgroundColor='rgba(0,0,0,0.7)'>
      <h1 style={{color: 'gold'}}>Name</h1>
      {error && <Box p={3} pt={5}>{error}</Box>}
      <ContactForm  />
      <h2 style={{color: 'gold'}}>Contacts</h2>
      {isLoading 
      && 
      <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#1100ff', '#1100ff', '#1100ff', '#e1ff00', '#e1ff00']}/>
      }
      <Filter/>
      <ContactList />
      </Box>
        </>
    )
}

export default MyContacts;