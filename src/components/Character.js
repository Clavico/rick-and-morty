const Character = ({ image, name, status, species }) => {
  return (
    <div className="character-item">
      <img src={image} alt={name} />
      <strong>{name}</strong>
      
      <div className="character-status">
        <span className={status}></span>
        <p>{status} - {species}</p>
      </div>
    </div>
  )
}

export default Character