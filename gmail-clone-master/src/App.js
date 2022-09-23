import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import EmailList from './pages/EmailList';
import Mail from './Mail';
import Sendmail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './firebase';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);

 

  const dispatch = useDispatch();

  useEffect(()=>{

      auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
          
          console.log('any' , firebaseUser)
          //logined idit
          
          dispatch(login({
            
            displayName: firebaseUser.displayName,
            email : firebaseUser.email ,
            photoUrl : firebaseUser.photoURL
            
          }))

        }
      })

  },[auth])


  return (
    <Router>
      {!user ?  <Login /> :
      
        <div className="app">
          <Header/>

                <div className='app__body'>
                    <Sidebar />
                  <Routes>

                    <Route path='/mail' element={<Mail />} />
                    <Route path='/' element={ <EmailList />} />


                  </Routes>
                
                </div>
                
              {sendMessageIsOpen && <Sendmail />}
              

          </div>
       }
    </Router>
  );
}

export default App;
