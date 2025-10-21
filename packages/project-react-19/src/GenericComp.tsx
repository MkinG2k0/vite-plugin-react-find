export const GenericComp = <T extends Record<string, string>>(props: T) => {
	return <div>Generik COMP

		<div>
			{props.children}
		</div>
	</div>
}
