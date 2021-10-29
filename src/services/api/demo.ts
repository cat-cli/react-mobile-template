import type { ApiRes } from '@/interfaces/type';
import Request from '../request';

// 获取教育经历列表
export const GetDemoDetail = (id: number): Promise<ApiRes<null>> => {
  return Request.get(`/api/demo`, {
    params: { id },
  });
};
