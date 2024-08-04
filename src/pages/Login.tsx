import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import PHInput from "../components/form/PHInput";
import PHFrom from "../components/form/PHFrom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { toast } from "sonner";
import { TUser } from "../types/user.type";

const Login = () => {
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin1234",
  //   },
  // });

  const defaultValues = {
    userId: "A-0001",
    password: "admin1234",
  };

  const [login] = useLoginMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const tostID = toast.loading("Login in");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      // console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login in", { id: tostID });
      // console.log(res);
      navigate(`/${user.role}/dashbord`);
    } catch (error) {
      toast.error("Somthing went wrong", { id: tostID });
    }
  };

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHFrom onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="text" name="userId" label="ID:" />
        <PHInput type="text" name="password" label="Password:" />
        <Button htmlType="submit">Login</Button>
      </PHFrom>
    </Row>
  );
};

export default Login;
