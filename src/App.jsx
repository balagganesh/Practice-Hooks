import React from 'react'
import UseForm from './Components/UseForm'
import SurveyForm from './Components/SurveyForm'
import FormState from './Components/FormState'
import Watch from './Components/Watch'
import Reset from './Components/Reset'
import Parent from './Components/Form/Parent'
import OnFocusExampleForm from './Components/OnFocusExampleForm'
import Getvalue from './Components/Getvalue'
import SetFocus from './Components/SetFocus'
import Trigger from './Components/Trigger'
import Control from './Components/Control'
import { Controller } from 'react-hook-form'
import YUP from './Components/YUP'
import store from './Store/Store'
import { Provider } from 'react-redux'
import Registration from './features/Registration'

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Registration/>
      </Provider>
    </div>
  )
}

export default App