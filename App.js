import React from 'react';
import { StatusBar, Image } from 'react-native'

const App = () => {  
    return(    
      <><StatusBar
        hidden={true} /><Image source={{ uri: 'https://media.pocketgamer.com/artwork/na-31022-1582896823/Seven_Deadly_Sins_Grand_Cross_iOS_Android_006_jpg_320.jpg' }}
          style={{ width: 420, height: 685, left: 0 }} /></>       
    )
}
export default App