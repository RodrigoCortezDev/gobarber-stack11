import React, { useCallback, useRef } from 'react';
import { Image, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
	Container,
	Title,
	ForgotPassword,
	ForgotPasswordText,
	CreateAcconuntButton,
	CreateAcconuntButtonText,
} from './styles';

const SignIn: React.FC = () => {
	const navigation = useNavigation();

	const formRef = useRef<FormHandles>(null);

	const handlesignIn = useCallback((data: object) => {
		console.log(data);
	}, []);

	return (
		<>
			<KeyboardAvoidingView enabled style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
				<ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
					<Container>
						<Image source={require('../../assets/logo.png')} />

						<View>
							<Title>Faça seu logon</Title>
						</View>

						<Form ref={formRef} onSubmit={handlesignIn}>
							<Input name="email" icone="mail" placeholder="E-mail" />
							<Input name="password" icone="lock" placeholder="Senha" />

							<Button
								onPress={() => {
									formRef.current?.submitForm();
								}}
							>
								Entrar
							</Button>
						</Form>

						<ForgotPassword onPress={() => {}}>
							<ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
						</ForgotPassword>
					</Container>

					<CreateAcconuntButton onPress={() => navigation.navigate('SignUp')}>
						<Icon name="log-in" size={20} color="#ff9000" />
						<CreateAcconuntButtonText>Criar uma conta</CreateAcconuntButtonText>
					</CreateAcconuntButton>
				</ScrollView>
			</KeyboardAvoidingView>
		</>
	);
};

export default SignIn;
