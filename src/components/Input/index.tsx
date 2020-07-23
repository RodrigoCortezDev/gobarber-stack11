import React from 'react';
import { TextInputProperties } from 'react-native';

import { Container, TextInput, FeatherIcon } from './styles';

interface InputProps extends TextInputProperties {
	name: string;
	icone: string;
}

const Input: React.FC<InputProps> = ({ name, icone, ...rest }) => {
	return (
		<Container>
			<FeatherIcon name={icone} size={20} color="#666360" />
			<TextInput keyboardAppearance="dark" placeholderTextColor="#666360" {...rest}></TextInput>
		</Container>
	);
};

export default Input;
