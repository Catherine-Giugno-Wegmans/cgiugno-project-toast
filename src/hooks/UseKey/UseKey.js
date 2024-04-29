import React from 'react';

function UseKey({keyValue, callbackFunc}) {
  const [retVal, setRetVal] = React.useState();

  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === keyValue) {
        setRetVal(callbackFunc());
      }
    }
    document.addEventListener('keyup', handleEscapeKey);

    return () => {
      document.removeEventListener('keyup', handleEscapeKey);
    };

  }, [callbackFunc, keyValue, setRetVal]);


  return retVal;
}

export default UseKey;
