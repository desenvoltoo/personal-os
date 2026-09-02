import {
  Archive,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  FileText,
  FolderKanban,
  Home,
  Plus,
  Search,
  Settings,
  StickyNote,
  Users,
} from 'lucide-react';

const workspaces = [
  { name: 'Trabalho / Gestão', type: 'management', icon: Users, count: 6 },
  { name: 'Empresa A', type: 'company', icon: BriefcaseBusiness, count: 12 },
  { name: 'Empresa B', type: 'company', icon: BriefcaseBusiness, count: 8 },
  { name: 'Projetos externos', type: 'external', icon: FolderKanban, count: 5 },
  { name: 'Pessoal', type: 'personal', icon: Home, count: 4 },
];

const recentItems = [
  { title: 'Planejamento da equipe', meta: 'Trabalho / Gestão · atualizado hoje', icon: StickyNote },
  { title: 'Documentação de integração', meta: 'Empresa A · atualizado ontem', icon: FileText },
  { title: 'Pendências do projeto', meta: 'Projetos externos · 3 tarefas abertas', icon: CheckCircle2 },
];

export function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">P</div>
          <div>
            <strong>Personal OS</strong>
            <span>Seu espaço central</span>
          </div>
        </div>

        <button className="new-button"><Plus size={18} /> Novo</button>

        <nav className="main-nav">
          <button className="nav-item active"><Home size={18} /> Início</button>
          <button className="nav-item"><CheckCircle2 size={18} /> Tarefas</button>
          <button className="nav-item"><FileText size={18} /> Documentos</button>
          <button className="nav-item"><StickyNote size={18} /> Notas</button>
          <button className="nav-item"><Archive size={18} /> Arquivo</button>
        </nav>

        <div className="sidebar-section-title">Espaços</div>
        <div className="workspace-list">
          {workspaces.map(({ name, icon: Icon, count }) => (
            <button className="workspace-row" key={name}>
              <span><Icon size={17} /> {name}</span>
              <small>{count}</small>
            </button>
          ))}
        </div>

        <div className="sidebar-bottom">
          <button className="nav-item"><Bot size={18} /> Assistente IA <span className="beta">leve</span></button>
          <button className="nav-item"><Settings size={18} /> Configurações</button>
        </div>
      </aside>

      <main className="content">
        <header className="topbar">
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Pesquisar em tudo..." />
            <kbd>Ctrl K</kbd>
          </div>
          <div className="avatar">A</div>
        </header>

        <section className="hero">
          <p className="eyebrow">QUARTA-FEIRA, 2 DE SETEMBRO</p>
          <h1>Boa tarde.</h1>
          <p>Organize seu trabalho sem precisar lembrar onde cada coisa está.</p>
        </section>

        <section>
          <div className="section-heading">
            <div>
              <h2>Seus espaços</h2>
              <p>Separe cada empresa, função e projeto sem perder a visão do todo.</p>
            </div>
            <button className="text-button"><Plus size={16}/> Criar espaço</button>
          </div>
          <div className="cards-grid">
            {workspaces.map(({ name, type, icon: Icon, count }) => (
              <article className="workspace-card" key={name}>
                <div className={`workspace-icon ${type}`}><Icon size={22} /></div>
                <div className="workspace-card-body">
                  <h3>{name}</h3>
                  <p>{count} itens organizados</p>
                </div>
                <ChevronRight size={18} className="chevron" />
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="panel">
            <div className="section-heading compact">
              <div><h2>Recentes</h2><p>Continue de onde parou.</p></div>
              <button className="text-button">Ver tudo</button>
            </div>
            <div className="recent-list">
              {recentItems.map(({ title, meta, icon: Icon }) => (
                <button className="recent-row" key={title}>
                  <span className="recent-icon"><Icon size={18}/></span>
                  <span className="recent-copy"><strong>{title}</strong><small>{meta}</small></span>
                  <ChevronRight size={17}/>
                </button>
              ))}
            </div>
          </div>

          <div className="panel today-panel">
            <div className="section-heading compact">
              <div><h2>Hoje</h2><p>O que precisa da sua atenção.</p></div>
            </div>
            <div className="metric"><strong>3</strong><span>tarefas pendentes</span></div>
            <div className="metric"><strong>1</strong><span>projeto com prazo próximo</span></div>
            <button className="primary-link">Abrir tarefas <ChevronRight size={16}/></button>
          </div>
        </section>

        <section className="ai-strip">
          <div className="ai-icon"><Bot size={22}/></div>
          <div>
            <strong>Assistente sob demanda</strong>
            <p>Use IA somente quando precisar: resumir, organizar, localizar ou transformar conteúdo.</p>
          </div>
          <button>Perguntar à IA</button>
        </section>
      </main>
    </div>
  );
}
