'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const menus = [
	{
		href: '/',
		name: 'HOME',
	},
	{
		href: '/about',
		name: 'ABOUT ME',
	},
	{
		href: '/portfolio',
		name: 'PORTFOLIO',
	},
	{
		href: '/contacts',
		name: 'CONTACTS',
	},
];

function Nav() {
	const path = usePathname();
	return (
		<nav className='w-[24%] flex flex-col justify-center gap-8'>
			{menus.map((item) => (
				<Link className={`menu ${path === item.href && 'active'}`} key={item.name} href={item.href}>
					{item.name}
				</Link>
			))}
		</nav>
	);
}

export default Nav;
