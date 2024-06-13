import { useState, useEffect } from "react";
import { gapi } from "google-api-library";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then((googleUser) => {
        // Obter os dados do usuário do Google
        const profile = googleUser.getBasicProfile();
        const fullName = profile.getName();
        const [nome, sobrenome] = fullName.split(" ");

        const authResponse = googleUser.getAuthResponse();
        const token = authResponse.id_token;

        const userData = {
          nome,
          sobrenome,
          email: profile.getEmail(),
          imageUrl: profile.getImageUrl(),
          senha: token, // <--- Envie o token como senha
        };

        setUser(userData);

        // Criar um usuário no banco de dados com os dados do Google
        CriarUsu(userData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return user;
};

export default GoogleAuth;
