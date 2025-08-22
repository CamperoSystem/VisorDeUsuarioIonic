import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './Tab1.css';

// Datos de ejemplo
const usuarios = [
  { id: 1, nombre: "Juan Pérez", foto: "https://i.pravatar.cc/150?img=3", rol: "Administrador" },
  { id: 2, nombre: "María López", foto: "https://i.pravatar.cc/150?img=5", rol: "Gerente de Ventas" },
  { id: 3, nombre: "Carlos Ramírez", foto: "https://i.pravatar.cc/150?img=8", rol: "Diseñador UX/UI" }
];

const Tab1: React.FC = () => {
  const history = useHistory();
  const [isDark, setIsDark] = useState(false);

  // Ir al detalle de usuario
  const verDetalle = (id: number) => {
    history.push(`/perfil/${id}`);
  };

  // Alternar modo oscuro
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Lista de Perfiles</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {/* Botón para cambiar tema */}
        <div style={{ padding: '10px' }}>
          <IonButton expand="block" color={isDark ? 'light' : 'dark'} onClick={toggleDarkMode}>
            {isDark ? 'Modo Claro' : 'Modo Oscuro'}
          </IonButton>
        </div>

        {/* Lista de usuarios */}
        <IonList>
          {usuarios.map((usuario) => (
            <IonItem
              key={usuario.id}
              button
              detail
              onClick={() => verDetalle(usuario.id)}
              style={{ backgroundColor: '#f0f8ff', marginBottom: '8px', borderRadius: '12px' }}
            >
              <IonAvatar slot="start">
                <img src={usuario.foto} alt={usuario.nombre} />
              </IonAvatar>
              <IonLabel>
                <h2 style={{ fontWeight: 'bold', color: '#333' }}>{usuario.nombre}</h2>
                <p style={{ color: '#666' }}>{usuario.rol}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
