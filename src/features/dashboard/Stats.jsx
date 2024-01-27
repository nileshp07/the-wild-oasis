import {
	HiOutlineBanknotes,
	HiOutlineBriefcase,
	HiOutlineCalendarDays,
	HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import {formatCurrency} from '../../utils/helpers';

function Stats({bookings, confirmedStays, numDays, cabinCount}) {
	// 1)
	const numBookings = bookings.length;

	// 2)
	const sales = bookings.reduce((acc, curr) => acc + curr.totalPrice, 0);

	// 3)
	const checkIns = confirmedStays.length;

	// 4)
	const occupation =
		confirmedStays.reduce((acc, curr) => acc + curr.numNights, 0) /
		(numDays * cabinCount);
	// num of checkedin nights / all available nights (num days * num cabins)

	return (
		<>
			<Stat
				title='Bookings'
				icon={<HiOutlineBriefcase />}
				color='blue'
				value={numBookings}
			/>
			<Stat
				title='Sales'
				icon={<HiOutlineBanknotes />}
				color='green'
				value={formatCurrency(sales)}
			/>
			<Stat
				title='Check ins'
				icon={<HiOutlineCalendarDays />}
				color='indigo'
				value={checkIns}
			/>
			<Stat
				title='Occupancy rate'
				icon={<HiOutlineChartBar />}
				color='yellow'
				value={Math.round(occupation * 100) + '%'}
			/>
		</>
	);
}

export default Stats;
