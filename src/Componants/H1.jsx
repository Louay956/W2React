

const H1 = (prop) => {
    console.log(prop)
  return (
    <h1 style={{ backgroundColor:"red" , textAlign: prop.Align }}>
        {prop.text}
    </h1>
  )
}

export default H1