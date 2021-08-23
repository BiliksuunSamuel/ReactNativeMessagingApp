export type form_field = {
  label: string;
  value: string;
};

export type login_params = {
  phone: string;
  password: string;
  valid: boolean;
  error: string | null | undefined;
};
export type register_params = {
  phone: string;
  password: string;
  username: string;
  valid: boolean;
  error: string | null | undefined;
};
export type account_info = {
  username: string;
  password: string;
  phone: string;
};

export type user_details = {
  id: string;
  username: string | null;
  phone: string;
  dateCreated: string | null;
  lastLogin: string | null;
  isAdmin: boolean;
  isLogin: boolean;
  profile: string | null;
  status: string | null;
  // chats: string[] | null;
  email?: string | null;
  friends: string[] | null;
  lastseen: string | null;
};

export type dropdownItem = {
  label: string;
  value: string;
};

export type loginStateType = {
  user: user_details | null;
  loading: boolean;
  error: string | null | undefined;
};
export type userStateType = {
  user: user_details | null;
  loading: boolean;
  error: string | null | undefined;
};
export type registerStateType = {
  user: user_details | null;
  loading: boolean;
  error: string | null | undefined;
};

export type contactStateType = {
  loading: boolean;
  error: string | undefined | null;
  contacts: user_details[] | [] | any;
};
export type genderDrowpdown = dropdownItem[];
