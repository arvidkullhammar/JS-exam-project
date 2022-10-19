const category = ['spelschema', 'tabell', 'poangliga', 'spelschema', 'cupinfo']
import BackButton from '../../components/General/BackButton/backButton'

const Comp = (props) => {
  console.warn(props)
  return (
    <div>
      Kategori: {props.id}
      <BackButton />
    </div>
  )
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

// grassroot.se / [cupnamn] / spelschema
// grassroot.se / [cupnamn] / tabell
// grassroot.se / [cupnamn] / poängliga
// grassroot.se / [cupnamn] / [matchinfo]
// grassroot.se / [cupnamn] / [laginfo]
// grassroot.se / [cupnamn] / info
