import './WelcomePanel.css'

const highlights = [
  'Instant reload on save with Vite.',
  'Type-safe components with TypeScript.',
  'Composable UI patterns powered by React.',
]

function WelcomePanel() {
  return (
    <section className="welcome-panel">
      <div>
        <p className="welcome-panel__eyebrow">Innovue Desktop</p>
        <h2 className="welcome-panel__title">Kickstart your next release</h2>
        <p className="welcome-panel__subtitle">
          A quick snapshot of what this starter includes.
        </p>
      </div>
      <ul className="welcome-panel__list">
        {highlights.map((item) => (
          <li key={item} className="welcome-panel__item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WelcomePanel
