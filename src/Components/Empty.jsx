import PageNotFound from "./PageNotFound";
export default function Empty(props) {
  return props.rows ? null : <PageNotFound />;
}
