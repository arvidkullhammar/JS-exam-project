const Comp = (props) => {
  console.warn(props)
  return <div>Lag: {props.id}</div>
}

export async function getServerSideProps(context) {
  const id = context.params.id
  return {
    props: { id },
  }
}

export default Comp
