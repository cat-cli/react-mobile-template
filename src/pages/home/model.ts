import { dvaModel, BaseModel } from 'dva-model-enhance';
import type { StoreState } from 'umi';

export type HomeState = {
  text: string;
};

@dvaModel<HomeState>({
  namespace: 'home',
  state: {
    text: '喵星球',
  },
})
class Index extends BaseModel<HomeState, StoreState> {}
export default Index;
