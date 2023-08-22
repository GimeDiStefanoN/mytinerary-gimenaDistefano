import './Searcher.css';

const Searcher = () => {
  return (
    <>
        {/* BUSCADOR */}
        <div className="form-control contenedorBuscador">
            <input
              type="text"
              placeholder="Search your City"
              className="input input-bordered w-24 md:w-auto"
           />
        </div>
    </>
  )
}

export default Searcher