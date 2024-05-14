export default function OrderDetails({ params, searchParams }) {
  const { id } = params;
  const { hello } = searchParams;
  return (
    <div>
      Order Details {id} Page <br /> {`I'm searching ${hello}`}
    </div>
  );
}
