const API = 'http://localhost:3000/api/usuarios';

export async function atualizarCliente(id, dados) {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
    });
    if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Falha ao atualizar cliente');
    }
    return res.json();
}

export async function excluirCliente(id) {
    const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Falha ao excluir cliente');
}