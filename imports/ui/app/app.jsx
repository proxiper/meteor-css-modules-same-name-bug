import React from 'react'

import classes from './app.mss'

export class App extends React.Component {
  render() {
    return (
      <div className={classes.hello}>
        hello!
      </div>
    )
  }
}

