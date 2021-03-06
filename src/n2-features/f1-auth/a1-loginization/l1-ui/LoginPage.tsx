import React from "react";
import Button from "../../../../n1-main/m1-ui/common/Button";
import Input from "../../../../n1-main/m1-ui/common/Input";
import Text from "../../../../n1-main/m1-ui/common/Text";

const LoginPage: React.FC = () => {
    return (
        <div>
            <Input placeholder={'Введите логин'}/>
            <Input placeholder={'Введите пароль'} type={'password'}/>
            <Text text={'Запомнить меня'}/>
            <Input type={'checkbox'}/>
            <Button name={'Log in'}/>
        </div>
    )
}
export default LoginPage