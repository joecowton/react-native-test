import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="login"
						component={LoginForm}
						title="Please login"
						initial
					/>
				</Scene>
				<Scene key="main">
					<Scene
						rightTitle="Add"
						onRight={() => Actions.EmployeeCreate()}
						key="employeeList"
						component={EmployeeList}
						title="Employees"
					/>
				</Scene>
				<Scene
					key="EmployeeCreate"
					component={EmployeeCreate}
					title="Create Employee"
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
