import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import * as authApi from '../../../services/authApi';

export default function Oauth() {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    let CODE = paramsLocation.code;

    if (CODE) {
      gitHubAccessToken(CODE);
    }
  }, []);

  const paramsLocation = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  async function gitHubAccessToken(CODE) {
    try {
      const { data } = await authApi.loginGitHub({
        code: CODE,
      });

      setUserData(data);
      toast('Login com GitHub realizado com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast(error.response.data);
      navigate('/');
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
}
