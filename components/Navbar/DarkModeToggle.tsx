import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
//-------------------- Icons --------------------------
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
//----------------------------------------------------------

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, systemTheme } = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const themeIsDark =
		theme === 'system' ? systemTheme === 'dark' : theme === 'dark';

	return (
		<button
			type="button"
			aria-label="Mudar modo escuro"
			className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
			onClick={() => setTheme(themeIsDark ? 'light' : 'dark')}
		>
			<span className="sr-only">Alternar modo escuro</span>
			{themeIsDark ? (
				<SunIcon className="h-6 w-6" aria-hidden="true" />
			) : (
				<MoonIcon className="h-6 w-6" aria-hidden="true" />
			)}
		</button>
	);
};

export default DarkModeToggle;
