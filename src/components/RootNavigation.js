// Devido ao fato de que o componente Stack.Navigator é lido apenas uma vez, foi necessária a implementação de
// um componente de navegação raiz, ou seja, que realiza a navegação antes mesmo de o usuário interagir com o
// aplicativo.

// import { createNavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

export async function navigate(name, params) {
  if (navigationRef.current?.isReady()) { // caso a construção do navigationRef esteja pronta
      navigationRef.current.navigate(name, params); // navega para a tela especificada no primeiro parâmetro
  }
  else{
    alert("Didn't work (why don't you try it here?)");
  }
}
