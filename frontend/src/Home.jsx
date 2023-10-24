function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <p style={{ fontFamily: 'sans-serif' }}>Ellie Tiglao - Sans-Serif</p>
      <p style={{ fontFamily: 'serif' }}>Ellie Tiglao - Serif</p>
      <p style={{ fontFamily: 'monospace' }}>Ellie Tiglao - Monospace</p>
      <p style={{ fontFamily: 'cursive' }}>Ellie Tiglao - Cursive</p>
      <p style={{ fontFamily: 'fantasy' }}>Ellie Tiglao - Fantasy</p>
      {/* Add a placeholder to insert Google Fonts later */}
      {/* <p style={{ fontFamily: 'Your-Google-Font' }}>Ellie Tiglao - Your Google Font</p> */}
    </div>
  );
}

export default Home;
