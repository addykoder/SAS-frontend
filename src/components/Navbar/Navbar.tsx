import { Outlet, Link, useResolvedPath, useMatch} from 'react-router-dom';

export default function Navbar() {



	return (
		<>
			<div className='Navbar'>
				<div className='logo'>SAS</div>
				<div className='nav-links'>
					<Clink to='/teachers' name='Teachers'/>
					<Clink to='/attendence' name='Attendence'/>
					<Clink to='/' name='Reschedules'/>
				</div>
			</div>
			<Outlet />
		</>
	);
}

function Clink({to, name, ...props}:{to:string, name:string}) {

	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({path:resolvedPath.pathname + '/*'})
	return (
		<Link className={isActive ? 'activated' : ''} to={to} {...props}>
		{name}
		</Link>
	)
}