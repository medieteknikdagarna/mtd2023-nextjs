import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';



//This function wraps the Switches from react-router-dom and scrolls to top on page change
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);