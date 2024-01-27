import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteBooking as deleteBookingAPI} from '../../services/apiBookings';
import toast from 'react-hot-toast';

export function useDeleteBooking() {
	const queryClient = useQueryClient();

	const {mutate: deleteBooking, isLoading: isDeleting} = useMutation({
		mutationFn: (id) => deleteBookingAPI(id),
		onSuccess: () => {
			toast.success(`Booking deleted successfully.`);
			queryClient.invalidateQueries({active: true});
		},
		onError: (err) => toast.error(err.message),
	});

	return {deleteBooking, isDeleting};
}
