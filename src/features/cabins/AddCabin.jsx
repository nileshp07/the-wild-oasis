import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

// Using compound component pattern
function AddCabin() {
	return (
		<>
			<Modal>
				<Modal.Open opens='cabin-form'>
					<Button>Add new Cabin</Button>
				</Modal.Open>
				<Modal.Window name='cabin-form'>
					<CreateCabinForm />
				</Modal.Window>
			</Modal>
		</>
	);
}

// function AddCabin() {
// 	const [isOpenForm, setIsOpenForm] = useState(false);

// 	return (
// 		<div>
// 			<Button onClick={() => setIsOpenForm((show) => !show)}>
// 				Add new cabin
// 			</Button>
// 			{isOpenForm && (
// 				<Modal onClose={() => setIsOpenForm(false)}>
// 					<CreateCabinForm onCloseModal={() => setIsOpenForm(false)} />
// 				</Modal>
// 			)}
// 		</div>
// 	);
// }

export default AddCabin;
