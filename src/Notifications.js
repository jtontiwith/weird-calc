import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Notifications = ({ notification }) => {
  const [visibility, setVisibility] = useState();
  
  useEffect(() => {
    setVisibility(true)
  }, [notification])

  if(visibility && notification) {
    setTimeout(() => setVisibility(false), 3000)
    return <div>{notification}</div>;
  }

  return null;
}

const mapStateToProps = (state) => ({
  notification: state.notification
})

export default connect(mapStateToProps)(Notifications);