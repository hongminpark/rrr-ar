import Head from "next/head";
import { useRouter } from "next/router";

export default function ModelViewerPage() {
  const router = useRouter();
  const { model } = router.query; // Extract the model parameter
  console.log(model);
  return (
    <>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>
      <div>
        <model-viewer
          src="/cylinder_table.glb"
          ar
          ar-scale="auto"
          camera-controls
          alt="A 3D model of furniture"
          style={{ width: "100%", height: "400px" }}
        ></model-viewer>
      </div>
    </>
  );
}
