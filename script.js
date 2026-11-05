// Indicadores editáveis: altere os valores no arquivo dados.js e publique no GitHub/Netlify.
const formatValue = (value) => value === null || value === undefined || value === '' ? 'Preencher' : String(value);

if (window.DADOS_VENDAS) {
  const campos = {
    'kpi-faturamento': window.DADOS_VENDAS.faturamento,
    'kpi-lucro': window.DADOS_VENDAS.lucro,
    'kpi-vendas': window.DADOS_VENDAS.quantidadeVendas,
    'kpi-ticket': window.DADOS_VENDAS.ticketMedio
  };
  Object.entries(campos).forEach(([id, value]) => {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = formatValue(value);
  });
}

// Navegação suave com suporte a acessibilidade.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
});
