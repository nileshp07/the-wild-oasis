import {useEffect} from 'react';

export function useClickOutSide(handler, ref, listenOnCapturingPhase = true) {
	useEffect(
		function () {
			function handleClick(e) {
				if (ref.current && !ref.current.contains(e.target)) {
					console.log('clicked outside');
					handler();
				}
			}

			document.addEventListener('click', handleClick, listenOnCapturingPhase);

			return () =>
				document.removeEventListener(
					'click',
					handleClick,
					listenOnCapturingPhase
				);
		},
		[handler, listenOnCapturingPhase, ref]
	);
}
