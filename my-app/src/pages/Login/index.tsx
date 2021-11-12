import React from "react";
import {Form, Input, Field, Icon, Grid} from '@alifd/next';
import styles from './index.module.scss'

const {Row, Col} = Grid

const Login = () => {
  return <div className={styles.loginPage}>
    <div className="login-wrap">
      <div>
        <Row>
          <Col span="12">img</Col>
          <Col span="12">
            <h1>登录</h1>
            <div>git 测试</div>
          </Col>
        </Row>
      </div>
    </div>
  </div>;
};

export default Login;
