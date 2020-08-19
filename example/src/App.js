import React from 'react'

import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker'
import 'react-horizontal-strip-datepicker/dist/index.css'

const App = () => {
  const onSelectedDay = (d) => {
    console.log(d)
  }

  return (
    <ReactHorizontalDatePicker
      selectedDay={onSelectedDay}
      enableScroll={true}
      enableDays={180}
    />
  )
}

export default App
