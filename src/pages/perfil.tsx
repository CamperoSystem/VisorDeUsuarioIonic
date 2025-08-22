import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonList, IonItem, IonLabel, IonText, IonButtons, IonBackButton } from '@ionic/react';
import { useParams } from 'react-router-dom';
import './Tab1.css';

const usuarios = [
  { id: 1, nombre: "Juan Pérez", correo: "juan.perez@example.com", telefono: "+591 70000000", foto: "https://i.pravatar.cc/150?img=3", rol: "Administrador" },
  { id: 2, nombre: "María López", correo: "maria.lopez@example.com", telefono: "+591 70123456", foto: "https://i.pravatar.cc/150?img=5", rol: "Gerente de Ventas" },
  { id: 3, nombre: "Carlos Ramírez", correo: "carlos.ramirez@example.com", telefono: "+591 70987654", foto: "https://i.pravatar.cc/150?img=8", rol: "Diseñador UX/UI" }
];

const Perfil: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const usuario = usuarios.find(u => u.id === parseInt(id));

  if (!usuario) return null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>Perfil de {usuario.nombre}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="profile-container">
          <IonAvatar className="profile-avatar">
            <img src={usuario.foto} alt="Foto de perfil" />
          </IonAvatar>
          <h2 className="profile-name">{usuario.nombre}</h2>
          <p className="profile-role">{usuario.rol}</p>

          <IonList>
            <IonItem>
              <IonLabel>Correo</IonLabel>
              <IonText>{usuario.correo}</IonText>
            </IonItem>
            <IonItem>
              <IonLabel>Teléfono</IonLabel>
              <IonText>{usuario.telefono}</IonText>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
