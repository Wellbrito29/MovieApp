declare type RequesterServiceModel = {
  method: RequesterMethodEnum;
  endpoint: string;
  timeout?: number;
  attempt?: number;
};

declare type RequesterResponseModel = {
  success: boolean;
  status?: number;
  error: any;
  data: any;
};

declare type RequesterOptionsModel = {
  data?: any;
  headers?: any;
};
