import type { ReactNode } from 'react'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'
import '../styles/layout.css'
import '../styles/navigation.css'

type AppShellProps = {
  children: ReactNode
}

function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <div className="app-shell__brand">
          <div className="app-shell__logo" aria-hidden="true" />
          <div>
            <p className="app-shell__client-name">InnoVue Desktop</p>
            <p className="app-shell__client-subtitle">Client Workspace</p>
          </div>
        </div>
        <div className="app-shell__status">
          <span className="app-shell__time">12:45 PM</span>
          <span className="app-shell__weather">72° Sunny</span>
        </div>
      </header>
      <div className="app-shell__body">
        <aside className="app-shell__primary-nav">
          <PrimaryNav />
        </aside>
        <main className="app-shell__content">
          <div className="app-shell__secondary-nav">
            <SecondaryNav />
          </div>
          <section className="app-shell__page">{children}</section>
        </main>
      </div>
    </div>
  )
}

export default AppShell
