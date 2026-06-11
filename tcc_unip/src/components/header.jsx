import { NavLink } from 'react-router-dom'

export default function Header() {

    return (

        <header>
            <nav>
                <NavLink to = '/Dashboard'>Dashboard </NavLink>
                <NavLink to = '/Clientes'>Clientes </NavLink>
                <NavLink to = '/Planos'>Planos </NavLink>
            </nav>
            <div class="search-wrap">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6.5" cy="6.5" r="4.5"/><line x1="10.5" y1="10.5" x2="14" y2="14"/></svg>
                <input type="text" placeholder = "Procurar clientes..." />
            </div>
            <div>
                <button class="cta">+ Add</button>
            </div>
        </header>

    )
} 