export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
    <div>
    <div className="sidebar">
    <div className="sidebar-header">
      Dashboard
    </div>
    <ul className="sidebar-menu">
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Ventas</a></li>
      <li><a href="#">Productos</a></li>
      <li><a href="#">Envíos</a></li>
      <li><a href="#">Pagos</a></li>
      <li><a href="#">Configuración</a></li>
    </ul>
  </div>
  <div className="content">
    <div className="toolbar">
      <ul className="toolbar-menu">
        <li><a href="#">Notificaciones</a></li>
        <li><a href="#">Mensajes</a></li>
        <li><a href="#">Avatar de Usuario</a></li>
      </ul>
    </div>
    <div className="main-content">
      {children}
    </div>
    </div>
    </div>
    )
  }