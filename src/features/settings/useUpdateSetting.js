import {useMutation, useQueryClient} from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {updateSetting as updateSettingAPI} from '../../services/apiSettings';

export function useUpdateSetting() {
	const queryClient = useQueryClient();

	// For EDITING cabin
	const {isLoading: isUpdating, mutate: updateSetting} = useMutation({
		mutationFn: updateSettingAPI,
		onSuccess: () => {
			toast.success('Setting edited successfully.');
			queryClient.invalidateQueries({
				queryKey: ['settings'],
			});
		},
		onError: (err) => toast.error(err.message),
	});

	return {isUpdating, updateSetting};
}
