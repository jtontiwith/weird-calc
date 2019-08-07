import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Notifications = ({ notification, likedGifsArray, time }) => {
  const [visibility, setVisibility] = useState(true);
  
  useEffect(() => {
    setVisibility(true)
  }, [notification, likedGifsArray.length, time])

  if(visibility && notification) {
    setTimeout(() => setVisibility(false), 3000)
    return <div>{notification}</div>;
  }

  return null;
}

const mapStateToProps = (state) => ({
  notification: state.notification,
  likedGifsArray: state.likedGIFs,
  time: state.time
})

export default connect(mapStateToProps)(Notifications);