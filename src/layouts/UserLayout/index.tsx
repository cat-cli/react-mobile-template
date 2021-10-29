import React, { useEffect } from 'react';
import { useAuth } from 'oidc-react';
import { history } from 'umi';
import { useDispatch, useSelector } from '@/hooks';
import { SetWatermark } from '@/utils/watermark';

const Index: React.FC = (props) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.global);
  useEffect(() => {
    if (auth && auth.userData) {
      dispatch.global.setState({
        avatar: auth.userData.profile.avatar,
        name: auth.userData.profile.userName,
        id_token: auth.userData.id_token,
      });
      SetWatermark(auth.userData.profile.userName, auth.userData.profile.sub);
    }
  }, [history.location.pathname]);

  return <>{name && <div>{props.children}</div>}</>;
};

export default Index;
