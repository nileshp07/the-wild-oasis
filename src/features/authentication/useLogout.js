import {useMutation, useQueryClient} from '@tanstack/react-query';
import {logout as logoutAPI} from '../../services/apiAuth';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const {mutate: logout, isPending: isLoading} = useMutation({
		mutationFn: logoutAPI,
		onSuccess: () => {
			// removing all the queries/data from the react query cache
			queryClient.removeQueries();
			navigate('/login', {replace: true});
		},
		onError: () => {
			toast.error('There was an error logging out.');
		},
	});

	return {logout, isLoading};
}
