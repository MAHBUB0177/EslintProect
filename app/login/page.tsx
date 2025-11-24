import LoginForm from "@/components/loginForm";
interface Props {
  onLogin?: () => void;
}

const LoginPage = ({ onLogin }: Props) => {
  return <LoginForm onLogin={onLogin} />;
};
export default LoginPage;
