function Artistes() {
    return (
      <div class="">
        <h1 class="">artiste</h1>
        <label class="">id: </label><input class="file:border file:border-solid" type="id" placeholder="id"/><br></br>
        <label class="">nom: </label><input type="nom" placeholder="nom"/><br></br>
        <label class="">prenom: </label><input type="prenom" placeholder="prenom"/><br></br>
        <label class="">age: </label><input type="age" placeholder="age"/><br></br>
        <label class="">pays d'origine: </label><input type="pays" placeholder="pays"/><br></br>
        <button class="" >ajouter</button>
        <button class="" >modifier</button>
        <button class="">supprimer</button>
        {/* onClick={add} */}
        {/* onClick={edit} */}
        {/* onClick={dele} */}
      </div>
    );
  }
  export default Artistes;