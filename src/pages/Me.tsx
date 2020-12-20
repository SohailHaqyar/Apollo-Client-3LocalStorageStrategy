import { useMeQuery } from "../generated/graphql";

export const Me = () => {
  const { data, loading, error } = useMeQuery({ fetchPolicy: "network-only" });
  if (loading) {
    return <div>Loding.. Calm down</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h4>User Email: {data?.me.user!.email}</h4>
      <span>User Id: {data?.me.user!.id}</span>
    </div>
  );
};
