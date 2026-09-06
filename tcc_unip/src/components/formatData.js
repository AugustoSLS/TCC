export function formatarData(dataISO) {
    if (!dataISO) return '—';

    const data = new Date(dataISO);

    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export function formatarCadastro(dataISO) {
    if (!dataISO) return '—';

    const data = new Date(dataISO);

    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        // hour: '2-digit', 
        // minute: '2-digit',
    });
}