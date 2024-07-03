import "../mystyle/Profil.css";
export default function Delete({ style, deleteTodo, id, annuler }) {
  return (
    <div style={{ zIndex: 999999 }}>
      <div className="modal" style={style}>
        <div className="modalContent">
          <h3>etre-vous sur de vouloir supprimer la lache ?</h3>
          <p>vous ne pouvez pas annuler aprés avoir supprimé la tache</p>
          <div>
            <button
              onClick={() => {
                deleteTodo(id);
              }}
            >
              {" "}
              yes , delete
            </button>
            <button
              onClick={() => {
                annuler();
              }}
            >
              {" "}
              annuler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
