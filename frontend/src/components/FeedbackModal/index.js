import { Modal, View, Text, Pressable, Alert, Animated } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import styles from './styles';
import { useState, useRef, useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { api } from '../../api/api';

export default function FeedbackModal({ visible, onClose, beachName, beachId, onVoteSuccess }) {
    const [feedback, setFeedback] = useState({
        limpeza: 0,
        acessibilidade: 0,
        infraestrutura: 0,
        seguranca: 0,
        tranquilidade: 0,
    });
    const [showValidationError, setShowValidationError] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (visible) {
            Animated.spring(slideAnim, {
                toValue: 1,
                useNativeDriver: true,
                tension: 65,
                friction: 11,
            }).start();
        } else {
            slideAnim.setValue(0);
        }
    }, [visible]);

    const atributos = [
        { key: 'limpeza', label: 'Limpeza' },
        { key: 'acessibilidade', label: 'Acessibilidade' },
        { key: 'infraestrutura', label: 'Infraestrutura' },
        { key: 'seguranca', label: 'Segurança' },
        { key: 'tranquilidade', label: 'Tranquilidade' },
    ];

    const handleStarPress = (atributo, value) => {
        setFeedback(prev => ({
            ...prev,
            [atributo]: value
        }));
        setShowValidationError(false);
    };

    const handleSendFeedback = async () => {
        try {
            // Check if all criteria have been rated
            const allRated = Object.values(feedback).every(rating => rating > 0);
            if (!allRated) {
                setShowValidationError(true);
                return;
            }

            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const idToken = userInfo.data.idToken;

            if (!idToken) {
                Alert.alert('Erro', 'Não foi possível obter o token de autenticação do Google.');
                return;
            }

            const response = await api.post('/votar', feedback, {
                params: {
                    token: idToken,
                    praia_id: beachId,
                },
            });

            if (response.data.votou) {
                Alert.alert('Sucesso', 'Você já votou nesta praia recentemente. Seu voto não foi registrado novamente.');
            } else {
                Alert.alert('Sucesso', 'Avaliação enviada com sucesso!');
                onVoteSuccess();
            }
            onClose();
        } catch (error) {
            console.error("Erro ao enviar avaliação:", JSON.stringify(error));
            console.error('Erro ao enviar feedback:', error);
            if (error.code === 'SIGN_IN_CANCELLED') {
                Alert.alert('Cancelado', 'Login com Google cancelado.');
            } else if (error.response && error.response.data && error.response.data.detail) {
                Alert.alert('Erro', `Erro ao enviar avaliação: ${error.response.data.detail}`);
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao enviar sua avaliação. Tente novamente.');
            }
        }
    };

    const handleClose = () => {
        setShowValidationError(false);
        setFeedback({
            limpeza: 0,
            acessibilidade: 0,
            infraestrutura: 0,
            seguranca: 0,
            tranquilidade: 0,
        });
        onClose();
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleClose}
        >
            <Pressable
                style={styles.overlay}
                onPress={handleClose}
            >
                <Animated.View
                    style={[
                        styles.container,
                        {
                            transform: [{
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [300, 0]
                                })
                            }]
                        }
                    ]}
                    onStartShouldSetResponder={() => true}
                >
                    <View style={styles.handle} />
                    <Text style={styles.feedbackTitle}>Sua Avaliação</Text>
                    
                    {showValidationError && (
                        <View style={styles.validationError}>
                            <FontAwesome6 name="circle-exclamation" size={16} color="#FCA5A5" />
                            <Text style={styles.validationErrorText}>
                                Por favor, avalie todas as 5 categorias antes de enviar.
                            </Text>
                        </View>
                    )}
                    
                    <View style={styles.atributesContainer}>
                        {atributos.map(attr => (
                            <View style={styles.atributeContainer} key={attr.key}>
                                <Text style={styles.atributeTitle}>{attr.label}</Text>
                                <View style={styles.starsContainer}>
                                    {[1,2,3,4,5].map(star => (
                                        <Pressable
                                            key={star}
                                            onPress={() => handleStarPress(attr.key, star)}
                                            hitSlop={8}
                                        >
                                            <FontAwesome
                                                name="star"
                                                size={24}
                                                color={feedback[attr.key] >= star ? "#FBBF24" : "#4B5563"}
                                            />
                                        </Pressable>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={({ pressed }) => [
                                styles.closeButton,
                                pressed ? { opacity: 0.8 } : null
                            ]}
                            onPress={handleClose}
                        >
                            <Text style={styles.closeButtonText}>Cancelar</Text>
                        </Pressable>
                        <Pressable
                            style={({ pressed }) => [
                                styles.button,
                                pressed ? { opacity: 0.8 } : null
                            ]}
                            onPress={handleSendFeedback}
                        >
                            <Text style={styles.buttonText}>Enviar</Text>
                        </Pressable>
                    </View>
                </Animated.View>
            </Pressable>
        </Modal>
    );
}