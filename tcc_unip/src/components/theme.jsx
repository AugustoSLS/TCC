import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [tema, setTema] = useState(localStorage.getItem('tema') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', tema);
        localStorage.setItem('tema', tema);
    }, [tema]);

    return (
        <label className="themeSwitch">
            <input
                type="checkbox"
                checked={tema === 'dark'}
                onChange={() => setTema(tema === 'light' ? 'dark' : 'light')}
            />
            <span className="themeTrack"></span>
        </label>
    );
}