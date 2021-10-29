import 'antd-mobile/es/global';
export const dva = {
  config: {
    onError(err: ErrorEvent): void {
      err.preventDefault();
    },
    namespacePrefixWarning: false,
  },
};
