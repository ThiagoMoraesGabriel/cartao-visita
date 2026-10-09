import imgFotoPerfil from '../img/foto-perfil.jpg';

function FotoPerfil() {
    return (
        <div className="foto-perfil-container">
            <img src={imgFotoPerfil} alt="Foto de perfil" className="foto-perfil" />
        </div>
    );
}

export default FotoPerfil;
