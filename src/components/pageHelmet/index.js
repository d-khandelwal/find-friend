// import helmet library
import { Helmet } from "react-helmet";

function PageHelmet({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default PageHelmet