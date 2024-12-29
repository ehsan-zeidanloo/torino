import ModalContainer from "../components/partials/container/ModalContainer";
import Layout from "../components/templates/layout/Layout";
import TourList from "../components/templates/TourList";
import { serverFetch } from "../core/services/http";

async function Home({ searchParams }) {
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  return (
    <div>
      <Layout>
       
        <ModalContainer />
        <TourList toursData={data} />
      </Layout>
    </div>
  );
}

export default Home;
