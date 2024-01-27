import {useMutation} from '@tanstack/react-query';
import {signup as signupAPI} from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
	const {mutate: signup, isPending: isLoading} = useMutation({
		mutationFn: signupAPI,
		onSuccess: (user) => {
			console.log(user);
			toast.success(
				'User successfully created! Please verify the account from your email.'
			);
		},
	});

	return {signup, isLoading};
}
