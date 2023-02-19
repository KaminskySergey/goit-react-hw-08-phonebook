// import { nanoid } from 'nanoid'

// import { ColorRing } from  'react-loader-spinner'
// import  ContactForm  from "./ContactForm/ContactForm"
// import  {ContactList}   from "./ContactList/ContactList"
// import  {Filter}  from "./Filter/Filter"



import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
// import { filterActions } from 'redux/Filter/filterSlice'
// import { contactsAddActions, contactsDeleteActions } from 'redux/Contacts/contactsSlice'
import { getContactsThunk } from 'redux/Contacts/contacts.thunk'
// import { selectedContacts, selectedError, selectedIsLoading, selectedSearchInput } from 'redux/Contacts/contacts.selectors'
// import { selectedFilter } from 'redux/Filter/filter.selectors'
import Layout from 'pages/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyContacts from './MyContacts/MyContacts'
import JoinPage from "./JoinPage/JoinPage"
import LoginPage from "./LoginPage/LoginPage"
import { refresh } from "redux/auth/auth.operations"
import { selectedIsRefreshUser } from "redux/auth/auth.selectors"
import Home from "./Home/Home"
import { RestrictedRoute } from "./RestrictedRoute"
import { PrivateRoute } from "./PrivateRoute"




const  App = () => {
  const dispatch = useDispatch()
  const isRefresh = useSelector(selectedIsRefreshUser)
  console.log(isRefresh, 'isRefresh')
  
  
  useEffect(() => {
    dispatch(getContactsThunk())
  }, [dispatch])
  
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])

    return (
      <>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Layout>
        {!isRefresh &&
        <Routes>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<RestrictedRoute component={JoinPage} redirectTo='/phonebook'/> } />
        <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo='/phonebook'/> } />
        <Route path='/phonebook' element={<PrivateRoute component={MyContacts} redirectTo='/login'/> } />
        </Routes>
        }
      </Layout>
      </BrowserRouter>
      </>
    )
};

export default App;










































// const  App = () => {
//   const dispatch = useDispatch()
//   // const contacts = useSelector(selectedContacts)
//   // const filter = useSelector(selectedFilter)
//   const isLoading = useSelector(selectedIsLoading)
//   const error = useSelector(selectedError)
  
  
  
//   useEffect(() => {
//     dispatch(getContactsThunk())
//   }, [dispatch])

//   // const addNameForm = (data) => {
//   //   console.log(data);
//   //       const filterByName = contacts.some(el => el.name === data.name)
//   //       if(filterByName){
//   //             alert(`${data.name} is already in contacts`);
//   //           }
    
//   //       else{
//   //         const itemName = {
//   //           id: nanoid(),
//   //           ...data,
            
//   //         }
          
//   //         dispatch(addContactsThunk(itemName))
//   //         console.log(itemName, '4')
//   //       }
//   //   }
  
// //     const handleFilter = (e) => {
// //       console.log(e.target.value)
// //       dispatch(filterActions(e.target.value))
// // }
    
//     // const handleSearchInput = useMemo(() => {
//     //   return contacts.filter((contact) => 
//     //   contact.name.toLowerCase().includes(filter.toLowerCase()))
//     // }, [contacts, filter])

    
// //     const handleDeleteContact = (contactId) => {
// //   dispatch(deleteConactsThunk(contactId))
  
// // }


//     return (
//       <>
//       <Box as="section" display="flex" justifyContent="center" flexDirection="column" alignItems="center" border='2px solid black' width="50%" borderRadius="10px" p={16} backgroundColor='#609'>
//       <h1>Name</h1>
//       {error && <Box p={3} pt={5}>{error}</Box>}
//       <ContactForm  />
//       <h2>Contacts</h2>
//       {isLoading 
//       && 
//       <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}} wrapperClass="blocks-wrapper" colors={['#1100ff', '#1100ff', '#1100ff', '#e1ff00', '#e1ff00']}/>
//       }
//       <Filter/>
//       <ContactList />
//       </Box>
//       <Layout>
//         <Routes>
//            <Route />
//         </Routes>
//       </Layout>
//       </>
//     )
// };

// export default App;