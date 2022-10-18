import KontaktInfo from '../../../components/LagInfoComponents/KontaktInfo'

const Comp = (props) => {
  console.warn(props)
  return (
  <div>
    Lag: {props.id}
    <KontaktInfo/>
  </div>
  

  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  return {
    props: { id },
  }
}

export default Comp
