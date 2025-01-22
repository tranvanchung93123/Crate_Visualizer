import React from 'react';

const AppLayout = ({ children }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Tegral Crates Visualizer</h1>
      </header>
      <main style={styles.main}>
        {children}
      </main>
      <footer style={styles.footer}>
        <p>© 2025 Tegral Crates. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#0077b6',
    color: '#ffffff',
    padding: '1rem',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    gap: '1rem',
  },
  footer: {
    backgroundColor: '#023e8a',
    color: '#ffffff',
    padding: '0.5rem',
    textAlign: 'center',
  },
};

export default AppLayout;
