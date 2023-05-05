import { user } from "@/forms/userInformation/userInformation.types";

export interface userstate {
  User: Object;
  routeValue: string;
  isLoading: boolean;
  token: string | null;
  message: string;
  error: boolean;
  userShippingDetail: user | null;
}
