import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Willkommen bei WOLUST" description="Wormser Linux User Stammtisch">
      <div className="container margin-vert--lg" style={{padding: '2rem 0'}}>
        <main className="padding--lg" style={{background: 'var(--ifm-background-color)', borderRadius: 'var(--ifm-global-radius)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>
          <h1>Willkommen bei WOLUST</h1>
          <p><strong>WOLUST</strong> steht für <em>Wormser Linux User Stammtisch</em>. Wir treffen uns jeden ersten Dienstag im Monat zum lockeren Austausch über Linux, Open Source und andere nerdige Themen.</p>
          <p>Wenn Dich Linux interessiert, komm vorbei und setz dich dazu!</p>
          <img src={require('@site/static/img/wolust-tux.png').default} alt="Tux mit Wolust-Schild" style={{maxWidth: 300}} />
          <p>Weitere Informationen findest du in den folgenden Dokumenten und in unserem Blog.</p>
          <hr />
          <h2>Neueste Blogposts</h2>
          <ul>
            <li>
              <Link to="/blog/2024/11/19/stammtische-2025">Stammtische 2025</Link><br />
              <em>Kurze Zusammenfassung der Themen der Abende. Nicht nur Linux</em>
            </li>
            <li>
              <Link to="/blog/2023/11/27/stammtische-2024">Stammtische 2024</Link><br />
              <em>Kurze Zusammenfassung der Themen der Abende. Nicht nur Linux</em>
            </li>
          </ul>
          <p><Link to="/blog">Weitere Blogposts anzeigen →</Link></p>
        </main>
      </div>
    </Layout>
  );
}
