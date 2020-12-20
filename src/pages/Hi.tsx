import { useHelloQuery } from "../generated/graphql";

export const Hi = () => {
  const { data, loading, error } = useHelloQuery({
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <div>Loading.... Calm your</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error.... {error.message}</div>;
  }
  return <div>{data?.hello}</div>;
};
