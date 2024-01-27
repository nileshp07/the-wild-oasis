import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import {useSettings} from './useSettings';
import {useUpdateSetting} from './useUpdateSetting';

function UpdateSettingsForm() {
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {}, // setting initail value to empty {} to avoid undefined error on initial fetch
	} = useSettings();

	const {isUpdating, updateSetting} = useUpdateSetting();

	if (isLoading) return <Spinner />;

	function handleUpdate(e, field) {
		const {value, defaultValue} = e.target;
		// If the value is empty, restore it to the defaultValue (previous value)
		if (!value.trim()) {
			e.target.value = defaultValue;
			return;
		}

		// If the value has changed and is not empty, trigger the update operation
		if (value !== defaultValue) {
			updateSetting({[field]: value});
		}
	}

	return (
		<Form>
			<FormRow label='Minimum nights/booking'>
				<Input
					type='number'
					id='min-nights'
					disabled={isUpdating}
					defaultValue={minBookingLength}
					onBlur={(e) =>
						Number(e.target.value) !== Number(minBookingLength) &&
						handleUpdate(e, 'minBookingLength')
					}
				/>
			</FormRow>

			<FormRow label='Maximum nights/booking'>
				<Input
					type='number'
					id='max-nights'
					defaultValue={maxBookingLength}
					disabled={isUpdating}
					onBlur={(e) =>
						Number(e.target.value) !== Number(maxBookingLength) &&
						handleUpdate(e, 'maxBookingLength')
					}
				/>
			</FormRow>

			<FormRow label='Maximum guests/booking'>
				<Input
					type='number'
					id='max-guests'
					defaultValue={maxGuestsPerBooking}
					disabled={isUpdating}
					onBlur={(e) =>
						Number(e.target.value) !== Number(maxGuestsPerBooking) &&
						handleUpdate(e, 'maxGuestsPerBooking')
					}
				/>
			</FormRow>

			<FormRow label='Breakfast price'>
				<Input
					type='number'
					id='breakfast-price'
					defaultValue={breakfastPrice}
					disabled={isUpdating}
					onBlur={(e) =>
						Number(e.target.value) !== Number(breakfastPrice) &&
						handleUpdate(e, 'breakfastPrice')
					}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
