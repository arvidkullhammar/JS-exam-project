const category = [] //hämta laginfo från databasen

const Comp = (props) => {
  console.warn(props)
  return <div>Lag: {props.id}</div>
}

export async function getServerSideProps(context) {
  const id = context.query.id
  if (category.includes(id)) {
    return {
      props: { id },
    }
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

export default Comp
