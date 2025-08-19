export interface SignUpFormData {
  name: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword?: string;
  agreeToTerms: boolean;
}
