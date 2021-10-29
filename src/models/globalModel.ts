import { dvaModel, BaseModel } from 'dva-model-enhance';
import type { StoreState } from 'umi';

export type GlobalState = {
  avatar: string;
  name: string;
  id_token: string;
  loading: boolean;
};

@dvaModel<GlobalState>({
  namespace: 'global',
  state: {
    avatar: '',
    name: '',
    id_token: '',
    loading: false,
  },
})
class Index extends BaseModel<GlobalState, StoreState> {}
export default Index;
