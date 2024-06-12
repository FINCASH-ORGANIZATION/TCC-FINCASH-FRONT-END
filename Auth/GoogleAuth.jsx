import { useState, useEffect } from 'react';

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    gapi.auth2.getAuthInstance().signIn().then((googleUser) => {
      // Obter os dados do usuário do Google
      const profile = googleUser.getBasicProfile();
      const userData = {
        name: profile.getName(),
        email: profile.getEmail(),
        imageUrl: profile.getImageUrl(),
      };

      // Criar um usuário no banco de dados com os dados do Google
      createUserInDatabase(userData);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return user;
};

export default GoogleAuth;