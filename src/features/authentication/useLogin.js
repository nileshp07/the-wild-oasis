import {useMutation, useQueryClient} from '@tanstack/react-query';
import {login as loginAPI} from '../../services/apiAuth';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	// IN useMutation "isLoading" is now called "isPending" in react query v5
	const {mutate: login, isPending: isLoading} = useMutation({
		mutationFn: ({email, password}) => loginAPI({email, password}),
		onSuccess: (user) => {
			console.log(user);
			// manually setting 'user' data in react query cache
			queryClient.setQueryData(['user'], user.user);
			navigate('/dashboard');
		},
		onError: (err) => {
			console.log('ERROR ', err);
			toast.error('Provided email and password are incorrect');
		},
	});

	return {login, isLoading};
}
