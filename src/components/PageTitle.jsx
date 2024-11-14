import { Helmet } from "react-helmet";

export default function PageTitle({title}) {
  return (
    <Helmet>
        <title> Flowtickr - {title} </title>
      </Helmet>
  )
}
