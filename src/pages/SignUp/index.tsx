import React, { useRef, useCallback } from 'react';
import { Image, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignInButton, BackToSignInButtonText } from './styles';

const SignUp: React.FC = () => {
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
							<Title>Crie sua conta</Title>
						</View>

						<Form ref={formRef} onSubmit={handlesignIn}>
							<Input name="name" icone="user" placeholder="Usuário / Nome" />
							<Input name="email" icone="mail" placeholder="E-mail" />
							<Input name="password" icone="lock" placeholder="Senha" />

							<Button
								onPress={() => {
									formRef.current?.submitForm();
								}}
							>
								Cadastrar
							</Button>
						</Form>
					</Container>

					<BackToSignInButton onPress={() => navigation.navigate('SignIn')}>
						<Icon name="arrow-left" size={20} color="#fff" />
						<BackToSignInButtonText>Voltar ao login</BackToSignInButtonText>
					</BackToSignInButton>
				</ScrollView>
			</KeyboardAvoidingView>
		</>
	);
};

export default SignUp;
