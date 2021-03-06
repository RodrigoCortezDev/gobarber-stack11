import React, { useEffect, useRef } from 'react';
import { TextInputProperties } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, FeatherIcon } from './styles';

interface InputProps extends TextInputProperties {
	name: string;
	icone: string;
}

interface InputValueReference {
	value: string;
}

const Input: React.FC<InputProps> = ({ name, icone, ...rest }) => {
	const { registerField, defaultValue = '', fieldName, error } = useField(name);
	const inputElementRef = useRef<any>(null);
	const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref: any, value) {
				inputValueRef.current.value = value;
				inputElementRef.current.setNativeProps({ text: value });
			},
			clearValue() {
				inputValueRef.current.value = '';
				inputElementRef.current.clear();
			},
		});
	}, [fieldName, registerField]);

	return (
		<Container>
			<FeatherIcon name={icone} size={20} color="#666360" />
			<TextInput
				ref={inputElementRef}
				keyboardAppearance="dark"
				placeholderTextColor="#666360"
				defaultValue={defaultValue}
				onChangeText={value => (inputValueRef.current.value = value)}
				{...rest}
			></TextInput>
		</Container>
	);
};

export default Input;
