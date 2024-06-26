import React, { Suspense, useEffect} from 'react';
import { useAuth } from 'hooks';
import AppBar from './pages/AppBar';
import { Container } from 'pages/Pages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles } from './BasicStyle/GlobalStyles';
import { refreshUser } from './redux/auth/operations';
import { getDailyWaterAmount } from './redux/tracker/operations';
import PageRoutes from './X_files/PageRoutes';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (token !== null) {
      dispatch(refreshUser());
      dispatch(getDailyWaterAmount());
    }
  }, [token, dispatch]);

  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <GlobalStyles />
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <PageRoutes />
        </Suspense>
      </Container>
    </>
  );
};
